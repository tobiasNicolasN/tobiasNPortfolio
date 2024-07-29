'use client';

import Contact from '@/src/Contact';
import Footer from '@/src/Footer';
import NavBar from '@/src/NavBar';
import Skills from '@/src/Skills';
import About from '../src/About';

export default function Home() {
  return (
    <div>
      <div className="w-full flex flex-col items-center mt-32 md:mt-36 lg:mt-40">
      <NavBar />
        <main className="flex w-11/12 md:w-10/12 lg:w-10/12 flex-col justify-center font-sans">
          <About />
          <Skills />
          <Contact />
        </main>
      </div>
      <Footer />
    </div>
  );
}
