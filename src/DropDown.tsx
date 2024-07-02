'use client';
import Image from 'next/image';
import { useState } from 'react';
import photoEs from '../public/images/spanish.png';
import photoEn from '../public/images/english.png';
import { useLang } from '@/context/LanguageContext';

function DropDown() {
  const { language, setLanguage } = useLang();
  const lang = language === 'spanish';

  const changeLanguage = () => {
    language === 'spanish' ? setLanguage('english') : setLanguage('spanish');
  };

  const [isOpen, setIsOpen] = useState(false);

  // Manejar el evento hover
  const handleMouseClick = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
      setIsOpen(false);
  };

  return (
    <div
      className="relative inline-block mt-1 text-large text-center font-medium"
      onClick={handleMouseClick}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="z-10 text-white duration-200 bg-button hover:bg-offset-button hover:ring-2  hover:ring-second rounded-lg  px-3 p-2 inline-flex items-center justify-center group"
        id="myButton"
      >
        <div className="w-8 relative mr-2" style={{ aspectRatio: '16/9' }}>
          {lang ? (
            <Image
              src={photoEs}
              alt="Spain flag"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill={true}
            />
          ) : (
            <Image
              src={photoEn}
              alt="Uk flag"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill={true}
            />
          )}
        </div>
        ES
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
          className="absolute right-0 bg-offset-button rounded-b-lg shadow"
          style={{ width: document.getElementById('myButton')?.offsetWidth }}
        >
          <ul className="py-2">
            <li>
              <button
                onClick={() => {changeLanguage(), setIsOpen(false)}}
                className="px-4 py-2 w-full hover:bg-gray-700 inline-flex items-center justify-center"
              >
                <div
                  className="w-8 relative mr-2"
                  style={{ aspectRatio: '16/9' }}
                >
                  {lang ? (
                    <Image
                      src={photoEn}
                      alt="UK FLAG"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      fill={true}
                    />
                  ) : (
                    <Image
                      src={photoEs}
                      alt="SPAIN FLAG"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      fill={true}
                    />
                  )}
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
