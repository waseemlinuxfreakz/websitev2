import { Chain, sepolia as viemSepolia } from "viem/chains";

export const sepolia: Chain = {
  ...viemSepolia,
  name: "Sepolia",
  nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://ethereum-sepolia.publicnode.com"],
    },
    public: {
      http: [
        "https://ethereum-sepolia.publicnode.com",
        "https://rpc.notadegen.com/eth/sepolia",
        "https://eth-sepolia.public.blastapi.io",
        "https://eth-sepolia-public.unifra.io",
      ],
    },
  },
};
