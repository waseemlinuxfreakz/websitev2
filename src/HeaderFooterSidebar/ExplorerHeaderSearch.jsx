import React, { useState } from "react";

function ExplorerHeaderSearch() {
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (event) => {
    const rawInput = event.target.value.trim();
    const sanitizedInput = rawInput.replace(/[^a-zA-Z0-9]/g, "");
    const inputIsValid = sanitizedInput !== "";
    setIsValid(inputIsValid);
  };

  return (
    <></>
    // TODO: implement search box
    // <div className={`explorerSearch ${isValid ? 'inputValid' : ''}`}>
    //   <input
    //     type="search"
    //     placeholder='Search token / sender / transaction'
    //     onChange={handleInputChange}
    //   />
    //   <button type='button' className='searchBtn'>
    //     <img src={'../img/explorer/search.svg'} alt="Search" />
    //   </button>
    // </div>
  );
}

export default ExplorerHeaderSearch;
