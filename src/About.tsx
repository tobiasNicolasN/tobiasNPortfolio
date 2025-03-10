import { useLang } from '@/context/LanguageContext';
import React, { useState } from 'react';
import { Element } from 'react-scroll';

function About() {
  const { language } = useLang();
  const lang = language === 'spanish';
  const [showMoreInfo, setShowMoreInfo] = useState<boolean>(false);

  return (
    <Element name="about">
      <div className="animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
        <h1 className="text-base md:text-lg lg:text-xl xl:text-2xl font-sans text-second-light  dark:text-second duration-300 font-medium inline">
          {lang
            ? 'HOLA, MI NOMBRE ES TOBIAS NICOLAS NUÑEZ.'
            : 'HELLO, MY NAME IS TOBIAS NICOLAS NUÑEZ.'}
        </h1>
      </div>

      <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-2 font-semibold font-mono text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
        {lang ? 'Soy desarrollador FullStack,' : "I'm a FullStack developer,"}
      </h2>

      <h2 className="text-sm md:text-base lg:text-lg xl:text-xl tracking-wider mt-4 text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in ">
        {lang
          ? 'apasionado por la tecnología, la creatividad y la innovación, me especializo en el desarrollo con TypeScript, creando soluciones que optimizan procesos y mejoran la experiencia de los usuarios.'
          : 'passionate about technology, creativity, and innovation, I specialize in development with TypeScript, creating solutions that optimize processes and improve user experience.'}
      </h2>

      <div
        className={`overflow-hidden transition-all duration-[800ms] ${
          showMoreInfo ? 'max-h-[500px]' : 'max-h-0'
        }`}
      >
        <h2 className="text-sm md:text-base lg:text-lg xl:text-xl tracking-wider mt-4 text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
          {lang
            ? 'Soy el creador de Es Vegano? el primer lanzamiento de E&N Code, un proyecto que cofundé con la visión de desarrollar soluciones tecnológicas de impacto real. Actualmente, estoy enfocado en aportar mis conocimientos y creatividad a nuevos desafíos profesionales.'
            : 'I am the creator of Es Vegano? the first release of E&N Code, a project I co-founded with the vision of developing technology solutions with real impact. Currently, I am focused on contributing my knowledge and creativity to new professional challenges.'}
        </h2>

        <h2 className="text-sm md:text-base lg:text-lg xl:text-xl tracking-wider mt-4 text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
        {lang
            ? 'Mi experiencia abarca principalmente el desarrollo de aplicaciones web y móviles, la creación y gestión de bases de datos, el despliegue e implementación en producción, y la automatización de procesos mediante pipelines de CI/CD.'
            : 'My main experience includes web and mobile application development, database creation and management, deployment and production implementation, as well as process automation through CI/CD pipelines.'}
        </h2>

        <h2 className="text-sm md:text-base lg:text-lg xl:text-xl tracking-tracking-wider mt-4 mb-2 text-gray-600 dark:text-gray-300 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
          &quot;
          {lang
            ? `Poner el alma, creatividad y amor en lo que haces, dejando una parte de vos siempre en tu trabajo.`
            : 'To do something with soul, creativity or love; to put something of yourself in your work.'}
          &quot;
        </h2>
      </div>

      <div className="flex justify-center items-center mt-4 text-center animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in hover:text-second-light dark:hover:text-second">
        <button
          className={
            !showMoreInfo
              ? 'flex p-2 rounded-lg justify-center items-center text-sm md:text-base lg:text-lg xl:text-xl tracking-wider mt-4 text-gray-800 bg-button-light dark:bg-button hover:ring-2 hover:ring-second-light dark:hover:ring-second dark:text-gray-200 duration-300'
              : 'flex p-2 rounded-lg justify-center items-center text-sm md:text-base lg:text-lg xl:text-xl tracking-wider mt-4 text-transparent bg-transparent dark:bg-transparent hover:ring-2 hover:ring-transparent dark:hover:ring-transparent dark:text-transparent duration-300 select-none'
          }
          onClick={() => setShowMoreInfo(!showMoreInfo)}
          disabled={showMoreInfo}
        >
          {lang ? 'Más sobre mí' : 'More about me'}
          <svg
            className={showMoreInfo ? 'w-3 h-3 ml-2 mt-1' : 'w-3 h-3 ml-2 mt-1'}
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
        </button>
      </div>
    </Element>
  );
}

export default About;
