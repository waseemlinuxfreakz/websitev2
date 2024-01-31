import { sepolia as viemSepolia } from 'viem/chains';
import { TEmmetChain } from '.';

export const sepolia = {
  ...viemSepolia,
  emmetBridge: {
    address: "0x87f26F3C4F2D0c3d8E467B125E5dcE35B830C3f2",
    blockCreated: 5170589
  },
  emmetFeeOracle: {
    address: "0x9421365b7EB182036edD2721b7556Bdb89EfF072",
    blockCreated: 5179056
  },
  name: 'Sepolia',
  nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://rpc.sepolia.org'],
    },
    public: {
      http: ['https://rpc.sepolia.org'],
    },
  },
  testnet: true,
} as TEmmetChain;