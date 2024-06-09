import React, { useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { useNavigate } from "react-router-dom";
import useExplorerTransactions from "../../../hooks/useExplorerTransactions";
import {
  getLogoByChainName,
  getOfficialChainName,
  getTimeLength,
  restoreOriginalSumSent,
  unpackDateTime,
  removeTrailingZeroes,
} from "../../../utils";
import { CHAIN_ID_TO_NAME, columns, ROWS_PER_PAGE } from "../../../types";

const DatatablePage = () => {
  const navigate = useNavigate();

  const { txs, refresh } = useExplorerTransactions(1);

  const rows =
    txs &&
    txs.map((Tx) => {
      return {
        clickEvent: () => navigate(`/transactionDetails/${Tx.nonce}`),
        TxnType: `<span class="${"transfer"}">${"Transfer"}</span>`,
        TxnHash: `<span class="textOnly">${Tx.originalHash.slice(
          0,
          6
        )}...${Tx.originalHash.slice(-4)}</span>`,
        Originchain: `<div class="chainCell"><img src="${getLogoByChainName(
          CHAIN_ID_TO_NAME[Tx.fromChainId]
        )}" alt="From Chain Logo" width="25px"/> ${getOfficialChainName(
          CHAIN_ID_TO_NAME[Tx.fromChainId]
        )}</div>`,
        Destination: `<div class="chainCell"><img src="${getLogoByChainName(
          CHAIN_ID_TO_NAME[Tx.toChainId]
        )}" alt="To Chain Logo" width="25px"/> ${getOfficialChainName(
          CHAIN_ID_TO_NAME[Tx.toChainId]
        )}</div>`,
        Sent: `<span class="textCell">${removeTrailingZeroes(
          restoreOriginalSumSent(Number(Tx.amount.toString()))
        )} ${Tx.fromToken}</span>`,
        Received: `<span class="textCell">${Tx.amount} ${Tx.toToken}</span>`,
        // Age: `<span class="textCell">${unpackDateTime(
        //   getTimeLength(Tx.Time, new Date())
        // )}</span>`,
        TxnStatus: `<span class="${
          Tx.destinationHash ? "success" : "failed"
        }"><img src="img/explorer/${
          Tx.destinationHash ? "Success" : "Failed"
        }.svg" alt="${Tx.destinationHash ? "Success" : "Failed"}" /> ${
          Tx.destinationHash ? "Success" : "Failed"
        }</span>`,
      };
    });

  // Helper function to create a React element from HTML string
  const createMarkup = (htmlString) => ({ __html: htmlString });

  return (
    <div className="explorerTransactionsTable">
      <div className="transactionTable">
        <MDBDataTable
          data={{
            columns: columns,
            rows: rows.map((row) => ({
              ...row,
              TxnType: (
                <div dangerouslySetInnerHTML={createMarkup(row.TxnType)} />
              ),
              TxnHash: (
                <div dangerouslySetInnerHTML={createMarkup(row.TxnHash)} />
              ),
              Originchain: (
                <div dangerouslySetInnerHTML={createMarkup(row.Originchain)} />
              ),
              Destination: (
                <div dangerouslySetInnerHTML={createMarkup(row.Destination)} />
              ),
              Sent: <div dangerouslySetInnerHTML={createMarkup(row.Sent)} />,
              Received: (
                <div dangerouslySetInnerHTML={createMarkup(row.Received)} />
              ),
              // Age: <div dangerouslySetInnerHTML={createMarkup(row.Age)} />,
              TxnStatus: (
                <div dangerouslySetInnerHTML={createMarkup(row.TxnStatus)} />
              ),
            })),
          }}
          paging={true}
          entries={ROWS_PER_PAGE}
        />
      </div>
    </div>
  );
};

export default DatatablePage;
