import { useState } from "react";
import {
  TTokenName,
  ChainNameToTypeChainName,
  ChainToDestinationDomain,
} from "../types";
import { setBridgeError, setBridgeAllowance } from "../store/bridgeSlice";
import { useAppDispatch, useAppSelector } from "./storage";
import { useEthersSigner } from "./useEthersSigner";
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
      const tokenName: TTokenName = bridge.fromToken as TTokenName;
      const decimals: number = bridge.decimals
        ? Number(bridge.decimals.toString())
        : 18;
      const formattedAmount = Number(bridge.amount) * 10 ** decimals;
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
