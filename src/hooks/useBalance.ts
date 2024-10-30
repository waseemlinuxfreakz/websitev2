import {
  ChainNameToTypeChainName,
  SUPPORTED_CHAINS,
  TOKEN_DECIMALS,
  TTokenName,
  ChainToDestinationDomain,
} from "../types";
import { useAppDispatch, useAppSelector } from "./storage";
import { useState, useEffect } from "react";
import {
  setBridgeBalance,
  setBridgeError,
  setBridgeToBalance,
} from "../store/bridgeSlice";
import { chainFactory } from "../store/chainFactory";
import { Web3Helper } from "emmet.js/dist/chains/web3";
import { Chain } from "viem";
import { sleep } from "../utils";
import { TChainName } from "emmet.js";
import { TonHelper } from "emmet.js/dist/chains/ton";

type TDirection = "from" | "to";

export default function useBalance() {
  const dispatch = useAppDispatch();
  const bridge = useAppSelector((state) => state.bridge);
  const [txFeeCoinBalance, setTxFeeCoinbalance] = useState<number>(0);
  const [balance, setBalance] = useState<number>(0);
  const [balanceTo, setBalanceTo] = useState<number>(0);

  async function getCoinBalance(direction: TDirection) {
    try {

      const handler =
        direction === "from"
          ? await chainFactory.inner(
            // @ts-ignore
            ChainToDestinationDomain[
            ChainNameToTypeChainName[bridge.fromChain]
            ],
          )
          : await chainFactory.inner(
            // @ts-ignore
            ChainToDestinationDomain[
            ChainNameToTypeChainName[bridge.toChain]
            ],
          );
      const addr =
        direction === "from" ? bridge.senderAddress : bridge.receiver;
      console.log("getCoinBalance: addr", addr)

      const bal = await handler?.balance(addr);

      console.log("getCoinBalance:", bal)

      if (bal) {
        return Number(bal);
      }

    } catch (error) {
      console.error("useBalance:getCoinBalance", error);
      // await sleep(1000);
      // return await getCoinBalance(direction);
    }

    return 0;
  }

  async function getTokenBalance(direction: TDirection) {
    try {

      const addr = direction === "from" 
        ? bridge.senderAddress 
        : bridge.receiver;

      const chainName: string = direction === "from"
        ? bridge.fromChain
        : bridge.toChain;

      const tokenName: string = direction === "from"
        ? bridge.fromToken 
        : bridge.toToken;

      const handler: Web3Helper | TonHelper = await chainFactory.inner(
        // @ts-ignore
        ChainToDestinationDomain[
          ChainNameToTypeChainName[chainName]
        ]
      );

      console.log("getTokenBalance:", "addr", addr, "chainName", chainName, "tokenName", tokenName)

      const tokenAddress: string = (
        await handler.token(tokenName)
      ).token;

      const bal = await handler.tokenBalance(tokenAddress, addr);

      if (bal) {
        return Number(bal);
      }

    } catch (error) {
      console.error("useBalance:getTokenBalance", error);
      // await sleep(1000);
      // return await getTokenBalance(direction);
    }

    return 0;

  }

  /**
   * Requests for coin | token balance
   * @param direction "from" | "to"
   * @param chain a Viem compatible chain class
   */
  async function readBalance(direction: TDirection, chainName: TChainName) {

    const chain = SUPPORTED_CHAINS[ChainNameToTypeChainName[chainName]];

    let bal = 0;
    const tokenName: string = direction === "from" ? bridge.fromToken : bridge.toToken;

    console.log("tokenName", tokenName, "chain.nativeCurrency.symbol", chain.nativeCurrency.symbol)

    if (tokenName === chain.nativeCurrency.symbol) {
      bal = await getCoinBalance(direction);
    } else {
      bal = await getTokenBalance(direction);
    }
    const fmb =
      bal / 10 ** Number(TOKEN_DECIMALS[tokenName as TTokenName]);
    const formattedBalance = Number(fmb);

    if (direction === "from") {
      dispatch(setBridgeBalance(formattedBalance));
      setBalance(formattedBalance);
    } else {
      dispatch(setBridgeToBalance(formattedBalance));
      setBalanceTo(formattedBalance);
    }

    dispatch(setBridgeError(""));

  }

  useEffect(() => { // ORIGIN BALANCE
    setBalance(0);


    if (bridge.fromChain && bridge.fromToken && bridge.senderAddress && !bridge.isSwapping)
      (async () => {
        await readBalance("from", bridge.fromChain as TChainName);
      })().catch(async (e) => {
        const formattedError = `useCoinBalanceFrom:Error: ${e}`;
        console.error(formattedError);
        await sleep(1000);
        await readBalance("from", bridge.fromChain as TChainName);
        dispatch(setBridgeError(formattedError));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    bridge.fromChain,
    bridge.fromToken,
    bridge.amount,
    bridge.senderAddress,
    bridge.isSwapping
  ]);

  useEffect(() => { // DESTINATION BALANCE
    setBalanceTo(0);
    if (bridge.receiver && bridge.toChain && bridge.toToken && !bridge.isSwapping) {

      (async () => {
        await readBalance("to", bridge.toChain as TChainName);
      })().catch(async (e) => {
        const formattedError = `useCoinBalanceTo:Error: ${e}`;
        console.error(formattedError);
        await sleep(1000);
        dispatch(setBridgeError(formattedError));
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    bridge.toChain,
    bridge.amount,
    bridge.toToken,
    bridge.receiver,
    bridge.isSwapping
  ]);

  return {
    coinBalance: txFeeCoinBalance,
    fromBalance: balance,
    toBalance: balanceTo,
  };
}
