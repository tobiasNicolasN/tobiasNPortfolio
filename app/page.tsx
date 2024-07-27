'use client';

import Contact from '@/src/Contact';
import Footer from '@/src/Footer';
import NavBar from '@/src/NavBar';
import Skills from '@/src/Skills';
import About from '../src/About';
// import { useTheme } from 'next-themes';

export default function Home() {
  // const { theme, setTheme } = useTheme()
  // const themes = ["dark", "light"]
  return (
    <div>
      <div className="w-full flex flex-col items-center mt-32 md:mt-36 lg:mt-40">
      {/* <button onClick={() => theme === "dark" ? setTheme("light") : setTheme("dark")}>cambiar theme</button> */}
      <NavBar />
        <main className="flex w-11/12 md:w-10/12 lg:w-9/12 flex-col justify-center font-sans">
          <About />
          <Skills />
          <Contact />
        </main>
      </div>
      <Footer />
    </div>
  );
}
