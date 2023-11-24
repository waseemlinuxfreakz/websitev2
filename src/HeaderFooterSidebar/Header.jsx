import React from 'react';
import { Link } from 'react-router-dom';
import EthereumTop from '../assets/img/Ethereum-top.svg';
import ConnectWallet from './ConnectWallet';

function Header() {
    return ( 
        <header id='header'>
            <div className="container">
                <div className="headerNave">
                    <h1 className="siteTitle">Swap</h1>
                    <div className="headerRightSide">
                        <div className="EthereumTop">
                            <a href="#"><img src={EthereumTop} alt="" /></a>
                        </div>
                        <ConnectWallet/>
                    </div>
                </div>
            </div>
        </header>
     );
}

export default Header;