import {baseSepolia as viemBaseSepolia} from 'viem/chains';
import { TEmmetChain } from '.';

export const baseSepolia = {
  ...viemBaseSepolia,
  emmetBridge: {
    address: "0xdcb750D9Cf86109a0b81EcD50AaD9492245e5044",
    blockCreated: 0
  },
  emmetFeeOracle: {
    address: "0xD62cF1Fe287361c042eB71b7121e3AFCC03D2A95",
    blockCreated: 5421678
  },
  name: "Base Sepolia",
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://sepolia.base.org'],
    },
    public: {
      http: ['https://sepolia.base.org'],
    },
  },
  testnet: true,
} as TEmmetChain;