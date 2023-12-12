import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DatatablePage = () => {
  const data = {
    columns: [
      {
        label: 'Txn Type',
        field: 'TxnType',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Txn Hash',
        field: 'TxnHash',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Origin chain',
        field: 'Originchain',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Destination',
        field: 'Destination',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Sent',
        field: 'Sent',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Received',
        field: 'Received',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Age',
        field: 'Age',
        sort: 'asc',
        width: 100
      },
      {
        label: 'TxnStatus',
        field: 'TxnStatus',
        sort: 'asc',
        width: 100
      }
    ],
    rows: [
      {
        TxnType: '[<p>AAAA<p/>]',
        TxnHash: 'System Architect',
        Originchain: 'Edinburgh',
        Destination: '61',
        Sent: '2011/04/25',
        Received: '$320',
        Age: '$320',
        TxnStatus: '$320',
      },
      {
        TxnType: 'Tiger Nixon',
        TxnHash: 'System Architect',
        Originchain: 'Edinburgh',
        Destination: '61',
        Sent: '2011/04/25',
        Received: '$320',
        Age: '$320',
        TxnStatus: '$320',
      },
      {
        TxnType: 'Tiger Nixon',
        TxnHash: 'System Architect',
        Originchain: 'Edinburgh',
        Destination: '61',
        Sent: '2011/04/25',
        Received: '$320',
        Age: '$320',
        TxnStatus: '$320',
      },
    ]
  };

  return (
    <MDBDataTable
      data={data}
    />
  );
}

export default DatatablePage;