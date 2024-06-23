import { useState } from 'react';
import photo from './images/tobiasnicolasn.png';
import photoEs from './images/spanish.png';
import photoEn from './images/english.png';
import Image from 'next/image';

function NavBar() {
  const [language, setLanguage] = useState("spanish")

  const changeLanguage = () => {
    language === "spanish" ? 
    setLanguage("english") : setLanguage("spanish")
    console.log("cambiar idioma")
  }

  return (
    <div className="flex justify-between items-center py-4 px-14 font-sans text-gray-200">
      <div className="flex items-center gap-2">
        <div className="w-11 h-11 items-center relative">
          <Image
            src={photo}
            alt="Picture of the author"
            layout="fill"
            className="rounded-full border-b border-black"
          />
        </div>
        <a href='/' className='text-l font-medium'>Tobias Nuñez</a>
      </div>

      <ul className="flex items-center justify-center align-middle gap-4">
        <li>
          <a href="/">
            <span className="font-semibold">01</span> {language === "spanish" ? "Inicio" : "Home"}
          </a>
        </li>
        <li>
          <a href="/proyects">
            <span className="font-semibold">02</span> {language === "spanish" ? "Proyectos" : "Projects"}
          </a>
        </li>
        <li>
          <a href="/about">
            <span className="font-semibold">03</span> {language === "spanish" ? "Sobre mi" : "About me"}
          </a>
        </li>
        <li>
        <button className='w-7 h-7 items-center mt-2 relative' onClick={() => changeLanguage()}>{language === "spanish" ? <div>
          <Image
            src={photoEn}
            alt="Picture of the author"
            layout="fill"
            className="rounded-full border-b border-black"
          />
        </div> : <Image
            src={photoEs}
            alt="Picture of the author"
            layout="fill"
            className="rounded-full border-b border-black"
          />}</button>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
