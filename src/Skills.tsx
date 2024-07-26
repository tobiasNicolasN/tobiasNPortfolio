'use client';
import { useState } from 'react';
import {
  ISkills,
  skillsBack,
  skillsFront,
  skillsGoals,
  skillsTools,
} from './skillsArrays';
import { useLang } from '@/context/LanguageContext';
import { Element } from 'react-scroll';
import Projects from './Projects';
import { projects } from './projectsArrays';

function Skills() {
  const { language } = useLang();
  const lang = language === 'spanish';

  // 0 = Front-end, 1 = Back-end, 2 = Tools, 3 = Goals
  const [skill, setSkill] = useState<number>(0);
  const [animationSkills, setAnimationSkills] = useState(false);

  // Realiza la transición previo al cambio de array
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
    skillsGoals,
  ];

  return (
    <Element
      name="skills"
      className="flex flex-col w-full items-left mt-28 mb-28 md:mt-32 md:mb-32 lg:mt-40 lg:mb-40 font-sans text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-500 animate-ease-in"
    >
      <h1 className="text-xl md:text-2xl font-mono font-medium">
        {lang ? 'HABILIDADES' : 'SKILLS'}
      </h1>
      <div className="flex md:flex-wrap flex-col mt-4">
        <div className="flex gap-3 md:gap-4 mb-4 md:mb-4 text-xs md:text-sm">
          <button
            className={`duration-300 bg-button hover:bg-offset-button hover:ring-2  hover:ring-second rounded-lg md:p-2 inline-flex items-center justify-center py-2 w-[72px] md:w-24 ${
              skill === 0 ? 'ring-second ring-2' : ''
            }`}
            onClick={() => changeSkill(0)}
            id="button"
          >
          Frontend
          </button>
          <button
            className={`duration-300 bg-button hover:bg-offset-button hover:ring-2  hover:ring-second rounded-lg md:p-2 inline-flex items-center justify-center py-2 w-[72px] md:w-24 ${
              skill === 1 ? 'ring-second ring-2' : ''
            }`}
            onClick={() => changeSkill(1)}
          >
            Backend
          </button>
          <button
            className={`duration-300 bg-button hover:bg-offset-button hover:ring-2  hover:ring-second rounded-lg md:p-2 inline-flex items-center justify-center py-2 w-[72px] md:w-24 ${
              skill === 2 ? 'ring-second ring-2' : ''
            }`}
            onClick={() => changeSkill(2)}
          >
            Tools
          </button>
          <button
            className={`duration-300 bg-button hover:bg-offset-button hover:ring-2  hover:ring-second rounded-lg md:p-2 inline-flex items-center justify-center py-2 w-[72px] md:w-24 ${
              skill === 3 ? 'ring-second ring-2' : ''
            }`}
            onClick={() => changeSkill(3)}
          >
            {lang ? 'Metas' : 'Goals'}
          </button>
        </div>
        <div
          className={`flex flex-wrap gap-3 md:gap-4 duration-300 ${
            animationSkills ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {skills[skill].map((data, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 md:gap-3 rounded-lg items-center justify-center bg-button bg-opacity-50 w-[72px] h-20 md:w-24 md:h-28 hover:bg-opacity-100 hover:scale-105 duration-300"
            >
              <div className="w-6 h-6 md:w-8 md:h-8">
                <data.svg />
              </div>
              <h1 className="text-xs md:text-sm overflow-hidden">{data.name}</h1>
            </div>
          ))}
        </div>
      </div>
      <Projects projects={projects}/>
    </Element>
  );
}

export default Skills;
