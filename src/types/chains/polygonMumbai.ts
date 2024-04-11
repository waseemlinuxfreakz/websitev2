import { polygonMumbai as viemPolygonMumbai } from "viem/chains";
import { TEmmetChain } from ".";

export const polygonMumbai = {
  ...viemPolygonMumbai,
  emmetBridge: {
    address: "0x379388Ae42f2EeE0CD30B89541CFaf90843F8762",
    blockCreated: 45310404,
  },
  emmetFeeOracle: {
    address: "0x8598059B6AC70E9a831638F670639c893d3C464d",
    blockCreated: 45306550,
  },
  name: "Polygon Mumbai",
  rpcUrls: {
    default: {
      http: ["https://rpc.ankr.com/polygon_mumbai"],
    },
    public: {
      http: [
        "https://rpc.ankr.com/polygon_mumbai",
        "https://rpc.ankr.com/polygon_mumbai",
        "https://polygon-mumbai-bor.publicnode.com",
        "https://polygon-mumbai-pokt.nodies.app",
        "https://polygon-mumbai.blockpi.network/v1/rpc/public",
        "https://polygon-testnet.public.blastapi.io",
      ],
    },
  },
  testnet: true,
} as TEmmetChain;
