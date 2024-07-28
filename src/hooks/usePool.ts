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
  setPoolProtocolFee,
  setPoolProtocolFeeAmount,
  setPoolStakedBalance,
  setPoolTokenFee,
  setPoolTotalSupply,
} from "../store/poolSlice";
import { AddressBookKeys } from "emmet.js";
import { useTonConnect } from "./useTonConnect";

export default function usePool() {
  const dispatch = useAppDispatch();

  const signer = useEthersSigner();
  const { sender: tonSender } = useTonConnect();

  const pool = useAppSelector((state) => state.pool);
  const bridge = useAppSelector((state) => state.bridge);

  const [error, setError] = useState("");

  const getData = async (chain = pool.chain, token = pool.token) => {
    try {
      const handler = await chainFactoryTestnet.inner(
        // @ts-ignore
        ChainToDestinationDomain[ChainNameToTypeChainName[chain]],
      );

      if ("address" in handler) {
        const poolAddress = await handler.address(
          `elp${token}` as AddressBookKeys,
        );

        const apy = await handler.getLpCurrentAPY(poolAddress);
        dispatch(setPoolApy(Number(apy) / 100));

        const totalSupply = await handler.getLpTotalSupply(poolAddress);
        dispatch(setPoolTotalSupply(Number(totalSupply)));

        const protocolFee = await handler.getLpProtocolFee(poolAddress);
        dispatch(setPoolProtocolFee(Number(protocolFee)));

        const protocolFeeAmount =
          await handler.getLpProtocolFeeAmount(poolAddress);
        dispatch(setPoolProtocolFeeAmount(Number(protocolFeeAmount)));

        const tokenFee = await handler.getLpTokenFee(poolAddress);
        dispatch(setPoolTokenFee(Number(tokenFee)));
      }
    } catch (error: { message: string } | any) {
      setError(error.message);
      console.error(error);
    }
  };

  const stake = async () => {
    const handler = await chainFactoryTestnet.inner(
      // @ts-ignore
      ChainToDestinationDomain[ChainNameToTypeChainName[pool.chain]],
    );
    try {
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
      // For TON
      await chainFactoryTestnet.stakeLiqiduity(
        // @ts-ignore
        handler,
        tonSender,
        pool.token,
        // @ts-ignore
        pool.amount * 10 ** TOKEN_DECIMALS[pool.token],
        undefined,
      );
      console.error(error);
      setError(error.message);
    }
    await getData();
  };

  const withdraw = async () => {
    const handler = await chainFactoryTestnet.inner(
      // @ts-ignore
      ChainToDestinationDomain[ChainNameToTypeChainName[pool.chain]],
    );
    try {
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
      // For TON
      await chainFactoryTestnet.withdrawLiqiduity(
        // @ts-ignore
        handler,
        tonSender,
        pool.token,
        // @ts-ignore
        pool.amount * 10 ** TOKEN_DECIMALS[pool.token],
        undefined,
      );
      console.error(error);
      setError(error.message);
    }
    await getData();
  };

  const getBalance = async (
    type: "Deposit" | "Withdraw",
    chain = pool.chain,
    token = pool.token,
  ) => {
    try {
      const handler = await chainFactoryTestnet.inner(
        // @ts-ignore
        ChainToDestinationDomain[ChainNameToTypeChainName[chain]],
      );

      console.log(pool.token, bridge.senderAddress);
      if ("address" in handler) {
        if (type === "Deposit") {
          const tokenAddress = await handler.address(token as AddressBookKeys);
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

  const getStakedBalance = async (chain?: string, token?: string) => {
    const stakedBalance = await getBalance("Withdraw", chain, token);
    dispatch(setPoolStakedBalance(stakedBalance));
  };

  useEffect(() => {
    (async () => {
      await getStakedBalance(pool.chain, pool.token);
      await getData();
    })();
  }, [pool.chain, pool.token]);

  return { error, getData, stake, withdraw, getBalance, getStakedBalance };
}
