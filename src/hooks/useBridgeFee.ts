import { getProvider } from "../utils";
import {
  CHAIN_NAME_TO_ID,
  ChainNameToTypeChainName,
  ChainToDestinationDomain,
  SUPPORTED_CHAINS,
  TChainName,
} from "../types";
import { useAppDispatch, useAppSelector } from "./storage";
import { useState, useEffect } from "react";
import { setBridgeError, setBridgeFee } from "../store/bridgeSlice";
import { chainFactoryTestnet } from "../store/chainFactory";

export default function useBridgeFee() {
  const dispatch = useAppDispatch();

  const bridge = useAppSelector((state) => state.bridge);

  const [fee, setFee] = useState<number>(
    bridge.bridgeFee ? bridge.bridgeFee : 0,
  );

  const [formattedFee, setFormattedfee] = useState<number>();

  const [nativeCurrency, setNativeCurrency] = useState<string>(
    SUPPORTED_CHAINS[ChainNameToTypeChainName[bridge.fromChain]].nativeCurrency
      .symbol,
  );

  const [provider, setProvider] = useState(
    getProvider(ChainNameToTypeChainName[bridge.fromChain]),
  );

  const isFromPolygon = () => {
    return bridge.fromChain === "Polygon";
  };

  function formatFee(fee: number): number {
    const decimals =
      SUPPORTED_CHAINS[ChainNameToTypeChainName[bridge.fromChain]]
        .nativeCurrency.decimals;
    return fee / 10 ** Number(decimals);
  }

  async function getLockAndMintBridgeFee() {
    try {
      const handler = await chainFactoryTestnet.inner(
        //@ts-ignore
        ChainToDestinationDomain[ChainNameToTypeChainName[bridge.fromChain]],
      );

      // const fee = await handler.calculateTransactionFees(bridge.toChain);
      const fee = await handler.txFee(
        BigInt(CHAIN_NAME_TO_ID[ChainNameToTypeChainName[bridge.toChain]]),
        bridge.fromToken,
        bridge.toToken,
      );

      return Number(fee);
    } catch (error) {
      console.error(error);
      // TODO: Fix this
      return 0;
    }
  }

  useEffect(() => {
    if (bridge.fromChain) {
      const chain =
        SUPPORTED_CHAINS[ChainNameToTypeChainName[bridge.fromChain]];
      const chainName: TChainName = ChainNameToTypeChainName[bridge.fromChain];

      setProvider(getProvider(chainName));
      setNativeCurrency(chain.nativeCurrency.symbol);
    }
  }, [bridge.fromChain, bridge.allowance]);

  useEffect(() => {
    if (provider) {
      (async () => {
        const fee_ = await getLockAndMintBridgeFee();
        if (fee_) {
          // console.log("fee_", fee_, "contract:", bridgeAddress)
          const _fee = isFromPolygon() ? fee_ + 50 : fee_ + 10;
          setFormattedfee(formatFee(_fee));
          setFee(_fee);
          dispatch(setBridgeFee(_fee));
        }
      })().catch((e) => {
        const err = `useBridgFee Error: ${e.message}`;
        dispatch(setBridgeError(err));
        console.log(err);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bridge.amount, bridge.toChain]);

  // console.log('fee', fee, 'nativeCurrency', nativeCurrency, 'formattedFee', formattedFee, 'bridgeAddress', bridgeAddress, 'toChain:', ChainNameToTypeChainName[bridge.toChain])
  return { fee, nativeCurrency, formattedFee };
}
