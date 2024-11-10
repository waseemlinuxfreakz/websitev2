import {
  ChainNameToTypeChainName,
  SUPPORTED_CHAINS,
  TOKEN_DECIMALS,
  TTokenName,
  ChainToDestinationDomain,
  TDirection,
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
import { sleep } from "../utils";
import { TChainName } from "emmet.js";
import { TonHelper } from "emmet.js/dist/chains/ton";

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

      return bal ? Number(bal) : 0;

    } catch (error) {
      // console.error("useBalance:getCoinBalance", error);
      return 0;
    }

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

      const tokenAddress: string = await handler.getTokenAddress(tokenName);

      const bal = await handler.tokenBalance(tokenAddress, addr);

      return Number(bal) || 0;

    } catch (error) {
      // console.error("useBalance:getTokenBalance", error);
      return 0;
    }

  }

  /**
   * Requests for coin | token balance
   * @param direction "from" | "to"
   * @param chain a Viem compatible chain class
   */
  async function readBalance(direction: TDirection, chainName: TChainName) {

    const chain = SUPPORTED_CHAINS[ChainNameToTypeChainName[chainName]];
    const tokenName: string = direction === "from" ? bridge.fromToken : bridge.toToken;

    const bal = tokenName === chain.nativeCurrency.symbol
      ? await getCoinBalance(direction)
      : await getTokenBalance(direction);

    const formattedBalance = bal / 10 ** TOKEN_DECIMALS[tokenName as TTokenName];

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
    // setBalance(0);
    const { fromChain, fromToken, senderAddress, isSwapping } = bridge;
    if (fromChain && fromToken && senderAddress && !isSwapping)
      (async () => {
        await readBalance("from", fromChain as TChainName);
      })().catch(async (e) => {
        const formattedError = `useCoinBalanceFrom:Error: ${e}`;
        // console.error(formattedError);
        dispatch(setBridgeError(formattedError));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    bridge.fromChain,
    bridge.fromToken,
    bridge.toToken,
    bridge.amount,
    bridge.senderAddress,
    bridge.isSwapping
  ]);

  useEffect(() => { // DESTINATION BALANCE
    // setBalanceTo(0);
    if (bridge.receiver && bridge.toChain && bridge.toToken && !bridge.isSwapping) {

      (async () => {
        await readBalance("to", bridge.toChain as TChainName);
      })().catch(async (e) => {
        const formattedError = `useCoinBalanceTo:Error: ${e}`;
        // console.error(formattedError);
        dispatch(setBridgeError(formattedError));
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    bridge.toChain,
    bridge.amount,
    bridge.fromToken,
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
