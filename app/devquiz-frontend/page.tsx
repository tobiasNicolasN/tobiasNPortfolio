'use client';

import { useLang } from '@/context/LanguageContext';
import Footer from '@/src/Footer';
import NavBar from '@/src/NavBar';
import { Projects, projects } from '@/src/projectsArrays';
import Link from 'next/link';
// import { Octokit } from 'octokit';
// import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // Soporte para GitHub-Flavored Markdown
import rehypeHighlight from 'rehype-highlight'; // Resaltado de sintaxis
import Techs from '@/src/Techs';

export default function DevQuiz() {
  const { language } = useLang();
  const lang = language === 'spanish';
  // const octokid = new Octokit();
  // const [textES, setTextES] = useState<string>('');
  // const [text, setText] = useState<string>('');

  // const getReadme = async () => {
  //   const res = await octokid.request('GET /repos/{owner}/{repo}/readme', {
  //     owner: 'tobiasnicolasn',
  //     repo: 'cashTracker-backend-ts',
  //   });
  //   const resES = await octokid.request('GET /repos/{owner}/{repo}/contents/{path}', {
  //     owner: 'tobiasnicolasn',
  //     repo: 'cashTracker-backend-ts',
  //     path: 'README-ES.md'
  //   });

  //   const readmeContent = atob(res.data.content);
  //   const readmeContentES = atob(resES.data.content);
  //   console.log(readmeContent);
  //   console.log(readmeContentES)
  //   setText(readmeContent);
  //   setTextES(readmeContentES);
  // };

  // useEffect(() => {
  //   getReadme();
  // }, []);

  return (
    <div>
      <div className="w-full flex flex-col items-center mt-14 md:mt-16 lg:mt-20 mb-20">
        <NavBar />
        <main className="flex w-11/12 md:w-10/12 lg:w-10/12 xl:w-9/12 2xl:w-7/12 flex-col justify-center font-sans">
          <Link
            className="animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in w-8 mb-6 md:mb-8"
            href={'/'}
            aria-label="previous page button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5l-7.5-7.5 7.5-7.5M2.25 12h19.5"
              />
            </svg>
          </Link>

          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-2 mb-2 font-semibold font-mono text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            DevQuiz Frontend
          </h1>

          <Techs num={Projects.devQuizBackend} projects={projects} />

          <div className="flex gap-4 mt-4 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            <Link
              className="flex bg-button-light dark:bg-button text-gray-800 dark:text-gray-200 hover:bg-offset-button-light dark:hover:bg-offset-button hover:cursor-pointer ring-second-light dark:ring-second hover:ring-2 p-2 px-4 rounded-lg duration-300 justify-center items-center text-sm md:text-base lg:text-lg xl:text-xl"
              href={'https://devquiz-production.up.railway.app/'}
              target="_blank"
            >
              {lang ? 'Visitar Sitio' : 'Visit Site'}
            </Link>
            <Link
              className="flex bg-button-light dark:bg-button text-gray-800 dark:text-gray-200 hover:bg-offset-button-light dark:hover:bg-offset-button hover:cursor-pointer ring-second-light dark:ring-second hover:ring-2 p-2 px-4 rounded-lg duration-300 justify-center items-center text-sm md:text-base lg:text-lg xl:text-xl"
              href={'https://github.com/tobiasNicolasN/devquiz'}
              target="_blank"
            >
              {lang ? 'Ver Código' : 'View Code'}
            </Link>
          </div>

        </main>
      </div>
      <Footer />
    </div>
  );
}
