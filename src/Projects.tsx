'use client';
import { useLang } from '@/context/LanguageContext';
import { IProjects } from './projectsArrays';

interface IProjectsProps{
  projects: IProjects[]
}

function Projects({projects}: IProjectsProps) {
  const { language } = useLang();
  const lang = language === 'spanish';

  return (
      <div className={`flex flex-col lg:flex-row gap-6 duration-300 mt-6`}>
        {projects.map((data, index) => (
          <div
          key={index}
            className="flex flex-col rounded-lg items-center bg-button hover:ring-2 ring-second bg-opacity-50 w-full lg:w-1/3 hover:bg-opacity-100 hover:scale-105 duration-300 cursor-pointer"
          >
            <div className="w-full p-4 flex flex-col font-mono gap-2 text-left">
              <h1 className="text-xl text-gray-200 tracking-wide">{data.name}</h1>
                <div className={`flex flex-wrap gap-4`}>
                  {data.svg.map((data, index) => 
                  <div key={index} className='w-6 h-6'>
                    {data}
                  </div>
                    )}
                </div>
                <h1 className="font-sans text-base mb-4 text-gray-300">
                  {lang ? data.description[0] : data.description[1]}
                </h1>
            </div>
          </div>
        ))}
      </div>
  );
}

export default Projects;
