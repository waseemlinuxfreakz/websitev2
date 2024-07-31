import { Chain } from "viem/chains";

export const berachainBartio: Chain = {
  name: "Bartio",
  rpcUrls: {
    default: {
      http: ["https://bartio.rpc.berachain.com"],
    },
    public: {
      http: [
        "https://bartio.rpc.berachain.com",
        "https://bera-testnet.nodeinfra.com",
      ],
    },
  },
  testnet: true,
  id: 80084,
  nativeCurrency: { name: "BERA", symbol: "BERA", decimals: 18 },
  blockExplorers: {
    default: {
      name: "Berachain Testnet Explorer",
      url: "https://bartio.beratrail.io",
    },
  },
};
