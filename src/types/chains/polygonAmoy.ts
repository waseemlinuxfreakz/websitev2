import { Chain, polygonAmoy as viempolygonAmoy } from "viem/chains";

export const polygonAmoy: Chain = {
  ...viempolygonAmoy,
  name: "Amoy",
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
