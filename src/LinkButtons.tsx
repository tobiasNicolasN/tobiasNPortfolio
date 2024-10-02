import Link from 'next/link';
import React from 'react';

interface ILinkButtonsProps {
  siteRef?: string;
  codeRef?: string;
  lang: boolean;
}

function LinkButtons({ siteRef, codeRef, lang }: ILinkButtonsProps) {
  return (
    <>
      <div className="flex gap-4 mt-4 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
        {siteRef !== undefined ? (
          <Link
            className="flex bg-button-light dark:bg-button text-gray-800 dark:text-gray-200 hover:bg-offset-button-light dark:hover:bg-offset-button hover:cursor-pointer ring-second-light dark:ring-second hover:ring-2 p-2 px-4 rounded-lg duration-300 justify-center items-center text-sm md:text-base lg:text-lg xl:text-xl"
            href={siteRef}
            target="_blank"
          >
            {lang ? 'Visitar Sitio' : 'Visit Site'}
          </Link>
        ) : (
          ''
        )}
        {codeRef !== undefined ? (
          <Link
            className="flex bg-button-light dark:bg-button text-gray-800 dark:text-gray-200 hover:bg-offset-button-light dark:hover:bg-offset-button hover:cursor-pointer ring-second-light dark:ring-second hover:ring-2 p-2 px-4 rounded-lg duration-300 justify-center items-center text-sm md:text-base lg:text-lg xl:text-xl"
            href={codeRef}
            target="_blank"
          >
            {lang ? 'Ver Código' : 'View Code'}
          </Link>
        ) : (
          ''
        )}
      </div>
    </>
  );
}

export default LinkButtons;
