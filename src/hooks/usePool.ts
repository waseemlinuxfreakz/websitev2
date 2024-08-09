import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./storage";
import {
  ChainNameToTypeChainName,
  ChainToDestinationDomain,
  SUPPORTED_CHAINS,
  TChainName,
  TOKEN_DECIMALS,
  TTokenName,
} from "../types";
import { chainFactoryTestnet } from "../store/chainFactory";
import { useEthersSigner } from "./useEthersSigner";
import {
  setPoolApy,
  setPoolBalance,
  setPoolDataLoading,
  setPoolFeeDecimals,
  setPoolFeeGrowthGlobal,
  setPoolLiquidityInUSD,
  setPoolPendingRewards,
  setPoolProtocolFee,
  setPoolProtocolFeeAmount,
  setPoolStakedBalance,
  setPoolTokenFee,
  setPoolTotalSupply,
} from "../store/poolSlice";
import { AddressBookKeys } from "emmet.js";
import { useTonConnect } from "./useTonConnect";
import { removeTrailingZeroes } from "../utils";

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
    try {
      const handler = await chainFactoryTestnet.inner(
        // @ts-ignore
        ChainToDestinationDomain[ChainNameToTypeChainName[chain]],
      );

      if ("address" in handler) {
        const poolAddress = await handler.address(`elp${token}`);
        console.log({ poolAddress });

        const decimals = await handler.decimals(poolAddress).catch(() => 1);

        const totalSupply = await handler
          .getLpTotalSupply(poolAddress)
          .catch(() => BigInt(0));

        const apy = await handler
          .getLpCurrentAPY(poolAddress)
          .catch(() => BigInt(0));

        console.log({ totalSupply });

        const protocolFee = await handler
          .getLpProtocolFee(poolAddress)
          .catch(() => BigInt(0));

        const protocolFeeAmount = await handler
          .getLpProtocolFeeAmount(poolAddress)
          .catch(() => BigInt(0));

        const tokenFee = await handler
          .getLpTokenFee(poolAddress)
          .catch(() => BigInt(0));

        const feeGrowthGlobal = await handler
          .getLpFeeGrowthGlobal(poolAddress)
          .catch(() => BigInt(0));

        const feeDecimals = await handler
          .getLpFeeDecimals(poolAddress)
          .catch(() => BigInt(0));

        const validAddress = await handler.validateAddress(senderAddress);

        const pendingRewards = await handler
          .getLpProviderRewards(poolAddress, senderAddress)
          .catch(() => BigInt(0));

        const tokenPrice = await chainFactoryTestnet.getTokenPrice(token);

        const tokenPriceDecimals =
          await chainFactoryTestnet.getPriceDecimals(token);

        const liquidityPoolInUSD =
          Number(totalSupply * tokenPrice) /
          10 ** (decimals + Number(tokenPriceDecimals));

        return {
          decimals,
          apy: Number(apy) / 100,
          totalSupply: Number(totalSupply) / 10 ** decimals,
          protocolFee: Number(protocolFee),
          protocolFeeAmount: Number(protocolFeeAmount),
          tokenFee: Number(tokenFee),
          feeGrowthGlobal: Number(feeGrowthGlobal) / 10 ** decimals,
          feeDecimals: Number(feeDecimals),
          pendingRewards: validAddress
            ? Number(pendingRewards) / 10 ** decimals
            : 0,
          liquidityPoolInUSD: Number(liquidityPoolInUSD).toFixed(2),
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
        liquidityPoolInUSD: 0,
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
        BigInt(pool.amount * 10 ** TOKEN_DECIMALS[pool.token]),
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
        ChainToDestinationDomain[ChainNameToTypeChainName[chain as TChainName]],
      );
      const _chain = SUPPORTED_CHAINS[ChainNameToTypeChainName[pool.chain]];
      if (token === _chain.nativeCurrency.symbol && type === "Deposit") {
        return (
          Number(await handler.balance(address)) /
          10 ** TOKEN_DECIMALS[token as TTokenName]
        );
      }
      if ("address" in handler) {
        if (type === "Deposit") {
          const tokenAddress = await handler.address(token as AddressBookKeys);

          console.log({
            balance: Number(await handler.tokenBalance(tokenAddress, address)),
          });

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
    let interval: NodeJS.Timeout;

    (async () => {
      dispatch(setPoolBalance(0));
      dispatch(setPoolStakedBalance(0));
      dispatch(setPoolApy(0));
      dispatch(setPoolTotalSupply(0));
      dispatch(setPoolProtocolFee(0));
      dispatch(setPoolProtocolFeeAmount(0));
      dispatch(setPoolTokenFee(0));
      dispatch(setPoolFeeGrowthGlobal(0));
      dispatch(setPoolFeeDecimals(0));
      dispatch(setPoolPendingRewards(0));
      dispatch(setPoolLiquidityInUSD("0"));
      if (pool.chain && pool.token && bridge.senderAddress) {
        console.log({ senderAddress: bridge.senderAddress });

        interval = setInterval(async () => {
          const balance = await getBalance(
            "Deposit",
            pool.chain,
            pool.token,
            bridge.senderAddress,
          );
          dispatch(setPoolBalance(balance));

          const stakedBalance = await getBalance(
            "Withdraw",
            pool.chain,
            pool.token,
            bridge.senderAddress,
          );
          dispatch(setPoolStakedBalance(stakedBalance));
        }, 5 * 1000);

        dispatch(setPoolDataLoading(true));
        const data = await getData(
          pool.chain,
          pool.token,
          bridge.senderAddress,
        );

        console.log({ data, senderAddress: bridge.senderAddress });
        if (data) {
          dispatch(setPoolApy(data.apy));
          dispatch(setPoolTotalSupply(data.totalSupply));
          dispatch(setPoolProtocolFee(data.protocolFee));
          dispatch(setPoolProtocolFeeAmount(data.protocolFeeAmount));
          dispatch(setPoolTokenFee(data.tokenFee));
          dispatch(setPoolFeeGrowthGlobal(data.feeGrowthGlobal));
          dispatch(setPoolFeeDecimals(data.feeDecimals));
          dispatch(setPoolPendingRewards(data.pendingRewards));
          dispatch(setPoolLiquidityInUSD(data.liquidityPoolInUSD));
        }
        dispatch(setPoolDataLoading(false));
      }
    })();

    return () => clearInterval(interval);
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
