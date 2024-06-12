const chains = [
  {
    id: 80002,
    name: "Amoy",
    icon: "img/chain/polygon.svg",
    domain: 7,
    requiresApproval: true,
    nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
  },
  {
    id: 65535,
    name: "TONTestnet",
    icon: "img/chain/ton.svg",
    domain: 65535,
    requiresApproval: false,
    nativeCurrency: { name: "TON", symbol: "TON", decimals: 9 },
  },
  {
    id: 11155111,
    name: "Sepolia",
    icon: "img/chain/ethereum.svg",
    domain: 0,
    requiresApproval: true,
    nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
  },
  {
    id: 11155111,
    name: "BSCTestnet",
    icon: "img/chain/bsc.svg",
    domain: 4,
    requiresApproval: true,
    nativeCurrency: { name: "TBNB", symbol: "TBNB", decimals: 18 },
  },
] as const;

export type LockAndMintSupportedChainIDs = (typeof chains)[number]["domain"];

export default chains;