'use client';

import { useLang } from '@/context/LanguageContext';
import Footer from '@/src/Footer';
import NavBar from '@/src/NavBar';
import PreviousPageButton from '@/src/PreviousPageButton';
import { Projects, projects } from '@/src/projectsArrays';
import Techs from '@/src/Techs';
import Link from 'next/link';

export default function CashTracker() {
  const { language } = useLang();
  const lang = language === 'spanish';

  return (
    <div>
      <div className="w-full flex flex-col items-center mt-14 md:mt-16 lg:mt-20 mb-20">
        <NavBar />
        <main className="flex w-11/12 md:w-10/12 lg:w-10/12 xl:w-9/12 2xl:w-7/12 flex-col justify-center font-sans">
          <PreviousPageButton/>

          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-2 mb-2 font-semibold font-mono text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            CashTracker
          </h1>

          <Techs projects={projects} num={Projects.cashTrackerBackend} />


          <div className="flex gap-4 mt-4 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            <Link
              className="flex bg-button-light dark:bg-button text-gray-800 dark:text-gray-200 lg:hover:bg-offset-button-light lg:dark:hover:bg-offset-button hover:cursor-pointer ring-second-light dark:ring-second lg:hover:ring-2 p-2 px-4 rounded-lg duration-300 justify-center items-center text-sm md:text-base lg:text-lg xl:text-xl"
              href={'https://github.com/tobiasNicolasN/cashTracker-backend-ts'}
              target="_blank"
            >
              {lang ? 'Ver Código' : 'View Code'}
            </Link>
          </div>

          <h2 className="mt-8 mb-1 lg:mb-2 text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium font-mono text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            {lang
              ? 'Servidor, Base de Datos y Configuración'
              : 'Server, Database, and Configuration'}
          </h2>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            {lang ? (
              <>
                El servidor utiliza{' '}
                <a
                  target="_blank"
                  href="https://expressjs.com/"
                  className="text-second-light hover:text-offset-second-light dark:text-second dark:hover:text-offset-second underline"
                >
                  Express.js
                </a>
                , configurado con CORS para permitir solicitudes desde el origen
                especificado, con soporte para credenciales. La base de datos es{' '}
                <a
                  target="_blank"
                  href="https://www.mongodb.com/"
                  className="text-second-light hover:text-offset-second-light dark:text-second dark:hover:text-offset-second underline"
                >
                  MongoDB
                </a>
                , gestionada mediante{' '}
                <a
                  target="_blank"
                  href="https://mongoosejs.com/"
                  className="text-second-light hover:text-offset-second-light dark:text-second dark:hover:text-offset-second underline"
                >
                  Mongoose
                </a>{' '}
                para la conexión y manipulación eficiente de datos.
              </>
            ) : (
              <>
                The server uses{' '}
                <a
                  target="_blank"
                  href="https://expressjs.com/"
                  className="text-second-light hover:text-offset-second-light dark:text-second dark:hover:text-offset-second underline"
                >
                  Express.js
                </a>
                , configured with CORS to allow requests from the specified
                origin with support for credentials.{' '}
                <a
                  target="_blank"
                  href="https://www.mongodb.com/"
                  className="text-second-light hover:text-offset-second-light dark:text-second dark:hover:text-offset-second underline"
                >
                  MongoDB
                </a>{' '}
                is used for the database, managed with{' '}
                <a
                  target="_blank"
                  href="https://mongoosejs.com/"
                  className="text-second-light hover:text-offset-second-light dark:text-second dark:hover:text-offset-second underline"
                >
                  Mongoose
                </a>{' '}
                for data handling and manipulation.
              </>
            )}
          </p>

          <h2 className="mt-8 mb-1 lg:mb-2 text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium font-mono text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            {lang
              ? 'Autenticación y Autorización'
              : 'Authentication and Authorization'}
          </h2>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            {lang ? (
              <>
                Utiliza{' '}
                <a
                  target="_blank"
                  href="https://github.com/auth0/node-jsonwebtoken"
                  className="text-second-light hover:text-offset-second-light dark:text-second dark:hover:text-offset-second underline"
                >
                  JSON Web Tokens (JWT)
                </a>{' '}
                para autenticar y autorizar usuarios. Los usuarios reciben un
                token al registrarse o iniciar sesión, que deben incluir en cada
                solicitud.
              </>
            ) : (
              <>
                Uses{' '}
                <a
                  target="_blank"
                  href="https://github.com/auth0/node-jsonwebtoken"
                  className="text-second-light hover:text-offset-second-light dark:text-second dark:hover:text-offset-second underline"
                >
                  JSON Web Tokens (JWT)
                </a>{' '}
                for user authentication and authorization. Users receive a token
                after registering or logging in, which they must include in each
                request.
              </>
            )}
          </p>

          <h2 className="mt-8 mb-1 lg:mb-2 text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium font-mono text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            {lang ? 'Validación de Datos' : 'Data Validation'}
          </h2>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            {lang ? (
              <>
                Utiliza{' '}
                <a
                  target="_blank"
                  href="https://zod.dev/"
                  className="text-second-light hover:text-offset-second-light dark:text-second dark:hover:text-offset-second underline"
                >
                  Zod
                </a>{' '}
                para la validación de datos, asegurando que las entradas de los
                usuarios cumplan con los esquemas definidos antes de ser
                procesadas. Esto ayuda a prevenir errores y mejorar la seguridad
                y fiabilidad del sistema.
              </>
            ) : (
              <>
                Uses{' '}
                <a
                  target="_blank"
                  href="https://zod.dev/"
                  className="text-second-light hover:text-offset-second-light dark:text-second dark:hover:text-offset-second underline"
                >
                  Zod
                </a>{' '}
                for data validation, ensuring that user inputs conform to
                defined schemas before being processed. This helps prevent
                errors and enhances the security and reliability of the system.
              </>
            )}
          </p>

          <h2 className="mt-8 mb-1 lg:mb-2 text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium font-mono text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            {lang
              ? 'API Externa para Conversión de Divisas'
              : 'External API for Currency Conversion'}
          </h2>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            {lang ? (
              <>
                La aplicación utiliza la API externa{' '}
                <a
                  target="_blank"
                  href="https://dolarapi.com/docs/"
                  className="text-second-light hover:text-offset-second-light dark:text-second dark:hover:text-offset-second underline"
                >
                  DolarApi
                </a>{' '}
                para obtener la cotización del dólar en tiempo real. Esta
                integración permite convertir los gastos registrados a la moneda
                local con precisión, ajustándose al valor actual del dólar.
              </>
            ) : (
              <>
                The application leverages the external{' '}
                <a
                  target="_blank"
                  href="https://dolarapi.com/docs/"
                  className="text-second-light hover:text-offset-second-light dark:text-second dark:hover:text-offset-second underline"
                >
                  DolarApi
                </a>{' '}
                to fetch real-time exchange rates for the dollar. This
                integration enables accurate conversion of recorded expenses
                into the local currency, reflecting the current dollar value.
              </>
            )}
          </p>

          <h2 className="mt-8 mb-1 lg:mb-2 text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium font-mono text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            {lang ? 'Despliegue' : 'Deployment'}
          </h2>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
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
                .
              </>
            )}
          </p>
        </main>
      </div>
      <Footer />
    </div>
  );
}
