import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./storage";
import {
  ChainNameToTypeChainName,
  ChainToDestinationDomain,
  TOKEN_DECIMALS,
  TTokenName,
} from "../types";
import { chainFactoryTestnet } from "../store/chainFactory";
import { useEthersSigner } from "./useEthersSigner";
import { Web3Helper } from "emmet.js/dist/chains/web3";
import {
  setPoolApy,
  setPoolStakedBalance,
  setPoolTotalSupply,
} from "../store/poolSlice";
import { AddressBookKeys } from "emmet.js";

export default function usePool() {
  const dispatch = useAppDispatch();

  const signer = useEthersSigner();

  const pool = useAppSelector((state) => state.pool);
  const bridge = useAppSelector((state) => state.bridge);

  const [error, setError] = useState("");

  const getData = async () => {
    try {
      const handler = await chainFactoryTestnet.inner(
        // @ts-ignore
        ChainToDestinationDomain[ChainNameToTypeChainName[pool.chain]],
      );

      if ("address" in handler) {
        const poolAddress = await handler.address(
          `elp${pool.token}` as AddressBookKeys,
        );

        const apy = await handler.getLpCurrentAPY(poolAddress);
        dispatch(setPoolApy(Number(apy) / 100));

        const totalSupply = await handler.getLpTotalSupply(poolAddress);
        dispatch(setPoolTotalSupply(Number(totalSupply)));

        const protocolFee = await handler.getLpProtocolFee(poolAddress);
        dispatch(setPoolTotalSupply(Number(protocolFee)));

        const protocolFeeAmount = await (
          handler as Web3Helper
        ).getLpProtocolFeeAmount(poolAddress);
        dispatch(setPoolTotalSupply(Number(protocolFeeAmount)));

        const tokenFee = await handler.getLpTokenFee(poolAddress);
        dispatch(setPoolTotalSupply(Number(tokenFee)));
      }
    } catch (error: { message: string } | any) {
      setError(error.message);
      console.error(error);
    }
  };

  const stake = async () => {
    try {
      const handler = await chainFactoryTestnet.inner(
        // @ts-ignore
        ChainToDestinationDomain[ChainNameToTypeChainName[pool.chain]],
      );
      await chainFactoryTestnet.stakeLiqiduity(
        // @ts-ignore
        handler,
        signer,
        pool.token,
        // @ts-ignore
        pool.amount * 10 ** TOKEN_DECIMALS[pool.token],
        undefined,
      );
    } catch (error: { message: string } | any) {
      console.error(error);
      setError(error.message);
    }
  };

  const withdraw = async () => {
    try {
      const handler = await chainFactoryTestnet.inner(
        // @ts-ignore
        ChainToDestinationDomain[ChainNameToTypeChainName[pool.chain]],
      );
      await chainFactoryTestnet.withdrawLiqiduity(
        // @ts-ignore
        handler,
        signer,
        pool.token,
        // @ts-ignore
        pool.amount * 10 ** TOKEN_DECIMALS[pool.token],
        undefined,
      );
    } catch (error: { message: string } | any) {
      console.error(error);
      setError(error.message);
    }
  };

  const getBalance = async (type: "Deposit" | "Withdraw") => {
    try {
      const handler = await chainFactoryTestnet.inner(
        // @ts-ignore
        ChainToDestinationDomain[ChainNameToTypeChainName[pool.chain]],
      );

      console.log(pool.token, bridge.senderAddress);
      if ("address" in handler) {
        if (type === "Deposit") {
          const tokenAddress = await handler.address(
            pool.token as AddressBookKeys,
          );
          return (
            Number(
              await handler.tokenBalance(tokenAddress, bridge.senderAddress),
            ) /
            10 ** Number(TOKEN_DECIMALS[pool.token as TTokenName])
          );
        } else {
          const tokenAddress = await handler.address(
            `elp${pool.token}` as AddressBookKeys,
          );
          return (
            Number(
              await handler.tokenBalance(tokenAddress, bridge.senderAddress),
            ) /
            10 ** Number(TOKEN_DECIMALS[pool.token as TTokenName])
          );
        }
      }
      return 0;
    } catch (error: { message: string } | any) {
      console.error(error);
      setError(error.message);
      return 0;
    }
  };

  useEffect(() => {
    (async () => {
      const stakedBalance = await getBalance("Withdraw");
      dispatch(setPoolStakedBalance(stakedBalance));
      await getData();
    })();
  }, [pool.chain, pool.token]);

  return { error, getData, stake, withdraw, getBalance };
}
