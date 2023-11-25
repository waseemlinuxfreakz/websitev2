import {polygonMumbai as ViemChain} from 'viem/chains';
import {EmmetChain} from './chainTypes';

const workingRPC: string = 'https://rpc.ankr.com/polygon_mumbai';

const polygonMumbai: EmmetChain = {
    // Emmet.Finance fields:
    icon:'img/chain/polygon.svg',
    // Common from viem:
    ...ViemChain,
    // Local variation:
    name:"Polygon",
    rpcUrls:{
        default:{http:[workingRPC]},
        public:{http:[workingRPC]},
    }
}

export default polygonMumbai;