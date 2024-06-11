import { createPublicClient, http, fallback } from "viem";
import { TChainName } from "../types";
import { findChain } from "./chain";
import { TonClient } from "@ton/ton";

export function getProvider(chainName: TChainName) {
  const chain = findChain(chainName);

  const provider = createPublicClient({
    chain,
    transport: fallback(
      chain!.rpcUrls.public.http.map((RPC) => {
        return http(RPC);
      }),
    ),
  });

  return provider;
}

export function getTonProvider(chainName: "TON" | "TONTestnet") {
  const cn = chainName === "TON" ? "ton" : "tonTestnet";
  const chain = findChain(cn);

  return new TonClient({
    endpoint: chain!.rpcUrls.default.http[0],
  });
}
