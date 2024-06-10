import {
  SUPPORTED_CHAINS,
  TChainDataParam,
  TChainName,
  TEmmetChain,
  DomainToChainName,
  SupportedDomains,
  supportedChainnames,
  CHAIN_LOGOS,
  DomainToChainNameTestnet,
} from "../types";

export function getChainData(
  chinName: TChainName,
  param: TChainDataParam,
): string | number | undefined {
  const chain = findChain(chinName);
  if (chain) {
    switch (param) {
      case "bridge":
        return chain.emmetBridge.address;
      case "icon":
        return CHAIN_LOGOS[chinName];
      case "url":
        return chain.rpcUrls.default.http[0];
      case "id":
        return chain.id;
      default:
        return undefined;
    }
  }
  return undefined;
}

export function findChain(chinName: TChainName): TEmmetChain | undefined {
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
