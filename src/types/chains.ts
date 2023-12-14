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
                http:["https://endpoints.omniatech.io/v1/arbitrum/goerli/public"]
            },
            public: {
                http:["https://endpoints.omniatech.io/v1/arbitrum/goerli/public"]
            }
        }
    },
    avalanche: {
        bridge:"",
        icon:"",
        ...avalancheFuji,
        name:"Avalanche",
        rpcUrls:{
            default: {
                http:["https://rpc.ankr.com/avalanche_fuji"]
            },
            public: {
                http:["https://rpc.ankr.com/avalanche_fuji"]
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
                http:["https://base-goerli.blockpi.network/v1/rpc/public"]
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
                http:["https://eth-goerli.public.blastapi.io"]
            },
            public: {
                http:["https://eth-goerli.public.blastapi.io"]
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
                http:["https://linea-goerli.blockpi.network/v1/rpc/public"]
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
                http:["https://optimism-goerli.publicnode.com"]
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
                http:["https://polygon-mumbai-pokt.nodies.app"]
            },
            public: {
                http:["https://polygon-mumbai-pokt.nodies.app"]
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
    "Base":'base',
    "Avalanche":'avalanche',
    "Arbitrum":'arbitrum'
}