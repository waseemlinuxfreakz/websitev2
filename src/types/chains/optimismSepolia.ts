import { Chain, optimismSepolia as viemOptimismSepolia } from "viem/chains";

export const optimismSepolia: Chain = {
  ...viemOptimismSepolia,
  name: "Optimism Sepolia",
  rpcUrls: {
    default: {
      http: ["https://sepolia.optimism.io"],
    },
    public: {
      http: [
        "https://sepolia.optimism.io",
        "https://optimism-sepolia.blockpi.network/v1/rpc/public",
      ],
    },
  },
};
