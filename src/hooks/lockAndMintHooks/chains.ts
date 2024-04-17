const chains = [
  {
    id: 80001,
    name: "Mumbai",
    icon: "img/chain/polygon.svg",
    domain: 7,
    requiresApproval: true,
    nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
  },
  {
    id: 65535,
    name: "TONTestnet",
    icon: "img/chain/Ton.svg",
    domain: 65535,
    requiresApproval: false,
    nativeCurrency: { name: "TON", symbol: "TON", decimals: 9 },
  },
] as const;

export type LockAndMintSupportedChainIDs = (typeof chains)[number]["domain"];

export default chains;
