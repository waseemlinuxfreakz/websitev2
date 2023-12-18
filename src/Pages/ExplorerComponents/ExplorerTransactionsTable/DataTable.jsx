import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { useNavigate } from 'react-router-dom';
import TransactionDetails from '../TransactionDetails/TransactionDetails';


const DatatablePage = () => {
  
  
  const navigate = useNavigate(); // Create a navigate function

  const handleRowClick = (rowData) => {
    // rowData contains the data of the clicked row
    // You can extract any necessary information from rowData and use it for redirection
    console.log('Row Clicked:', rowData);

    // Example: Redirect to a new page using navigate
    navigate('/your-new-page'); // Replace '/your-new-page' with the desired URL
  };

  
  const data = {
    columns: [
      {
        label: 'Txn Type',
        field: 'TxnType',
        sort: 'asc',
      },
      {
        label: 'Txn Hash',
        field: 'TxnHash',
        sort: 'asc',
      },
      {
        label: 'Origin chain',
        field: 'Originchain',
        sort: 'asc',
      },
      {
        label: 'Destination',
        field: 'Destination',
        sort: 'asc',
      },
      {
        label: 'Sent',
        field: 'Sent',
        sort: 'asc',
      },
      {
        label: 'Received',
        field: 'Received',
        sort: 'asc',
      },
      {
        label: 'Age',
        field: 'Age',
        sort: 'asc',
      },
      {
        label: 'Txn Status',
        field: 'TxnStatus',
        sort: 'asc',
      }
    ],
    rows: [
      {
        TxnType: '<span class="redeem">Redeem</span>',
        TxnHash: '<span class="textOnly">ce60...d322</span>',
        Originchain: '<div class="chainCell"><img src="img/coin/eth.svg" alt="Ethereum" /> Ethereum</div>',
        Destination: '<div class="chainCell"><img src="img/coin/op.svg" alt="OP" /> OP</div>',
        Sent: '<span class="textCell">348 USDT</span>',
        Received: '<span class="textCell">347 USDT</span>',
        Age: '<span class="textCell">35 secs</span>',
        TxnStatus: '<span class="pending"><img src="img/explorer/Pending.svg" alt="Pending" /> Pending</span>',
      },
      {
        TxnType: '<span class="transfer">Transfer</span>',
        TxnHash: '<span class="textOnly">ce60...d322</span>',
        Originchain: '<div class="chainCell"><img src="img/coin/eth.svg" alt="Ethereum" /> Ethereum</div>',
        Destination: '<div class="chainCell"><img src="img/coin/op.svg" alt="OP" /> OP</div>',
        Sent: '<span class="textCell">348 USDT</span>',
        Received: '<span class="textCell">347 USDT</span>',
        Age: '<span class="textCell">35 secs</span>',
        TxnStatus: '<span class="Success"><img src="img/explorer/Success.svg" alt="Success" /> Success</span>',
      },
      {
        TxnType: '<span class="deposit">Deposit</span>',
        TxnHash: '<span class="textOnly">ce60...d322</span>',
        Originchain: '<div class="chainCell"><img src="img/coin/eth.svg" alt="Ethereum" /> Ethereum</div>',
        Destination: '<div class="chainCell"><img src="img/coin/scoll.svg" alt="scoll" /> OP</div>',
        Sent: '<span class="textCell">348 USDT</span>',
        Received: '<span class="textCell">347 USDT</span>',
        Age: '<span class="textCell">35 secs</span>',
        TxnStatus: '<span class="Success"><img src="img/explorer/Success.svg" alt="Success" /> Success</span>',
      },
      {
        TxnType: '<span class="borrow">Borrow</span>',
        TxnHash: '<span class="textOnly">ce60...d322</span>',
        Originchain: '<div class="chainCell"><img src="img/coin/eth.svg" alt="Ethereum" /> Ethereum</div>',
        Destination: '<div class="chainCell"><img src="img/coin/Linea.svg" alt="Linea" /> OP</div>',
        Sent: '<span class="textCell">348 USDT</span>',
        Received: '<span class="textCell">347 USDT</span>',
        Age: '<span class="textCell">35 secs</span>',
        TxnStatus: '<span class="Success"><img src="img/explorer/Success.svg" alt="Success" /> Success</span>',
      },
      {
        TxnType: '<span class="approval">Approval</span>',
        TxnHash: '<span class="textOnly">ce60...d322</span>',
        Originchain: '<div class="chainCell"><img src="img/coin/eth.svg" alt="Ethereum" /> Ethereum</div>',
        Destination: '<div class="chainCell"><img src="img/coin/usdc.svg" alt="usdc" /> OP</div>',
        Sent: '<span class="textCell">348 USDT</span>',
        Received: '<span class="textCell">347 USDT</span>',
        Age: '<span class="textCell">35 secs</span>',
        TxnStatus: '<span class="Failled"><img src="img/explorer/Failled.svg" alt="Failled" /> Failled</span>',
      },
      {
        TxnType: '<span class="swap">Swap</span>',
        TxnHash: '<span class="textOnly">ce60...d322</span>',
        Originchain: '<div class="chainCell"><img src="img/coin/eth.svg" alt="Ethereum" /> Ethereum</div>',
        Destination: '<div class="chainCell"><img src="img/coin/op.svg" alt="OP" /> OP</div>',
        Sent: '<span class="textCell">348 USDT</span>',
        Received: '<span class="textCell">347 USDT</span>',
        Age: '<span class="textCell">35 secs</span>',
        TxnStatus: '<span class="Failled"><img src="img/explorer/Failled.svg" alt="Failled" /> Failled</span>',
      },
      {
        TxnType: '<span class="redeem">Redeem</span>',
        TxnHash: '<span class="textOnly">ce60...d322</span>',
        Originchain: '<div class="chainCell"><img src="img/coin/eth.svg" alt="Ethereum" /> Ethereum</div>',
        Destination: '<div class="chainCell"><img src="img/coin/op.svg" alt="OP" /> OP</div>',
        Sent: '<span class="textCell">348 USDT</span>',
        Received: '<span class="textCell">347 USDT</span>',
        Age: '<span class="textCell">35 secs</span>',
        TxnStatus: '<span class="pending"><img src="img/explorer/Pending.svg" alt="Pending" /> Pending</span>',
      },
      {
        TxnType: '<span class="transfer">Transfer</span>',
        TxnHash: '<span class="textOnly">ce60...d322</span>',
        Originchain: '<div class="chainCell"><img src="img/coin/eth.svg" alt="Ethereum" /> Ethereum</div>',
        Destination: '<div class="chainCell"><img src="img/coin/op.svg" alt="OP" /> OP</div>',
        Sent: '<span class="textCell">348 USDT</span>',
        Received: '<span class="textCell">347 USDT</span>',
        Age: '<span class="textCell">35 secs</span>',
        TxnStatus: '<span class="Success"><img src="img/explorer/Success.svg" alt="Success" /> Success</span>',
      },
      {
        TxnType: '<span class="deposit">Deposit</span>',
        TxnHash: '<span class="textOnly">ce60...d322</span>',
        Originchain: '<div class="chainCell"><img src="img/coin/eth.svg" alt="Ethereum" /> Ethereum</div>',
        Destination: '<div class="chainCell"><img src="img/coin/scoll.svg" alt="scoll" /> OP</div>',
        Sent: '<span class="textCell">348 USDT</span>',
        Received: '<span class="textCell">347 USDT</span>',
        Age: '<span class="textCell">35 secs</span>',
        TxnStatus: '<span class="Success"><img src="img/explorer/Success.svg" alt="Success" /> Success</span>',
      },
      {
        TxnType: '<span class="borrow">Borrow</span>',
        TxnHash: '<span class="textOnly">ce60...d322</span>',
        Originchain: '<div class="chainCell"><img src="img/coin/eth.svg" alt="Ethereum" /> Ethereum</div>',
        Destination: '<div class="chainCell"><img src="img/coin/Linea.svg" alt="Linea" /> OP</div>',
        Sent: '<span class="textCell">348 USDT</span>',
        Received: '<span class="textCell">347 USDT</span>',
        Age: '<span class="textCell">35 secs</span>',
        TxnStatus: '<span class="Success"><img src="img/explorer/Success.svg" alt="Success" /> Success</span>',
      },
      {
        TxnType: '<span class="approval">Approval</span>',
        TxnHash: '<span class="textOnly">ce60...d322</span>',
        Originchain: '<div class="chainCell"><img src="img/coin/eth.svg" alt="Ethereum" /> Ethereum</div>',
        Destination: '<div class="chainCell"><img src="img/coin/usdc.svg" alt="usdc" /> OP</div>',
        Sent: '<span class="textCell">348 USDT</span>',
        Received: '<span class="textCell">347 USDT</span>',
        Age: '<span class="textCell">35 secs</span>',
        TxnStatus: '<span class="Failled"><img src="img/explorer/Failled.svg" alt="Failled" /> Failled</span>',
      },
      {
        TxnType: '<span class="swap">Swap</span>',
        TxnHash: '<span class="textOnly">ce60...d322</span>',
        Originchain: '<div class="chainCell"><img src="img/coin/eth.svg" alt="Ethereum" /> Ethereum</div>',
        Destination: '<div class="chainCell"><img src="img/coin/op.svg" alt="OP" /> OP</div>',
        Sent: '<span class="textCell">348 USDT</span>',
        Received: '<span class="textCell">347 USDT</span>',
        Age: '<span class="textCell">35 secs</span>',
        TxnStatus: '<span class="Failled"><img src="img/explorer/Failled.svg" alt="Failled" /> Failled</span>',
      },
      {
        TxnType: '<span class="redeem">Redeem</span>',
        TxnHash: '<span class="textOnly">ce60...d322</span>',
        Originchain: '<div class="chainCell"><img src="img/coin/eth.svg" alt="Ethereum" /> Ethereum</div>',
        Destination: '<div class="chainCell"><img src="img/coin/op.svg" alt="OP" /> OP</div>',
        Sent: '<span class="textCell">348 USDT</span>',
        Received: '<span class="textCell">347 USDT</span>',
        Age: '<span class="textCell">35 secs</span>',
        TxnStatus: '<span class="pending"><img src="img/explorer/Pending.svg" alt="Pending" /> Pending</span>',
      },
      {
        TxnType: '<span class="transfer">Transfer</span>',
        TxnHash: '<span class="textOnly">ce60...d322</span>',
        Originchain: '<div class="chainCell"><img src="img/coin/eth.svg" alt="Ethereum" /> Ethereum</div>',
        Destination: '<div class="chainCell"><img src="img/coin/op.svg" alt="OP" /> OP</div>',
        Sent: '<span class="textCell">348 USDT</span>',
        Received: '<span class="textCell">347 USDT</span>',
        Age: '<span class="textCell">35 secs</span>',
        TxnStatus: '<span class="Success"><img src="img/explorer/Success.svg" alt="Success" /> Success</span>',
      },
      {
        TxnType: '<span class="deposit">Deposit</span>',
        TxnHash: '<span class="textOnly">ce60...d322</span>',
        Originchain: '<div class="chainCell"><img src="img/coin/eth.svg" alt="Ethereum" /> Ethereum</div>',
        Destination: '<div class="chainCell"><img src="img/coin/scoll.svg" alt="scoll" /> OP</div>',
        Sent: '<span class="textCell">348 USDT</span>',
        Received: '<span class="textCell">347 USDT</span>',
        Age: '<span class="textCell">35 secs</span>',
        TxnStatus: '<span class="Success"><img src="img/explorer/Success.svg" alt="Success" /> Success</span>',
      },
      {
        TxnType: '<span class="borrow">Borrow</span>',
        TxnHash: '<span class="textOnly">ce60...d322</span>',
        Originchain: '<div class="chainCell"><img src="img/coin/eth.svg" alt="Ethereum" /> Ethereum</div>',
        Destination: '<div class="chainCell"><img src="img/coin/Linea.svg" alt="Linea" /> OP</div>',
        Sent: '<span class="textCell">348 USDT</span>',
        Received: '<span class="textCell">347 USDT</span>',
        Age: '<span class="textCell">35 secs</span>',
        TxnStatus: '<span class="Success"><img src="img/explorer/Success.svg" alt="Success" /> Success</span>',
      },
      {
        TxnType: '<span class="approval">Approval</span>',
        TxnHash: '<span class="textOnly">ce60...d322</span>',
        Originchain: '<div class="chainCell"><img src="img/coin/eth.svg" alt="Ethereum" /> Ethereum</div>',
        Destination: '<div class="chainCell"><img src="img/coin/usdc.svg" alt="usdc" /> OP</div>',
        Sent: '<span class="textCell">348 USDT</span>',
        Received: '<span class="textCell">347 USDT</span>',
        Age: '<span class="textCell">35 secs</span>',
        TxnStatus: '<span class="Failled"><img src="img/explorer/Failled.svg" alt="Failled" /> Failled</span>',
      },
      {
        TxnType: '<span class="swap">Swap</span>',
        TxnHash: '<span class="textOnly">ce60...d322</span>',
        Originchain: '<div class="chainCell"><img src="img/coin/eth.svg" alt="Ethereum" /> Ethereum</div>',
        Destination: '<div class="chainCell"><img src="img/coin/op.svg" alt="OP" /> OP</div>',
        Sent: '<span class="textCell">348 USDT</span>',
        Received: '<span class="textCell">347 USDT</span>',
        Age: '<span class="textCell">35 secs</span>',
        TxnStatus: '<span class="Failled"><img src="img/explorer/Failled.svg" alt="Failled" /> Failled</span>',
      },
      {
        TxnType: '<span class="redeem">Redeem</span>',
        TxnHash: '<span class="textOnly">ce60...d322</span>',
        Originchain: '<div class="chainCell"><img src="img/coin/eth.svg" alt="Ethereum" /> Ethereum</div>',
        Destination: '<div class="chainCell"><img src="img/coin/op.svg" alt="OP" /> OP</div>',
        Sent: '<span class="textCell">348 USDT</span>',
        Received: '<span class="textCell">347 USDT</span>',
        Age: '<span class="textCell">35 secs</span>',
        TxnStatus: '<span class="pending"><img src="img/explorer/Pending.svg" alt="Pending" /> Pending</span>',
      },
      {
        TxnType: '<span class="transfer">Transfer</span>',
        TxnHash: '<span class="textOnly">ce60...d322</span>',
        Originchain: '<div class="chainCell"><img src="img/coin/eth.svg" alt="Ethereum" /> Ethereum</div>',
        Destination: '<div class="chainCell"><img src="img/coin/op.svg" alt="OP" /> OP</div>',
        Sent: '<span class="textCell">348 USDT</span>',
        Received: '<span class="textCell">347 USDT</span>',
        Age: '<span class="textCell">35 secs</span>',
        TxnStatus: '<span class="Success"><img src="img/explorer/Success.svg" alt="Success" /> Success</span>',
      },
      {
        TxnType: '<span class="deposit">Deposit</span>',
        TxnHash: '<span class="textOnly">ce60...d322</span>',
        Originchain: '<div class="chainCell"><img src="img/coin/eth.svg" alt="Ethereum" /> Ethereum</div>',
        Destination: '<div class="chainCell"><img src="img/coin/scoll.svg" alt="scoll" /> OP</div>',
        Sent: '<span class="textCell">348 USDT</span>',
        Received: '<span class="textCell">347 USDT</span>',
        Age: '<span class="textCell">35 secs</span>',
        TxnStatus: '<span class="Success"><img src="img/explorer/Success.svg" alt="Success" /> Success</span>',
      },
      {
        TxnType: '<span class="borrow">Borrow</span>',
        TxnHash: '<span class="textOnly">ce60...d322</span>',
        Originchain: '<div class="chainCell"><img src="img/coin/eth.svg" alt="Ethereum" /> Ethereum</div>',
        Destination: '<div class="chainCell"><img src="img/coin/Linea.svg" alt="Linea" /> OP</div>',
        Sent: '<span class="textCell">348 USDT</span>',
        Received: '<span class="textCell">347 USDT</span>',
        Age: '<span class="textCell">35 secs</span>',
        TxnStatus: '<span class="Success"><img src="img/explorer/Success.svg" alt="Success" /> Success</span>',
      },
      {
        TxnType: '<span class="approval">Approval</span>',
        TxnHash: '<span class="textOnly">ce60...d322</span>',
        Originchain: '<div class="chainCell"><img src="img/coin/eth.svg" alt="Ethereum" /> Ethereum</div>',
        Destination: '<div class="chainCell"><img src="img/coin/usdc.svg" alt="usdc" /> OP</div>',
        Sent: '<span class="textCell">348 USDT</span>',
        Received: '<span class="textCell">347 USDT</span>',
        Age: '<span class="textCell">35 secs</span>',
        TxnStatus: '<span class="Failled"><img src="img/explorer/Failled.svg" alt="Failled" /> Failled</span>',
      },
      {
        TxnType: '<span class="swap">Swap</span>',
        TxnHash: '<span class="textOnly">ce60...d322</span>',
        Originchain: '<div class="chainCell"><img src="img/coin/eth.svg" alt="Ethereum" /> Ethereum</div>',
        Destination: '<div class="chainCell"><img src="img/coin/op.svg" alt="OP" /> OP</div>',
        Sent: '<span class="textCell">348 USDT</span>',
        Received: '<span class="textCell">347 USDT</span>',
        Age: '<span class="textCell">35 secs</span>',
        TxnStatus: '<span class="Failled"><img src="img/explorer/Failled.svg" alt="Failled" /> Failled</span>',
      },
      {
        TxnType: '<span class="redeem">Redeem</span>',
        TxnHash: '<span class="textOnly">ce60...d322</span>',
        Originchain: '<div class="chainCell"><img src="img/coin/eth.svg" alt="Ethereum" /> Ethereum</div>',
        Destination: '<div class="chainCell"><img src="img/coin/op.svg" alt="OP" /> OP</div>',
        Sent: '<span class="textCell">348 USDT</span>',
        Received: '<span class="textCell">347 USDT</span>',
        Age: '<span class="textCell">35 secs</span>',
        TxnStatus: '<span class="pending"><img src="img/explorer/Pending.svg" alt="Pending" /> Pending</span>',
      },
      {
        TxnType: '<span class="transfer">Transfer</span>',
        TxnHash: '<span class="textOnly">ce60...d322</span>',
        Originchain: '<div class="chainCell"><img src="img/coin/eth.svg" alt="Ethereum" /> Ethereum</div>',
        Destination: '<div class="chainCell"><img src="img/coin/op.svg" alt="OP" /> OP</div>',
        Sent: '<span class="textCell">348 USDT</span>',
        Received: '<span class="textCell">347 USDT</span>',
        Age: '<span class="textCell">35 secs</span>',
        TxnStatus: '<span class="Success"><img src="img/explorer/Success.svg" alt="Success" /> Success</span>',
      },
      {
        TxnType: '<span class="deposit">Deposit</span>',
        TxnHash: '<span class="textOnly">ce60...d322</span>',
        Originchain: '<div class="chainCell"><img src="img/coin/eth.svg" alt="Ethereum" /> Ethereum</div>',
        Destination: '<div class="chainCell"><img src="img/coin/scoll.svg" alt="scoll" /> OP</div>',
        Sent: '<span class="textCell">348 USDT</span>',
        Received: '<span class="textCell">347 USDT</span>',
        Age: '<span class="textCell">35 secs</span>',
        TxnStatus: '<span class="Success"><img src="img/explorer/Success.svg" alt="Success" /> Success</span>',
      },
      {
        TxnType: '<span class="borrow">Borrow</span>',
        TxnHash: '<span class="textOnly">ce60...d322</span>',
        Originchain: '<div class="chainCell"><img src="img/coin/eth.svg" alt="Ethereum" /> Ethereum</div>',
        Destination: '<div class="chainCell"><img src="img/coin/Linea.svg" alt="Linea" /> OP</div>',
        Sent: '<span class="textCell">348 USDT</span>',
        Received: '<span class="textCell">347 USDT</span>',
        Age: '<span class="textCell">35 secs</span>',
        TxnStatus: '<span class="Success"><img src="img/explorer/Success.svg" alt="Success" /> Success</span>',
      },
      {
        TxnType: '<span class="approval">Approval</span>',
        TxnHash: '<span class="textOnly">ce60...d322</span>',
        Originchain: '<div class="chainCell"><img src="img/coin/eth.svg" alt="Ethereum" /> Ethereum</div>',
        Destination: '<div class="chainCell"><img src="img/coin/usdc.svg" alt="usdc" /> OP</div>',
        Sent: '<span class="textCell">348 USDT</span>',
        Received: '<span class="textCell">347 USDT</span>',
        Age: '<span class="textCell">35 secs</span>',
        TxnStatus: '<span class="Failled"><img src="img/explorer/Failled.svg" alt="Failled" /> Failled</span>',
      },
      {
        TxnType: '<span class="swap">Swap</span>',
        TxnHash: '<span class="textOnly">ce60...d322</span>',
        Originchain: '<div class="chainCell"><img src="img/coin/eth.svg" alt="Ethereum" /> Ethereum</div>',
        Destination: '<div class="chainCell"><img src="img/coin/op.svg" alt="OP" /> OP</div>',
        Sent: '<span class="textCell">348 USDT</span>',
        Received: '<span class="textCell">347 USDT</span>',
        Age: '<span class="textCell">35 secs</span>',
        TxnStatus: '<span class="Failled"><img src="img/explorer/Failled.svg" alt="Failled" /> Failled</span>',
      },
      {
        TxnType: '<span class="redeem">Redeem</span>',
        TxnHash: '<span class="textOnly">ce60...d322</span>',
        Originchain: '<div class="chainCell"><img src="img/coin/eth.svg" alt="Ethereum" /> Ethereum</div>',
        Destination: '<div class="chainCell"><img src="img/coin/op.svg" alt="OP" /> OP</div>',
        Sent: '<span class="textCell">348 USDT</span>',
        Received: '<span class="textCell">347 USDT</span>',
        Age: '<span class="textCell">35 secs</span>',
        TxnStatus: '<span class="pending"><img src="img/explorer/Pending.svg" alt="Pending" /> Pending</span>',
      },
      {
        TxnType: '<span class="transfer">Transfer</span>',
        TxnHash: '<span class="textOnly">ce60...d322</span>',
        Originchain: '<div class="chainCell"><img src="img/coin/eth.svg" alt="Ethereum" /> Ethereum</div>',
        Destination: '<div class="chainCell"><img src="img/coin/op.svg" alt="OP" /> OP</div>',
        Sent: '<span class="textCell">348 USDT</span>',
        Received: '<span class="textCell">347 USDT</span>',
        Age: '<span class="textCell">35 secs</span>',
        TxnStatus: '<span class="Success"><img src="img/explorer/Success.svg" alt="Success" /> Success</span>',
      },
      {
        TxnType: '<span class="deposit">Deposit</span>',
        TxnHash: '<span class="textOnly">ce60...d322</span>',
        Originchain: '<div class="chainCell"><img src="img/coin/eth.svg" alt="Ethereum" /> Ethereum</div>',
        Destination: '<div class="chainCell"><img src="img/coin/scoll.svg" alt="scoll" /> OP</div>',
        Sent: '<span class="textCell">348 USDT</span>',
        Received: '<span class="textCell">347 USDT</span>',
        Age: '<span class="textCell">35 secs</span>',
        TxnStatus: '<span class="Success"><img src="img/explorer/Success.svg" alt="Success" /> Success</span>',
      },
      {
        TxnType: '<span class="borrow">Borrow</span>',
        TxnHash: '<span class="textOnly">ce60...d322</span>',
        Originchain: '<div class="chainCell"><img src="img/coin/eth.svg" alt="Ethereum" /> Ethereum</div>',
        Destination: '<div class="chainCell"><img src="img/coin/Linea.svg" alt="Linea" /> OP</div>',
        Sent: '<span class="textCell">348 USDT</span>',
        Received: '<span class="textCell">347 USDT</span>',
        Age: '<span class="textCell">35 secs</span>',
        TxnStatus: '<span class="Success"><img src="img/explorer/Success.svg" alt="Success" /> Success</span>',
      },
      {
        TxnType: '<span class="approval">Approval</span>',
        TxnHash: '<span class="textOnly">ce60...d322</span>',
        Originchain: '<div class="chainCell"><img src="img/coin/eth.svg" alt="Ethereum" /> Ethereum</div>',
        Destination: '<div class="chainCell"><img src="img/coin/usdc.svg" alt="usdc" /> OP</div>',
        Sent: '<span class="textCell">348 USDT</span>',
        Received: '<span class="textCell">347 USDT</span>',
        Age: '<span class="textCell">35 secs</span>',
        TxnStatus: '<span class="Failled"><img src="img/explorer/Failled.svg" alt="Failled" /> Failled</span>',
      },
      {
        TxnType: '<span class="swap">Swap</span>',
        TxnHash: '<span class="textOnly">ce60...d322</span>',
        Originchain: '<div class="chainCell"><img src="img/coin/eth.svg" alt="Ethereum" /> Ethereum</div>',
        Destination: '<div class="chainCell"><img src="img/coin/op.svg" alt="OP" /> OP</div>',
        Sent: '<span class="textCell">348 USDT</span>',
        Received: '<span class="textCell">347 USDT</span>',
        Age: '<span class="textCell">35 secs</span>',
        TxnStatus: '<span class="Failled"><img src="img/explorer/Failled.svg" alt="Failled" /> Failled</span>',
      },
    ]
  };


  // Helper function to create a React element from HTML string
  const createMarkup = (htmlString) => ({ __html: htmlString });

  return (
      <>
        <div className="explorerTransactionsTable">
          <div className="transactionTable">
            <MDBDataTable
              data={{
                ...data,
                rows: data.rows.map((row) => ({
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
              entries={20}   // Set the number of rows per page
            />
          </div>
        </div>
        {/* <div className="transactionDetailsBottom">
          <TransactionDetails/>
        </div> */}
      </>
  );


}

export default DatatablePage;