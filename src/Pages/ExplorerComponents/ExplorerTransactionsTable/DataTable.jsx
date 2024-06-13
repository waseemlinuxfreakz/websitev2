import React, { useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { useNavigate } from "react-router-dom";
import useExplorerTransactions from "../../../hooks/useExplorerTransactions";
import {
  getLogoByChainName,
  getOfficialChainName,
  removeTrailingZeroes,
} from "../../../utils";
import {
  CHAIN_ID_TO_NAME,
  columns,
  ROWS_PER_PAGE,
  TOKEN_DECIMALS,
  TOKEN_SYMBOL_TO_TOKEN,
} from "../../../types";
import { getTimeLength, unpackDateTime } from "../../../utils";

const DatatablePage = () => {
  const navigate = useNavigate();

  const { txs } = useExplorerTransactions(1);

  const rows =
    txs &&
    txs.map((Tx) => {
      return {
        clickEvent: () => navigate(`/transactionDetails/${Tx.txHash}`),
        TxnType: `<span class="${"transfer"}">${"Transfer"}</span>`,
        TxnHash: `<span class="textOnly">${Tx.txHash.slice(
          0,
          6,
        )}...${Tx.originalHash.slice(-4)}</span>`,
        Originchain: `<div class="chainCell"><img src="${getLogoByChainName(
          CHAIN_ID_TO_NAME[Tx.fromChainId],
        )}" alt="From Chain Logo" width="25px"/> ${getOfficialChainName(
          CHAIN_ID_TO_NAME[Tx.fromChainId],
        )}</div>`,
        Destination: `<div class="chainCell"><img src="${getLogoByChainName(
          CHAIN_ID_TO_NAME[Tx.toChainId],
        )}" alt="To Chain Logo" width="25px"/> ${getOfficialChainName(
          CHAIN_ID_TO_NAME[Tx.toChainId],
        )}</div>`,
        Sent: `<span class="textCell">${removeTrailingZeroes(
          Number(Tx.amount.toString()) / 10 ** TOKEN_DECIMALS[Tx.fromToken],
        )} ${TOKEN_SYMBOL_TO_TOKEN[Tx.fromToken]}</span>`,
        Received: `<span class="textCell">${removeTrailingZeroes(
          Number(Tx.amount.toString()) / 10 ** TOKEN_DECIMALS[Tx.fromToken],
        )} ${TOKEN_SYMBOL_TO_TOKEN[Tx.toToken]}</span>`,
        Age: `<span class="textCell">${unpackDateTime(
          getTimeLength(Tx.started.toString(), Date.now().toString()),
        )}</span>`,
        TxnStatus: `<span class="${
          Tx.destinationHash ? "success" : "failed"
        }"><img src="img/explorer/${
          Tx.destinationHash ? "Success" : "Failed"
        }.svg" alt="${
          Tx.destinationHash
            ? "Success"
            : Date.now() - Number(Tx.started) < 5 * 60 * 1000 // 5 mins
              ? "Pending"
              : "Failed"
        }" /> ${
          Tx.destinationHash
            ? "Success"
            : Date.now() - Number(Tx.started) < 5 * 60 * 1000 // 5 mins
              ? "Pending"
              : "Failed"
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
              Age: <div dangerouslySetInnerHTML={createMarkup(row.Age)} />,
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
