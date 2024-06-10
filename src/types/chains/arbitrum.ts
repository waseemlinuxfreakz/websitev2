import { arbitrum as viemArbitrum } from "viem/chains";
import { TEmmetChain } from ".";

export const arbitrum = {
  ...viemArbitrum,
  emmetBridge: {
    address: "0x2bb150BE4e24a5c5f7c27a2f99798c2cda5bF391",
    blockCreated: 0,
  },
  emmetFeeOracle: {
    address: "0x95DB799744A5b36D6E7BE9AD3b451dBC5b8De673",
    blockCreated: 0,
  },
  name: "Arbitrum",
  rpcUrls: {
    default: {
      http: ["https://arb1.arbitrum.io/rpc"],
    },
    public: {
      http: ["https://arb1.arbitrum.io/rpc"],
    },
  },
} as TEmmetChain;
