import React, { useState, useEffect } from "react";
import TransactionDetailsBreadcrumb from "./TransactionDetailsBreadcrumb";
import TransactionHash from "./TransactionHash";
import TransactionDetailsArea from "./TransactionDetailsBox";
import useTransactionDetails from "../../../hooks/useTransactionDetails";
import { useParams } from "react-router-dom";

function TransactionDetails() {
  const { nonce } = useParams();
  const [scrolledTop, setScrolledTop] = useState(false);

  if (!scrolledTop) {
    window.scroll(0, 0);
    setScrolledTop(true);
  }

  const txn = useTransactionDetails(nonce);

  useEffect(() => {
    console.log({ txn });
  }, [txn]);

  return (
    <div className="TransactionDetailsArea">
      <TransactionDetailsBreadcrumb />
      <TransactionHash />
      <TransactionDetailsArea />
    </div>
  );
}

export default TransactionDetails;
