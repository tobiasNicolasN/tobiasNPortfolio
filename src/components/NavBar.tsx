import style from "../styles/NavBar.module.css";
import { useState } from "react";
import { IoMenu, IoCloseSharp } from "react-icons/io5";

interface Props {
  language: string;
}

function NavBar({ language }: Props) {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {language === "es" ? (
        <div className={style.container}>
          <h1 className={style.name}>TobiasNicolasN.</h1>
          <ul className={style.nav}>
            <li>
              <a className={style.navItem} href="#">
                Sobre mi
              </a>
            </li>
            <li>
              <a className={style.navItem} href="#">
                Proyectos
              </a>
            </li>
            <li>
              <a className={style.navItem} href="#">
                Contacto
              </a>
            </li>
          </ul>
          <a className={style.menuButton} href="#">
            <IoMenu onClick={() => handleMenu()} />
          </a>

          <div
            className={
              showMenu ? `${style.menu} ${style.showMenu}` : style.hide
            }
          >
            <ul className={style.navMenu}>
              <a className={style.closeButton} onClick={() => handleMenu()}>
                <IoCloseSharp />
              </a>
              <li>
                <a className={style.navMenuItem} href="#">
                  Sobre mi
                </a>
              </li>
              <li>
                <a className={style.navMenuItem} href="#">
                  Proyectos
                </a>
              </li>
              <li>
                <a className={style.navMenuItem} href="#">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className={style.container}>
          <h1 className={style.name}>TobiasNicolasN.</h1>
          <ul className={style.nav}>
            <li>
              <a className={style.navItem} href="#">
                About me
              </a>
            </li>
            <li>
              <a className={style.navItem} href="#">
                Projects
              </a>
            </li>
            <li>
              <a className={style.navItem} href="#">
                Contact
              </a>
            </li>
          </ul>
          <a className={style.menuButton} href="#">
            <IoMenu onClick={() => handleMenu()} />
          </a>

          <div
            className={
              showMenu ? `${style.menu} ${style.showMenu}` : style.hide
            }
          >
            <ul className={style.navMenu}>
              <a className={style.closeButton} onClick={() => handleMenu()}>
                <IoCloseSharp />
              </a>
              <li>
                <a className={style.navMenuItem} href="#">
                  About me
                </a>
              </li>
              <li>
                <a className={style.navMenuItem} href="#">
                  Projects
                </a>
              </li>
              <li>
                <a className={style.navMenuItem} href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
