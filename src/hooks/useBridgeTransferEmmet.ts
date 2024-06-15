import { useState } from "react";
import { parseEther } from "viem";
import { useAppDispatch, useAppSelector } from "./storage";
import { setBridgeFromHash, showBridgeProgress } from "../store/bridgeSlice";
import {
  TChainName,
  ChainNameToTypeChainName,
  ChainToDestinationDomain,
} from "../types";
import { useTonConnect } from "./useTonConnect";
import { Chain } from "emmet.js/dist/factory/types";
import { chainFactoryTestnet } from "../store/chainFactory";
import { useEthersSigner } from "./useEthersSigner";
import useBridgeFee from "./useBridgeFee";
// import { ErrorDecoder } from "ethers-decode-error";
// import { EmmetBridge__factory } from "@emmet-contracts/web3";

export default function useBridgeTransferEmmet() {
  const { sender: tonSender } = useTonConnect();
  const { fee } = useBridgeFee();

  const dispatch = useAppDispatch();

  const signer = useEthersSigner();

  const bridge = useAppSelector((state) => state.bridge);

  const [isTransferProcessed, setIsTransferProcessed] =
    useState<boolean>(false);

  const [error, setError] = useState("");

  const sendInstallment = () => {
    setError("");
    setIsTransferProcessed(true);
    (async () => {
      const chainName: TChainName = ChainNameToTypeChainName[bridge.fromChain];
      const decimals = bridge.decimals ? bridge.decimals : 18;
      const formattedAmount = Number(bridge.amount) * 10 ** decimals;
      const destinationDomain =
        ChainToDestinationDomain[ChainNameToTypeChainName[bridge.toChain]];
      const mintRecipient = bridge.receiver;

      try {
        const fromChainID = ChainToDestinationDomain[chainName];
        if (fromChainID === Chain.TON) {
          const handler = await chainFactoryTestnet.inner(fromChainID);

          console.log({
            handler,
            tonSender,
            amount: BigInt(Math.ceil(formattedAmount)),
            destinationDomain,
            fromToken: bridge.fromToken,
            toToken: bridge.toToken,
            mintRecipient,
          });

          const { hash } = await chainFactoryTestnet.sendInstallment(
            handler,
            tonSender,
            BigInt(Math.ceil(formattedAmount)),
            destinationDomain,
            bridge.fromToken,
            bridge.toToken,
            mintRecipient,
          );

          dispatch(setBridgeFromHash(hash ? hash : "N/A"));
          dispatch(showBridgeProgress());
          setIsTransferProcessed(false);
        } else if (
          fromChainID === Chain.POLYGON ||
          fromChainID === Chain.ETHEREUM ||
          fromChainID === Chain.BSC
        ) {
          const handler = await chainFactoryTestnet.inner(fromChainID);
          console.log({
            handler,
            // @ts-ignore
            signer,
            amount: BigInt(Math.ceil(formattedAmount)),
            destinationDomain,
            fromToken: bridge.fromToken,
            toToken: bridge.toToken,
            mintRecipient,
            gas: {
              value: fee ? BigInt(fee) : parseEther("0.00001"),
            },
          });

          const { hash } = await chainFactoryTestnet.sendInstallment(
            handler,
            // @ts-ignore
            signer,
            BigInt(Math.ceil(formattedAmount)),
            destinationDomain,
            bridge.fromToken,
            bridge.toToken,
            mintRecipient,
            {
              value: fee,
            },
          );

          dispatch(setBridgeFromHash(hash ? hash : "N/A"));
          dispatch(showBridgeProgress());
          setIsTransferProcessed(false);
        }
      } catch (error: { message: string } | any) {
        console.error(error);
        setIsTransferProcessed(false);
      }
    })().catch((e: { message: string }) => {
      console.error(
        "useBridgeTransferEmmet => sendInstallment => Error:",
        e.message,
      );
      setError(e.message);
      setIsTransferProcessed(false);
    });
  };

  return { error, isTransferProcessed, sendInstallment };
}
