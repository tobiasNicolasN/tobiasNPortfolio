import { useState } from 'react';
import { skillsFront } from './skillsArrays';

function Skills() {
  const [skill, setSkill] = useState('frontend');
  const changeSkill = (skillName: string) => {
    setSkill(skillName);
  };

  return (
    <div className="flex flex-col items-left justify-center h-40 mt-40">
      <h1 className="text-3xl">HABILIDADES</h1>
      <hr className="h-3 w-96 mt-4 mb-4" />
      <div className="w-3/4">
        <div className="flex gap-20">
          <button
            className="text-white duration-200 bg-button hover:bg-offset-button hover:ring-2  hover:ring-second rounded-lg  px-3 p-2 inline-flex items-center justify-center w-32"
            onClick={() => changeSkill('frontend')}
            id="button"
          >
            FRONT-END
          </button>
          <button
            className="text-white duration-200 bg-button hover:bg-offset-button hover:ring-2  hover:ring-second rounded-lg  px-3 p-2 inline-flex items-center justify-center w-32"
            onClick={() => changeSkill('backend')}
          >
            BACK-END
          </button>
          <button
            className="text-white duration-200 bg-button hover:bg-offset-button hover:ring-2  hover:ring-second rounded-lg  px-3 p-2 inline-flex items-center justify-center w-32"
            onClick={() => changeSkill('tools')}
          >
            TOOLS
          </button>
        </div>
        <div>
          {skillsFront.map((data, index) => (
            <div key={index}>
              <h1>{data[0]}</h1>
              <svg
                className="w-20 h-20 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 230 230"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={data[1]}
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
