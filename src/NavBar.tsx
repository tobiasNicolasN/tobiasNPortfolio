import { useLang } from '@/context/LanguageContext';
import { Link } from 'react-scroll'
import DropDown from './DropDown';
import { useState } from 'react';

function NavBar() {
  const { language } = useLang();
  const lang = language === 'spanish';
  const [activeSection, setActiveSection] = useState<string>('');

  return (
    <div className="w-full flex flex-col items-center fixed bg-bg top-0 z-50">
      <div className="flex justify-between items-center mt-2 mb-2 w-8/12 font-sans text-gray-200">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            to=''
            className="text-2xl font-medium hover:text-offset-second ease-in duration-300"
          >
            TobiasNicolasN
          </Link>
        </div>
        <ul className="flex items-center justify-center align-middle gap-4">
          <li>
            <Link
              className="group transition-all duration-200 ease-in-out text-xl"
              href="/"
              to='projects'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onSetActive={() => setActiveSection("projects")}
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
              to='skills'
              spy={true}
              smooth={true}
              offset={-150}
              duration={700}
              onSetActive={() => setActiveSection("skills")}
            >
              <span className="bg-left-bottom bg-gradient-to-r from-second to-second bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-700 ease-out">

              {/* <span
                className={`bg-left-bottom bg-gradient-to-r from-second to-second bg-[length:0%_2px] bg-no-repeat transition-all duration-700 ease-out ${
                  activeSection === 'skills'
                    ? 'bg-[length:100%_2px]'
                    : 'group-hover:bg-[length:100%_2px]'
                }`}
              > */}

                <span className="font-semibold">02</span>{' '}
                {lang ? 'habilidades' : 'skills'}
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="group transition-all ease-in-out text-xl"
              href="/"
              to='contact'
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
              onSetActive={() => setActiveSection("contact")}
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
  );
}

export default NavBar;
