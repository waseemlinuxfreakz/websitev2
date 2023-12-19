export const BridgeTokens = [
    {
      "cmc_id":1027,
      "name": "ETH",
      "icon": "img/coin/eth.svg",
      "price": 2062.25
    },
    // {
    //   "cmc_id":0,
    //   "name": "EMMET",
    //   "icon": "img/coin/emmet.svg",
    //   "price": 1
    // },
    // {
    //   "cmc_id":15489,
    //   "name": "SCRL",
    //   "icon": "img/coin/scoll.svg",
    //   "price": 0.000145
    // },
    // {
    //   "cmc_id":11840,
    //   "name": "OP",
    //   "icon": "img/coin/op.svg",
    //   "price": 1.73
    // },
    {
      "cmc_id":3408,
      "name": "USDC",
      "icon": "img/coin/usdc.svg",
      "price": 0.9998
    },
    // {
    //   "cmc_id":4943,
    //   "name": "DAI",
    //   "icon": "img/coin/dai.svg",
    //   "price": 1
    // },
    // {
    //   "cmc_id":825,
    //   "name": "USDT",
    //   "icon": "img/coin/usdt.svg",
    //   "price": 1
    // }
  ]

export const SUPPORTED_TOKENS = {
    // DAI: {
    //     arbitrum:"",
    //     avalanche: "",
    //     base: "",
    //     goerli:"",
    //     linea:"",
    //     optimism:"",
    //     polygon:"",
    //     scroll:"",
    // },
    // EMMET:{
    //     arbitrum:"",
    //     avalanche: "",
    //     base: "",
    //     goerli:"",
    //     linea:"",
    //     optimism:"",
    //     polygon:"",
    //     scroll:"",
    // },
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
    // USDT: {
    //     arbitrum:"",
    //     avalanche: "",
    //     base: "",
    //     goerli:"",
    //     linea:"",
    //     optimism:"",
    //     polygon:"",
    //     scroll:"",
    // },
    // WBTC: {
    //     arbitrum:"",
    //     avalanche: "",
    //     base: "",
    //     goerli:"",
    //     linea:"",
    //     optimism:"",
    //     polygon:"",
    //     scroll:"",
    // }
}

export type TTokenName = keyof typeof SUPPORTED_TOKENS;

export const TOKEN_DECIMALS = {
    // DAI: 18,
    // EMMET:18,
    ETH: 18,
    USDC: 6,
    // USDT:18,
    // WBTC:18

}