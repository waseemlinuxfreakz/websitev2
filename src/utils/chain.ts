import {
  SUPPORTED_CHAINS,
  TChainDataParam,
  TChainName,
  SupportedDomains,
  supportedChainnames,
  CHAIN_LOGOS,
  DomainToChainNameTestnet,
} from "../types";

export function findChain(chinName: TChainName) {
  if (!isChainSupported(chinName)) return undefined;
  return SUPPORTED_CHAINS[chinName as TChainName];
}

export function isChainSupported(chinName: TChainName): boolean {
  if (!chinName) return false;
  const chainNames = Object.keys(SUPPORTED_CHAINS);
  if (chainNames.includes(chinName)) return true;
  return false;
}

export function getChainSymbolFromName(
  chinName: TChainName,
): string | undefined {
  if (chinName) {
    return SUPPORTED_CHAINS[chinName].nativeCurrency.symbol;
  }
  return undefined;
}

export function getDomainToChainName(domain: number): TChainName | undefined {
  if (SupportedDomains.includes(domain)) {
    return DomainToChainNameTestnet[domain];
  }
  return undefined;
}

export function getLogoByChainName(chinName: TChainName): string {
  // console.log("getLogoByChainName:chinName", chinName)
  if (supportedChainnames.includes(chinName)) {
    return CHAIN_LOGOS[chinName];
  }
  return "";
}

export function getExplorerByChainName(chinName: TChainName): string {
  if (supportedChainnames.includes(chinName)) {
    return SUPPORTED_CHAINS[chinName]!.blockExplorers!.default.url;
  }
  return "";
}

export function getDestinationFee(coin: string) {
  const destFee: { [key: string]: number } = {
    ETH: 0.000000000003,
    AVAX: 0.0036,
    MATIC: 0.00025,
  };

  try {
    if (Object.keys(destFee).includes(coin)) {
      return destFee[coin];
    }
    return 0.001;
  } catch (error) {
    return 0.001;
  }
}

export function getOfficialChainName(chinName: TChainName): string {
  // console.log("getOfficialChainName:chinName", chinName)
  switch (chinName) {
    default:
      return SUPPORTED_CHAINS[chinName].name;
  }
}
