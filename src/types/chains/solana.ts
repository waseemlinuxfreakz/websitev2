import { Chain } from "viem";

export const solana: Chain = {
  name: "Solana",
  rpcUrls: {
    default: {
      http: ["https://api.mainnet-beta.solana.com"],
    },
    public: {
      http: ["https://api.mainnet-beta.solana.com"],
    },
  },
  testnet: false,
  id: 0,
  nativeCurrency: { name: "SOL", symbol: "SOL", decimals: 9 },
  blockExplorers: {
    default: {
      name: "Solana Explorer",
      url: "https://explorer.solana.com",
    },
  },
};
