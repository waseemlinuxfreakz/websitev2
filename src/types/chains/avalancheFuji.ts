import { Chain, avalancheFuji as viemAlancheFuji } from "viem/chains";

export const avalancheFuji: Chain = {
  ...viemAlancheFuji,
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
};
