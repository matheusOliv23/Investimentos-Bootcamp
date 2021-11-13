import InvestimentPage from "./pages/InvestimentPage";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  return (
    <div>
      <Header>Finanças</Header>
      <Main>
        <InvestimentPage />
      </Main>
    </div>
  );
}
