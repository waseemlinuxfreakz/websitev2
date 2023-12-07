import React from 'react';
import Search from '../assets/img/explorer/search.svg';


function ExplorerHeaderSearch() {
    return ( 
        <div className="explorerSearch">
            <input type="search" placeholder='Search token / chain / transaction' />
            <button type='button' className='searchBtn'><img src={Search} alt="Search" /></button>
        </div>
     );
}

export default ExplorerHeaderSearch;