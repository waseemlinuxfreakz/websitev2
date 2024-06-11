import { Chain, polygon as viemPolygon } from "viem/chains";

export const polygon: Chain = {
  ...viemPolygon,
  name: "Polygon",
  rpcUrls: {
    default: {
      http: ["https://endpoints.omniatech.io/v1/matic/mainnet/public"],
    },
    public: {
      http: ["https://endpoints.omniatech.io/v1/matic/mainnet/public"],
    },
  },
};
