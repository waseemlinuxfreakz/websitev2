import { useState } from "react";
import { Hash } from "viem";
import { Approve, addressToAccount, getTokenAddress } from "../utils";
import {
  TChainName,
  TTokenName,
  ChainNameToTypeChainName,
  ChainToDestinationDomain,
  SUPPORTED_CHAINS,
} from "../types";
import { setBridgeError, setBridgeAllowance } from "../store/bridgeSlice";
import { useAppDispatch, useAppSelector } from "./storage";
import { useEthersSigner } from "../hooks/lockAndMintHooks/useEthersSigner";
import { chainFactoryTestnet } from "../store/chainFactory";
import { Web3Helper } from "emmet.js/dist/chains/web3";

export default function useBridgeApproveERC20() {
  const dispatch = useAppDispatch();

  const bridge = useAppSelector((state) => state.bridge);

  const signer = useEthersSigner();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  function handleApprove() {
    (async () => {
      setIsLoading(true);

      const chainName: TChainName = ChainNameToTypeChainName[bridge.fromChain];
      const tokenName: TTokenName = bridge.fromToken as TTokenName;

      const spender: Hash = `0x${SUPPORTED_CHAINS[
        chainName
      ].emmetBridge.address.replace("0x", "")}`;
      const decimals: number = bridge.decimals
        ? Number(bridge.decimals.toString())
        : 18;
      const formattedAmount = Number(bridge.amount) * 10 ** decimals;

      // const { status, error } = await Approve(
      //     chainName,
      //     tokenAddress,
      //     spender,
      //     BigInt(Math.ceil(formattedAmount))
      // );

      // if (status && status === 'success') {
      //     setIsSuccess(true);
      //     dispatch(setBridgeAllowance(formattedAmount * 10 ** decimals));
      // }

      // if(error){
      //     dispatch(setBridgeError(error));
      // }else{
      //     dispatch(setBridgeError(''));
      // }

      const handler = await chainFactoryTestnet.inner(
        // @ts-ignore
        ChainToDestinationDomain[ChainNameToTypeChainName[bridge.fromChain]],
      );
      const token = await (handler as Web3Helper).token(tokenName);
      const tokenAddress = token.address;

      await chainFactoryTestnet.preTransfer(
        // @ts-ignore
        handler,
        signer,
        tokenAddress,
        BigInt(Math.ceil(formattedAmount)),
        {},
      );

      setIsSuccess(true);
      dispatch(setBridgeAllowance(formattedAmount * 10 ** decimals));
      dispatch(setBridgeError(""));
      setIsLoading(false);
    })().catch((e) => {
      console.warn(e.message);
      dispatch(setBridgeError(e.message));
      setIsLoading(false);
    });
  }

  return {
    isApproveLoading: isLoading,
    isApproveSuccess: isSuccess,
    approve: handleApprove,
  };
}
