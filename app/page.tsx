'use client';

import { useLang } from '@/context/LanguageContext';
import Contact from '@/src/Contact';
import Footer from '@/src/Footer';
import NavBar from '@/src/NavBar';
import Skills from '@/src/Skills';
import About from '../src/About';

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="w-full flex flex-col items-center mt-32 md:mt-40">
        <main className="flex w-11/12 md:w-8/12 flex-col justify-center font-sans">
          <About />
          {/* <Projects /> */}
          <Skills />
          <Contact />
        </main>
      </div>
      <Footer />
    </div>
  );
}
