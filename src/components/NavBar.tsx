import style from "../styles/NavBar.module.css";
import { useState } from "react";
import { IoMenu, IoCloseSharp } from "react-icons/io5";

interface Props {
  language: string;
  scrollToAbout: () => void
  scrollToProjects: () => void
  scrollToContact: () => void

}

function NavBar({ language, scrollToAbout, scrollToContact, scrollToProjects }: Props) {
  const [showMenu, setShowMenu] = useState(false);
  
  const handleMenu = () => {
    setShowMenu(!showMenu);
    document.body.style.overflow = showMenu ? "auto" : "hidden";
  };

  const handleMenuItemClick = () => {
    setShowMenu(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className={style.container}>
        <h1 className={style.name}>TobiasNicolasN.</h1>
        <ul className={style.nav}>
          <li>
            <a className={style.navItem} onClick={() => {handleMenuItemClick(), scrollToAbout()}}>
              {language === "es" ? "Sobre mi" : "About me"}
            </a>
          </li>
          <li>
            <a className={style.navItem} onClick={() => {handleMenuItemClick(), scrollToProjects()}}>
              {language === "es" ? "Proyectos" : "Projects"}
            </a>
          </li>
          <li>
            <a className={style.navItem} onClick={() => {handleMenuItemClick(), scrollToContact()}}>
              {language === "es" ? "Contacto" : "Contact"}
            </a>
          </li>
        </ul>
        <a className={style.menuButton}>
          <IoMenu onClick={() => handleMenu()} />
        </a>

        <div className={showMenu ? `${style.menu} ${style.showMenu}` : style.hide}>
          <ul className={style.navMenu}>
            <a className={style.closeButton} onClick={() => handleMenu()}>
              <IoCloseSharp />
            </a>
            <li>
              <a className={style.navMenuItem} onClick={() => {handleMenuItemClick(), scrollToAbout()}}>
                {language === "es" ? "Sobre mi" : "About me"}
              </a>
            </li>
            <li>
              <a className={style.navMenuItem} onClick={() => {handleMenuItemClick(), scrollToProjects()}}>
                {language === "es" ? "Proyectos" : "Projects"}
              </a>
            </li>
            <li>
              <a className={style.navMenuItem} onClick={() => {handleMenuItemClick(), scrollToContact()}}>
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
