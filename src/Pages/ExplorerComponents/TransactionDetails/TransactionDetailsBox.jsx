import React, { useEffect } from 'react';
import TransactionDetailsLeft from './TransactionDetailsLeft';
import TransactionDetailsRight from './TransactionDetailsRight';
import { useAppSelector } from '../../../hooks/storage';
import useBridgingFee from '../../../hooks/useBridgingFee';
import { getDomainToChainName } from '../../../utils';

export default function TransactionDetailsArea() {

    // Bridge transaction
    const btx = useAppSelector(store => store.explorer.bridgeTransaction);

    const { fromFee, toFee, status } = useBridgingFee(
        btx.burnHash,
        getDomainToChainName(btx.originalDomain),
        btx.claimHash,
        getDomainToChainName(btx.destinationDomain)
    );

    return ( 
        <div className="transactionDetailsArea">
            <div className="row">
                <div className="col-lg-6">
                    <TransactionDetailsLeft
                        txStatus={status}
                    />
                </div>
                <div className="col-lg-6">
                    <TransactionDetailsRight
                        fromFee={fromFee}
                        toFee={toFee}
                    />
                </div>
            </div>
        </div>
     );
}