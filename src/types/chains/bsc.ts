import { Chain, bsc as viemBsc } from "viem/chains";

export const bsc: Chain = {
  ...viemBsc,
  name: "BSC",
  rpcUrls: {
    default: {
      http: ["https://bscrpc.com"],
    },
    public: {
      http: [
        "https://bsc.drpc.org",
        "https://rpc.ankr.com/bsc",
        "https://bsc-dataseed.bnbchain.org",
        "https://bscrpc.com",
        "https://bsc-rpc.publicnode.com",
        "https://bsc-dataseed.bnbchain.org",
        "https://bsc-dataseed1.defibit.io",
        "https://bsc-dataseed1.ninicoin.io",
        "https://bsc-dataseed2.defibit.io",
        "https://bsc-dataseed3.defibit.io"
      ],
    },
  },
};
