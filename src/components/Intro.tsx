import style from "../styles/Intro.module.css";

interface Props {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

function Intro({ language, setLanguage }: Props) {
  const handleLanguage = () => {
    language === "es" ? setLanguage("en") : setLanguage("es");
  };

  return (
    <>
      {language === "es" ? (
        <div className={style.container}>
          <div className={style.textContainer}>
            <h1 className={style.text}>
              ¡Hola! Soy{" "}
              <span className={style.textHighlighted}>Tobias</span>.
            </h1>
            <h1 className={style.text}>
              Un apasionado{" "}
              <span className={style.textHighlighted}>
                Desarrollador FullStack
              </span>
              .
            </h1>
          </div>
          <div className={style.buttons}>
            <button className={style.button} onClick={() => handleLanguage()}>
              Change to english
            </button>
            <a className={style.button} href="#projects">Ver mis proyectos</a>
          </div>
        </div>
      ) : (
        <div className={style.container}>
          <div className={style.textContainer}>
            <h1 className={style.text}>
              Hello! I'm{" "}
              <span className={style.textHighlighted}>Tobias</span>.
            </h1>
            <h1 className={style.text}>
              A passionate{" "}
              <span className={style.textHighlighted}>
                FullStack Developer
              </span>
              .
            </h1>
          </div>
          <div className={style.buttons}>
            <button className={style.button} onClick={() => handleLanguage()}>
              Cambiar a español
            </button>
            <button className={style.button}>Check my projects</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Intro;
