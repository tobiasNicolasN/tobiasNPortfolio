import { useLang } from '@/context/LanguageContext';
import {projects} from './projectsArrays'

function Projects() {
  const { language } = useLang();
  const lang = language === 'spanish';
  
  return (
    <div className="flex flex-col w-full items-left mt-40 mb-40 font-sans text-gray-200">
      <h1 className="text-4xl font-mono font-medium">
        {lang ? 'PROYECTOS' : 'PROJECTS'}
      </h1>
      <div
        className={`flex flex-wrap gap-6 duration-300 mt-6`}
      >
        {projects.map((data, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg items-center bg-button hover:ring-2 ring-second bg-opacity-50 w-72 h-72 hover:bg-opacity-100 hover:scale-105 duration-300 cursor-pointer"
            >
              <div className='w-full p-4 flex flex-col font-mono gap-2 text-left'>
                <h1 className="text-3xl  tracking-wide">{data.name}</h1>
                <h1 className='font-sans text-base opacity-0 duration-300 hover:opacity-100 text-gray-300'>{lang ? data.description[0] : data.description[1]}</h1>
              </div>
              
            </div>
          ))}
      </div>
    </div>
  );
}

export default Projects;
