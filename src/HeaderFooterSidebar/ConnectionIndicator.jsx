import ChainSelectorDropdown from "../Pages/LockAndMintComponents/ChainSelectorDropdown/ChainSelectorDropdown";

export default function ConnectionIndicator() {
  return (
    <>
      <div className="EthereumTop">
        <ChainSelectorDropdown parent="header" direction="from" />
      </div>
    </>
  );
}
