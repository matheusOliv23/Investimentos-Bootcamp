import { helperGetMonth } from "../helpers/helpers";
import MoneyFormater from "./MoneyFormater";
import Percentage from "./Percentage";

export default function Investimento({ data }) {
  const { investimento, relatorios } = data;
  const {
    description: titulo,
    finalValue,
    initialValue,
    percentagemTotal,
  } = investimento;

  return (
    <div className="border p-2 m-2">
      <h2 className="text-center font-semibold text-x1">{titulo}</h2>
      <h3 className="text-center font-semibold text-lg">
        Rendimento total:{" "}
        <MoneyFormater>{finalValue - initialValue}</MoneyFormater>(
        <Percentage>{percentagemTotal}</Percentage>)
      </h3>

      <ul>
        {relatorios.map((relatorio) => {
          const { month, year, value, percentage } = relatorio;

          const colorClass =
            percentage >= 0
              ? "text-green-900 font-semibold"
              : "text-red-900 font-semibold";
          return (
            <li
              className="flex flex-row items-center justify-start"
              key={relatorio.id}
            >
              <span>
                {helperGetMonth(month)}/{year}
              </span>
              <span className={`flex-1 ml-4 ${colorClass}`}>
                <MoneyFormater ignoreColorValue>{value}</MoneyFormater>
              </span>
              <span className={`${colorClass}`}>
                <Percentage>{percentage}</Percentage>{" "}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
