import { useLang } from '@/context/LanguageContext';
import Link from 'next/link';
import DropDown from './DropDown';

function NavBar() {
  const { language } = useLang();
  const lang = language === 'spanish';

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex justify-between items-center mt-6 w-8/12 font-sans text-gray-200">
        <div className="flex items-center gap-2">
          <Link
            href="/"
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
            >
              <span className="bg-left-bottom bg-gradient-to-r from-second to-second bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-700 ease-out">
                <span className="font-semibold">01</span>{' '}
                {lang ? 'Inicio' : 'home'}
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="group transition-all duration-200 ease-in-out text-xl"
              href="/projects"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-second to-second bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-700 ease-out">
                <span className="font-semibold">02</span>{' '}
                {lang ? 'proyectos' : 'projects'}
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="group transition-all duration-200 ease-in-out text-xl"
              href="/about"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-second to-second bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-700 ease-out">
                <span className="font-semibold">03</span>{' '}
                {lang ? 'sobre mi' : 'about me'}
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
