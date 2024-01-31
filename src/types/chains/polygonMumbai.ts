import {polygonMumbai as viemPolygonMumbai} from 'viem/chains';
import { TEmmetChain } from '.';

export const polygonMumbai = {
    ...viemPolygonMumbai,
    emmetBridge: {
        address: "0xff028e98431E4fB0b0CD79B0b0D2237254D5a74E",
        blockCreated: 45310404
    },
    emmetFeeOracle: {
        address: "0x874177F2854557a94347f5984FbC39954820beb0",
        blockCreated: 45306550
    },
    name: 'Polygon Mumbai',
    rpcUrls: {
        default: {
            http: ['https://rpc.ankr.com/polygon_mumbai'],
        },
        public: {
            http: ['https://rpc.ankr.com/polygon_mumbai'],
        }
    },
    testnet: true,
} as TEmmetChain;