import { useLang } from '@/context/LanguageContext';
import React from 'react';
import { Element } from 'react-scroll';

function About() {
  const { language } = useLang();
  const lang = language === 'spanish';
  return (
    <Element name='about'>
      <div className="animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
        <h1 className="text-base md:text-lg lg:text-xl xl:text-2xl font-sans text-second-light  dark:text-second duration-300 font-medium inline">
          {lang
            ? 'HOLA, MI NOMBRE ES TOBIAS NICOLAS NUÑEZ.'
            : 'HELLO, MY NAME IS TOBIAS NICOLAS NUÑEZ.'}
        </h1 >
      </div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-2 font-semibold font-mono text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
        {lang ? 'Soy desarrollador FullStack,' : "I'm a FullStack developer,"}
      </h2>
      <h2 className="text-sm md:text-base lg:text-lg xl:text-xl tracking-wider mt-4 text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in ">
        {lang
          ? 'Argentino y entusiasta de la tecnología. Trabajo con TypeScript y me encanta explorar lo último en desarrollo web y móvil.'
          : 'Argentinian and a tech enthusiast. I work with TypeScript and love exploring the latest in web and mobile development.'}
      </h2>
      <h2 className="text-sm md:text-base lg:text-lg xl:text-xl tracking-tracking-wider mt-2 mb-2 text-gray-600 dark:text-gray-300 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
        &quot;
        {lang
          ? `Poner el alma, creatividad y amor en lo que haces, dejando una parte de vos siempre en tu trabajo.`
          : 'To do something with soul, creativity or love; to put something of yourself in your work.'}
        &quot;
      </h2>
    </Element>
  );
}

export default About;
