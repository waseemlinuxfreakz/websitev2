import { avalanche as viemAvalanche } from "viem/chains";

export const avalanche = {
  ...viemAvalanche,
  name: "Avalanche",
  rpcUrls: {
    default: { http: ["https://api.avax.network/ext/bc/C/rpc"] },
    public: { http: ["https://api.avax.network/ext/bc/C/rpc"] },
  },
};
