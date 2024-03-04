import NavBar from "./components/NavBar";
import style from "./App.module.css";
import Intro from "./components/Intro";
import { useState } from "react";
import AboutMe from "./components/AboutMe";

function App() {
  const [language, setLanguage] = useState("es");

  return (
    <>
      <NavBar language={language} />
      <section className={style.section}>
        <Intro language={language} setLanguage={setLanguage} />
      </section>
      <section className={style.section}>
        <AboutMe language={language}/>
      </section>
    </>
  );
}

export default App;
