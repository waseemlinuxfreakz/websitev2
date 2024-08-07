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
  setPoolFeeDecimals,
  setPoolFeeGrowthGlobal,
  setPoolPendingRewards,
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

  const getData = async (
    chain = pool.chain,
    token = pool.token,
    senderAddress = bridge.senderAddress,
  ) => {
    // dispatch(setPoolApy(0));
    // dispatch(setPoolTotalSupply(0));
    // dispatch(setPoolProtocolFee(0));
    // dispatch(setPoolProtocolFeeAmount(0));
    // dispatch(setPoolTokenFee(0));
    // dispatch(setPoolFeeGrowthGlobal(0));
    try {
      const handler = await chainFactoryTestnet.inner(
        // @ts-ignore
        ChainToDestinationDomain[ChainNameToTypeChainName[chain]],
      );

      if ("address" in handler) {
        const poolAddress = await handler.address(`elp${token}`);

        const decimals = await handler.decimals(poolAddress).catch(() => 1);

        const totalSupply = await handler
          .getLpTotalSupply(poolAddress)
          .catch(() => 0);

        const apy = await handler.getLpCurrentAPY(poolAddress).catch(() => 0);

        console.log({ totalSupply });

        const protocolFee = await handler
          .getLpProtocolFee(poolAddress)
          .catch(() => 0);

        const protocolFeeAmount = await handler
          .getLpProtocolFeeAmount(poolAddress)
          .catch(() => 0);

        const tokenFee = await handler
          .getLpTokenFee(poolAddress)
          .catch(() => 0);

        if ("getLpProviderRewards" in handler) {
          const feeGrowthGlobal = await (handler as Web3Helper)
            .getLpFeeGrowthGlobal(poolAddress)
            .catch(() => 0);

          const feeDecimals = await (handler as Web3Helper)
            .getLpFeeDecimals(poolAddress)
            .catch(() => 0);

          const pendingRewards = await (handler as Web3Helper)
            .getLpProviderRewards(poolAddress, senderAddress)
            .catch(() => 0);

          console.log({ pendingRewards });
          return {
            decimals,
            apy: Number(apy) / 100,
            totalSupply: Number(totalSupply) / 10 ** decimals,
            protocolFee: Number(protocolFee),
            protocolFeeAmount: Number(protocolFeeAmount),
            tokenFee: Number(tokenFee),
            feeGrowthGlobal: Number(feeGrowthGlobal) / 10 ** decimals,
            feeDecimals: Number(feeDecimals),
            pendingRewards: Number(pendingRewards) / 10 ** decimals,
          };
        }
        return {
          decimals,
          apy: Number(apy) / 100,
          totalSupply: Number(totalSupply) / 10 ** decimals,
          protocolFee: Number(protocolFee),
          protocolFeeAmount: Number(protocolFeeAmount),
          tokenFee: Number(tokenFee),
          feeGrowthGlobal: 0,
          feeDecimals: 0,
          pendingRewards: 0,
        };
      }
    } catch (error: { message: string } | any) {
      setError(error.message);
      console.log(error);
      return {
        decimals: 1,
        apy: 0,
        totalSupply: 0,
        protocolFee: 0,
        protocolFeeAmount: 0,
        tokenFee: 0,
        feeGrowthGlobal: 0,
        feeDecimals: 0,
        pendingRewards: 0,
      };
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

  const withdrawFees = async () => {
    const handler = await chainFactoryTestnet.inner(
      // @ts-ignore
      ChainToDestinationDomain[ChainNameToTypeChainName[pool.chain]],
    );
    try {
      await chainFactoryTestnet.withdrawFees(
        // @ts-ignore
        handler,
        signer,
        pool.token,
        undefined,
      );
    } catch (error: { message: string } | any) {
      // For TON
      await chainFactoryTestnet.withdrawFees(
        // @ts-ignore
        handler,
        tonSender,
        pool.token,
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
    address = bridge.senderAddress,
  ) => {
    try {
      const handler = await chainFactoryTestnet.inner(
        // @ts-ignore
        ChainToDestinationDomain[ChainNameToTypeChainName[chain]],
      );

      console.log(pool.token, address);
      if ("address" in handler) {
        if (type === "Deposit") {
          const tokenAddress = await handler.address(token as AddressBookKeys);
          return (
            Number(await handler.tokenBalance(tokenAddress, address)) /
            10 ** Number(TOKEN_DECIMALS[pool.token as TTokenName])
          );
        } else {
          const tokenAddress = await handler.address(
            `elp${pool.token}` as AddressBookKeys,
          );
          return (
            Number(await handler.tokenBalance(tokenAddress, address)) /
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
      setInterval(async () => {
        console.log("staked Balance fetched");

        const stakedBalance = await getBalance(
          "Withdraw",
          pool.chain,
          pool.token,
          bridge.senderAddress,
        );
        dispatch(setPoolStakedBalance(stakedBalance));
      }, 6 * 1000);

      const data = await getData(pool.chain, pool.token, bridge.senderAddress);
      if (data?.decimals) {
        console.log({ data });

        dispatch(setPoolApy(data.apy));
        dispatch(setPoolTotalSupply(data.totalSupply));
        dispatch(setPoolProtocolFee(data.protocolFee));
        dispatch(setPoolProtocolFeeAmount(data.protocolFeeAmount));
        dispatch(setPoolTokenFee(data.tokenFee));
        dispatch(setPoolFeeGrowthGlobal(data.feeGrowthGlobal));
        dispatch(setPoolFeeDecimals(data.feeDecimals));
        dispatch(setPoolPendingRewards(data.pendingRewards));
      }
    })();
  }, [pool.chain, pool.token, bridge.senderAddress]);

  return {
    error,
    getData,
    stake,
    withdraw,
    getBalance,
    withdrawFees,
  };
}
