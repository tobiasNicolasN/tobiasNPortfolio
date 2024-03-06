import NavBar from "./components/NavBar";
import style from "./App.module.css";
import { useState } from "react";
import AboutMe from "./components/AboutMe";
import Intro from "./components/Intro";
import Contact from "./components/Contact";

function App() {
  const [language, setLanguage] = useState("es");

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <NavBar
        language={language}
        scrollToAbout={() => scrollToSection("about")}
        scrollToProjects={() => scrollToSection("projects")}
        scrollToContact={() => scrollToSection("contact")}
      />
      <section className={style.section1}>
        <Intro
          language={language}
          setLanguage={setLanguage}
          scrollToAbout={() => scrollToSection("about")}
          scrollToProjects={() => scrollToSection("projects")}
        />
      </section>
      <section className={style.section2} id="about">
        <AboutMe language={language} />
      </section>
      <section className={style.section1} id="projects">
        <h1 className={style.sectionName}>
          {language === "es" ? "PROYECTOS" : "PROJECTS"}
        </h1>
      </section>
      <section className={style.section4} id="contact">
        <Contact language={language}/>
      </section>
    </>
  );
}

export default App;
