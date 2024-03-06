import style from "../styles/Intro.module.css";
import { IoIosArrowDropdown } from "react-icons/io";
import Sidebar from "./SideBar";

interface Props {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  scrollToAbout: () => void;
  scrollToProjects: () => void;
}

function Intro({
  language,
  setLanguage,
  scrollToAbout,
  scrollToProjects,
}: Props) {
  const handleLanguage = () => {
    language === "es" ? setLanguage("en") : setLanguage("es");
  };

  return (
    <>
      {language === "es" ? (
        <div className={style.container}>
          <div className={style.textContainer}>
            <h1 className={style.text}>
              ¡Hola! Soy <span className={style.textHighlighted}>Tobias</span>.
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
            <button className={style.button} onClick={scrollToProjects}>
              Ver mis proyectos
            </button>
          </div>
          <div className={style.scrollContainer}>
            <a onClick={scrollToAbout} className={style.scrollDown}>
              <IoIosArrowDropdown />
            </a>
          </div>
          <Sidebar />
        </div>
      ) : (
        <div className={style.container}>
          <div className={style.textContainer}>
            <h1 className={style.text}>
              Hello! I'm <span className={style.textHighlighted}>Tobias</span>.
            </h1>
            <h1 className={style.text}>
              A passionate{" "}
              <span className={style.textHighlighted}>FullStack Developer</span>
              .
            </h1>
          </div>
          <div className={style.buttons}>
            <button className={style.button} onClick={() => handleLanguage()}>
              Cambiar a español
            </button>
            <button className={style.button} onClick={scrollToProjects}>
              Check my projects
            </button>
          </div>
          <a onClick={scrollToAbout} className={style.scrollDown}>
            <IoIosArrowDropdown />
          </a>
          <Sidebar />
        </div>
      )}
    </>
  );
}

export default Intro;
