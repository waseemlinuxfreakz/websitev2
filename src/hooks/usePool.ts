import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./storage";
import { ChainNameToTypeChainName, ChainToDestinationDomain } from "../types";
// import { useTonConnect } from "./useTonConnect";
import { Chain } from "emmet.js/dist/factory/types";
import { chainFactoryTestnet } from "../store/chainFactory";
import { useEthersSigner } from "./useEthersSigner";
import { Web3Helper } from "emmet.js/dist/chains/web3";
import { setPoolApy, setPoolTotalSupply } from "../store/poolSlice";

export default function useBridgeTransferEmmet() {
  // const { sender: tonSender } = useTonConnect();

  const dispatch = useAppDispatch();

  const signer = useEthersSigner();

  const pool = useAppSelector((state) => state.pool);

  const [error, setError] = useState("");

  const getData = async () => {
    const handler = await chainFactoryTestnet.inner(
      // @ts-ignore
      ChainToDestinationDomain[ChainNameToTypeChainName[pool.chain]],
    );
    if (
      ChainToDestinationDomain[ChainNameToTypeChainName[pool.chain]] !==
      Chain.TON
    ) {
      const apy = await (handler as Web3Helper).getLpCurrentAPY(pool.chain); // TODO: change
      dispatch(setPoolApy(Number(apy) / 100));

      const totalSupply = await (handler as Web3Helper).getLpTotalSupply(
        pool.chain,
      ); // TODO: change
      dispatch(setPoolTotalSupply(Number(totalSupply)));

      const protocolFee = await (handler as Web3Helper).getLpProtocolFee(
        pool.chain,
      ); // TODO: change
      dispatch(setPoolTotalSupply(Number(protocolFee)));

      const protocolFeeAmount = await (
        handler as Web3Helper
      ).getLpProtocolFeeAmount(pool.chain); // TODO: change
      dispatch(setPoolTotalSupply(Number(protocolFeeAmount)));

      const tokenFee = await (handler as Web3Helper).getLpTokenFee(pool.chain); // TODO: change
      dispatch(setPoolTotalSupply(Number(tokenFee)));
    }
  };

  const stake = async () => {
    try {
      await chainFactoryTestnet.stakeLiqiduity(
        // @ts-ignore
        ChainToDestinationDomain[ChainNameToTypeChainName[pool.chain]],
        signer,
        pool.token,
        pool.amount,
        undefined,
      );
    } catch (error: { message: string } | any) {
      console.log(error);
      setError(error.message);
    }
  };

  const withdraw = async () => {
    try {
      await chainFactoryTestnet.withdrawLiqiduity(
        // @ts-ignore
        ChainToDestinationDomain[ChainNameToTypeChainName[pool.chain]],
        signer,
        pool.token,
        pool.amount,
        undefined,
      );
    } catch (error: { message: string } | any) {
      console.log(error);
      setError(error.message);
    }
  };

  const getBalance = async (type: "deposit" | "withdraw") => {
    try {
      const handler = await chainFactoryTestnet.inner(
        // @ts-ignore
        ChainToDestinationDomain[ChainNameToTypeChainName[pool.chain]],
      );

      if (type === "deposit") {
        const tokenAddress: string = (
          await (handler as Web3Helper).token(pool.token)
        ).address;
        return handler.tokenBalance(pool.token, tokenAddress);
      } else {
        const tokenAddress: string = (
          await (handler as Web3Helper).token(`elp${pool.token}`)
        ).address;
        return handler.tokenBalance(`elp${pool.token}`, tokenAddress);
      }
    } catch (error: { message: string } | any) {
      console.log(error);
      setError(error.message);
      return 0;
    }
  };

  useEffect(() => {}, []);

  return { error, getData, stake, withdraw, getBalance };
}
