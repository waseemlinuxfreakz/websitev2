import { Chain } from "viem";

export const onlylayerTestnet: Chain = {
  name: "OnlyTestnet",
  rpcUrls: {
    default: {
      http: ["https://onlylayer.org"],
    },
    public: {
      http: ["https://onlylayer.org"],
    },
  },
  testnet: true,
  id: 728696,
  nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 9 },
  blockExplorers: {
    default: {
      name: "Only Layer Testnet Explorer",
      url: "https://onlyscan.info",
    },
  },
};
