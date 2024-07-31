'use client';

import { useLang } from '@/context/LanguageContext';
import Footer from '@/src/Footer';
import NavBar from '@/src/NavBar';
import { projects } from '@/src/projectsArrays';

export default function Portfolio() {
  const { language } = useLang();
  const lang = language === 'spanish';

  return (
    <div>
      <div className="w-full flex flex-col items-center mt-20 md:mt-36 lg:mt-40">
        <NavBar />
        <main className="flex w-11/12 md:w-10/12 lg:w-10/12 xl:w-9/12 2xl:w-7/12 flex-col justify-center font-sans">
          <div className="animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in"></div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-2 font-semibold font-mono text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            Portfolio
          </h1>
          <div className="flex gap-4 mt-2">
            {projects[0].svg.map((svg, index) => (
              <div
                key={index}
                className="bg-button-light dark:bg-button p-2 rounded-lg"
              >
                <div className="w-6 h-6">{svg}</div>
              </div>
            ))}
          </div>
          <h1 className="text-sm md:text-base lg:text-lg xl:text-xl tracking-wider mt-4 text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in ">
            {lang
              ? 'Los correos electrónicos enviados desde la página son creados utilizando Node.js y Resend. Esta funcionalidad está implementada a través de un endpoint de la API dentro del framework Next.js.'
              : 'Emails sent from the page are created using Node.js and Resend. This functionality is implemented through an API endpoint within the Next.js framework .'}
          </h1>
          <h1 className="text-sm md:text-base lg:text-lg xl:text-xl tracking-tracking-wider mt-2 text-gray-600 dark:text-gray-300 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            {lang ? (
              <>
                Desplegado utilizando{' '}
                <a target="_blank" href="https://railway.app">
                  Railway
                </a>
                , con un dominio personalizado gestionado por{' '}
                <a target="_blank" href="https://www.hostinger.com.ar/">
                  Hostinger
                </a>
                .
              </>
            ) : (
              <>
                Deployed using{' '}
                <a target="_blank" href="https://railway.app" className='text-second-light dark:text-second-light'>
                  Railway
                </a>
                , featuring a custom domain managed by{' '}
                <a target="_blank" href="https://www.hostinger.com.ar/" className='text-second-light dark:text-second-light'>
                  Hostinger
                </a>
                .
              </>
            )}
          </h1>
        </main>
      </div>
      <Footer />
    </div>
  );
}
