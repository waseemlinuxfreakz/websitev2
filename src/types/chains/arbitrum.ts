import { arbitrum as viemArbitrum, Chain } from "viem/chains";

export const arbitrum: Chain = {
  ...viemArbitrum,
  name: "Arbitrum",
  rpcUrls: {
    default: {
      http: ["https://arb1.arbitrum.io/rpc"],
    },
    public: {
      http: ["https://arb1.arbitrum.io/rpc"],
    },
  },
};
