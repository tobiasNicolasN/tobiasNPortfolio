'use client';
import { useLang } from '@/context/LanguageContext';
import { IProjects } from './projectsArrays';
import Link from 'next/link';
import Image from 'next/image';

interface IProjectsProps {
  projects: IProjects[];
}

function Projects({ projects }: IProjectsProps) {
  const { language } = useLang();
  const lang = language === 'spanish';

  return (
    <div
      className={`flex flex-col lg:grid lg:grid-cols-2 gap-4 duration-300 mt-6`}
    >
      {projects.map((data, index) => (
        <div
          key={index}
          className="flex flex-col rounded-lg items-center bg-button-light dark:bg-button dark:bg-opacity-50 w-full duration-300"
        >
          <div className="w-full p-4 flex flex-col font-mono gap-2 text-left">
            <div>
              <Image
                src={`/images/${data.photo.toLocaleLowerCase()}.png`}
                alt={lang ? 'Imagen del proyecto' : 'Project image'}
                width={1400}
                height={100}
                className="rounded-lg object-cover w-full max-h-64"
              />
            </div>
            <h1 className="text-lg md:text-xl xl:text-2xl text-gray-800 font-medium dark:text-gray-200 tracking-wider">
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
            <div className="flex gap-2">
              {data.site !== undefined ? (
                <Link
                  href={data.site}
                  target="_blank"
                  className="flex bg-button-light dark:bg-button text-gray-800 dark:text-gray-200 hover:bg-offset-button-light dark:hover:bg-offset-button hover:cursor-pointer ring-second-light dark:ring-second hover:ring-2 p-2 px-4 rounded-lg duration-300 justify-center items-center text-sm md:text-base lg:text-lg xl:text-xl"
                >
                  {lang ? 'Visitar Sitio' : 'Visit Site'}
                </Link>
              ) : (
                ''
              )}
              {data.code !== undefined ? (
                <Link
                  href={data.code}
                  target="_blank"
                  className="flex bg-button-light dark:bg-button text-gray-800 dark:text-gray-200 hover:bg-offset-button-light dark:hover:bg-offset-button hover:cursor-pointer ring-second-light dark:ring-second hover:ring-2 p-2 px-4 rounded-lg duration-300 justify-center items-center text-sm md:text-base lg:text-lg xl:text-xl"
                >
                  {lang ? 'Ver Código' : 'View Code'}
                </Link>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
