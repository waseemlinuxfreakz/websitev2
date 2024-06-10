import { polygon as viemPolygon } from "viem/chains";
import { TEmmetChain } from ".";

export const polygon = {
  ...viemPolygon,
  emmetBridge: {
    address: "0x90Aba668F81330703732b78B9f1ED57456399fc1",
    blockCreated: 0,
  },
  emmetFeeOracle: {
    address: "0x95db799744a5b36d6e7be9ad3b451dbc5b8de673",
    blockCreated: 0,
  },
  name: "Polygon",
  rpcUrls: {
    default: {
      http: ["https://endpoints.omniatech.io/v1/matic/mainnet/public"],
    },
    public: {
      http: ["https://endpoints.omniatech.io/v1/matic/mainnet/public"],
    },
  },
  testnet: false,
} as TEmmetChain;
