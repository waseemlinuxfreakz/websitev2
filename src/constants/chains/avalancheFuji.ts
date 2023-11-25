import {avalancheFuji as ViemChain} from 'viem/chains';
import {EmmetChain} from './chainTypes';

const workingRPC: string = 'https://api.avax-test.network/ext/bc/C/rpc';

const avalancheFuji: EmmetChain = {
    // Emmet.Finance fields:
    icon:'img/chain/avalanche.svg',
    // Common from viem:
    ...ViemChain,
    // Local variation:
    name:"Avalanche",
    rpcUrls:{
        default:{http:[workingRPC]},
        public:{http:[workingRPC]},
    }
}

export default avalancheFuji;