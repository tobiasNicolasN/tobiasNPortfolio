import style from "../styles/NavBar.module.css";
import { useState } from "react";
import { IoMenu, IoCloseSharp } from "react-icons/io5";

interface Props {
  language: string;
  onSectionChange: (sectionId: string) => void;
}

function NavBar({ language, onSectionChange }: Props) {
  const [showMenu, setShowMenu] = useState(false);
  
  const handleMenu = () => {
    setShowMenu(!showMenu);
    document.body.style.overflow = showMenu ? "auto" : "hidden";
  };

  const handleMenuItemClick = (sectionId: string) => {
    setShowMenu(false);
    document.body.style.overflow = "auto";
    onSectionChange(sectionId);
  };

  return (
    <>
      <div className={style.container}>
        <h1 className={style.name}>TobiasNicolasN.</h1>
        <ul className={style.nav}>
          <li>
            <a className={style.navItem} href="#about" onClick={() => handleMenuItemClick("about")}>
              {language === "es" ? "Sobre mi" : "About me"}
            </a>
          </li>
          <li>
            <a className={style.navItem} href="#projects" onClick={() => handleMenuItemClick("projects")}>
              {language === "es" ? "Proyectos" : "Projects"}
            </a>
          </li>
          <li>
            <a className={style.navItem} href="#contact" onClick={() => handleMenuItemClick("contact")}>
              {language === "es" ? "Contacto" : "Contact"}
            </a>
          </li>
        </ul>
        <a className={style.menuButton} href="#">
          <IoMenu onClick={() => handleMenu()} />
        </a>

        <div className={showMenu ? `${style.menu} ${style.showMenu}` : style.hide}>
          <ul className={style.navMenu}>
            <a className={style.closeButton} onClick={() => handleMenu()}>
              <IoCloseSharp />
            </a>
            <li>
              <a className={style.navMenuItem} href="#about" onClick={() => handleMenuItemClick("about")}>
                {language === "es" ? "Sobre mi" : "About me"}
              </a>
            </li>
            <li>
              <a className={style.navMenuItem} href="#projects" onClick={() => handleMenuItemClick("projects")}>
                {language === "es" ? "Proyectos" : "Projects"}
              </a>
            </li>
            <li>
              <a className={style.navMenuItem} href="#contact" onClick={() => handleMenuItemClick("contact")}>
                {language === "es" ? "Contacto" : "Contact"}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
