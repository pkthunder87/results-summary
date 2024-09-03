import AppLayout from "./components/AppLayout";
import Attribution from "./components/Attribution";
import Results from "./components/Results";
import Summary from "./components/Summary";
import "./sass/main.scss";

function App() {
  return (
    <AppLayout>
      <Results />
      <Summary />
      <Attribution />
    </AppLayout>
  );
}

export default App;
