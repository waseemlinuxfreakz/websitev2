import { TEmmetChain } from ".";
import { getHttpEndpoint } from "@orbs-network/ton-access";

const rpc = await getHttpEndpoint({ network: "testnet" });

console.log({ rpc });

export const tonTestnet = {
  emmetBridge: {
    address: "EQDTmIlOD2eMZ89rCoTPIi5VU8IgTJIDQCtdTW6jLuq6m55O",
    blockCreated: 20474285000001,
  },
  emmetFeeOracle: {
    address: "EQDmqix5VZg7olsz1RctbLezHJQKRgad_OmDfNktbgpJckNL",
    blockCreated: 20654809000001,
  },
  name: "TONTestnet",
  rpcUrls: {
    default: {
      http: [rpc],
    },
    public: {
      http: [rpc],
    },
  },
  testnet: true,
  id: 65535,
  nativeCurrency: { name: "TON", symbol: "TON", decimals: 9 },
} as TEmmetChain;
