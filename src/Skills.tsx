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

function Skills() {
  const { language } = useLang();
  const lang = language === 'spanish';

  // 0 = Front-end, 1 = Back-end, 2 = Tools, 3 = Goals
  const [skill, setSkill] = useState<number>(0);

  const changeSkill = (numSkills: number) => {
    setSkill(numSkills);
  };

  const skills: ISkills[][] = [
    skillsFront,
    skillsBack,
    skillsTools,
    skillsGoals,
  ];

  return (
    <div className="flex flex-col w-full h-96 items-left mt-56 font-sans text-white">
      <h1 className="text-3xl font-medium">{lang ? 'HABILIDADES' : 'SKILLS'}</h1>
      <hr className="h-3 w-96 mt-6 mb-6" />
      <div className="flex flex-wrap flex-col h-96">
        <div className="flex gap-10 mb-6">
          <button
            className={`duration-200 bg-button hover:bg-offset-button hover:ring-2  hover:ring-second rounded-lg  px-3 p-2 inline-flex items-center justify-center w-32 ${skill === 0 ? "ring-second ring-2" : "" }`}
            onClick={() => changeSkill(0)}
            id="button"
          >
            FRONT-END
          </button>
          <button
            className={`duration-200 bg-button hover:bg-offset-button hover:ring-2  hover:ring-second rounded-lg  px-3 p-2 inline-flex items-center justify-center w-32 ${skill === 1 ? "ring-second ring-2" : "" }`}
            onClick={() => changeSkill(1)}
          >
            BACK-END
          </button>
          <button
            className={`duration-200 bg-button hover:bg-offset-button hover:ring-2  hover:ring-second rounded-lg  px-3 p-2 inline-flex items-center justify-center w-32 ${skill === 2 ? "ring-second ring-2" : "" }`}
            onClick={() => changeSkill(2)}
          >
            TOOLS
          </button>
          <button
            className={`duration-200 bg-button hover:bg-offset-button hover:ring-2  hover:ring-second rounded-lg  px-3 p-2 inline-flex items-center justify-center w-32 ${skill === 3 ? "ring-second ring-2" : "" }`}
            onClick={() => changeSkill(3)}
          >
            {lang ? 'METAS' : 'GOALS'}
          </button>
        </div>
        <div className="flex flex-wrap gap-6">
          {skills[skill].map((data, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 rounded-lg items-center justify-center bg-button bg-opacity-50 w-40 h-32 hover:bg-opacity-100 duration-300"
            >
              <div className="w-12 h-12">{data.svg}</div>
              <h1>{data.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
