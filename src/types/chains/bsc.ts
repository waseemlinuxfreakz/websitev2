import { Chain, bsc as viemBsc } from "viem/chains";

export const bsc: Chain = {
  ...viemBsc,
  name: "BSC",
  rpcUrls: {
    default: {
      http: ["https://rpc-amoy.polygon.technology"],
    },
    public: {
      http: [
        "https://rpc-amoy.polygon.technology",
        "https://polygon-mumbai-pokt.nodies.app",
        "https://polygon-mumbai.blockpi.network/v1/rpc/public",
        "https://polygon-testnet.public.blastapi.io",
      ],
    },
  },
};
