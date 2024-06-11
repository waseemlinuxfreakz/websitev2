import { Chain, baseSepolia as viemBaseSepolia } from "viem/chains";

export const baseSepolia: Chain = {
  ...viemBaseSepolia,
  name: "Base Sepolia",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sepolia.base.org"],
    },
    public: {
      http: [
        "https://sepolia.base.org",
        "https://base-sepolia.blockpi.network/v1/rpc/public",
        "https://rpc.notadegen.com/base/sepolia",
      ],
    },
  },
};
