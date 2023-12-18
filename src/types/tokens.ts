export const SUPPORTED_TOKENS = {
    DAI: {
        arbitrum:"",
        avalanche: "",
        base: "",
        goerli:"",
        linea:"",
        optimism:"",
        polygon:"",
        scroll:"",
    },
    ETH:{
        arbitrum:"",
        avalanche: "",
        base: "",
        goerli:"",
        linea:"",
        optimism:"",
        polygon:"",
        scroll:"",
    },
    USDC: {
        arbitrum:"0xfd064a18f3bf249cf1f87fc203e90d8f650f2d63",
        avalanche: "0x5425890298aed601595a70AB815c96711a31Bc65",
        base: "0xF175520C52418dfE19C8098071a252da48Cd1C19",
        goerli:"0x07865c6E87B9F70255377e024ace6630C1Eaa37F",
        linea:"",
        optimism:"0xe05606174bac4A6364B31bd0eCA4bf4dD368f8C6",
        polygon:"0x9999f7Fea5938fD3b1E26A12c3f2fb024e194f97",
        scroll:"",
    },
    USDT: {
        arbitrum:"",
        avalanche: "",
        base: "",
        goerli:"",
        linea:"",
        optimism:"",
        polygon:"",
        scroll:"",
    },
    WBTC: {
        arbitrum:"",
        avalanche: "",
        base: "",
        goerli:"",
        linea:"",
        optimism:"",
        polygon:"",
        scroll:"",
    }
}

export type TTokenName = keyof typeof SUPPORTED_TOKENS;

export const TOKEN_DECIMALS = {
    DAI: 18,
    USDC: 6,
    ETH: 18,
    USDT:18,
    WBTC:18

}