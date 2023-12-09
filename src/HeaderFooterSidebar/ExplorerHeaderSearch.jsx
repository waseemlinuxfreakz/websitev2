import React, { useState } from 'react';
import Search from '../assets/img/explorer/search.svg';

function ExplorerHeaderSearch() {
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (event) => {
    // Your validation logic here
    const inputIsValid = event.target.value.trim() !== '';
    setIsValid(inputIsValid);
  };

  return ( 
    <div className={`explorerSearch ${isValid ? 'inputValid' : ''}`}>
      <input
        type="search"
        placeholder='Search token / chain / transaction'
        onChange={handleInputChange}
      />
      <button type='button' className='searchBtn'>
        <img src={Search} alt="Search" />
      </button>
    </div>
  );
}

export default ExplorerHeaderSearch;
