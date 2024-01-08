import React from 'react';
import { useAppSelector } from '../../../hooks/storage';
import { getDomainToChainName, getChainSymbolFromName } from '../../../utils';
import useGetTxValue from '../../../hooks/useGetTxValue'

function TransactionDetailsRight({fromFee, toFee}) {

    const explorer = useAppSelector(store => store.explorer);

    const bridgeFee = useGetTxValue(
        explorer.bridgeTransaction.burnHash,
        getDomainToChainName(explorer.bridgeTransaction.originalDomain)
    )

    function decimals () {
        switch(explorer.bridgeTransaction.symbol){
            case 'USDC':
                return 1e6;
            default:
                return 1e18;
        }
    }

    return (
        <div className="transactionDetailsBox">
            <ul className="transactionDetailsList">
                <li className='transactionDetailsListItem'>
                    <div className="transactionDetailsListLeft">
                        Sent amount
                    </div>
                    <div className="transactionDetailsListRight">
                        {explorer.bridgeTransaction.amount / decimals()} {explorer.bridgeTransaction.symbol}
                    </div>
                </li>
                <li className='transactionDetailsListItem'>
                    <div className="transactionDetailsListLeft">
                        Received amount
                    </div>
                    <div className="transactionDetailsListRight">
                        {explorer.bridgeTransaction.amount / decimals()} {explorer.bridgeTransaction.symbol}
                    </div>
                </li>
                <li className='transactionDetailsListItem'>
                    <div className="transactionDetailsListLeft">
                        Bridge Fee
                    </div>
                    <div className="transactionDetailsListRight">
                        <div className="bridgeFee">
                            {bridgeFee && `${bridgeFee / 1e18}`.slice(0, 10)}{' '}
                            {getChainSymbolFromName(getDomainToChainName(
                                explorer.bridgeTransaction.originalDomain
                            ))}
                            <span>{` = $ ${0.5}`}</span></div>
                    </div>
                </li>
                <li className='transactionDetailsListItem'>
                    <div className="transactionDetailsListLeft">
                        Origin Fee
                    </div>
                    <div className="transactionDetailsListRight">
                        {fromFee && fromFee}{' '}
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
                        {toFee && toFee}{' '}
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
                        $ {explorer.bridgeTransaction.amount / decimals()}
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default TransactionDetailsRight;