import { 
    SUPPORTED_CHAINS, 
    TChainDataParam, 
    TChainName, 
    TEmmetChain, 
    DomainToChainName, 
    SupportedDomains, 
    supportedChainnames
} from "../types";

export function getChainData(chinName: TChainName, param: TChainDataParam):string | number | undefined {
    const chain = findChain(chinName);
    if(chain){
        switch(param){
            case "bridge":
                return chain.bridge;
            case "icon":
                return chain.icon;
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
    return SUPPORTED_CHAINS[chinName.toLocaleLowerCase() as TChainName];
}

export function isChainSupported(chinName: TChainName): boolean {
    if (!chinName) return false;
    const chainNames = Object.keys(SUPPORTED_CHAINS);
    if (chainNames.includes(chinName)) return true;
    return false;
}

export function getChainSymbolFromName(chinName: TChainName): string | undefined {
    if(chinName){
        return SUPPORTED_CHAINS[chinName].nativeCurrency.symbol;
    }
    return undefined;
}

export function getDomainToChainName(domain: number): TChainName | undefined {
    if(SupportedDomains.includes(domain)){
        return DomainToChainName[domain];
    }
    return undefined;
}

export function getLogoByChainName (chinName: TChainName): string {
    if(supportedChainnames.includes(chinName)){
        return SUPPORTED_CHAINS[chinName].icon;
    }
    return '';
}

export function getExplorerByChainName(chinName: TChainName): string {
    if(supportedChainnames.includes(chinName)){
        return SUPPORTED_CHAINS[chinName].blockExplorers.default.url;
    }
    return '';
}

export function getDestinationFee(coin:string){

    const originalFee: {[key:string]: number} = {
        'ETH': 0.000000000003,
        'AVAX': 0.0036
    }

    try {
        return originalFee[coin];
    } catch (error) {
        return 0.001;
    }
}