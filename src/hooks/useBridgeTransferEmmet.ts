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
// import { ErrorDecoder } from "ethers-decode-error";
// import { EmmetBridge__factory } from "@emmet-contracts/web3";

export default function useBridgeTransferEmmet() {
  const { sender: tonSender } = useTonConnect();

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

          await chainFactoryTestnet.sendInstallment(
            handler,
            tonSender,
            BigInt(Math.ceil(formattedAmount)),
            destinationDomain,
            bridge.fromToken,
            bridge.toToken,
            mintRecipient,
          );
          dispatch(showBridgeProgress());
          setIsTransferProcessed(false);
        } else if (
          fromChainID === Chain.POLYGON ||
          fromChainID === Chain.ETHEREUM ||
          fromChainID === Chain.BSC
        ) {
          const handler = await chainFactoryTestnet.inner(fromChainID);
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
              value: parseEther("0.00001"),
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
