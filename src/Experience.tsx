import { Element } from 'react-scroll';
import { useLang } from '@/context/LanguageContext';

function Experience() {
  const { language } = useLang();
  const lang = language === 'spanish';
  return (
    <Element
      name="experience"
      className="flex flex-col w-full items-left mt-28 md:mt-32 lg:mt-40 font-sans text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-500 animate-ease-in"
    >
      <h1 className="text-lg md:text-xl xl:text-2xl font-mono font-medium">
        {lang ? 'Experiencia' : 'Experience'}
      </h1>
      <ol className="border-s mt-30 mt-4 border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="text-[10px] md:text-xs lg:text-sm xl:text-base tracking-tracking-wider mt-4 mb-2 text-gray-600 dark:text-gray-300">
            {lang ? 'Enero 2025 - Presente' : 'January 2025 - Present'}
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {lang
              ? 'Envio Duelos - Desarrollador Backend'
              : 'Envio Duelos - Backend Developer'}
          </h3>
          <p className="mb-4 text-xs md:text-sm lg:text-base xl:text-lg tracking-tracking-wider text-gray-600 dark:text-gray-300">
            {lang
              ? 'Desarrollo y mantenimiento del backend utilizando Node.js, MongoDB y JWT. Integración de pasarela de pagos con MercadoPago, automatización de procesos mediante web scraping y pruebas funcionales con Postman.'
              : 'Development and maintenance of the backend using Node.js, MongoDB and JWT. Integration of payment gateway with MercadoPago, automation of processes through web scraping and functional tests with Postman.'}
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="text-[10px] md:text-xs lg:text-sm xl:text-base tracking-tracking-wider mt-4 mb-2 text-gray-600 dark:text-gray-300">
            {lang
              ? 'Enero 2024 - Febrero 2025'
              : 'January 2024 - February 2025'}
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {lang
              ? 'E&N Code - Desarrollador FullStack'
              : 'E&N Code - FullStack Developer'}
          </h3>
          <p className="text-xs md:text-sm lg:text-base xl:text-lg tracking-tracking-wider text-gray-600 dark:text-gray-300">
            {lang
              ? 'Desarrollo de aplicación móvil con Expo, React Native, TypeScript y Firebase. Colaboración en el diseño UX/UI utilizand Figma. Automatización del build AAB mediante GitHub Actions. Gestión de AdMob y despliegue en Play Console. Desarrollo de panel administrativo con React, TypeScript y Firebase.'
              : 'Development of mobile application with Expo, React Native, TypeScript and Firebase. Collaboration in UX/UI design using Figma. Automation of AAB build using GitHub Actions. AdMob management and deployment in Play Console. Development of admin panel with React, TypeScript and Firebase.'}
          </p>
        </li>
      </ol>
    </Element>
  );
}

export default Experience;
