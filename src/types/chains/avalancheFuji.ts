import { avalancheFuji as viemAlancheFuji } from 'viem/chains';
import { TEmmetChain } from '.';

export const avalancheFuji = {
  ...viemAlancheFuji,
  emmetBridge: {
    address: "0x0F416Ea0661BfD7Ffb5b79259Bd98Bd4496a5558",
    blockCreated: 29583260
  },
  emmetFeeOracle: {
    address:"0xFe222aF63ed3E8B22C98A6E1c9bf53F04C45AA1E",
    blockCreated: 29607286
  },
  name: "Avalanche Fuji",
  rpcUrls: {
    default: { http: ['https://api.avax-test.network/ext/bc/C/rpc'] },
    public: { http: [
      'https://api.avax-test.network/ext/bc/C/rpc',
      'https://avalanche-fuji-c-chain.publicnode.com',
      'https://rpc.ankr.com/avalanche_fuji',
      'https://avalanche-fuji.blockpi.network/v1/rpc/public',
    ] },
  },
  testnet: true,
} as TEmmetChain;