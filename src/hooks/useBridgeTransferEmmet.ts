import { useEffect, useState } from "react";
import { Hash } from "viem";
import { useAccount } from "wagmi";
import { circleBurner } from "../abis/circleBurner";
import { useAppDispatch, useAppSelector } from "./storage";
import { setBridgeFromHash, showBridgeProgress } from "../store/bridgeSlice";
import {
  TChainName,
  ChainNameToTypeChainName,
  SUPPORTED_CHAINS,
  ChainToDestinationDomain,
  TTokenName,
  CHAIN_NAME_TO_ID,
} from "../types";
import { addressToBytes32, addressToAccount, sleep, getSigner } from "../utils";
import useBridgFee from "./useBridgeFee";
import { BurnToTransfer } from "../utils";
import { EmmetSendInstallment } from "../utils/emmetSendInstallment";
import { useTonConnect } from "./useTonConnect";
import { Chain } from "emmet.js/dist/factory/types";
import { chainFactoryTestnet } from "../store/chainFactory";
import { useEthersSigner } from "./lockAndMintHooks/useEthersSigner";

export default function useBridgeTransferEmmet() {
  const { fee } = useBridgFee();
  const { sender: tonSender } = useTonConnect();

  const { address } = useAccount();

  const dispatch = useAppDispatch();

  const signer = useEthersSigner();

  const bridge = useAppSelector((state) => state.bridge);

  const [estimation, setEstimation] = useState<number>(0);

  const [isTransferProcessed, setIsTransferProcessed] =
    useState<boolean>(false);

  const [error, setError] = useState("");

  let interval: string | number | NodeJS.Timeout | undefined;

  const burnUSDC = () => {
    setError("");
    setIsTransferProcessed(true);

    (async () => {
      const chainName: TChainName = ChainNameToTypeChainName[bridge.fromChain];
      const bridgeAddress: string =
        SUPPORTED_CHAINS[ChainNameToTypeChainName[bridge.fromChain]].emmetBridge
          .address;
      const decimals = bridge.decimals ? bridge.decimals : 18;
      const formattedAmount = Number(bridge.amount) * 10 ** decimals;
      const destinationDomain =
        ChainToDestinationDomain[ChainNameToTypeChainName[bridge.toChain]];
      const mintRecipient: Hash = addressToAccount(bridge.receiver);
      const tokenName: TTokenName = bridge.fromToken as TTokenName;

      const { hash, status, error } = await BurnToTransfer(
        chainName,
        addressToAccount(bridgeAddress),
        BigInt(Math.ceil(formattedAmount)),
        destinationDomain,
        mintRecipient,
        tokenName,
        fee
      );

      if (error) {
        console.warn("useBridgeTransferEmmet => burnUSDC => Error:", error);
        setError(error);
      }

      if (hash) {
        dispatch(setBridgeFromHash(hash));
        dispatch(showBridgeProgress());
      }

      setIsTransferProcessed(false);
    })().catch((e: { message: string }) => {
      console.warn("useBridgeTransferEmmet => burnUSDC => Error:", e.message);
      setError(e.message);
      setIsTransferProcessed(false);
    });
  };

  const sendInstallment = () => {
    setError("");
    setIsTransferProcessed(true);
    (async () => {
      const chainName: TChainName = ChainNameToTypeChainName[bridge.fromChain];
      const bridgeAddress: string =
        SUPPORTED_CHAINS[ChainNameToTypeChainName[bridge.fromChain]].emmetBridge
          .address;
      const decimals = bridge.decimals ? bridge.decimals : 18;
      const formattedAmount = Number(bridge.amount) * 10 ** decimals;
      const destinationDomain =
        ChainToDestinationDomain[ChainNameToTypeChainName[bridge.toChain]];
      const mintRecipient = bridge.receiver;
      const tokenName: TTokenName = bridge.fromToken as TTokenName;

      // const { hash, status, error } = await EmmetSendInstallment(
      //   chainName,
      //   addressToAccount(bridgeAddress),
      //   BigInt(Math.ceil(formattedAmount)),
      //   destinationDomain,
      //   mintRecipient,
      //   tokenName,
      //   fee
      // );
      const { hash, status, error } = await (async () => {
        try {
          const fromChainID = ChainToDestinationDomain[chainName];
          console.log(fromChainID);
          if (fromChainID === Chain.TON) {
            const handler = await chainFactoryTestnet.inner(fromChainID);
            console.log({ signerAddress: tonSender.address });
            await chainFactoryTestnet.sendInstallment(
              handler,
              tonSender,
              BigInt(Math.ceil(formattedAmount)),
              destinationDomain,
              tokenName,
              mintRecipient
            );
          } else if (fromChainID === Chain.POLYGON) {
            const handler = await chainFactoryTestnet.inner(fromChainID);
            await chainFactoryTestnet.sendInstallment(
              handler,
              // @ts-ignore
              signer,
              BigInt(Math.ceil(formattedAmount)),
              // @ts-ignore
              destinationDomain,
              tokenName,
              mintRecipient
            );
          }

          return {
            hash: undefined,
            status: "failed",
            error: "Something went wrong...",
          };
        } catch (error: { message: string } | any) {
          console.error(error);
          return { hash: undefined, status: "failed", error: error.message };
        }
      })();

      if (hash) {
        dispatch(setBridgeFromHash(hash));
        dispatch(showBridgeProgress());
      }

      setIsTransferProcessed(false);
    })().catch((e: { message: string }) => {
      console.error(
        "useBridgeTransferEmmet => sendInstallment => Error:",
        e.message
      );
      setError(e.message);
      setIsTransferProcessed(false);
    });
  };

  return { burnUSDC, error, isTransferProcessed, sendInstallment };
}

