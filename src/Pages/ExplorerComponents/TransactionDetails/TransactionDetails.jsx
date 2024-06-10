import React, { useState, useEffect } from "react";
import TransactionDetailsBreadcrumb from "./TransactionDetailsBreadcrumb";
import TransactionHash from "./TransactionHash";
import TransactionDetailsArea from "./TransactionDetailsBox";
import useTransactionDetails from "../../../hooks/useTransactionDetails";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/storage";
import { resetBridgeTransactionData } from "../../../store/explorerSlice";

function TransactionDetails() {
  const { emmetHash } = useParams();
  const [scrolledTop, setScrolledTop] = useState(false);
  const dispatch = useAppDispatch();

  if (!scrolledTop) {
    window.scroll(0, 0);
    setScrolledTop(true);
  }

  useEffect(() => {
    dispatch(resetBridgeTransactionData());
  }, []);

  useTransactionDetails(emmetHash);

  return (
    <div className="TransactionDetailsArea">
      <TransactionDetailsBreadcrumb />
      <TransactionHash />
      <TransactionDetailsArea />
    </div>
  );
}

export default TransactionDetails;
