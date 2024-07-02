import photo from '../public/images/tobiasnicolasn.png';
import photoEs from '../public/images/spanish.png';
import photoEn from '../public/images/english.png';
import Image from 'next/image';
import { useLang } from '@/context/LanguageContext';
import Link from 'next/link';
import DropDown from './DropDown';

function NavBar() {
  const { language, setLanguage } = useLang();
  const lang = language === 'spanish';

  const changeLanguage = () => {
    language === 'spanish' ? setLanguage('english') : setLanguage('spanish');
  };

  return (
    <div className="flex justify-between items-center mt-4 mx-10 font-sans text-gray-200">
      <div className="flex items-center gap-2">
        {/* <div className="w-11 h-11 items-center relative">
          <Image
            src={photo}
            alt="Picture of the author"
            className="rounded-full border-b border-black"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill={true}
          />
        </div> */}
        <Link
          href="/"
          className="text-2xl font-medium hover:text-offset-second ease-in duration-300"
        >
          Tobias Nuñez
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
          {/* <button
            className="items-center mt-2"
            onClick={() => changeLanguage()}
          >
            {language === 'spanish' ? (
              <div className="w-7 h-7 relative">
                <Image
                  src={photoEn}
                  alt="Picture of the language"
                  className="rounded-full border-b border-black"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  fill={true}
                />
              </div>
            ) : (
              <div className="w-7 h-7 relative">
                <Image
                  src={photoEs}
                  alt="Picture of the language"
                  className="rounded-full border-b border-black"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  fill={true}
                />
              </div>
            )}
          </button> */}
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
