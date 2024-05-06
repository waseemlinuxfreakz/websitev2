import { bsc as viemBsc } from "viem/chains";
import { TEmmetChain } from ".";

export const bsc = {
  ...viemBsc,
  emmetBridge: {
    address: "", // TODO: change
    blockCreated: 45310404, // TODO: change
  },
  emmetFeeOracle: {
    address: "", // TODO: change
    blockCreated: 45306550, // TODO: change
  },
  name: "BSC",
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
} as TEmmetChain;
