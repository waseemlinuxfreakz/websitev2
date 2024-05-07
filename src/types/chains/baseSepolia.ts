import { baseSepolia as viemBaseSepolia } from "viem/chains";
import { TEmmetChain } from ".";

export const baseSepolia = {
  ...viemBaseSepolia,
  emmetBridge: {
    address: "0xdcb750D9Cf86109a0b81EcD50AaD9492245e5044",
    blockCreated: 0,
  },
  emmetFeeOracle: {
    address: "0xae36c4c6B05C8e3bf8E244dcf8aD1Dce813f9bf4",
    blockCreated: 5421678,
  },
  name: "Base Sepolia",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sepolia.base.org"],
    },
    public: {
      http: [
        "https://sepolia.base.org",
        "https://base-sepolia.blockpi.network/v1/rpc/public",
        "https://rpc.notadegen.com/base/sepolia",
      ],
    },
  },
  testnet: true,
} as TEmmetChain;
