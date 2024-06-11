import { Chain, base as viemBase } from "viem/chains";

export const base: Chain = {
  ...viemBase,
  rpcUrls: {
    default: {
      http: ["https://mainnet.base.org"],
    },
    public: {
      http: ["https://mainnet.base.org"],
    },
  },
};
