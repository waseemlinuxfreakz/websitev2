import { TEmmetChain } from ".";

export const solana = {
  emmetBridge: {
    address: "", // TODO
    blockCreated: 0, // TODO
  },
  emmetFeeOracle: {
    address: "", // TODO
    blockCreated: 0, // TODO
  },
  name: "Solana",
  rpcUrls: {
    default: {
      http: ["https://api.mainnet-beta.solana.com"],
    },
    public: {
      http: ["https://api.mainnet-beta.solana.com"],
    },
  },
  testnet: true,
  id: 0,
  nativeCurrency: { name: "SOL", symbol: "SOL", decimals: 9 },
  blockExplorers: {
    default: {
      name: "Solana Explorer",
      url: "https://explorer.solana.com",
      // apiUrl: "https://api.polygonscan.com/api",
    },
  },
} as TEmmetChain;
