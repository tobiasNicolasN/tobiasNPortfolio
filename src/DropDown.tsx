'use client';
import { useState } from 'react';
import SVGEnglish from '../public/images/english.svg';
import SVGSpanish from '../public/images/spanish.svg';
import { useLang } from '@/context/LanguageContext';

function DropDown() {
  const { language, setLanguage } = useLang();
  const lang = language === 'spanish';

  const changeLanguage = () => {
    language === 'spanish' ? setLanguage('english') : setLanguage('spanish');
  };

  const [isOpen, setIsOpen] = useState(false);

  // Abre el menu desplegable mediante un click
  const handleMouseClick = () => {
    setIsOpen(true);
  };

  // Cierra el menu desplegable al dejar de estar en focus por el mouse
  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="relative inline-block mt-1 text-large text-center font-medium text-gray-200"
      onClick={handleMouseClick}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="z-50 duration-200 bg-button hover:ring-2 hover:ring-second rounded-lg min-w-28 px-3 p-2 inline-flex items-center justify-center group"
        id="myButton"
      >
        <div className="w-8 relative mr-2" style={{ aspectRatio: '16/9' }}>
          {lang ? <SVGSpanish /> : <SVGEnglish />}
        </div>
        {lang ? 'ES' : 'EN'}
        <span className="group-hover:text-second duration-200">
          <svg
            className="w-3 h-3 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div
          className="absolute -z-10 top-10 right-0 bg-button rounded-b-lg shadow"
          style={{ width: document.getElementById('myButton')?.offsetWidth }}
        >
          <ul className="py-2">
            <li>
              <button
                onClick={() => {
                  changeLanguage(), setIsOpen(false);
                }}
                className="px-4 py-2 w-full hover:bg-gray-700 inline-flex items-center justify-center"
              >
                <div
                  className="w-8 relative mr-2"
                  style={{ aspectRatio: '16/9' }}
                >
                  {lang ? <SVGEnglish /> : <SVGSpanish />}
                </div>{' '}
                {lang ? 'EN' : 'ES'}
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropDown;
