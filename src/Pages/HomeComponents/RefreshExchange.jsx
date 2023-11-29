import React, {useEffect, useState} from 'react';
import Refresh from '../../assets/img/Swap-gray.svg';
import coins from './coins.json';

function RefreshExchange({fromToken, toToken}) {

    const [fromPrice, setFromPrice] = useState(0);
    const [toPrice, setToPrice] = useState(0);

    useEffect(() => {
        console.log(fromToken, toToken)
        // if(fromToken && toToken){
        //     setFromPrice((coins.find(t => t.name === 'fromToken')).price);
        //     setToPrice((coins.find(t => t.name === 'toToken')).price);
        // }
        // console.log("fromPrice", fromPrice, "toPrice", toPrice)
    }, [fromToken, toToken]);

    

    return ( 
        <div className="refreshWallet">
            <div className="refreshLet">
                1 {fromToken} = 1964.86 {toToken}
            </div>
            <div className="refreshRight">
                <button 
                    className='refReshBtn'
                    onClick={()=> {}}
                >
                    <img src={Refresh} alt="Refresh" />
                    </button>
            </div>
        </div>
     );
}

export default RefreshExchange;