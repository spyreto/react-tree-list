import "./App.css";
import { TreeList } from "./lib";
import aboutOurPartnersData from "./data/aboutOurPartnersData";

function App() {
  return (
    <div className="app">
      <TreeList list={aboutOurPartnersData} />
    </div>
  );
}

export default App;
