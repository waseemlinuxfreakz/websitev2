import {
    arbitrumGoerli,
    avalancheFuji,
    baseGoerli,
    goerli,
    lineaTestnet,
    optimismGoerli,
    polygonMumbai,
    scrollSepolia,
} from 'viem/chains';
import type {Chain} from 'viem';

export type TEmmetChain = Chain & {
    bridge: string,
    icon: string
}

export type TChainDataParam = "bridge" | "icon" | "url" | "id";

export const SUPPORTED_CHAINS = {
    // Testnet
    arbitrum: {
        bridge:"",
        icon:"",
        ...arbitrumGoerli,
        name:"Arbitrum",
        rpcUrls:{
            default: {
                http:["https://arbitrum-goerli.blockpi.network/v1/rpc/public"]
            },
            public: {
                http:[
                    "https://arbitrum-goerli.public.blastapi.io",
                    "https://arb-goerli.g.alchemy.com/v2/demo",
                    "https://endpoints.omniatech.io/v1/arbitrum/goerli/public",
                    "https://arbitrum-goerli.blockpi.network/v1/rpc/public",
                    "https://rpc.goerli.arbitrum.gateway.fm",
                    "https://arbitrum-goerli.public.blastapi.io",
                ]
            }
        }
    },
    avalanche: {
        bridge:"0xbbbC5D74407Eb87D929b1eBA18ACbb95E11B219F",
        icon:"",
        ...avalancheFuji,
        name:"Avalanche",
        rpcUrls:{
            default: {
                http:["https://ava-testnet.public.blastapi.io/ext/bc/C/rpc"]
            },
            public: {
                http:[
                    "https://avalanche-fuji-c-chain.publicnode.com",
                    "https://ava-testnet.public.blastapi.io/ext/bc/C/rpc",
                    "https://avalanche-fuji.blockpi.network/v1/rpc/public",
                    "https://rpc.ankr.com/avalanche_fuji",
                    "https://endpoints.omniatech.io/v1/avax/fuji/public",
                    "https://api.avax-test.network/ext/bc/C/rpc",
                ]
            }
        }
    },
    base: {
        bridge:"",
        icon:"",
        ...baseGoerli,
        name:"Base",
        rpcUrls:{
            default: {
                http:["https://base-goerli.blockpi.network/v1/rpc/public"]
            },
            public: {
                http:[
                    "https://endpoints.omniatech.io/v1/base/goerli/public",
                    "https://base-goerli.blockpi.network/v1/rpc/public",
                    "https://goerli.base.org",
                    "https://gateway.tenderly.co/public/base-goerli",
                    "https://base-goerli.publicnode.com",
                    "https://goerli.base.org",
                ]
            }
        }
    },
    goerli: {
        bridge:"0x750B52c82596C7b6489C207b87adcf56Fe4a3ABe", // Temporary
        icon:"",
        ...goerli,
        name:"Goerli",
        rpcUrls:{
            default: {
                http:["https://rpc.goerli.eth.gateway.fm"]
            },
            public: {
                http:[
                    "https://rpc.goerli.eth.gateway.fm",
                    "https://ethereum-goerli.publicnode.com",
                    "https://eth-goerli.public.blastapi.io",
                    "https://rpc.ankr.com/eth_goerli",
                    "https://goerli.blockpi.network/v1/rpc/public",
                    "https://endpoints.omniatech.io/v1/eth/goerli/public",
                    "https://api.zan.top/node/v1/eth/goerli/public",
                    "https://eth-goerli.api.onfinality.io/public"
                ]
            }
        }
    },
    linea: {
        bridge:"",
        icon:"",
        ...lineaTestnet,
        name:"Linea",
        rpcUrls:{
            default: {
                http:["https://linea-goerli.blockpi.network/v1/rpc/public"]
            },
            public: {
                http:[
                    "https://linea-goerli.blockpi.network/v1/rpc/public",
                    "https://rpc.goerli.linea.build",
                ]
            }
        }
    },
    optimism: {
        bridge:"",
        icon:"",
        ...optimismGoerli,
        name:"Optimism",
        rpcUrls:{
            default: {
                http:["https://optimism-goerli.publicnode.com"]
            },
            public: {
                http:[
                    "https://optimism-goerli.public.blastapi.io",
                    "https://optimism-goerli.publicnode.com",
                    "https://goerli.optimism.io",
                    "https://gateway.tenderly.co/public/optimism-goerli",
                    "https://endpoints.omniatech.io/v1/op/goerli/public",
                    "https://optimism-goerli.blockpi.network/v1/rpc/public",
                ]
            }
        }
    },
    polygon: {
        bridge:"",
        icon:"",
        ...polygonMumbai,
        name:"Polygon",
        rpcUrls:{
            default: {
                http:["https://polygon-mumbai.blockpi.network/v1/rpc/public"]
            },
            public: {
                http:[
                    "https://polygon-mumbai.blockpi.network/v1/rpc/public",
                    "https://polygon-mumbai-pokt.nodies.app",
                    "https://polygon-mumbai.gateway.tenderly.co",
                    "https://polygon-testnet.public.blastapi.io",
                    "https://polygon-mumbai-bor.publicnode.com",
                    "https://endpoints.omniatech.io/v1/matic/mumbai/public",
                    "https://gateway.tenderly.co/public/polygon-mumbai"
                ]
            }
        }
    },
    scroll: {
        bridge:"",
        icon:"",
        ...scrollSepolia,
        name:"Scroll",
        rpcUrls:{
            default: {
                http:["https://scroll-sepolia.chainstacklabs.com"]
            },
            public: {
                http:["https://scroll-sepolia.chainstacklabs.com"]
            }
        }
    }
} as const;

export type TChainName = keyof typeof SUPPORTED_CHAINS;

export const CHAIN_ID_TO_NAME:{[key:number]:TChainName} = {
    543351:'scroll',
    80001:'polygon',
    420:'optimism',
    59140:'linea',
    5:'goerli',
    84531:'base',
    43113:'avalanche',
    421613:'arbitrum',
}

export const CHAIN_NAME_TO_ID: {[key in TChainName]: number} = {
    arbitrum: 421613,
    avalanche: 43113,
    base: 84531,
    goerli: 5,
    linea: 59140,
    optimism: 420,
    polygon: 80001,
    scroll: 543351,
}

export const ChainNameToTypeChainName: {[key:string]:TChainName} = {
    "Scroll":'scroll',
    "Polygon":'polygon',
    "Optimism":'optimism',
    "Linea":'linea',
    "Ethereum":'goerli',
    "BASE":'base',
    "Avalanche":'avalanche',
    "Arbitrum":'arbitrum'
}