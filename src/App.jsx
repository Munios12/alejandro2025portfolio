import "./App.css";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Contact } from "./components/Contact/Contact";
import { Header } from "./components/Header/Header";
import { Works } from "./components/Works/Works";

function App() {
  return (
    <>
      <Header />
      <AboutMe />
      <Works />
      <Contact />
    </>
  );
}

export default App;
