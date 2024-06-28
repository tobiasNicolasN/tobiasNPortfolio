import photo from '../public/images/tobiasnicolasn.png';
import photoEs from '../public/images/spanish.png';
import photoEn from '../public/images/english.png';
import Image from 'next/image';
import { useLang } from '@/context/LanguageContext';

function NavBar() {
  const { language, setLanguage } = useLang();
  const lang = language === 'spanish';

  const changeLanguage = () => {
    language === 'spanish' ? setLanguage('english') : setLanguage('spanish');
  };

  return (
    <div className="flex justify-between items-center p-14 mx-10 font-sans text-gray-200">
      <div className="flex items-center gap-2">
        <div className="w-11 h-11 items-center relative">
          <Image
            src={photo}
            alt="Picture of the author"
            className="rounded-full border-b border-black"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill={true}
          />
        </div>
        <a href="/" className="text-xl font-medium">
          Tobias Nuñez
        </a>
      </div>

      <ul className="flex items-center justify-center align-middle gap-4">
        <li>
          <a href="/">
            <span className="font-semibold">01</span> {lang ? 'inicio' : 'home'}
          </a>
        </li>
        <li>
          <a href="/proyects">
            <span className="font-semibold">02</span>{' '}
            {lang ? 'proyectos' : 'projects'}
          </a>
        </li>
        <li>
          <a href="/about">
            <span className="font-semibold">03</span>{' '}
            {lang ? 'sobre mi' : 'about'}
          </a>
        </li>
        <li>
          <button
            className="items-center mt-2"
            onClick={() => changeLanguage()}
          >
            {language === 'spanish' ? (
              <div className='w-7 h-7 relative'>
                <Image
                  src={photoEn}
                  alt="Picture of the language"
                  className="rounded-full border-b border-black"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  fill={true}
                />
              </div>
            ) : (
              <div className='w-7 h-7 relative'>
                <Image
                  src={photoEs}
                  alt="Picture of the language"
                  className="rounded-full border-b border-black"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  fill={true}
                />
              </div>
            )}
          </button>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
