import React from 'react';

import Ethereum from '../../../assets/img/coin/eth.svg';
import OP from '../../../assets/img/coin/op.svg';
import Scroll from '../../../assets/img/coin/scoll.svg';
import Pending from '../../../assets/img/explorer/Pending.svg';
import Success from '../../../assets/img/explorer/Success.svg';
import Failled from '../../../assets/img/explorer/Failled.svg';


function ExplorerTransactionsTable() {
    return ( 
        <div className="explorerTransactionsTable">
            <div className="transactionTable">
                <table>
                    <thead>
                        <tr>
                            <th>Txn Type</th>
                            <th>Txn Hash</th>
                            <th>Origin chain</th>
                            <th>Destination</th>
                            <th>Sent</th>         
                            <th>Received</th>
                            <th>Age</th>
                            <th>Txn Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> <span className='redeem'>Redeem</span> </td>
                            <td> <span className='textOnly'>ce60...d322</span></td>
                            <td> <div className="chainCell"><img src={Ethereum} alt="Ethereum" /> Ethereum</div></td>
                            <td> <div className="chainCell"><img src={OP} alt="Ethereum" /> OP</div></td>
                            <td> <span className='textCell'>348 USDT</span></td>
                            <td> <span className='textCell'>347 USDT</span></td>
                            <td> <span className='textCell'>35 secs</span></td>
                            <td> <span className="pending"><img src={Pending} alt="Pending" /> Pending</span></td>
                        </tr>
                        <tr>
                            <td> <span className='transfer'>Transfer</span> </td>
                            <td> <span className='textOnly'>ce60...d322</span></td>
                            <td> <div className="chainCell"><img src={Ethereum} alt="Ethereum" /> Ethereum</div></td>
                            <td> <div className="chainCell"><img src={OP} alt="OP" /> OP</div></td>
                            <td> <span className='textCell'>348 USDT</span></td>
                            <td> <span className='textCell'>347 USDT</span></td>
                            <td> <span className='textCell'>35 secs</span></td>
                            <td> <span className="success"><img src={Success} alt="Success" /> Success</span></td>
                        </tr>
                        <tr>
                            <td> <span className='deposit'>Deposit</span> </td>
                            <td> <span className='textOnly'>ce60...d322</span></td>
                            <td> <div className="chainCell"><img src={Scroll} alt="Scroll" /> Scroll</div></td>
                            <td> <div className="chainCell"><img src={Ethereum} alt="Ethereum" /> Ethereum</div></td>
                            <td> <span className='textCell'>348 USDT</span></td>
                            <td> <span className='textCell'>347 USDT</span></td>
                            <td> <span className='textCell'>35 secs</span></td>
                            <td> <span className="success"><img src={Success} alt="Success" /> Success</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
     );
}

export default ExplorerTransactionsTable;