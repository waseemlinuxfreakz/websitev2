import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "./storage";
import {
  ChainNameToTypeChainName,
  ChainToDestinationDomain,
  TOKEN_DECIMALS,
} from "../types";
import { setBridgeError } from "../store/bridgeSlice";
import { chainFactoryTestnet } from "../store/chainFactory";
import { ethers } from "ethers";
import { setPoolAllowance } from "../store/poolSlice";

export default function usePoolAllowance() {
  const dispatch = useAppDispatch();
  const bridge = useAppSelector((state) => state.bridge);
  const pool = useAppSelector((state) => state.pool);

  const [allowance, setAllowance] = useState<string | number>(pool.allowance);

  const [decimals, setDecimals] = useState<bigint>(
    // @ts-ignore
    BigInt(TOKEN_DECIMALS[pool.token]),
  );

  const [error, setError] = useState<string | undefined>(undefined);

  const updateAllowance = () => {
    (async () => {
      if (bridge.senderAddress) {
        const handler = await chainFactoryTestnet.inner(
          // @ts-ignore
          ChainToDestinationDomain[ChainNameToTypeChainName[pool.chain]],
        );

        const token = await handler.token(pool.token);
        if (token.address !== ethers.ZeroAddress && "address" in handler) {
          const poolAddress: string = await handler.address(`elp${pool.token}`);

          if ("getApprovedAmount" in handler) {
            const allowance = await handler.getApprovedAmount(
              token.address,
              bridge.senderAddress,
              poolAddress,
            );
            setAllowance(Number(allowance));
            dispatch(setPoolAllowance(Number(allowance)));
          }
        }
      }
    })().catch((e) => {
      const formattedError = `useBridgeAllowance Error: ${e}`;
      console.error(formattedError);
      setError(formattedError);
      dispatch(setBridgeError(formattedError));
      // console.log("tokenAddress", tokenAddress, "spender", spender)
    });
  };

  useEffect(() => {
    updateAllowance();
  }, [bridge.senderAddress, pool.amount, pool.chain, pool.token]);

  return { allowance, decimals, error, updateAllowance };
}
