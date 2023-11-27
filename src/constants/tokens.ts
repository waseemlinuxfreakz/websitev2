import { SupportedChainId } from './chains';

export enum SupportedTokenNames {
    DAI = "DAI",
    EMMET = "EMMET",
    ETH = "ETH",
    OP = 'Op',
    Scroll = "Scroll",
    USDC = "USDC",
    USDT = "USDT",
}

export const DAI_ADDRESSES = {
    // Mainnet:
    // TODO
    // Testnet:
    [SupportedChainId.ARB_GOERLI]: "",
    [SupportedChainId.AVAX_FUJI]: "",
    [SupportedChainId.BASE_GOERLI]: "0x45eAFd5844DCb7CEdF04158C71FaAb0D4380814d",
    [SupportedChainId.ETH_GOERLI]: "0x3fcc5C26fAd6B8fC9461E1d6f920A3C96F15f40a",
    [SupportedChainId.POL_MUMABI]: "0xD55C04E15B9808bf3e561367D12f3B2dfAA55d48",
}

export const EMMET_ADDRESSES = {
    // Mainnet:
    // TODO
    // Testnet:
    [SupportedChainId.ARB_GOERLI]: "",
    [SupportedChainId.AVAX_FUJI]: "",
    [SupportedChainId.BASE_GOERLI]: "0xc03B1253770a34289f8Aa44b694b190dF9bb69b8",
    [SupportedChainId.ETH_GOERLI]: "0x7bded531A4b7aB53787a9502B3748A606AA39AE2",
    [SupportedChainId.POL_MUMABI]: "0x1cb446f077e484E20Dfe4da22Da0De3c160dD51a",
}

export const ETH_ADDRESSES = {
    // Mainnet:
    // TODO
    // Testnet:
    [SupportedChainId.ARB_GOERLI]: "",
    [SupportedChainId.AVAX_FUJI]: "",
    [SupportedChainId.BASE_GOERLI]: "0xb4F82A7ba63AD72b3a0E1DE9cf604B69783dCEc0",
    [SupportedChainId.ETH_GOERLI]: "",
    [SupportedChainId.POL_MUMABI]: "0xeC3f5eE48d8F592d57cFF674885AdF82BeE02cF7",
}

export const OP_ADDRESSES = {
    // Mainnet:
    // TODO
    // Testnet:
    [SupportedChainId.ARB_GOERLI]: "",
    [SupportedChainId.AVAX_FUJI]: "",
    [SupportedChainId.BASE_GOERLI]: "",
    [SupportedChainId.ETH_GOERLI]: "",
    [SupportedChainId.POL_MUMABI]: "",
}

export const SCROLL_ADDRESSES = {
    // Mainnet:
    // TODO
    // Testnet:
    [SupportedChainId.ARB_GOERLI]: "",
    [SupportedChainId.AVAX_FUJI]: "",
    [SupportedChainId.BASE_GOERLI]: "",
    [SupportedChainId.ETH_GOERLI]: "",
    [SupportedChainId.POL_MUMABI]: "",
}

export const USDC_ADDRESSES = {
    // Mainnet:
    // TODO
    // Testnet:
    [SupportedChainId.ARB_GOERLI]: "",
    [SupportedChainId.AVAX_FUJI]: "",
    [SupportedChainId.BASE_GOERLI]: "",
    [SupportedChainId.ETH_GOERLI]: "",
    [SupportedChainId.POL_MUMABI]: "",
}

export const USDT_ADDRESSES = {
    // Mainnet:
    // TODO
    // Testnet:
    [SupportedChainId.ARB_GOERLI]: "",
    [SupportedChainId.AVAX_FUJI]: "",
    [SupportedChainId.BASE_GOERLI]: "0x29fb9F83290eAD77Ca4fa4A8491c1065b46b2e6E",
    [SupportedChainId.ETH_GOERLI]: "0x291E558C60FB567087D9b87bd62b84Af67b9a376",
    [SupportedChainId.POL_MUMABI]: "0xB44e023C1ec38ee5E4205A3AA07671aF9cF3Cb01",
}


export const SUPPORTED_TOKENS: {[key:string]:{[key:number]:string}} = {
    [SupportedTokenNames.DAI]: DAI_ADDRESSES,
    [SupportedTokenNames.EMMET]: EMMET_ADDRESSES,
    [SupportedTokenNames.ETH]: ETH_ADDRESSES,
    [SupportedTokenNames.OP]: OP_ADDRESSES,
    [SupportedTokenNames.Scroll]: SCROLL_ADDRESSES,
    [SupportedTokenNames.USDT]: USDT_ADDRESSES,
    [SupportedTokenNames.USDC]: USDC_ADDRESSES,
}

export const getTokenAddress = (chainId: SupportedChainId, tokenName: SupportedTokenNames) => {
    try {
        const address = SUPPORTED_TOKENS[tokenName][chainId];
        return address ? address : '';
    } catch (error) {
        return '';
    }
    
}