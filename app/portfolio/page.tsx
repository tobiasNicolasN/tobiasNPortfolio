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
      <div className="w-full flex flex-col items-center mt-20 md:mt-36 lg:mt-40 mb-12">
        <NavBar />
        <main className="flex w-11/12 md:w-10/12 lg:w-10/12 xl:w-9/12 2xl:w-7/12 flex-col justify-center font-sans">
          <div className="animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in"></div>

          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-2 font-semibold font-mono text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            Portfolio
          </h1>
          <div className="flex gap-4 mt-2 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in  ">
            {projects[0].svg.map((svg, index) => (
              <div
                key={index}
                className="bg-button-light dark:bg-button p-2 rounded-lg"
              >
                <div className="w-6 h-6">{svg}</div>
              </div>
            ))}
          </div>

          <h1 className="mt-8 text-lg md:text-xl lg:text-xl xl:text-xl font-semibold font-mono text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            {lang ? 'Diseño y Experiencia' : 'Design and Experience'}
          </h1>
          <h1 className="text-sm md:text-base lg:text-lg xl:text-xl tracking-wider text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            {lang
              ? 'En este proyecto, busqué un enfoque minimalista, centrado en la simplicidad y la usabilidad. Incluye:'
              : 'In this project, I adopted a minimalist approach, focusing on simplicity and usability. It includes:'}
          </h1>
          <h1 className="text-sm md:text-base lg:text-lg xl:text-xl mt-2 tracking-wider text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            {lang
              ? 'Modos Claro y Oscuro: Implementados con next-themes, permitiendo a los usuarios cambiar entre los temas claro y oscuro de manera sencilla.'
              : 'Light and Dark Modes: Implemented with next-themes, allowing users to easily switch between light and dark themes.'}
          </h1>
          <h1 className="text-sm md:text-base lg:text-lg xl:text-xl mt-2 tracking-wider text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            {lang
              ? 'Modo de Dispositivo: Detecta el tema por defecto del sistema del usuario. Al reconocer la configuración del tema del dispositivo, la aplicación se adapta automáticamente para coincidir con el tema preferido del usuario.'
              : 'Device Mode: Detects the user’s default system theme. By recognizing the device’s theme settings, the application automatically adapts to match the user’s preferred theme.'}
          </h1>
          <h1 className="text-sm md:text-base lg:text-lg xl:text-xl mt-2 tracking-wider text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            {lang
              ? 'El diseño está construido con Tailwind CSS, asegurando una adaptabilidad desde dispositivos móviles pequeños hasta pantallas 4K.'
              : 'The design is built with Tailwind CSS, ensuring adaptability from small mobile devices to 4K displays.'}
          </h1>

          <h1 className="mt-8 text-lg md:text-xl lg:text-xl xl:text-xl font-semibold font-mono text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            {lang ? 'Formulario de Envío de Correos' : 'Email Submission Form'}
          </h1>
          <h1 className="text-sm md:text-base lg:text-lg xl:text-xl tracking-wider text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            {lang
              ? 'Los correos electrónicos enviados desde la página son creados utilizando Node.js y Resend. Esta funcionalidad está implementada a través de un endpoint de la API dentro del framework Next.js.'
              : 'Emails sent from the page are created using Node.js and Resend. This functionality is implemented through an API endpoint within the Next.js framework.'}
          </h1>
          <h1 className="text-sm md:text-base lg:text-lg xl:text-xl mt-2 tracking-wider text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            {lang
              ? 'El manejo de errores para el envío de correos electrónicos se realiza con react-hook-form, ofreciendo una forma robusta de validar formularios y manejar errores. Esto asegura que los usuarios reciban retroalimentación clara si surgen problemas durante el envío de correos.'
              : 'Error handling for email sending is managed with react-hook-form, providing a robust way to validate forms and handle errors. This ensures users receive clear feedback if issues arise during email submission.'}
          </h1>

          <h1 className="text-lg md:text-xl mt-8 lg:text-xl xl:text-xl font-semibold font-mono text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
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
                  className="text-second-light dark:text-second"
                >
                  Railway
                </a>
                , con un dominio personalizado gestionado por{' '}
                <a
                  target="_blank"
                  href="https://www.hostinger.com.ar/"
                  className="text-second-light dark:text-second"
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
                  className="text-second-light dark:text-second"
                >
                  Railway
                </a>
                , featuring a custom domain managed by{' '}
                <a
                  target="_blank"
                  href="https://www.hostinger.com.ar/"
                  className="text-second-light dark:text-second"
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
