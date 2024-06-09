import React, { useState, useEffect } from "react";
import ExplorerHeaderSearch from "../../HeaderFooterSidebar/ExplorerHeaderSearch";
import ExplorerTopGridRow from "./ExplorerTopGridRow";
import ExplorerTransactions from "./ExplorerTransactions";
import "./ExplorerTransactions/ExplorerTransactions.css";
import "./ExplorerTopGrid/ExplorerTopGrid.css";
import "./ExplorerTransactionsTable/ExplorerTransactionsTable.css";
import DatatablePage from "./ExplorerTransactionsTable/DataTable";

function ExplorerPageContainer() {
  const [showHeaderSearch, setShowHeaderSearch] = useState(true);
  const [showSearchResult, setShowSearchResult] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowHeaderSearch(window.innerWidth <= 1024);
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {showHeaderSearch && <ExplorerHeaderSearch />}
      <ExplorerTopGridRow />
      {/* <ExplorerTransactionsSearch/> */}
      <ExplorerTransactions />
      <DatatablePage />
      {/* <ExplorerTransactionsTable/> */}
    </>
  );
}

export default ExplorerPageContainer;
