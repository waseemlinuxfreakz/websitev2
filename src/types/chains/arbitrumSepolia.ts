import { arbitrumSepolia as viemArbitrumSepolia, Chain } from "viem/chains";

export const arbitrumSepolia: Chain = {
  ...viemArbitrumSepolia,
  name: "Arbitrum Sepolia",
  rpcUrls: {
    default: {
      http: ["https://arbitrum-sepolia.blockpi.network/v1/rpc/public"],
    },
    public: {
      http: [
        "https://arbitrum-sepolia.blockpi.network/v1/rpc/public",
        "https://sepolia-rollup.arbitrum.io/rpc",
      ],
    },
  },
};
