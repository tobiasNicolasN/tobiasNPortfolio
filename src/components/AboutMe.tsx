import style from "../styles/AboutMe.module.css";
import cssImg from "../icons/CSS3.webp";
import SkillCard from "./SkillCard";
import expressImg from "../icons/Express.webp";
import htmlImg from "../icons/HTML5.webp";
import jsImg from "../icons/JavaScript.webp";
import mongoImg from "../icons/MongoDB.webp";
import nodeImg from "../icons/Node.js.webp";
import reactImg from "../icons/React.webp";
import tailwindImg from "../icons/Tailwind CSS.webp";
import tsImg from "../icons/TypeScript.webp";

interface Props {
  language: string;
}

function AboutMe({ language }: Props) {
  return (
    <>
      {language === "es" ? (
        <div className={style.section}>
          <div className={style.container}>
            <h1 className={style.sectionName}>SOBRE MI</h1>
            <h1 className={style.slogan}>
              Abrazando el aprendizaje continuo y el desarrollo de habilidades.
            </h1>
            <h1 className={style.text}>
              Desarrollador FullStack especializado en TypeScript con
              experiencia en React y Node.js. Estudié en una escuela técnica
              orientada a informática, adquiriendo conocimientos en
              programación, sistemas operativos y armado de computadoras.
              Continúo mi aprendizaje autodidacta en el mundo del desarrollo y
              en inglés para mejorar cada día.
            </h1>
          </div>
          <div className={style.container}>
            <h1 className={style.skills}>HABILIDADES</h1>
            <div className={style.skillsContainer}>
              <SkillCard technology="TypeScript" img={tsImg}/>
              <SkillCard technology="JavaScript" img={jsImg}/>
              <SkillCard technology="React" img={reactImg}/>
              <SkillCard technology="HTML5" img={htmlImg}/>
              <SkillCard technology="CSS3" img={cssImg}/>
              <SkillCard technology="Tailwind" img={tailwindImg}/>
              <SkillCard technology="Node.js" img={nodeImg}/>
              <SkillCard technology="Express" img={expressImg}/>
              <SkillCard technology="MongoDB" img={mongoImg}/>
            </div>
          </div>
        </div>
      ) : (
        <div className={style.section}>
          <div className={style.container}>
            <h1 className={style.sectionName}>ABOUT ME</h1>
            <h1 className={style.slogan}>
              Embracing continuous learning and skill development.
            </h1>
            <h1 className={style.text}>
              FullStack developer specializing in TypeScript with experience in
              React and Node.js. I studied at a technical high school focused on
              computer science, gaining knowledge in programming, operating
              systems, and computer assembly. I am committed to self-directed
              learning in the world of development and English to improve
              continuously.
            </h1>
          </div>
          <div className={style.container}>
            <h1 className={style.skills}>Skills</h1>
            <div className={style.skillsContainer}>
              <SkillCard technology="TypeScript" img={tsImg}/>
              <SkillCard technology="JavaScript" img={jsImg}/>
              <SkillCard technology="React" img={reactImg}/>
              <SkillCard technology="HTML5" img={htmlImg}/>
              <SkillCard technology="CSS3" img={cssImg}/>
              <SkillCard technology="Tailwind" img={tailwindImg}/>
              <SkillCard technology="Node.js" img={nodeImg}/>
              <SkillCard technology="Express" img={expressImg}/>
              <SkillCard technology="MongoDB" img={mongoImg}/>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AboutMe;
