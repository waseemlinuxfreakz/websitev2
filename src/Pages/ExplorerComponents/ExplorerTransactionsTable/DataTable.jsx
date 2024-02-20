import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { useNavigate } from 'react-router-dom';
import useExplorerTransactions from '../../../hooks/useExplorerTransactions';
import { getLogoByChainName, getOfficialChainName, getTimeLength, restoreOriginalSumSent, unpackDateTime, removeTrailingZeroes } from '../../../utils';
import { columns, ROWS_PER_PAGE } from '../../../types'

const DatatablePage = () => {
  
  const navigate = useNavigate();

  const {txs, refresh} = useExplorerTransactions(1);

  const rows = txs && txs.map(Tx => {
    return {
      clickEvent: () => navigate(`/transactionDetails/${Tx.TxnHash}`),
      TxnType: `<span class="${Tx.TxnType.toLowerCase()}">${Tx.TxnType}</span>`,
      TxnHash: `<span class="textOnly">${Tx.TxnHash.slice(0,6)}...${Tx.TxnHash.slice(-4)}</span>`,
      Originchain: `<div class="chainCell"><img src="${getLogoByChainName(Tx.Originchain)}" alt="From Chain Logo" width="25px"/> ${getOfficialChainName(Tx.Originchain)}</div>`,
      Destination: `<div class="chainCell"><img src="${getLogoByChainName(Tx.Destination)}" alt="To Chain Logo" width="25px"/> ${getOfficialChainName(Tx.Destination)}</div>`,
      Sent: `<span class="textCell">${removeTrailingZeroes(restoreOriginalSumSent(Tx.Sent))} ${Tx.SentToken}</span>`,
      Received: `<span class="textCell">${Tx.Received} ${Tx.SentToken}</span>`,
      Age: `<span class="textCell">${unpackDateTime(getTimeLength(Tx.Start, new Date()))}</span>`,
      TxnStatus: `<span class="${Tx.TxnStatus.toLowerCase()}"><img src="img/explorer/${Tx.TxnStatus}.svg" alt="${Tx.TxnStatus}" /> ${Tx.TxnStatus}</span>`,
    }
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
                  TxnType: <div dangerouslySetInnerHTML={createMarkup(row.TxnType)} />,
                  TxnHash: <div dangerouslySetInnerHTML={createMarkup(row.TxnHash)} />,
                  Originchain: <div dangerouslySetInnerHTML={createMarkup(row.Originchain)} />,
                  Destination: <div dangerouslySetInnerHTML={createMarkup(row.Destination)} />,
                  Sent: <div dangerouslySetInnerHTML={createMarkup(row.Sent)} />,
                  Received: <div dangerouslySetInnerHTML={createMarkup(row.Received)} />,
                  Age: <div dangerouslySetInnerHTML={createMarkup(row.Age)} />,
                  TxnStatus: <div dangerouslySetInnerHTML={createMarkup(row.TxnStatus)} />,
                })),
              }}
              paging
              entries={ROWS_PER_PAGE}
            />
          </div>
        </div>
  );


}

export default DatatablePage;