import { Chain } from "viem";
import { getHttpEndpoint } from "@orbs-network/ton-access";

const rpc = await getHttpEndpoint().catch((e) => {
  console.error(e);
  return "";
});

export const ton: Chain = {
  name: "TON",
  rpcUrls: {
    default: {
      http: [rpc, "https://testnet-ton-node.emmet.finance/jsonRPC"],
    },
    public: {
      http: [rpc, "https://testnet-ton-node.emmet.finance/jsonRPC"],
    },
  },
  testnet: false,
  id: 65534,
  nativeCurrency: { name: "TON", symbol: "TON", decimals: 9 },
  blockExplorers: {
    default: {
      name: "TONScan",
      url: "https://tonscan.org",
    },
  },
};
