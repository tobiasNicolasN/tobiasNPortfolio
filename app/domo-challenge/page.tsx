'use client';

import { useLang } from '@/context/LanguageContext';
import Footer from '@/src/Footer';
import NavBar from '@/src/NavBar';
import { Projects, projects } from '@/src/projectsArrays';
import Techs from '@/src/Techs';
import PreviousPageButton from '@/src/PreviousPageButton';
import LinkButtons from '@/src/LinkButtons';

export default function DevQuiz() {
  const { language } = useLang();
  const lang = language === 'spanish';

  return (
    <div>
      <div className="w-full flex flex-col items-center mt-14 md:mt-16 lg:mt-20 mb-20">
        <NavBar />
        <main className="flex w-11/12 md:w-10/12 lg:w-10/12 xl:w-9/12 2xl:w-7/12 flex-col justify-center font-sans">
          <PreviousPageButton />

          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-2 mb-2 font-semibold font-mono text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            Domo Challenge
          </h1>

          <Techs num={Projects.domoChallenge} projects={projects} />

          <LinkButtons
            lang={lang}
            codeRef={'https://github.com/tobiasNicolasN/DOMOChallenge'}
            siteRef={'https://domochallenge-production.up.railway.app/'}
          />
        </main>
      </div>
      <Footer />
    </div>
  );
}
