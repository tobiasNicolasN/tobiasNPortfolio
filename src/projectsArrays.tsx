import SVGTypescript from '../public/images/typescript.svg';
import SVGReact from '../public/images/react.svg';
import SVGTailwind from '../public/images/tailwind.svg';
import SVGNodejs from '../public/images/nodejs.svg';
import SVGExpress from '../public/images/express.svg';
import SVGMongodb from '../public/images/mongodb.svg';
import SVGNext from '../public/images/nextjs.svg';

export interface IProjects {
  name: string;
  description: string[]; // Español: decription[0], Ingles: description[1]
  techs: string[];
  svg: any[];
}

const cashTracker: IProjects = {
  name: 'cashTracker',
  description: [
    'Una aplicación fullstack que permite registrar gastos y consumos. Utiliza la API del dólar para anotar los gastos en pesos argentinos y en dólares, según el valor del dólar al momento del gasto. Disponible en versiones mobile y web.',
    'A fullstack application that allows you to record expenses and consumption. It uses the dollar API to log expenses in Argentine pesos and dollars, according to the exchange rate at the time of the expense. Available in mobile and web versions.',
  ],
  techs: [
"typescript", "react", "tailwind", "node.js", "express", "mongodb", "git"
  ],
  svg: [
    <SVGTypescript key={0} />,
    <SVGReact key={1} />,
    <SVGTailwind key={2} />,
    <SVGNodejs key={3} />,
    <SVGExpress key={4} />,
    <SVGMongodb key={5} />,
  ],
};

const portfolio: IProjects = {
  name: 'Portfolio personal',
  description: [
    'Mi portafolio refleja un enfoque minimalista, destacando mis proyectos y habilidades. Ofrece una experiencia visual moderna y fluida, asegurando accesibilidad y profesionalismo.',
    'My portfolio showcases a minimalist approach, highlighting my projects and skills. It offers a modern, seamless visual experience, ensuring accessibility and professionalism.'
  ],
  techs: [
    "typescript", "next.js",  "tailwind", "node.js", "git"
  ],
  svg: [
    <SVGTypescript key={0}/>,
    <SVGNext key={1}/>,
    <SVGTailwind key={2}/>,
    <SVGNodejs key={3}/>
  ]
}

export const projects: IProjects[] = [portfolio, cashTracker];
