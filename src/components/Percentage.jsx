import React from "react";
import { helperFormatPercentage } from "../helpers/helpers";

export default function Percentage({ children }) {
  const classes = children >= 0 ? "text-green-900" : "text-red-900";
  return <span className={classes}>{helperFormatPercentage(children)}</span>;
}
