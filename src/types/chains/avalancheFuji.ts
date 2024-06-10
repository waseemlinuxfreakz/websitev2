import { avalancheFuji as viemAlancheFuji } from "viem/chains";
import { TEmmetChain } from ".";

export const avalancheFuji = {
  ...viemAlancheFuji,
  emmetBridge: {
    address: "0x0F416Ea0661BfD7Ffb5b79259Bd98Bd4496a5558",
    blockCreated: 29583260,
  },
  emmetFeeOracle: {
    address: "0x5AF10b142775000e3140416F4a513E42922d480e",
    blockCreated: 29607286,
  },
  name: "Avalanche Fuji",
  rpcUrls: {
    default: { http: ["https://avalanche-fuji.blockpi.network/v1/rpc/public"] },
    public: {
      http: [
        "https://avalanche-fuji.blockpi.network/v1/rpc/public",
        "https://api.avax-test.network/ext/bc/C/rpc",
        "https://avalanche-fuji-c-chain.publicnode.com",
        "https://rpc.ankr.com/avalanche_fuji",
      ],
    },
  },
  testnet: true,
} as TEmmetChain;
