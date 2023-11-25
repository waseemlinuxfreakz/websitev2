import {arbitrumGoerli as ViemAG} from 'viem/chains';
import {EmmetChain} from './chainTypes';

const workingRPC: string = 'https://goerli-rollup.arbitrum.io/rpc';

const arbitrumGoerli: EmmetChain = {
    // Emmet.Finance fields:
    icon:'img/chain/arbitrum.svg',
    // Common from viem:
    ...ViemAG,
    // Local variation:
    name:"Arbitrum",
    rpcUrls:{
        default:{http:[workingRPC]},
        public:{http:[workingRPC]},
    }
}

export default arbitrumGoerli;