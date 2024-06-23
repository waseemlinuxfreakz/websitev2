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

  const [protocolFeeInUSD, setProtocolFeeInUSD] = useState<number>(0);
  const [protocolFee, setProtocolFee] = useState<bigint>(BigInt(0));
  const [fee, setFee] = useState<number>(0);

  const [formattedFee, setFormattedfee] = useState<number>(0);

  const [nativeCurrency, setNativeCurrency] = useState<string>(
    SUPPORTED_CHAINS[ChainNameToTypeChainName[bridge.fromChain]].nativeCurrency
      .symbol,
  );

  async function getBridgeProtocolFee() {
    try {
      const handler = await chainFactoryTestnet.inner(
        //@ts-ignore
        ChainToDestinationDomain[ChainNameToTypeChainName[bridge.fromChain]],
      );

      const _protocolFee = await handler.protocolFee();

      return _protocolFee;
    } catch (error) {
      console.error(error);
      // TODO: Fix this
      return BigInt(0);
    }
  }

  async function getBridgeProtocolFeeInUSD() {
    // TODO: implement this in sdk
    try {
      const handler = await chainFactoryTestnet.inner(
        //@ts-ignore
        ChainToDestinationDomain[ChainNameToTypeChainName[bridge.fromChain]],
      );

      const _protocolFeeInUSD = await handler.protocolFeeInUSD();

      return Number(_protocolFeeInUSD) / 10 ** 6;
    } catch (error) {
      console.error(error);
      // TODO: Fix this
      return 0;
    }
  }

  async function getBridgeFee() {
    try {
      const handler = await chainFactoryTestnet.inner(
        //@ts-ignore
        ChainToDestinationDomain[ChainNameToTypeChainName[bridge.fromChain]],
      );

      const chainId: bigint = BigInt(
        CHAIN_NAME_TO_ID[ChainNameToTypeChainName[bridge.toChain]],
      );

      console.log(chainId, bridge.fromToken, bridge.toToken);

      const fee = await handler.txFee(
        chainId,
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
        const _fee = await getBridgeFee();
        const _protocolFee = await getBridgeProtocolFee();
        const _formatedFee = _fee / 10 ** chain.nativeCurrency.decimals;
        const _protocolFeeInUSD = await getBridgeProtocolFeeInUSD();
        // const _formatedProtocolFee = Number(_protocolFee) / 10 ** chain.nativeCurrency.decimals;

        setFormattedfee(_formatedFee);
        setProtocolFee(_protocolFee);
        setProtocolFeeInUSD(_protocolFeeInUSD);
        // setFormattedProtocolFee(_formatedProtocolFee)
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
  return { fee, nativeCurrency, formattedFee, protocolFee, protocolFeeInUSD };
}
