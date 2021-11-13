import React from "react";
import { helperFormatMoney } from "../helpers/helpers";

export default function MoneyFormater({ children, ignoreColorValue = false }) {
  const classes = ignoreColorValue
    ? ""
    : children >= 0
    ? "text-green-900"
    : "text-red-900";
  return <span className={classes}>{helperFormatMoney(children)}</span>;
}
