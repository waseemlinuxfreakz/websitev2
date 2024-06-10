import { optimismSepolia as viemOptimismSepolia } from "viem/chains";
import { TEmmetChain } from ".";

export const optimismSepolia = {
  ...viemOptimismSepolia,
  emmetBridge: {
    address: "0x0A6A1Beb7b0b3545578818f45f4e6219615d25aD",
    blockCreated: 7332935,
  },
  emmetFeeOracle: {
    address: "0x29fb9F83290eAD77Ca4fa4A8491c1065b46b2e6E",
    blockCreated: 7398828,
  },
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
  testnet: true,
} as TEmmetChain;
