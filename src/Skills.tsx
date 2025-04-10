'use client';
import { useState } from 'react';
import {
  ISkills,
  skillsBack,
  skillsFront,
  skillsOthers,
  skillsTools,
} from './skillsArrays';
import { useLang } from '@/context/LanguageContext';
import { Element } from 'react-scroll';
import Projects from './Projects';
import { projects } from './projectsArrays';
import ClearFilter from './ClearFilter';

function Skills() {
  const { language } = useLang();
  const lang = language === 'spanish';

  // 0 = Front-end, 1 = Back-end, 2 = Tools, 3 = Others
  const [skill, setSkill] = useState<number>(0);
  const [animationSkills, setAnimationSkills] = useState(false);
  const [techs, setTechs] = useState<string[]>([]);

  // Realiza la transición previa al cambio de array
  const changeSkill = (numSkills: number) => {
    setAnimationSkills(true);
    setTimeout(() => {
      setSkill(numSkills);
      setAnimationSkills(false);
    }, 200);
  };

  const skills: ISkills[][] = [
    skillsFront,
    skillsBack,
    skillsTools,
    skillsOthers,
  ];

  // Añade y elimina la tecnologia indicada del estado de tecnologias para manejar el filtro
  const toggleTech = (tech: string) => {
    setTechs((prevTechs) => {
      const index = prevTechs.indexOf(tech.toLowerCase());
      if (index === -1) {
        return [...prevTechs, tech.toLowerCase()];
      } else {
        return prevTechs.filter((t) => t !== tech.toLowerCase());
      }
    });
  };

  // Filtra los proyectos mediante el estado de tecnologias
  const filteredProjects = projects.filter((project) =>
    techs.every((tech) => project.techs.includes(tech))
  );

  return (
    <Element
      name="projects"
      className="flex flex-col w-full items-left mt-28 mb-28 md:mt-32 md:mb-32 lg:mt-40 lg:mb-40 font-sans text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-[900ms] animate-ease-in"
    >
      <h1 className="text-lg md:text-xl xl:text-2xl font-mono font-medium">
        {lang ? 'Proyectos' : 'Projects'}
      </h1>
      <p className="text-xs md:text-sm lg:text-base text-gray-600 dark:text-gray-300 mt-2">
        {lang
          ? 'Seleccioná las tecnologías para filtrar los proyectos:'
          : 'Select technologies to filter projects:'}
      </p>
      {/* Botones de seleccion de tecnologias */}
      <div className="flex flex-col mt-4">
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-4 mb-4 md:mb-4 text-xs md:text-xs lg:text-sm">
          <button
            className={`duration-300 bg-button-light shadow-lg dark:bg-button hover:bg-offset-button-light dark:hover:bg-offset-button hover:ring-2  w-auto  hover:ring-second-light dark:hover:ring-second rounded-lg md:p-2 inline-flex items-center justify-center py-2 ${
              skill === 0 ? 'ring-second-light dark:ring-second ring-2' : ''
            }`}
            onClick={() => changeSkill(0)}
            id="button"
          >
            Frontend
          </button>
          <button
            className={`duration-300 bg-button-light shadow-lg dark:bg-button hover:bg-offset-button-light dark:hover:bg-offset-button hover:ring-2  w-auto  hover:ring-second-light dark:hover:ring-second rounded-lg md:p-2 inline-flex items-center justify-center py-2 ${
              skill === 1 ? 'ring-second-light dark:ring-second ring-2' : ''
            }`}
            onClick={() => changeSkill(1)}
          >
            Backend
          </button>
          <button
            className={`duration-300 bg-button-light shadow-lg dark:bg-button hover:bg-offset-button-light dark:hover:bg-offset-button hover:ring-2  w-auto  hover:ring-second-light dark:hover:ring-second rounded-lg md:p-2 inline-flex items-center justify-center py-2 ${
              skill === 2 ? 'ring-second-light dark:ring-second ring-2' : ''
            }`}
            onClick={() => changeSkill(2)}
          >
            Tools
          </button>
          <button
            className={`duration-300 bg-button-light shadow-lg dark:bg-button hover:bg-offset-button-light dark:hover:bg-offset-button hover:ring-2  w-auto  hover:ring-second-light dark:hover:ring-second rounded-lg md:p-2 inline-flex items-center justify-center py- ${
              skill === 3 ? 'ring-second-light dark:ring-second ring-2' : ''
            }`}
            onClick={() => changeSkill(3)}
          >
            {lang ? 'Otras' : 'Others'}
          </button>
        </div>
        {/* Tarjetas de tecnologias */}
        <div
          className={`grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-4 duration-300 ${
            animationSkills ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {skills[skill].map((data, index) => (
            <div
              onClick={() => {
                if (skill !== 3) {
                  toggleTech(data.name);
                }
              }}
              key={index}
              className={`flex shadow-lg flex-col gap-2 md:gap-3 rounded-lg items-center justify-center bg-button-light dark:bg-button dark:bg-opacity-50 dark:hover:bg-opacity-100  w-auto h-20 md:h-24 lg:h-28 ring-second-light dark:ring-second duration-300 ${
                skill !== 3 ? 'cursor-pointer lg:hover:ring-2' : 'dark:hover:bg-opacity-50'
              } ${
                techs.includes(data.name.toLowerCase())
                  ? 'ring-2 dark:bg-opacity-100'
                  : ''
              }`}
            >
              <div className="text-gray-800 dark:text-gray-200 w-6 h-6 md:w-8 md:h-8">
                <data.svg />
              </div>
              <h1 className="text-xs md:text-xs lg:text-sm overflow-hidden">
                {data.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
      <Projects projects={filteredProjects} />
      {filteredProjects.length < 1 ? (
        <ClearFilter lang={lang} setTechs={setTechs} />
      ) : (
        ''
      )}
    </Element>
  );
}

export default Skills;
