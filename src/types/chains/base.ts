import { base as viemBase } from "viem/chains";
import { TEmmetChain } from ".";

export const base = {
  ...viemBase,
  emmetBridge: {
    address: "",
    blockCreated: 0,
  },
  emmetFeeOracle: {
    address: "",
    blockCreated: 0,
  },
  rpcUrls: {
    default: {
      http: ["https://mainnet.base.org"],
    },
    public: {
      http: ["https://mainnet.base.org"],
    },
  },
} as TEmmetChain;
