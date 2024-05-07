import { Chain } from "viem";
import { arbitrum } from "./arbitrum";
import { arbitrumSepolia } from "./arbitrumSepolia";
import { avalanche } from "./avalanche";
import { avalancheFuji } from "./avalancheFuji";
import { base } from "./base";
import { baseSepolia } from "./baseSepolia";
import { ethereum } from "./ethereum";
import { optimism } from "./optimism";
import { optimismSepolia } from "./optimismSepolia";
import { polygon } from "./polygon";
import { polygonAmoy } from "./polygonAmoy";
import { sepolia } from "./sepolia";
import { tonTestnet } from "./tonTestnet";

// https://github.com/wevm/viem/blob/main/src/chains/definitions

// MAINNETS:
export * from "./arbitrum";
export * from "./avalanche";
export * from "./base";
export * from "./ethereum";
export * from "./optimism";
export * from "./polygon";

// TESTNETS:
export * from "./arbitrumSepolia";
export * from "./avalancheFuji";
export * from "./baseSepolia";
export * from "./optimismSepolia";
export * from "./polygonAmoy";
export * from "./sepolia";

export type TChainDataParam = "bridge" | "id" | "icon" | "name" | "url";

export type TEmmetChain = Chain & {
  emmetBridge: {
    address: string;
    blockCreated: number;
  };
  emmetFeeOracle: {
    address: string;
    blockCreated: number;
  };
};

export const MAINNETS = {
  arbitrum: arbitrum,
  avalanche: avalanche,
  base: base,
  ethereum: ethereum,
  optimism: optimism,
  polygon: polygon,
};

export const TESTNETS = {
  arbitrumSepolia: arbitrumSepolia,
  avalancheFuji: avalancheFuji,
  baseSepolia: baseSepolia,
  optimismSepolia: optimismSepolia,
  polygonAmoy: polygonAmoy,
  sepolia: sepolia,
  tonTestnet: tonTestnet,
};

export const SUPPORTED_CHAINS = { ...MAINNETS, ...TESTNETS };

export const ALL_CHAINS = Object.keys(SUPPORTED_CHAINS).map((chainName) => {
  return SUPPORTED_CHAINS[chainName as TChainName];
});

export type TChainName = keyof typeof SUPPORTED_CHAINS;

export const SUPPORTED_CHAIN_IDS: number[] = Object.keys(SUPPORTED_CHAINS).map(
  (chainName) => SUPPORTED_CHAINS[chainName as TChainName].id
);

export const infuraEndpoints = {
  // Mainnets:
  arbitrum: "https://arbitrum-mainnet.infura.io/v3/",
  avalanche: "https://avalanche-mainnet.infura.io/v3/",
  base: "",
  ethereum: "https://mainnet.infura.io/v3/",
  optimism: "https://optimism-mainnet.infura.io/v3/",
  polygon: "https://polygon-mainnet.infura.io/v3/",
  // Testnets:
  arbitrumSepolia: "https://arbitrum-sepolia.infura.io/v3/",
  avalancheFuji: "https://avalanche-fuji.infura.io/v3/",
  baseSepolia: "",
  optimismSepolia: "https://optimism-sepolia.infura.io/v3/",
  polygonAmoy: "https://polygon-mumbai.infura.io/v3/",
  sepolia: "https://sepolia.infura.io/v3/",
};

export const CircleAPI = {
  mainnet: "https://iris-api.circle.com",
  testnet: "https://iris-api-sandbox.circle.com",
};

export const CHAIN_NAME_TO_ID: { [key in TChainName]: number } = {
  // Mainnets:
  arbitrum: 42161, //0xa4b1  (Arbitrum One)
  avalanche: 43114, // 0xa86a
  base: 8453, // 0x2105
  ethereum: 1, // 0x1
  optimism: 10, // 0xa (OP Mainnet)
  polygon: 137, // 0x89
  // Testnets:
  arbitrumSepolia: 421614, // 0x66eee
  avalancheFuji: 43113, // 0xa869
  baseSepolia: 84532, // 0x14a34
  optimismSepolia: 11155420, // 0xaa37dc
  polygonAmoy: 80001, // 0x13881
  sepolia: 11155111, // 0xaa36a7
  tonTestnet: 65535,
};

export const ChainNameToTypeChainName: { [key: string]: TChainName } = {
  // Mainnets:
  Arbitrum: "arbitrum",
  Avalanche: "avalanche",
  Base: "base",
  Ethereum: "ethereum",
  Optimism: "optimism",
  Polygon: "polygon",
  // Testnets:
  ArbSepolia: "arbitrumSepolia",
  Fuji: "avalancheFuji",
  BSepolia: "baseSepolia",
  OPSepolia: "optimismSepolia",
  Amoy: "polygonAmoy",
  Sepolia: "sepolia",
  TONTestnet: "tonTestnet",
};

export const ChainToDestinationDomain: { [key in TChainName]: number } = {
  ethereum: 0,
  sepolia: 0,
  avalanche: 1,
  avalancheFuji: 1,
  optimism: 2,
  optimismSepolia: 2,
  arbitrum: 3,
  arbitrumSepolia: 3,
  base: 6,
  baseSepolia: 6,
  polygon: 7,
  polygonAmoy: 7,
  tonTestnet: 65535,
};

export const DomainToChainName: { [key: number]: TChainName } = {
  0: "sepolia",
  1: "avalancheFuji",
  2: "optimismSepolia",
  3: "arbitrumSepolia",
  6: "baseSepolia",
  7: "polygonAmoy",
  65535: "tonTestnet",
};

export const CHAIN_ID_TO_NAME: { [key: number]: TChainName } = {
  // Mainnets:
  42161: "arbitrum",
  43114: "avalanche",
  8453: "base",
  1: "ethereum",
  10: "optimism",
  137: "polygon",
  // Testnets:
  421614: "arbitrumSepolia",
  43113: "avalancheFuji",
  84532: "baseSepolia",
  11155420: "optimismSepolia",
  80001: "polygonAmoy",
  11155111: "sepolia",
  65535: "tonTestnet",
};

export const SupportedDomains = [0, 1, 2, 3, 6, 7, 65535];

export const supportedChainnames: TChainName[] = Object.keys(
  SUPPORTED_CHAINS
) as TChainName[];

export const CHAIN_LOGOS: { [key: string]: string } = {
  // Mainnets:
  arbitrum: "img/chain/arbitrum.svg",
  avalanche: "img/chain/avalanche.svg",
  base: "img/chain/base.svg",
  ethereum: "img/chain/ethereum.svg",
  optimism: "img/chain/optimism.svg",
  polygon: "img/chain/polygon.svg",
  // Testnets:
  arbitrumSepolia: "img/chain/arbitrum.svg",
  avalancheFuji: "img/chain/avalanche.svg",
  baseSepolia: "img/chain/base.svg",
  optimismSepolia: "img/chain/optimism.svg",
  polygonAmoy: "img/chain/polygon.svg",
  sepolia: "img/chain/ethereum.svg",
  tonTestnet: "img/chain/ton.svg",
};

export const EstimatedTimeFromChain = {
  avalancheFuji: "50 sec",
  baseSepolia: "4 min 30 sec",
  sepolia: "2 min 35 sec",
  optimismSepolia: "3 min 40 sec",
  polygonAmoy: "2 min 30 sec",
  arbitrumSepolia: "4 min 30 sec",
  tonTestnet: "2 min 30 sec",
};
