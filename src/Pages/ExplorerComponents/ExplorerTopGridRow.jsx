import React from 'react';
import './ExplorerTopGrid/ExplorerTopGrid.css';
import useExplorerStats from '../../hooks/useExplorerStats'

function ExplorerTopGridRow() {

    const { txCount, uniqueAddresses, ttlTransactions, ttlAmount } = useExplorerStats();


    return (
        <div className="explorereTopRow">
            <div className="row">
                <div className="col-xl-3">
                    <div className="ExplorerBoxGray valueBox">
                        <p>Total Volume</p>
                        <h3>$ {ttlAmount}</h3>
                    </div>
                </div>
                <div className="col-xl-3">
                    <div className="ExplorerBoxGray feesBox">
                        <p>Fees</p>
                        <h3>$ {Number(ttlTransactions * 0.6).toFixed(2)}</h3>
                    </div>
                </div>
                <div className="col-xl-3">
                    <div className="ExplorerBoxGray Totaltransactions">
                        <p>Total transactions</p>
                        <h3>{ttlTransactions}</h3>
                    </div>
                </div>
                <div className="col-xl-3">
                    <div className="ExplorerBoxGray addressBox">
                        <p>Unique Addresses</p>
                        <h3>{uniqueAddresses}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExplorerTopGridRow;