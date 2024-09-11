import React from 'react'
import { IProjects } from './projectsArrays'

interface ITechsProps {
    projects: IProjects[]
    num: number
}

function Techs({projects, num}: ITechsProps) {
  return (
    <div className="flex lg:mt-2 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            <div className="flex overflow-auto bg-offset-button-light dark:bg-button rounded-lg">
              {projects[num].svg.map((svg, index) => (
                <div key={index} className="p-2 lg:p-3">
                  <div className="w-6 md:w-8 lg:w-10 h-6 md:h-8 lg:h-10">
                    {svg}
                  </div>
                </div>
              ))}
            </div>
          </div>
  )
}

export default Techs