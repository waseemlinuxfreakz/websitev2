import { Chain, bscTestnet as viemBSCTestnet } from "viem/chains";

export const bscTestnet: Chain = {
  ...viemBSCTestnet,
  name: "BSCTestnet",
  rpcUrls: {
    default: {
      http: ["https://rpc-amoy.polygon.technology"],
    },
    public: {
      http: [
        // "https://rpc.ankr.com/polygon_mumbai",
        // "https://rpc.ankr.com/polygon_mumbai",
        "https://rpc-amoy.polygon.technology",
        "https://polygon-mumbai-pokt.nodies.app",
        "https://polygon-mumbai.blockpi.network/v1/rpc/public",
        "https://polygon-testnet.public.blastapi.io",
      ],
    },
  },
  testnet: true,
};
