'use client';
import { Dispatch, SetStateAction, useState } from 'react';
import SVGDark from '../public/images/dark.svg';
import SVGLight from '../public/images/light.svg';
import SVGSystem from '../public/images/system.svg';
import { useTheme } from 'next-themes';

interface IThemeDropDownProps {
  systemMode: string;
  updateSystemMode: (value: string) => void;
}

function ThemeDropDown({ systemMode, updateSystemMode }: IThemeDropDownProps) {
  const { setTheme, resolvedTheme } = useTheme();
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
      className="relative inline-block mt-1 text-large text-center font-medium text-gray-800 dark:text-gray-200"
      onClick={handleMouseClick}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="z-50 duration-300 bg-button-light dark:bg-button hover:ring-2 hover:ring-second-light dark:hover:ring-second rounded-lg min-w-28 px-3 p-2 inline-flex items-center justify-center group"
        id="myButton"
      >
        <div className="w-[30.1px]" style={{ aspectRatio: '16/9' }}>
          {resolvedTheme === 'dark' ? <SVGDark /> : <SVGLight />}
        </div>
        <span className="group-hover:text-second-light dark:group-hover:text-second duration-300">
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
          className="absolute -z-10 top-10 right-0 bg-button-light dark:bg-button rounded-b-lg shadow"
          style={{ width: document.getElementById('myButton')?.offsetWidth }}
        >
          <ul className="py-2">
            <li>
              <button
                onClick={() => {
                  setTheme(resolvedTheme === 'dark' ? 'light' : 'dark'),
                    updateSystemMode('false'),
                    setIsOpen(false);
                }}
                className="px-4 py-2 w-full hover:bg-offset-button-light dark:hover:bg-gray-700 inline-flex items-center justify-center"
              >
                <div className="w-[30.1px]" style={{ aspectRatio: '16/9' }}>
                  {resolvedTheme !== 'dark' ? <SVGDark /> : <SVGLight />}
                </div>
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setTheme('system'),
                    updateSystemMode('true'),
                    setIsOpen(false);
                }}
                className="px-4 py-2 w-full hover:bg-offset-button-light dark:hover:bg-gray-700 inline-flex items-center justify-center"
              >
                <div
                  className={
                    systemMode === 'true'
                      ? 'text-second-light dark:text-second'
                      : 'text-gray-800 dark:text-gray-200'
                  }
                  style={{ aspectRatio: '16/9' }}
                >
                  <SVGSystem />
                </div>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ThemeDropDown;
