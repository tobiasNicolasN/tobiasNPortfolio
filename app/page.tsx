'use client';

import { useLang } from '@/context/LanguageContext';
import Contact from '@/src/Contact';
import Footer from '@/src/Footer';
import NavBar from '@/src/NavBar';
import Skills from '@/src/Skills';
import Link from 'next/link';

export default function Home() {
  const { language } = useLang();
  const lang = language === 'spanish';

  return (
    <div>
      <NavBar />
      <div className="w-full flex flex-col items-center mt-32 md:mt-40">
        <main className="flex w-11/12 md:w-8/12 flex-col justify-center font-sans">
          <div className="animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            <Link
              href="/about"
              className="text-base md:text-2xl font-sans text-second hover:text-offset-second duration-300 font-medium inline"
            >
              {lang
                ? 'HOLA, MI NOMBRE ES TOBIAS NICOLAS NUÑEZ.'
                : 'HELLO, MY NAME IS TOBIAS NICOLAS NUÑEZ.'}
            </Link>
          </div>
          <h1 className="text-2xl md:text-5xl mt-2 md:mt-4 font-semibold font-mono text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            {lang
              ? 'Soy desarrollador FullStack,'
              : "I'm a FullStack developer,"}
          </h1>
          <h1 className="text-sm md:text-xl tracking-wider mt-4 md:mt-8 text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in ">
            {lang
              ? 'Argentino y entusiasta de la tecnología. Trabajo con TypeScript y me encanta explorar lo último en desarrollo web y móvil.'
              : 'Argentinian and a tech enthusiast. I work with TypeScript and love exploring the latest in web and mobile development.'}
          </h1>
          <h1 className="text-sm md:text-xl tracking-tracking-wider mt-2 text-gray-300 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            &quot;
            {lang
              ? `Poner el alma, creatividad y amor en lo que haces, dejando una parte de vos siempre en tu trabajo.`
              : 'To do something with soul, creativity or love; to put something of yourself in your work.'}
            &quot;
          </h1>
          {/* <Projects /> */}
          <Skills />
          <Contact />
        </main>
      </div>
      <Footer />
    </div>
  );
}
