export const BridgeTokens = [
  // {
  //   "cmc_id": 20641,
  //   "name": "EURC",
  //   "icon": "img/coin/eurc.svg",
  //   "price": 2062.25
  // },
  {
    cmc_id: 3408,
    name: "USDC",
    icon: "img/coin/usdc.svg",
    price: 0.9998,
  },
  {
    cmc_id: 11419,
    name: "TON",
    icon: "img/chain/ton.svg",
    price: 5.09,
  },
  // {
  //   cmc_id: 1027,
  //   name: "ETH",
  //   icon: "img/coin/eth.svg",
  //   price: 2062.25,
  // },
  {
    "cmc_id":0,
    "name": "EMMET",
    "icon": "img/coin/emmet.svg",
    "price": 1
  },
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
  // {
  //   cmc_id: 4943,
  //   name: "DAI",
  //   icon: "img/coin/dai.svg",
  //   price: 1,
  // },
  // {
  //   "cmc_id":825,
  //   "name": "USDT",
  //   "icon": "img/coin/usdt.svg",
  //   "price": 1
  // }
  {
    cmc_id: 26960,
    name: "GrabClub",
    icon: "img/coin/grabclub.png",
    price: 1,
  },
  // {
  //   cmc_id: 26960,
  //   name: "TRT",
  //   icon: "img/coin/testRED.svg",
  //   price: 1,
  // },
  // {
  //   cmc_id: 26961,
  //   name: "$CAVI",
  //   icon: "img/coin/cavi.png",
  //   price: 1,
  // },
];

export const CHAIN_TO_TOKENS: {[key:string]: string[]} = {
  // Mainnets
  Avalanche: ["USDC", "EMMET"],
  Polygon: ["USDC", "EMMET", "GrabClub", "TON"],
  TON: ["TON", "GrabClub"],
  // Testnets
};

export type TSupportedChain = keyof typeof CHAIN_TO_TOKENS;

export const CHAIN_TO_TOKENS_TREE: {[key:TSupportedChain]:{
  [key:TSupportedChain]: string[]
}} = {
  // Mainnets
  Avalanche: {
    Avalanche: [],
    Polygon: ["USDC", "EMMET"],
    TON: [],
  },
  Polygon: {
    Avalanche: ["USDC", "EMMET"],
    Polygon: [],
    TON: ["TON", "GrabClub"],
  },
  TON: {
    Avalanche: [],
    Polygon: ["TON", "GrabClub"],
    TON: [],
  },
};

export const TOKEN_TO_TOKEN = {
  GrabClub: ["GrabClub"],
  EMMET: ["EMMET"],
  TON: ["TON"],
  USDC: ["USDC"]
}

export const TOKEN_DECIMALS = {
  DAI: 18,
  EMMET: 18,
  EURC: 6,
  ETH: 18,
  USDC: 6,
  TON: 9,
  MATIC: 18,
  USDT: 18,
  WBTC: 18,
  GrabClub: 18,
  TRT: 9,
  $CAVI: 9,
  BERA: 18,
};

export type TTokenName = keyof typeof TOKEN_DECIMALS;

export const TOKEN_SYMBOL_TO_TOKEN = {
  USDC: "USDC",
  DAI: "DAI",
  TON: "TON",
  EMMET: "EMMET",
  ETH: "ETH",
  MATIC: "MATIC",
  USDT: "USDT",
  GrabClub: "GrabClub",
  TRT: "TestRED",
  $CAVI: "CAVI",
  BERA: "BERA",
};
