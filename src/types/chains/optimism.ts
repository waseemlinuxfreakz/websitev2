import { Chain, optimism as viemOptimism } from "viem/chains";

export const optimism: Chain = {
  ...viemOptimism,
  name: "Optimism",
  rpcUrls: {
    default: {
      http: ["https://mainnet.optimism.io"],
    },
    public: {
      http: ["https://mainnet.optimism.io"],
    },
  },
};
