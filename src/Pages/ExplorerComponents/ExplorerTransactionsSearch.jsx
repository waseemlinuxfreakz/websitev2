import React from 'react';

import SearchIcon from '../../assets/img/Search_page.svg';
import './ExplorerTransactionsSearch.css';



function ExplorerTransactionsSearch() {
    return ( 
        <div className="explorerTransactionsSearch">
            <img src={SearchIcon} alt="SearchIcon" className="searchCircle" />
            <p>Your search does not match anything we've got</p>
            <soan className="searchText">srujwnjnljsdfg</soan>
        </div>
     );
}

export default ExplorerTransactionsSearch;