import React from "react";
import { useAppSelector } from "../../../hooks/storage";
import { getChainSymbolFromName, removeTrailingZeroes } from "../../../utils";
import { CHAIN_ID_TO_NAME, TOKEN_DECIMALS, TOKEN_SYMBOL_TO_TOKEN } from "../../../types";

function TransactionDetailsRight() {
  const explorer = useAppSelector((store) => store.explorer);

  return (
    <div className="transactionDetailsBox">
      <ul className="transactionDetailsList">
        <li className="transactionDetailsListItem">
          <div className="transactionDetailsListLeft">Sent amount</div>
          <div className="transactionDetailsListRight">
            {/* If amount < 2,000 then fixed fee $0.4, else 0.02% of the amount */}
            {removeTrailingZeroes(
              Number(explorer.bridgeTransaction.amount) /
                10 ** TOKEN_DECIMALS[explorer.bridgeTransaction.fromToken],
            )}{" "}
            {TOKEN_SYMBOL_TO_TOKEN[explorer.bridgeTransaction.fromToken]}
          </div>
        </li>
        <li className="transactionDetailsListItem">
          <div className="transactionDetailsListLeft">Received amount</div>
          <div className="transactionDetailsListRight">
            {removeTrailingZeroes(
              Number(explorer.bridgeTransaction.amount) /
                10 ** TOKEN_DECIMALS[explorer.bridgeTransaction.toToken],
            )}{" "}
            {TOKEN_SYMBOL_TO_TOKEN[explorer.bridgeTransaction.toToken]}
          </div>
        </li>
        <li className="transactionDetailsListItem">
          <div className="transactionDetailsListLeft">Protocol Fee</div>
          <div className="transactionDetailsListRight">
            <div className="bridgeFee">
              {removeTrailingZeroes(
                Number(explorer.bridgeTransaction.protocolFee) /
                  10 ** TOKEN_DECIMALS[explorer.bridgeTransaction.fromToken],
              )}{" "}
              {TOKEN_SYMBOL_TO_TOKEN[explorer.bridgeTransaction.fromToken]}
            </div>
          </div>
        </li>
        <li className="transactionDetailsListItem">
          <div className="transactionDetailsListLeft">Origin Fee</div>
          <div className="transactionDetailsListRight">
            {explorer.bridgeTransaction.fromChainFees
              ? Number(explorer.bridgeTransaction.fromChainFees) /
                10 **
                  TOKEN_DECIMALS[
                    getChainSymbolFromName(
                      CHAIN_ID_TO_NAME[explorer.bridgeTransaction.fromChainId],
                    )
                  ]
              : 0}{" "}
            {getChainSymbolFromName(
              CHAIN_ID_TO_NAME[explorer.bridgeTransaction.fromChainId],
            )}
          </div>
        </li>
        <li className="transactionDetailsListItem">
          <div className="transactionDetailsListLeft">Destination Fee</div>
          <div className="transactionDetailsListRight">
            {explorer.bridgeTransaction.targetChainFees
              ? Number(explorer.bridgeTransaction.targetChainFees) /
                10 **
                  TOKEN_DECIMALS[
                    getChainSymbolFromName(
                      CHAIN_ID_TO_NAME[explorer.bridgeTransaction.toChainId],
                    )
                  ]
              : 0}{" "}
            {getChainSymbolFromName(
              CHAIN_ID_TO_NAME[explorer.bridgeTransaction.toChainId],
            )}
          </div>
        </li>
        <li className="transactionDetailsListItem">
          <div className="transactionDetailsListLeft">Value Received</div>
          <div className="transactionDetailsListRight">
            ${" "}
            {explorer.bridgeTransaction.amount
              ? Number(explorer.bridgeTransaction.amount) /
                10 ** Number(TOKEN_DECIMALS[explorer.bridgeTransaction.toToken])
              : 0}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default TransactionDetailsRight;
