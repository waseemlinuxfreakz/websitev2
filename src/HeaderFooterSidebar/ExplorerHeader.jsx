
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import ConnectWallet from './ConnectWallet';
import  ConnectionIndicator from './ConnectionIndicator';
import ExplorerHeaderSearch from './ExplorerHeaderSearch';


function ExplorerHeader() {
    return ( 
        <header id='header'>
            <div className="container">
                <div className="headerNave">
                    <h1 className="siteTitle">Explorer</h1>
                    <ExplorerHeaderSearch/>
                    <div className="headerRightSide">
                        <ConnectionIndicator/>
                        <ConnectWallet/>
                    </div>
                </div>
            </div>
        </header>
     );
}

export default ExplorerHeader;
