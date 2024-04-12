import { createPublicClient, http, fallback } from "viem";
import { TChainName, TEmmetChain, options } from "../types";
import { findChain, getChainData } from "./chain";
import { TonClient } from "@ton/ton";

export function getProvider(chainName: TChainName) {
  const chain: TEmmetChain = findChain(chainName) as TEmmetChain;

  const rpcURL: string = getChainData(chainName, "url") as string;

  const provider = createPublicClient({
    chain,
    transport: fallback(
      chain?.rpcUrls.public.http.map((RPC) => {
        return http(RPC);
      })
    ),
  });

  return provider;
}

export function getTonProvider(chainName: "TON" | "TONTestnet") {
  const cn = chainName === "TON" ? "ton" : "tonTestnet";
  const chain: TEmmetChain = findChain(cn) as TEmmetChain;
  console.log("rpc", chain.rpcUrls);

  return new TonClient({
    endpoint: chain.rpcUrls.default.http[0],
  });
}
