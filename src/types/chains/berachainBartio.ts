import { Chain, berachainTestnet as viemBerachainTestnet } from "viem/chains";

export const berachainBartio: Chain = {
  ...viemBerachainTestnet,
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
};
