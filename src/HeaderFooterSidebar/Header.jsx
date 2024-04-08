import React from "react";
import "./Header.css";
import { useLocation } from "react-router-dom";
import ConnectWalletModal from "./ConnectWalletModal";
import ConnectionIndicator from "./ConnectionIndicator";
import ExplorerHeaderSearch from "./ExplorerHeaderSearch";

function Header({ caption }) {
  const location = useLocation();

  // Check if the current path matches either "/explorer" or "/pool"
  const isExplorerOrPool =
    location.pathname === "/explorer" || location.pathname === "/pool";

  return (
    <header id="header">
      <div className="container">
        <div className="headerNave">
          <h1 className="siteTitle">{caption}</h1>
          {isExplorerOrPool && <ExplorerHeaderSearch />}
          <div className="headerRightSide">
            <ConnectionIndicator />

            <ConnectWalletModal />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
