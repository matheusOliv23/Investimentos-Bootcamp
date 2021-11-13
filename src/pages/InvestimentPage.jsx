import Investimentos from "../components/Investimentos";
import Investimento from "../components/Investimento";
import { apiGetInvestimentos } from "../data/investimentos";

export default function InvestimentPage() {
  const backend = apiGetInvestimentos();
  console.log(backend);

  return (
    <Investimentos>
      {backend.map((item) => {
        return (
          <Investimento key={item.id} data={item}>
            {item}{" "}
          </Investimento>
        );
      })}
    </Investimentos>
  );
}
