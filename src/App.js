import "./App.css";
import Alertbox from "./components/Alertbox";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Cities from "./components/Cities";
import Apps from "./components/Apps";
import AboveCity from "./components/AboveCity";

function App() {
  return (
    <>
      <Alertbox />
      <Navbar />
      <Section />
      <AboveCity />
      <Cities />
      <Apps />
    </>
  );
}

export default App;
