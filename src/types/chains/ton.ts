import { Chain } from "viem";
import { getHttpEndpoint } from "@orbs-network/ton-access";

const rpc = await getHttpEndpoint();

export const ton: Chain = {
  name: "TON",
  rpcUrls: {
    default: {
      http: [rpc],
    },
    public: {
      http: [rpc],
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
