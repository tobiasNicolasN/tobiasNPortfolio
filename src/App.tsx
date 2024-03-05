import NavBar from "./components/NavBar";
import style from "./App.module.css";
import { useState } from "react";
import AboutMe from "./components/AboutMe";
import Intro from "./components/Intro";

function App() {
  const [language, setLanguage] = useState("es");
  const [_activeSection, setActiveSection] = useState('');

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    scrollToSection(sectionId);
  };
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <NavBar language={language} onSectionChange={handleSectionChange} />
      <section className={style.section}>
        <Intro language={language} setLanguage={setLanguage}/>
      </section>
      <section className={style.section} id="about">
        {/* Contenido de la sección "Sobre mi" */}
        <AboutMe language={language}/>
      </section>
      <section className={style.section} id="projects">
        <h1 className={style.prueba}>{(language === "es") ? "aca proyectos" : "here projects"}</h1>
      </section>
      <section className={style.section} id="contact">
        <h1 className={style.prueba}>{(language === "es") ? "aca contacto" : "here contact"}</h1>
      </section>
    </>
  );
}

export default App;
