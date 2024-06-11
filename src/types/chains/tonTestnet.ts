import { getHttpEndpoint } from "@orbs-network/ton-access";
import { Chain } from "viem";

const rpc = await getHttpEndpoint({ network: "testnet" });

export const tonTestnet: Chain = {
  name: "TONTestnet",
  rpcUrls: {
    default: {
      http: [rpc],
    },
    public: {
      http: [rpc],
    },
  },
  testnet: true,
  id: 65535,
  nativeCurrency: { name: "TON", symbol: "TON", decimals: 9 },
  blockExplorers: {
    default: {
      name: "TONScan",
      url: "https://testnet.tonscan.org",
    },
  },
};
