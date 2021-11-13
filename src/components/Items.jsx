import React from "react";
import { relatorios } from "../data/relatorios";

export default function Items() {
  return (
    <div>
      {relatorios.map((relatorio) => {
        return (
          <div>
            <div>{relatorio.month}</div>
            <div>{relatorio.value}</div>
            <div>{relatorio.year}</div>
          </div>
        );
      })}
    </div>
  );
}
