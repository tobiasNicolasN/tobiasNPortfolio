import style from "../styles/AboutMe.module.css";
// import cssImg from "../icons/CSS3.png";
// import expressImg from "../icons/Express.png";
// import htmlImg from "../icons/HTML5.png";
// import jsImg from "../icons/JavaScript.png";
// import mongoImg from "../icons/MongoDB.png";
// import nodeImg from "../icons/Node.js.png";
// import reactImg from "../icons/React.png";
// import tailwindImg from "../icons/Tailwind CSS.png";
// import tsImg from "../icons/TypeScript.png";

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
          <div>
            <h1 className={style.skills}>HABILIDADES</h1>
            <div className={style.skillsContainer}>
              {/* <img src={tsImg} className={style.skillIcon} />
              <img src={jsImg} className={style.skillIcon} />
              <img src={reactImg} className={style.skillIcon} />
              <img src={htmlImg} className={style.skillIcon} />
              <img src={cssImg} className={style.skillIcon} />
              <img src={tailwindImg} className={style.skillIcon} />
              <img src={nodeImg} className={style.skillIcon} />
              <img src={mongoImg} className={style.skillIcon} />
              <img src={expressImg} className={style.skillIcon} /> */}
              <div className={style.skill}>TypeScript</div>
              <div className={style.skill}>JavaScript</div>
              <div className={style.skill}>React</div>
              <div className={style.skill}>Html</div>
              <div className={style.skill}>Css</div>
              <div className={style.skill}>TailWind</div>
              <div className={style.skill}>Node.js</div>
              <div className={style.skill}>Express</div>
              <div className={style.skill}>MongoDB</div>
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
          <div>
            <h1 className={style.skills}>SKILLS</h1>
            <div className={style.skillsContainer}>
              {/* <img src={tsImg} className={style.skillIcon} />
              <img src={jsImg} className={style.skillIcon} />
              <img src={reactImg} className={style.skillIcon} />
              <img src={htmlImg} className={style.skillIcon} />
              <img src={cssImg} className={style.skillIcon} />
              <img src={tailwindImg} className={style.skillIcon} />
              <img src={nodeImg} className={style.skillIcon} />
              <img src={mongoImg} className={style.skillIcon} />
              <img src={expressImg} className={style.skillIcon} /> */}
              <div className={style.skill}>TypeScript</div>
              <div className={style.skill}>JavaScript</div>
              <div className={style.skill}>React</div>
              <div className={style.skill}>Html</div>
              <div className={style.skill}>Css</div>
              <div className={style.skill}>TailWind</div>
              <div className={style.skill}>Node.js</div>
              <div className={style.skill}>Express</div>
              <div className={style.skill}>MongoDB</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AboutMe;
