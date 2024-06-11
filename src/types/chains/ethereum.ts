import { Chain, mainnet } from "viem/chains";

export const ethereum: Chain = {
  ...mainnet,
  name: "Ethereum",
  rpcUrls: {
    default: {
      http: ["https://cloudflare-eth.com"],
    },
    public: {
      http: ["https://cloudflare-eth.com"],
    },
  },
};
