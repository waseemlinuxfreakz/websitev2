import {
  CHAIN_NAME_TO_ID,
  ChainNameToTypeChainName,
  ChainToDestinationDomain,
  SUPPORTED_CHAINS,
} from "../types";
import { useAppDispatch, useAppSelector } from "./storage";
import { useState, useEffect } from "react";
import { setBridgeError, setBridgeFee } from "../store/bridgeSlice";
import { chainFactoryTestnet } from "../store/chainFactory";

export default function useBridgeFee() {
  const dispatch = useAppDispatch();

  const bridge = useAppSelector((state) => state.bridge);

  const [fee, setFee] = useState<number>(0);

  const [formattedFee, setFormattedfee] = useState<number>(0);

  const [nativeCurrency, setNativeCurrency] = useState<string>(
    SUPPORTED_CHAINS[ChainNameToTypeChainName[bridge.fromChain]].nativeCurrency
      .symbol,
  );

  async function getLockAndMintBridgeFee() {
    try {
      const handler = await chainFactoryTestnet.inner(
        //@ts-ignore
        ChainToDestinationDomain[ChainNameToTypeChainName[bridge.fromChain]],
      );

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

      setNativeCurrency(chain.nativeCurrency.symbol);

      (async () => {
        const _fee = await getLockAndMintBridgeFee();
        const _formatedFee = _fee / 10 ** chain.nativeCurrency.decimals;

        console.log({ _fee });

        setFormattedfee(_formatedFee);
        setFee(_fee);
        dispatch(setBridgeFee(_fee));
      })().catch((e) => {
        const err = `useBridgFee Error: ${e.message}`;
        dispatch(setBridgeError(err));
        console.log(err);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bridge.amount, bridge.toChain, bridge.fromChain, bridge.allowance]);

  // console.log('fee', fee, 'nativeCurrency', nativeCurrency, 'formattedFee', formattedFee, 'bridgeAddress', bridgeAddress, 'toChain:', ChainNameToTypeChainName[bridge.toChain])
  return { fee, nativeCurrency, formattedFee };
}
