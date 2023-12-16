import React, { useState } from 'react';

import Updown from '../../../assets/img/table-updown.svg';


const PoolTable = () => {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const data = [
    {
      Token: '<span class="poolCoin"><img src="/img/coin/eth.svg" alt="eth" /> ETH</span>',
      Chain: '<span class="poolCoin"><img src="/img/coin/Linea.svg" alt="Linea" /> Linea</span>',
      APY: '<span style="color: #E0E3E6;">4%</span>',
      Daily: '0.3849%',
      TotalLiquidity: '<span class="totleLiqui">1,085 ETH</span>',
    },
    {
      Token: '<span class="poolCoin"><img src="/img/coin/usdc.svg" alt="usdc" /> USDC</span>',
      Chain: '<span class="poolCoin"><img src="/img/coin/eth.svg" alt="eth" /> ETH</span>',
      APY: '<span style="color: #E0E3E6;">30%</span>',
      Daily: '0.3849%',
      TotalLiquidity: '<span class="totleLiqui">1,085 ETH</span>',
    },
    {
      Token: '<span class="poolCoin"><img src="/img/coin/usdt.svg" alt="usdt" /> USDT</span>',
      Chain: '<span class="poolCoin"><img src="/img/coin/Base.svg" alt="Base" /> Base</span>',
      APY: '<span style="color: #E0E3E6;">4%</span>',
      Daily: '0.3849%',
      TotalLiquidity: '<span class="totleLiqui">1,085 ETH</span>',
    },
    {
      Token: '<span class="poolCoin"><img src="/img/coin/dai.svg" alt="dai" /> DIA</span>',
      Chain: '<span class="poolCoin"><img src="/img/coin/optimism.svg" alt="optimism" /> optimism</span>',
      APY: '<span style="color: #E0E3E6;">10%</span>',
      Daily: '0.3849%',
      TotalLiquidity: '<span class="totleLiqui">1,085 ETH</span>',
    },
  ];

  const handleSort = (key) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(key);
      setSortOrder('asc');
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a[sortBy] > b[sortBy] ? 1 : -1;
    } else {
      return a[sortBy] < b[sortBy] ? 1 : -1;
    }
  });

  return (
    <div className="transactionTable poolTable">
        <table className="table">
        <thead>
            
            <tr>
            <th onClick={() => handleSort('Token')}>Token <span className='upDown'><img src={Updown} alt="Updown" /></span></th>
            <th onClick={() => handleSort('Chain')}>Chain <span className='upDown'><img src={Updown} alt="Updown" /></span></th>
            <th onClick={() => handleSort('APY')}>APY <span className='upDown'><img src={Updown} alt="Updown" /></span></th>
            <th onClick={() => handleSort('Daily')}>Daily <span className='upDown'><img src={Updown} alt="Updown" /></span></th>
            <th onClick={() => handleSort('TotalLiquidity')}>Total liquidity <span className='upDown'><img src={Updown} alt="Updown" /></span></th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            {sortedData.map((item, index) => (
            <tr key={index}>
                <td dangerouslySetInnerHTML={{ __html: item.Token }} />
                <td dangerouslySetInnerHTML={{ __html: item.Chain }} />
                <td dangerouslySetInnerHTML={{ __html: item.APY }} />
                <td dangerouslySetInnerHTML={{ __html: item.Daily }} />
                <td dangerouslySetInnerHTML={{ __html: item.TotalLiquidity }} />
                <td><button className='addPoll'><img src="/img/add.svg" alt="Add" /></button></td>
                
            </tr>
            ))}
        </tbody>
        </table>
    </div>
  );
};

export default PoolTable;
