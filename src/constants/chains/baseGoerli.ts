import {baseGoerli as ViemChain} from 'viem/chains';
import {EmmetChain} from './chainTypes';

const workingRPC: string = 'https://goerli.base.org';

const baseGoerli: EmmetChain = {
    // Emmet.Finance fields:
    icon:'img/chain/base.svg',
    // Common from viem:
    ...ViemChain,
    // Local variation:
    name:"Base",
    rpcUrls:{
        default:{http:[workingRPC]},
        public:{http:[workingRPC]},
    }
}

export default baseGoerli;