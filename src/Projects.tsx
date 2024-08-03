'use client';
import { useLang } from '@/context/LanguageContext';
import { IProjects } from './projectsArrays';
import Link from 'next/link';

interface IProjectsProps {
  projects: IProjects[];
}

function Projects({ projects }: IProjectsProps) {
  const { language } = useLang();
  const lang = language === 'spanish';

  return (
    <div className={`flex flex-col lg:flex-row gap-6 duration-300 mt-6`}>
      {projects.map((data, index) => (
        <Link
          href={
            data.name === 'Portfolio'
              ? `/${data.name.toLocaleLowerCase()}`
              : '/'
          }
          key={index}
          className="flex flex-col rounded-lg items-center bg-button-light dark:bg-button hover:ring-2 ring-second-light dark:ring-second bg-opacity-50 w-full lg:w-1/2 hover:bg-opacity-100 hover:scale-105 duration-300 cursor-pointer"
        >
          <div className="w-full p-4 flex flex-col font-mono gap-2 text-left">
            <h1 className="text-lg md:text-xl xl:text-2xl text-gray-800 dark:text-gray-200 tracking-wide">
              {data.name}
            </h1>
            <div className={`flex flex-wrap gap-4`}>
              {data.svg.map((data, index) => (
                <div
                  key={index}
                  className="text-gray-800 dark:text-gray-200 w-6 xl:w-8 h-6 xl:h-8"
                >
                  {data}
                </div>
              ))}
            </div>
            <h1 className="font-sans text-base md:text-lg xl:text-xl mb-4 text-gray-700 dark:text-gray-300">
              {lang ? data.description[0] : data.description[1]}
            </h1>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Projects;
