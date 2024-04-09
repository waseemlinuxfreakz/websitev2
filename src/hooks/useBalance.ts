import { getProvider, addressToAccount } from "../utils";
import {
  ChainNameToTypeChainName,
  SUPPORTED_CHAINS,
  TChainName,
  TOKEN_CHAIN_CONTRACT,
  TOKEN_DECIMALS,
  TTokenName,
} from "../types";
import { useAppDispatch, useAppSelector } from "./storage";
import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { erc20Abi } from "viem";
import {
  setBridgeBalance,
  setBridgeError,
  setBridgeToBalance,
} from "../store/bridgeSlice";

type TDirection = "from" | "to";

export default function useBalance() {
  const dispatch = useAppDispatch();

  const { address } = useAccount();

  const bridge = useAppSelector((state) => state.bridge);
  const [txFeeCoinBalance, setTxFeeCoinbalance] = useState<number>(0);
  const [balance, setBalance] = useState<number>(bridge.balance);
  const [balanceTo, setBalanceTo] = useState<number>(bridge.balance);

  async function getCoinBalance(direction: TDirection) {
    try {
      const provider =
        direction == "from"
          ? getProvider(ChainNameToTypeChainName[bridge.fromChain])
          : getProvider(ChainNameToTypeChainName[bridge.toChain]);

      const addr =
        direction == "from"
          ? addressToAccount(address as string)
          : addressToAccount(bridge.receiver);

      const bal = await provider.getBalance({
        address: addr,
      });

      if (bal) {
        return Number(bal.toString());
      }
      return 0;
    } catch (error) {
      return 0;
    }
  }

  async function getTokenBalance(direction: TDirection) {
    try {
      const provider =
        direction == "from"
          ? getProvider(ChainNameToTypeChainName[bridge.fromChain])
          : getProvider(ChainNameToTypeChainName[bridge.toChain]);

      const addr =
        direction == "from"
          ? addressToAccount(address as string)
          : addressToAccount(bridge.receiver);

      const tokenAddress: string =
        direction == "from"
          ? TOKEN_CHAIN_CONTRACT["USDC"][
              ChainNameToTypeChainName[bridge.fromChain]
            ]
          : TOKEN_CHAIN_CONTRACT["USDC"][
              ChainNameToTypeChainName[bridge.toChain]
            ];

      const bal = await provider.readContract({
        abi: erc20Abi,
        address: addressToAccount(tokenAddress),
        functionName: "balanceOf",
        args: [addr],
      });

      if (bal) {
        return Number(bal.toString());
      }
      return 0;
    } catch (error) {
      console.log("useBalance:getTokenBalance", error);
      return 0;
    }
  }

  useEffect(() => {
    if (bridge.fromChain && bridge.fromToken && address) {
      const chain =
        SUPPORTED_CHAINS[ChainNameToTypeChainName[bridge.fromChain]];
      const decimals = chain.nativeCurrency.decimals;

      (async () => {
        const coinBalance: number = await getCoinBalance("from");
        const formattedBalance = coinBalance / 10 ** decimals;
        if (formattedBalance) {
          setTxFeeCoinbalance(formattedBalance);
        }
      })();

      if (bridge.fromToken === chain.nativeCurrency.symbol) {
        (async () => {
          const bal: number = await getCoinBalance("from");
          const formattedBalance = bal / 10 ** decimals;
          setBalance(formattedBalance);
          dispatch(setBridgeBalance(formattedBalance));
          dispatch(setBridgeError(""));
        })().catch((e) => {
          const formattedError = `useCoinBalanceFrom:Error: ${e}`;
          console.error(formattedError);
          dispatch(setBridgeError(formattedError));
        });
      } else {
        (async () => {
          const bal: number = await getTokenBalance("from");
          const formattedBalance =
            bal / 10 ** Number(TOKEN_DECIMALS[bridge.fromToken as TTokenName]);
          setBalance(formattedBalance);
          dispatch(setBridgeBalance(formattedBalance));
          dispatch(setBridgeError(""));
        })().catch((e) => {
          const formattedError = `useTokenBalanceFrom:Error: ${e}`;
          console.error(formattedError);
          dispatch(setBridgeError(formattedError));
        });
      }
    }
  }, [bridge.fromChain, bridge.fromToken, bridge.amount, address]);

  useEffect(() => {
    if (bridge.toChain && bridge.toToken && bridge.receiver) {
      const chain = SUPPORTED_CHAINS[ChainNameToTypeChainName[bridge.toChain]];
      const decimals = chain.nativeCurrency.decimals;

      if (bridge.toToken === chain.nativeCurrency.symbol) {
        (async () => {
          const bal: number = await getCoinBalance("to");
          const formattedBalance = bal / 10 ** decimals;
          setBalanceTo(formattedBalance);
          dispatch(setBridgeToBalance(formattedBalance));
          dispatch(setBridgeError(""));
        })().catch((e) => {
          const formattedError = `useCoinBalanceTo:Error: ${e}`;
          console.error(formattedError);
          dispatch(setBridgeError(formattedError));
        });
      } else {
        (async () => {
          const bal: number = await getTokenBalance("to");
          const formattedBalance =
            bal / 10 ** Number(TOKEN_DECIMALS[bridge.fromToken as TTokenName]);
          setBalanceTo(formattedBalance);
          dispatch(setBridgeToBalance(formattedBalance));
          dispatch(setBridgeError(""));
        })().catch((e) => {
          const formattedError = `useTokenBalanceTo:Error: ${e}`;
          console.error(formattedError);
          dispatch(setBridgeError(formattedError));
        });
      }
    }
  }, [bridge.toChain, bridge.toToken, bridge.receiver]);

  return {
    coinBalance: txFeeCoinBalance,
    fromBalance: balance,
    toBalance: balanceTo,
  };
}
