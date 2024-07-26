'use client';

import { useLang } from '@/context/LanguageContext';
import { Link } from 'react-scroll';
import DropDown from './DropDown';
import { useEffect, useState } from 'react';

function NavBar() {
  const { language, setLanguage } = useLang();
  const lang = language === 'spanish';
  const [menu, setMenu] = useState<boolean>(false);

  // Desactiva el scroll de la pagina cuando se abre el menu
  useEffect(() => {
    if (menu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto'; // Asegura que se reactive el scroll al desmontar
    };
  }, [menu]);

  return (
    <>
      {/* {Menu para dispositivos moviles} */}
      <div
        className={`lg:hidden bg-button fixed duration-500 z-50 flex items-center text-left justify-center ${
          menu
            ? 'w-full h-full top-0 right-0'
            : 'top-2 right-4 md:right-14 w-10 h-10 rounded-xl'
        }`}
      >
        <ul
          className={`flex flex-col font-sans gap-3 text-xl text-gray-200 ${
            menu
              ? 'animate-fade-down animate-once animate-duration-300 animate-delay-500 animate-ease-in'
              : 'hidden'
          }`}
        >
          <li className='bg-offset-button rounded-lg flex justify-center text-base p-1'>
            <Link
              href="/"
              to="projects"
              onClick={() => setMenu(false)}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {' '}
              <span className="font-semibold">01</span>{' '}
              {lang ? 'proyectos' : 'projects'}
            </Link>
          </li>
          <li className='bg-offset-button rounded-lg flex justify-center text-base p-1'>
            <Link
              href="/"
              to="skills"
              onClick={() => setMenu(false)}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className="font-semibold">02</span>{' '}
              {lang ? 'habilidades' : 'skills'}
            </Link>
          </li>
          <li className='bg-offset-button rounded-lg flex justify-center text-base p-1'>
            <Link
              href="/"
              to="contact"
              onClick={() => setMenu(false)}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {' '}
              <span className="font-semibold">03</span>{' '}
              {lang ? 'contacto' : 'contact'}
            </Link>
          </li>
          <li>
            <div className="flex gap-4">
              <button
                onClick={() => setLanguage('spanish')}
                className={`z-50 text-xs duration-200 bg-offset-button ring-second rounded-lg min-w-28 px-3 p-2 inline-flex items-center justify-center group ${
                  lang ? 'ring-2' : ''
                }`}
              >
                
                ESPAÑOL
              </button>
              <button
                onClick={() => setLanguage('english')}
                className={`z-50 text-xs duration-200 bg-offset-button ring-second rounded-lg min-w-28 px-3 p-2 inline-flex items-center justify-center group ${
                  lang ? '' : 'ring-2'
                }`}
              >
                
                ENGLISH
              </button>
            </div>
          </li>
        </ul>
      </div>
      <div
        onClick={() => setMenu(!menu)}
        className={`lg:hidden bg-button fixed top-2 z-50 rounded-lg right-4 md:right-14 w-10 h-10 flex items-center justify-center hover:cursor-pointer ${
          menu ? '' : ''
        }`}
      >
        <div
          className={`${
            menu ? 'w-6 flex items-center justify-center' : 'space-y-1'
          } `}
        >
          <div
            className={`w-6 h-[2px] bg-white duration-500 ${
              menu ? 'rotate-45 absolute' : ''
            }`}
          ></div>
          <div
            className={`w-6 h-[2px] bg-white duration-500 ${
              menu ? '-rotate-45 absolute' : ''
            }`}
          ></div>
          <div
            className={`w-6 h-[2px] bg-white duration-200 ${menu ? 'hidden' : ''}`}
          ></div>
        </div>
      </div>

      <div className="w-full py-1 flex flex-col items-center fixed bg-bg top-0 z-40">
        <div className="flex md:justify-between md:items-center mt-2 mb-2 w-11/12 md:w-10/12 lg:w-9/12 font-sans text-gray-200">
          <div className="md:flex md:items-center gap-2">
            <Link
              href="/"
              to=""
              className="text-xl md:text-2xl font-medium hover:text-offset-second ease-in duration-300"
            >
              TobiasNicolasN
            </Link>
          </div>
          <ul className="hidden lg:flex items-center justify-center gap-4">
            <li>
              <Link
                className="group transition-all duration-200 ease-in-out text-xl"
                href="/"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <span
                  className={`bg-left-bottom bg-gradient-to-r from-second to-second bg-[length:0%_2px] bg-no-repeat transition-all duration-700 ease-out `}
                >
                  <span className="font-semibold">01</span>{' '}
                  {lang ? 'proyectos' : 'projects'}
                </span>
              </Link>
            </li>
            <li>
              <Link
                className="group transition-all duration-200 ease-in-out text-xl"
                href="/"
                to="skills"
                spy={true}
                smooth={true}
                offset={-150}
                duration={700}
              >
                <span
                  className={`bg-left-bottom bg-gradient-to-r from-second to-second bg-[length:0%_2px] bg-no-repeat transition-all duration-700 ease-out`}
                >
                  <span className="font-semibold">02</span>{' '}
                  {lang ? 'habilidades' : 'skills'}
                </span>
              </Link>
            </li>
            <li>
              <Link
                className="group transition-all ease-in-out text-xl"
                href="/"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                <span
                  className={`bg-left-bottom bg-gradient-to-r from-second to-second bg-[length:0%_2px] bg-no-repeat transition-all duration-700 ease-out`}
                >
                  <span className="font-semibold">03</span>{' '}
                  {lang ? 'contacto' : 'contact'}
                </span>
              </Link>
            </li>
            <li>
              <DropDown />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
