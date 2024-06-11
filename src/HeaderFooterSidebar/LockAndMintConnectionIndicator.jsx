import ConnectionIndicatorDropdown from "../Pages/LockAndMintComponents/ChainSelectorDropdown/ChainSelectorDropdown";

export default function ConnectionIndicator() {
  return (
    <>
      <div className="EthereumTop">
        <ConnectionIndicatorDropdown parent="header" direction="from" />
      </div>
    </>
  );
}
