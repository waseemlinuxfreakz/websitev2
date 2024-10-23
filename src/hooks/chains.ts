const chains = [
  {
    id: 43114,
    name: "Avalanche",
    icon: "img/chain/avalanche.svg",
    domain: 1,
    requiresApproval: true,
    nativeCurrency: { name: "AVAX", symbol: "AVAX", decimals: 18 },
  },
  {
    id: 137,
    name: "Polygon",
    icon: "img/chain/polygon.svg",
    domain: 7,
    requiresApproval: true,
    nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
  },
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
    id: 97,
    name: "BSCTestnet",
    icon: "img/chain/bsc.svg",
    domain: 4,
    requiresApproval: true,
    nativeCurrency: { name: "TBNB", symbol: "TBNB", decimals: 18 },
  },
  {
    id: 80084,
    name: "Bartio",
    icon: "img/chain/berachain.png",
    domain: 80084,
    requiresApproval: true,
    nativeCurrency: { name: "BERA", symbol: "BERA", decimals: 18 },
  },
  {
    id: 728696,
    name: "OnlyTestnet",
    icon: "img/chain/berachain.png",
    domain: 728696,
    requiresApproval: true,
    nativeCurrency: { name: "ONLY", symbol: "ONLY", decimals: 18 },
  },
  {
    id: 65534,
    name: "TON",
    icon: "img/chain/ton.png",
    domain: 65534,
    requiresApproval: false,
    nativeCurrency: { name: "TON", symbol: "TON", decimals: 9 },
  },
] as const;

export type LockAndMintSupportedChainIDs = (typeof chains)[number]["domain"];

export default chains;
