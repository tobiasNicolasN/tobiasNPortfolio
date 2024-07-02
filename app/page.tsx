'use client';

import { useLang } from '@/context/LanguageContext';
import Footer from '@/src/Footer';
import NavBar from '@/src/NavBar';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
  const { language, setLanguage } = useLang();
  const lang = language === 'spanish';

  useEffect(() => {
    setLanguage('spanish');
  }, []);

  return (
    <>
      <NavBar />
      <div className="w-full flex flex-col items-center justify-center mb-20">
        <main className="flex flex-col justify-center p-24 font-sans">
          <div>
            <Link
              href="/about"
              className="text-2xl font-sans text-second font-medium inline"
            >
              {lang
                ? 'HOLA, MI NOMBRE ES TOBIAS NUÑEZ.'
                : 'HELLO, MY NAME IS TOBIAS NUÑEZ.'}
            </Link>
          </div>
          <h1 className="text-5xl mt-4 font-semibold font-mono text-slate-200">
            {lang
              ? 'Soy desarrollador FullStack,'
              : "I'm a FullStack developer,"}
          </h1>
          <h1 className="text-xl tracking-wide mt-8 text-slate-200">
            {lang
              ? 'Argentino y entusiasta de la tecnología. Trabajo con TypeScript y me encanta explorar lo último en desarrollo web y móvil.'
              : 'Argentinian and a tech enthusiast. I work with TypeScript and love exploring the latest in web and mobile development.'}
          </h1>
        </main>
      </div>
      <Footer/>
    </>
  );
}
