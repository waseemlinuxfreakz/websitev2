import { polygon as viemPolygon } from 'viem/chains';
import { TEmmetChain } from '.';

export const polygon = {
  ...viemPolygon,
  emmetBridge: {
    address: "",
    blockCreated: 0
  },
  emmetFeeOracle:{
    address:"",
    blockCreated: 0
  },
    name: 'Polygon',
    rpcUrls: {
      default: {
        http: ['https://polygon-rpc.com'],
      },
      public: {
        http: ['https://polygon-rpc.com'],
      },
    },
    testnet: false,
  } as TEmmetChain;