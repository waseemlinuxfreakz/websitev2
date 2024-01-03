import React from 'react';
import { useAppSelector } from '../../../hooks/storage';
import { DomainToChainName } from '../../../types'
import { getDomainToChainName, getChainSymbolFromName} from '../../../utils';

function TransactionDetailsRight() {

    const explorer = useAppSelector(store => store.explorer);

    let destChainName;
    let originChainName;

    if(explorer.bridgeTransaction.destinationDomain != -1){
        destChainName = DomainToChainName[explorer.bridgeTransaction.destinationDomain];
    }

    if(explorer.bridgeTransaction.originalDomain != -1){
        originChainName = DomainToChainName[explorer.bridgeTransaction.originalDomain];
    }

    return ( 
        <div className="transactionDetailsBox">
            <ul className="transactionDetailsList">
                <li className='transactionDetailsListItem'>
                    <div className="transactionDetailsListLeft">
                        Sent amount
                    </div>
                    <div className="transactionDetailsListRight">
                        {explorer.bridgeTransaction.sent} {explorer.bridgeTransaction.symbol}
                    </div>
                </li>
                <li className='transactionDetailsListItem'>
                    <div className="transactionDetailsListLeft">
                        Received amount
                    </div>
                    <div className="transactionDetailsListRight">
                        {explorer.bridgeTransaction.received} {explorer.bridgeTransaction.symbol}
                    </div>
                </li>
                <li className='transactionDetailsListItem'>
                    <div className="transactionDetailsListLeft">
                        Bridge Fee
                    </div>
                    <div className="transactionDetailsListRight">
                        <div className="bridgeFee">10 EMMET <span>= $0.5</span></div>
                    </div>
                </li>
                <li className='transactionDetailsListItem'>
                    <div className="transactionDetailsListLeft">
                        Origin Fee
                    </div>
                    <div className="transactionDetailsListRight">
                        {explorer.bridgeTransaction.originFee}{' '}
                        {getChainSymbolFromName(getDomainToChainName(
                            explorer.bridgeTransaction.originalDomain
                        ))}
                    </div>
                </li>
                <li className='transactionDetailsListItem'>
                    <div className="transactionDetailsListLeft">
                        Destination Fee
                    </div>
                    <div className="transactionDetailsListRight">
                        {explorer.bridgeTransaction.destinationFee}{' '}
                        {getChainSymbolFromName(getDomainToChainName(
                            explorer.bridgeTransaction.destinationDomain
                        ))}
                    </div>
                </li>
                <li className='transactionDetailsListItem'>
                    <div className="transactionDetailsListLeft">
                        Value
                    </div>
                    <div className="transactionDetailsListRight">
                        ${explorer.bridgeTransaction.received}
                    </div>
                </li>
            </ul>
        </div>
     );
}

export default TransactionDetailsRight;