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
    <div className={`flex flex-col lg:grid lg:grid-cols-2 gap-4 duration-300 mt-6`}>
      {projects.map((data, index) => (
        <Link
          href={data.name.toLocaleLowerCase()}
          key={index}
          className="flex flex-col rounded-lg items-center bg-button-light dark:bg-button lg:hover:ring-2 ring-second-light dark:ring-second dark:bg-opacity-50 w-full lg:hover:bg-opacity-100 duration-300 cursor-pointer"
        >
          <div className="w-full p-4 flex flex-col font-mono gap-2 text-left">
            <div>
              <Image src={`/images/${data.name.toLocaleLowerCase()}.png`} alt="hola" width={1400} height={100} className='rounded-lg'/>
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
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Projects;
