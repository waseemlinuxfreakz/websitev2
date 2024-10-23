import { Chain } from "viem";
import { getHttpEndpoint } from "@orbs-network/ton-access";

const rpc = await getHttpEndpoint().catch((e) => {
  console.error(e);
  return "https://toncenter.com/api/v2/jsonRPC?api_key=a0b875b16d9045fed8cee2ad6ee7733990afd045a6e2fbb50708186c9f6decb0";
});

export const ton: Chain = {
  name: "TON",
  rpcUrls: {
    default: {
      http: [rpc, "https://toncenter.com/api/v2/jsonRPC?api_key=a0b875b16d9045fed8cee2ad6ee7733990afd045a6e2fbb50708186c9f6decb0"],
    },
    public: {
      http: [rpc, "https://toncenter.com/api/v2/jsonRPC?api_key=a0b875b16d9045fed8cee2ad6ee7733990afd045a6e2fbb50708186c9f6decb0"],
    },
  },
  testnet: false,
  id: 65534,
  nativeCurrency: { name: "TON", symbol: "TON", decimals: 9 },
  blockExplorers: {
    default: {
      name: "TON Viewer",
      url: "https://tonviewer.com",
    },
  },
};