// const try_ = async (): Promise<any> => {
//     try {
//         const chainName: TChainName = ChainNameToTypeChainName[bridge.fromChain];
//         const decimals = bridge.decimals ? bridge.decimals : 18;
//         const formattedAmount = Number(bridge.amount) * 10 ** decimals;
//         const bridgeAddress: string = SUPPORTED_CHAINS[ChainNameToTypeChainName[bridge.fromChain]].emmetBridge.address;
//         const destinationDomain = ChainToDestinationDomain[ChainNameToTypeChainName[bridge.toChain]];
//         console.log("destinationDomain:", destinationDomain, ChainToDestinationDomain[ChainNameToTypeChainName[bridge.toChain]], 'bridge.toChain', bridge.toChain)
//         const mintRecipient: Hash = addressToBytes32(addressToAccount(bridge.receiver));
//         const signer = getSigner(chainName);
//         const tokenName: string = bridge.fromToken;

//         const gas = await signer.estimateContractGas({
//             address: addressToAccount(bridgeAddress),
//             account: `0x${address?.replace('0x', '')}`,
//             abi: circleBurner,
//             functionName: 'depositForBurn',
//             args: [
//                 BigInt(Math.ceil(formattedAmount)),
//                 destinationDomain,
//                 mintRecipient,
//                 tokenName
//             ],
//             value: BigInt(fee + 1_000_000_000),
//         });

//         const gasPrice = await signer.getGasPrice();

//         if (gas && fee && gasPrice) {
//             setEstimation((parseInt(gas.toString())
//                 * parseInt(gasPrice.toString())
//                 + parseInt(fee.toString())
//                 + 1_000_000_000)
//                 / 1e18);
//         }

//         if (request && request.args[1] == ChainToDestinationDomain[ChainNameToTypeChainName[bridge.toChain]]) {
//             setIsReady(true);
//             setParams(request);
//             setError('');
//         }

//     } catch (e: any) {
//         setIsReady(false);
//         console.warn(`useBridgeTransferEmmet Error: ${e.message}`);
//         if (e.message.includes('Insufficient fee coverage.')) {
//             setError('Insufficient fee coverage.')
//         }
//     }
// }

// function retry() {

//     console.log('retrying')

//     if (address
//         && fee
//         && bridge.amount && Number(bridge.amount) > 0
//         && bridge.allowance
//         && bridge.allowance >= Number(bridge.amount)
//     ) {
//         (async () => {

//             setError('');
//             await try_();

//         })().catch((e: any) => {
//             setIsReady(false);
//             console.warn(`useBridgeTransferEmmet Error: ${e.message}`);
//         });
//     }

// }

// useEffect(() => {

//     if (bridge.amount && params && params.args[1] != ChainToDestinationDomain[ChainNameToTypeChainName[bridge.toChain]]) {

//         setIsReady(false);
//         interval = setInterval(() => {
//             retry();
//         }, 5_000)

//         return () => clearInterval(interval);

//     }

// }, [bridge.amount, address, bridge.allowance, fee, bridge.toChain]);

// const burnUSDC = () => {

//     (async () => {

//         try {

//             const chainName: TChainName = ChainNameToTypeChainName[bridge.fromChain];
//             const signer = getSigner(chainName);
//             let hash;
//             if (!params) {
//                 (async () => {
//                     await try_();
//                 })()
//             }
//             hash = await signer.writeContract(params);

//             if (hash) {
//                 dispatch(setBridgeFromHash(hash));
//                 dispatch(showBridgeProgress());
//             }

//         } catch (e: any) {
//             console.warn(`useBridgeTransferEmmet Error: ${e.message}`);
//         }

//     })().catch((e: any) => {
//         console.warn(`useBridgeTransferEmmet Error: ${e.message}`);
//     });

// }
