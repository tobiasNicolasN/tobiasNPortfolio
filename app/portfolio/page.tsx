'use client';

import { useLang } from '@/context/LanguageContext';
import Footer from '@/src/Footer';
import NavBar from '@/src/NavBar';
import { projects } from '@/src/projectsArrays';
import Link from 'next/link';

export default function Portfolio() {
  const { language } = useLang();
  const lang = language === 'spanish';

  return (
    <div>
      <div className="w-full flex flex-col items-center mt-14 md:mt-16 lg:mt-20 mb-20">
        <NavBar />
        <main className="flex w-11/12 md:w-10/12 lg:w-10/12 xl:w-9/12 2xl:w-7/12 flex-col justify-center font-sans">
          <Link
            className="animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in w-8 mb-6 md:mb-8"
            href={'/'}
            aria-label="previous page button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5l-7.5-7.5 7.5-7.5M2.25 12h19.5"
              />
            </svg>
          </Link>

          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-2 mb-2 font-semibold font-mono text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            Portfolio
          </h1>
          <div className="flex gap-4 mt-2 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in  ">
            {projects[0].svg.map((svg, index) => (
              <div
                key={index}
                className="bg-button-light dark:bg-button p-2 rounded-lg"
              >
                <div className="w-6 md:w-8 lg:w-10 h-6 md:h-8 lg:h-10">
                  {svg}
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-4 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            <Link
              className="flex bg-button-light dark:bg-button text-gray-800 dark:text-gray-200 hover:bg-offset-button-light dark:hover:bg-offset-button hover:cursor-pointer ring-second-light dark:ring-second hover:ring-2 p-2 px-4 rounded-lg duration-300 justify-center items-center text-sm md:text-base lg:text-lg xl:text-xl"
              href={'https://www.tobiasnicolasn.com/'}
              target="_blank"
            >
              {lang ? 'Visitar Sitio' : 'Visit Site'}
            </Link>
            <Link
              className="flex bg-button-light dark:bg-button text-gray-800 dark:text-gray-200 hover:bg-offset-button-light dark:hover:bg-offset-button hover:cursor-pointer ring-second-light dark:ring-second hover:ring-2 p-2 px-4 rounded-lg duration-300 justify-center items-center text-sm md:text-base lg:text-lg xl:text-xl"
              href={'https://github.com/tobiasNicolasN/tobiasNPortfolio'}
              target="_blank"
            >
              {lang ? 'Ver Código' : 'View Code'}
            </Link>
          </div>
          <h1 className="mt-8 mb-1 lg:mb-2 text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium font-mono text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            {lang ? 'Diseño y Experiencia' : 'Design and Experience'}
          </h1>
          <h1 className="text-sm md:text-base lg:text-lg xl:text-xl tracking-wider text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            {lang
              ? 'En este proyecto, busqué un enfoque minimalista, centrado en la simplicidad y la usabilidad. Incluye:'
              : 'In this project, I adopted a minimalist approach, focusing on simplicity and usability. It includes:'}
          </h1>
          <h1 className="text-sm md:text-base lg:text-lg xl:text-xl mt-2 tracking-wider text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            {lang
              ? 'Filtro de Proyectos: Se implementó un filtro basado en tecnologías, permitiendo a los usuarios buscar y visualizar fácilmente los proyectos que utilizan las tecnologías de su interés.'
              : 'Project Filter: A technology-based filter was implemented, enabling users to easily search and view projects that use the technologies of their interest.'}
          </h1>
          <h1 className="text-sm md:text-base lg:text-lg xl:text-xl mt-2 tracking-wider text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            {lang ? (
              <>
                Cambio de Idioma: Visualización en inglés o español, con un
                cambio instantáneo implementado mediante un Contexto en{' '}
                <a
                  target="_blank"
                  href="https://nextjs.org/"
                  className="text-second-light hover:text-offset-second-light dark:text-second dark:hover:text-offset-second underline"
                >
                  Next.js
                </a>
                .
              </>
            ) : (
              <>
                Language Switch: View in English or Spanish, with instant
                switching implemented using a Context in{' '}
                <a
                  target="_blank"
                  href="https://nextjs.org/"
                  className="text-second-light hover:text-offset-second-light dark:text-second dark:hover:text-offset-second underline"
                >
                  Next.js
                </a>
                .
              </>
            )}
          </h1>
          <h1 className="text-sm md:text-base lg:text-lg xl:text-xl mt-2 tracking-wider text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            {lang ? (
              <>
                Modos Claro y Oscuro: Implementados con{' '}
                <a
                  target="_blank"
                  href="https://github.com/pacocoursey/next-themes"
                  className="text-second-light hover:text-offset-second-light dark:text-second dark:hover:text-offset-second underline"
                >
                  next-themes
                </a>
                , permitiendo a los usuarios cambiar entre los temas claro y
                oscuro de manera sencilla.
              </>
            ) : (
              <>
                Light and Dark Modes: Implemented with{' '}
                <a
                  target="_blank"
                  href="https://github.com/pacocoursey/next-themes"
                  className="text-second-light hover:text-offset-second-light dark:text-second dark:hover:text-offset-second underline"
                >
                  next-themes
                </a>
                , allowing users to easily switch between light and dark themes.
              </>
            )}
          </h1>
          <h1 className="text-sm md:text-base lg:text-lg xl:text-xl mt-2 tracking-wider text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            {lang
              ? 'Modo de Dispositivo: Detecta el tema por defecto del sistema del usuario.'
              : 'Device Mode: Detects the user’s default system theme.'}
          </h1>
          <h1 className="text-sm md:text-base lg:text-lg xl:text-xl mt-2 tracking-wider text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            {lang ? (
              <>
                El diseño está construido con{' '}
                <a
                  target="_blank"
                  href="https://tailwindcss.com/"
                  className="text-second-light hover:text-offset-second-light dark:text-second dark:hover:text-offset-second underline"
                >
                  Tailwind CSS
                </a>
                , asegurando una adaptabilidad desde dispositivos móviles
                pequeños hasta pantallas 4K.
              </>
            ) : (
              <>
                The design is built with{' '}
                <a
                  target="_blank"
                  href="https://tailwindcss.com/"
                  className="text-second-light hover:text-offset-second-light dark:text-second dark:hover:text-offset-second underline"
                >
                  Tailwind CSS
                </a>
                , ensuring adaptability from small mobile devices to 4K
                displays.
              </>
            )}
          </h1>

          <h1 className="mt-8 mb-1 lg:mb-2 text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium font-mono text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            {lang ? 'Formulario de Envío de Correos' : 'Email Submission Form'}
          </h1>
          <h1 className="text-sm md:text-base lg:text-lg xl:text-xl tracking-wider text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            {lang ? (
              <>
                Los correos electrónicos enviados desde la página son creados
                utilizando{' '}
                <a
                  target="_blank"
                  href="https://nodejs.org/en"
                  className="text-second-light hover:text-offset-second-light dark:text-second dark:hover:text-offset-second underline"
                >
                  Node.js
                </a>{' '}
                y{' '}
                <a
                  target="_blank"
                  href="https://resend.com/"
                  className="text-second-light hover:text-offset-second-light dark:text-second dark:hover:text-offset-second underline"
                >
                  Resend
                </a>
                . Esta funcionalidad está implementada a través de un endpoint
                de la API dentro del framework{' '}
                <a
                  target="_blank"
                  href="https://nextjs.org/"
                  className="text-second-light hover:text-offset-second-light dark:text-second dark:hover:text-offset-second underline"
                >
                  Next.js
                </a>
                .
              </>
            ) : (
              <>
                Emails sent from the page are created using{' '}
                <a
                  target="_blank"
                  href="https://nodejs.org/en"
                  className="text-second-light hover:text-offset-second-light dark:text-second dark:hover:text-offset-second underline"
                >
                  Node.js
                </a>{' '}
                and{' '}
                <a
                  target="_blank"
                  href="https://resend.com/"
                  className="text-second-light hover:text-offset-second-light dark:text-second dark:hover:text-offset-second underline"
                >
                  Resend
                </a>
                . This functionality is implemented through an API endpoint
                within the{' '}
                <a
                  target="_blank"
                  href="https://nextjs.org/"
                  className="text-second-light hover:text-offset-second-light dark:text-second dark:hover:text-offset-second underline"
                >
                  Next.js
                </a>{' '}
                framework.
              </>
            )}
          </h1>
          <h1 className="text-sm md:text-base lg:text-lg xl:text-xl mt-2 tracking-wider text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            {lang ? (
              <>
                El manejo de errores para el envío de correos electrónicos se
                realiza con{' '}
                <a
                  target="_blank"
                  href="https://react-hook-form.com/get-started"
                  className="text-second-light hover:text-offset-second-light dark:text-second dark:hover:text-offset-second underline"
                >
                  react-hook-form
                </a>
                , ofreciendo una forma robusta de validar formularios y manejar
                errores. Esto asegura que los usuarios reciban retroalimentación
                clara si surgen problemas durante el envío de correos.
              </>
            ) : (
              <>
                Error handling for email sending is managed with{' '}
                <a
                  target="_blank"
                  href="https://react-hook-form.com/get-started"
                  className="text-second-light hover:text-offset-second-light dark:text-second dark:hover:text-offset-second underline"
                >
                  react-hook-form
                </a>
                , providing a robust way to validate forms and handle errors.
                This ensures users receive clear feedback if issues arise during
                email submission.
              </>
            )}
          </h1>

          <h1 className="mt-8 mb-1 lg:mb-2 text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium font-mono text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            {lang
              ? 'Hosting y Configuración de Dominio'
              : 'Hosting and Domain Configuration'}
          </h1>
          <h1 className="text-sm md:text-base lg:text-lg xl:text-xl tracking-wider text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            {lang ? (
              <>
                Desplegado utilizando{' '}
                <a
                  target="_blank"
                  href="https://railway.app"
                  className="text-second-light hover:text-offset-second-light dark:text-second dark:hover:text-offset-second underline"
                >
                  Railway
                </a>
                , con un dominio personalizado gestionado por{' '}
                <a
                  target="_blank"
                  href="https://www.hostinger.com/"
                  className="text-second-light hover:text-offset-second-light dark:text-second dark:hover:text-offset-second underline"
                >
                  Hostinger
                </a>
                .
              </>
            ) : (
              <>
                Deployed using{' '}
                <a
                  target="_blank"
                  href="https://railway.app"
                  className="text-second-light hover:text-offset-second-light dark:text-second dark:hover:text-offset-second underline"
                >
                  Railway
                </a>
                , featuring a custom domain managed by{' '}
                <a
                  target="_blank"
                  href="https://www.hostinger.com/"
                  className="text-second-light hover:text-offset-second-light dark:text-second dark:hover:text-offset-second underline"
                >
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
