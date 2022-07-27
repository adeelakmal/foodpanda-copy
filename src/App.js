import "./App.css";
import Alertbox from "./components/Alertbox";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Cities from "./components/Cities";
import AboveCity from "./AboveCity";

function App() {
  return (
    <>
      <Alertbox />
      <Navbar />
      <Section />
      <AboveCity/>
      <Cities />
    </>
  );
}

export default App;
