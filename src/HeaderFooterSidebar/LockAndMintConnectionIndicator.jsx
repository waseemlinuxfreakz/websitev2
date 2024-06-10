import ConnectionIndicatorDropdown from "./ConnectionIndicatorDropdown";

export default function ConnectionIndicator() {
  return (
    <>
      <div className="EthereumTop">
        <ConnectionIndicatorDropdown parent="header" direction="from" />
      </div>
    </>
  );
}
