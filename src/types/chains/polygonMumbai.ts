import { polygonAmoy as viemPolygonMumbai } from "viem/chains";
import { TEmmetChain } from ".";

export const polygonMumbai = {
  ...viemPolygonMumbai,
  emmetBridge: {
    address: "0x6b30f76cece9f92d27f0e9ad78312e77709e74a5",
    blockCreated: 45310404,
  },
  emmetFeeOracle: {
    address: "0x8598059B6AC70E9a831638F670639c893d3C464d",
    blockCreated: 45306550,
  },
  name: "Mumbai",
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
