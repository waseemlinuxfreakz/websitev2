import ConnectionIndicatorDropdown from "./ConnectionIndicatorDropdown";

export default function ConnectionIndicator() {
  return (
    <>
      <div className="EthereumTop">
        <ConnectionIndicatorDropdown parent="lock-and-mint" direction="from" />
      </div>
    </>
  );
}
