import { mainnet } from 'viem/chains';
import { TEmmetChain } from '.';

export const ethereum = {
  ...mainnet,
  emmetBridge: {
    address: "",
    blockCreated: 0
  },
  emmetFeeOracle:{
    address:"",
    blockCreated: 0
  },
  name: "Ethereum",
  rpcUrls: {
    default: {
      http: ['https://cloudflare-eth.com'],
    },
    public: {
      http: ['https://cloudflare-eth.com'],
    },
  },
  testnet: false
} as TEmmetChain;