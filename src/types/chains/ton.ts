import { TEmmetChain } from ".";
import { getHttpEndpoint } from "@orbs-network/ton-access";

const rpc = await getHttpEndpoint();

export const ton = {
  emmetBridge: {
    address: "", // TODO
    blockCreated: 0, // TODO
  },
  emmetFeeOracle: {
    address: "", // TODO
    blockCreated: 0, // TODO
  },
  name: "TON",
  rpcUrls: {
    default: {
      http: [rpc],
    },
    public: {
      http: [rpc],
    },
  },
  testnet: true,
  id: 65534,
  nativeCurrency: { name: "TON", symbol: "TON", decimals: 9 },
} as TEmmetChain;
