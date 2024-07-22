'use client';

import { useLang } from '@/context/LanguageContext';
import { Link } from 'react-scroll';
import DropDown from './DropDown';
import { useState } from 'react';
import SVGMenu from '../public/images/menu.svg'

function NavBar() {
  const { language } = useLang();
  const lang = language === 'spanish';
  const [activeSection, setActiveSection] = useState<string>('');
  const [bgmax, setBgmax] = useState<boolean>(false);

  return (
    <>
      {/* {mobile menu} */}
      <div
  onClick={() => setBgmax(true)}
  className={`bg-button fixed duration-300 z-50 flex items-center justify-center ${
    bgmax ? 'w-full h-full top-0 right-0' : 'top-2 right-2 w-12 h-12 rounded-xl'
  }`}
>
  <div className={`absolute top-2 right-2 w-8 h-8 duration-500 ${bgmax ? "bg-bg" : ""}`}>
  {bgmax ? <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg> : <SVGMenu/>}
  </div>
  {/* Your content here */}
</div>


      <div className="w-full p-2 flex flex-col md:items-center fixed bg-bg top-0 z-40">
        <div className="flex md:justify-between md:items-center mt-2 mb-2 md:w-8/12 font-sans text-gray-200">
          <div className="md:flex md:items-center gap-2">
            <Link
              href="/"
              to=""
              className="ml-2 md:ml-0 text-2xl font-medium hover:text-offset-second ease-in duration-300"
            >
              TobiasNicolasN
            </Link>
          </div>
          <ul className="hidden md:flex items-center justify-center gap-4">
            <li>
              <Link
                className="group transition-all duration-200 ease-in-out text-xl"
                href="/"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={() => setActiveSection('projects')}
              >
                <span className="bg-left-bottom bg-gradient-to-r from-second to-second bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-700 ease-out">
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
                onSetActive={() => setActiveSection('skills')}
              >
                <span className="bg-left-bottom bg-gradient-to-r from-second to-second bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-700 ease-out">
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
                onSetActive={() => setActiveSection('contact')}
              >
                <span className="bg-left-bottom bg-gradient-to-r from-second to-second bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-700 ease-out">
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
