import React from "react";
import "./Skeleton.css";

export default function Skeleton({ height, width }) {
  return <div className="skeleton" style={{ height, width }}></div>;
}
