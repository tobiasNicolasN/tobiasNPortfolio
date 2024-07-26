import { useLang } from '@/context/LanguageContext';
import React from 'react';

function About() {
  const { language } = useLang();
  const lang = language === 'spanish';
  return (
    <>
      <div className="animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
        <h1 className="text-base md:text-lg lg:text-2xl font-sans text-second hover:text-offset-second duration-300 font-medium inline">
          {lang
            ? 'HOLA, MI NOMBRE ES TOBIAS NICOLAS NUÑEZ.'
            : 'HELLO, MY NAME IS TOBIAS NICOLAS NUÑEZ.'}
        </h1>
      </div>
      <h1 className="text-2xl md:text-3xl mt-2 font-semibold font-mono text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
        {lang ? 'Soy desarrollador FullStack,' : "I'm a FullStack developer,"}
      </h1>
      <h1 className="text-sm md:text-base tracking-wider mt-4 text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in ">
        {lang
          ? 'Argentino y entusiasta de la tecnología. Trabajo con TypeScript y me encanta explorar lo último en desarrollo web y móvil.'
          : 'Argentinian and a tech enthusiast. I work with TypeScript and love exploring the latest in web and mobile development.'}
      </h1>
      <h1 className="text-sm md:text-base tracking-tracking-wider mt-2 text-gray-300 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
        &quot;
        {lang
          ? `Poner el alma, creatividad y amor en lo que haces, dejando una parte de vos siempre en tu trabajo.`
          : 'To do something with soul, creativity or love; to put something of yourself in your work.'}
        &quot;
      </h1>
    </>
  );
}

export default About;
