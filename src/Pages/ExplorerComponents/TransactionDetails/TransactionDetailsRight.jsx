import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks/storage";
import { getChainSymbolFromName, removeTrailingZeroes } from "../../../utils";
import {
  CHAIN_ID_TO_NAME,
  TOKEN_DECIMALS,
  TOKEN_SYMBOL_TO_TOKEN,
  ChainToDestinationDomain,
} from "../../../types";
import { chainFactoryTestnet } from "../../../store/chainFactory";
import { Chain } from "emmet.js/dist/factory/types";

function TransactionDetailsRight() {
  const explorer = useAppSelector((store) => store.explorer);
  const [valueReceived, setValueReceived] = useState(0);

  useEffect(() => {
    (async () => {
      if (explorer.bridgeTransaction.fromChainId) {
        try {
          setValueReceived(0);
          const handler = await chainFactoryTestnet.inner(
            ChainToDestinationDomain[
              CHAIN_ID_TO_NAME[explorer.bridgeTransaction.fromChainId]
            ],
          );

          const tokenPrice = await handler.getTokenPrice(
            explorer.bridgeTransaction.fromToken,
          );
          const tokenPriceDecimals = await handler.getPriceDecimals(
            explorer.bridgeTransaction.fromToken,
          );

          const _valueReceived =
            (explorer.bridgeTransaction.receivedAmount * Number(tokenPrice)) /
            10 **
              (TOKEN_DECIMALS[explorer.bridgeTransaction.fromToken] +
                Number(tokenPriceDecimals));

          setValueReceived(removeTrailingZeroes(_valueReceived));
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, [explorer.bridgeTransaction]);

  return (
    <div className="transactionDetailsBox">
      <ul className="transactionDetailsList">
        <li className="transactionDetailsListItem">
          <div className="transactionDetailsListLeft">Sent amount</div>
          <div className="transactionDetailsListRight">
            {/* If amount < 2,000 then fixed fee $0.4, else 0.02% of the amount */}
            {removeTrailingZeroes(
              Number(explorer.bridgeTransaction.sentAmount) /
                10 ** TOKEN_DECIMALS[explorer.bridgeTransaction.fromToken],
            )}{" "}
            {TOKEN_SYMBOL_TO_TOKEN[explorer.bridgeTransaction.fromToken]}
          </div>
        </li>
        <li className="transactionDetailsListItem">
          <div className="transactionDetailsListLeft">Received amount</div>
          <div className="transactionDetailsListRight">
            {removeTrailingZeroes(
              Number(explorer.bridgeTransaction.receivedAmount) /
                10 ** TOKEN_DECIMALS[explorer.bridgeTransaction.toToken],
            )}{" "}
            {TOKEN_SYMBOL_TO_TOKEN[explorer.bridgeTransaction.toToken]}
          </div>
        </li>
        <li className="transactionDetailsListItem">
          <div className="transactionDetailsListLeft">Protocol Fee</div>
          <div className="transactionDetailsListRight">
            <div className="bridgeFee">
              {explorer.bridgeTransaction.protocolFee
                ? Number(explorer.bridgeTransaction.protocolFee) /
                  10 **
                    TOKEN_DECIMALS[
                      getChainSymbolFromName(
                        CHAIN_ID_TO_NAME[
                          explorer.bridgeTransaction.fromChainId
                        ],
                      )
                    ]
                : 0}{" "}
              {getChainSymbolFromName(
                CHAIN_ID_TO_NAME[explorer.bridgeTransaction.fromChainId],
              )}
            </div>
          </div>
        </li>
        <li className="transactionDetailsListItem">
          <div className="transactionDetailsListLeft">Origin Fee</div>
          <div className="transactionDetailsListRight">
            {explorer.bridgeTransaction.fromChainId === Chain.TON
              ? 0.45
              : explorer.bridgeTransaction.fromChainFees
                ? Number(explorer.bridgeTransaction.fromChainFees) /
                  10 **
                    TOKEN_DECIMALS[
                      getChainSymbolFromName(
                        CHAIN_ID_TO_NAME[
                          explorer.bridgeTransaction.fromChainId
                        ],
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
            {explorer.bridgeTransaction.toChainId === Chain.TON
              ? 0.45
              : explorer.bridgeTransaction.targetChainFees
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
          <div className="transactionDetailsListRight">${valueReceived}</div>
        </li>
      </ul>
    </div>
  );
}

export default TransactionDetailsRight;
