import React from 'react';
import { useAppSelector } from '../../../hooks/storage';
import { getDomainToChainName, getChainSymbolFromName } from '../../../utils';
import useGetTxValue from '../../../hooks/useGetTxValue'

function TransactionDetailsRight() {

    const explorer = useAppSelector(store => store.explorer);

    const bridgeFee = useGetTxValue(
        explorer.bridgeTransaction.bridgeHash,
        getDomainToChainName(explorer.bridgeTransaction.originalDomain)
    )

    return (
        <div className="transactionDetailsBox">
            <ul className="transactionDetailsList">
                <li className='transactionDetailsListItem'>
                    <div className="transactionDetailsListLeft">
                        Sent amount
                    </div>
                    <div className="transactionDetailsListRight">
                        {explorer.bridgeTransaction.amount / 1e6} {explorer.bridgeTransaction.symbol}
                    </div>
                </li>
                <li className='transactionDetailsListItem'>
                    <div className="transactionDetailsListLeft">
                        Received amount
                    </div>
                    <div className="transactionDetailsListRight">
                        {explorer.bridgeTransaction.amount / 1e6} {explorer.bridgeTransaction.symbol}
                    </div>
                </li>
                <li className='transactionDetailsListItem'>
                    <div className="transactionDetailsListLeft">
                        Bridge Fee
                    </div>
                    <div className="transactionDetailsListRight">
                        <div className="bridgeFee">
                            {bridgeFee}{' '}
                            {getChainSymbolFromName(getDomainToChainName(
                                explorer.bridgeTransaction.originalDomain
                            ))}
                            <span>= $0.5</span></div>
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
                        $ {explorer.bridgeTransaction.amount / 1e6}
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default TransactionDetailsRight;