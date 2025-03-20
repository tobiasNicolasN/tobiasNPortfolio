import SVGTypescript from '../public/images/typescript.svg';
import SVGReact from '../public/images/react.svg';
import SVGTailwind from '../public/images/tailwind.svg';
import SVGNodejs from '../public/images/nodejs.svg';
import SVGExpress from '../public/images/express.svg';
import SVGMongodb from '../public/images/mongodb.svg';
import SVGNext from '../public/images/nextjs.svg';
import SVGGit from '../public/images/git.svg';
import SVGGitHub from '../public/images/github.svg';
import SVGVite from '../public/images/vite.svg';
import SVGMongoose from '../public/images/mongoose.svg';
import SVGPostgres from '../public/images/postgres.svg';
import SVGCss from '../public/images/css.svg';
import SVGJest from '../public/images/jest.svg';
import SVGFirebase from '../public/images/firebase.svg';
import SVGGitHubActions from '../public/images/actions.svg';

export interface IProjects {
  name: string;
  photo: string;
  description: string[]; // Español: decription[0], Ingles: description[1]
  techs: string[];
  svg: any[];
  code?: string;
  site?: string;
}

const cashTrackerBackend: IProjects = {
  name: 'CashTracker-Backend',
  photo: 'CashTracker-Backend',
  description: [
    'REST API que permite registrar gastos y consumos. Utiliza la API del dólar para anotar los gastos en pesos argentinos y en dólares, según el valor del dólar al momento del gasto.',
    'REST API that allows you to record expenses and consumption. It uses the dollar API to log expenses in Argentine pesos and dollars, according to the exchange rate at the time of the expense.',
  ],
  techs: [
    'typescript',
    // 'react',
    // 'tailwind',
    'node.js',
    'express',
    'mongodb',
    'mongoose',
    'git',
    'github',
    // 'vite.js',
  ],
  svg: [
    <SVGTypescript key={0} />,
    // <SVGReact key={1} />,
    // <SVGVite key={8} />,
    // <SVGTailwind key={2} />,
    <SVGNodejs key={3} />,
    <SVGExpress key={4} />,
    <SVGMongodb key={5} />,
    <SVGMongoose key={8} />,
    <SVGGit key={6} />,
    <SVGGitHub key={7} />,
  ],
  code: 'https://github.com/tobiasNicolasN/cashTracker-backend-ts',
};

const portfolio: IProjects = {
  name: 'Portfolio',
  photo: 'Portfolio',
  description: [
    'Mi portafolio refleja un enfoque minimalista, destacando mis proyectos y habilidades. Ofrece una experiencia visual moderna y fluida, asegurando accesibilidad y profesionalismo.',
    'My portfolio showcases a minimalist approach, highlighting my projects and skills. It offers a modern, seamless visual experience, ensuring accessibility and professionalism.',
  ],
  techs: ['typescript', 'next.js', 'tailwind', 'node.js', 'git', 'github'],
  svg: [
    <SVGTypescript key={0} />,
    <SVGNext key={1} />,
    <SVGTailwind key={2} />,
    <SVGNodejs key={3} />,
    <SVGGit key={4} />,
    <SVGGitHub key={5} />,
  ],
  code: 'https://github.com/tobiasNicolasN/tobiasNPortfolio',
  site: 'https://www.tobiasnicolasn.com/',
};

const devQuizBackend: IProjects = {
  name: 'DevQuiz-Backend',
  photo: 'DevQuiz-Backend',
  description: [
    'El backend de DevQuiz gestiona las preguntas, jugadores y puntuaciones, garantizando un rendimiento óptimo y la escalabilidad del juego.',
    'DevQuiz backend manages questions, players, and scores, ensuring optimal performance and game scalability.',
  ],
  techs: [
    'typescript',
    'node.js',
    'express',
    'postgres',
    'git',
    'github',
    'jest',
  ],
  svg: [
    <SVGTypescript key={0} />,
    <SVGNodejs key={3} />,
    <SVGExpress key={7} />,
    <SVGPostgres key={6} />,
    <SVGGit key={4} />,
    <SVGGitHub key={5} />,
    <SVGJest key={8} />,
  ],
  code: 'https://github.com/tobiasNicolasN/devquiz-backend',
};

const devQuizFront: IProjects = {
  name: 'DevQuiz-Frontend',
  photo: 'DevQuiz-Frontend',
  description: [
    'DevQuiz es un juego interactivo de preguntas sobre desarrollo web. Desafía tus conocimientos en temas como TypeScript, JavaScript, React, HTML y CSS mientras mejoras tus habilidades.',
    'DevQuiz is an interactive quiz game about web development. Challenge your knowledge in topics like TypeScript, JavaScript, React, HTML, and CSS while improving your skills.',
  ],
  techs: ['typescript', 'react', 'css3', 'git', 'github', 'vite.js'],
  svg: [
    <SVGTypescript key={0} />,
    <SVGVite key={1} />,
    <SVGReact key={2} />,
    <SVGCss key={9} />,
    <SVGGit key={4} />,
    <SVGGitHub key={5} />,
  ],
  code: 'https://github.com/tobiasNicolasN/devquiz',
  site: 'https://devquiz-production.up.railway.app/',
};

const domoChallenge: IProjects = {
  name: 'Domo-challenge',
  photo: 'Domo-challenge',
  description: [
    'Sitio web desarrollado como parte de una prueba técnica para un puesto de Frontend. En este proyecto, repliqué el diseño de escritorio a partir de una imagen y creé el diseño responsive por mi cuenta.',
    'Website developed as part of a technical assessment for a Frontend position. In this project, I replicated the desktop design from an image and created the responsive design myself.',
  ],
  techs: ['typescript', 'next.js', 'css3', 'git', 'github'],
  svg: [
    <SVGTypescript key={0} />,
    <SVGNext key={2} />,
    <SVGCss key={9} />,
    <SVGGit key={4} />,
    <SVGGitHub key={5} />,
  ],
  code: 'https://github.com/tobiasNicolasN/DOMOChallenge',
  site: 'https://domochallenge-production.up.railway.app/',
};

const esVeganoGooglePlay: IProjects = {
  name: 'Es Vegano?',
  photo: 'es-vegano-gp',
  description: [
    'Es Vegano? es una aplicación que permite verificar si productos o ingredientes son aptos para veganos. Diseñada para ser simple e intuitiva, ya está disponible en la Play Store.',
    'Es Vegano? is an app that helps you check if products or ingredients are vegan-friendly. Designed to be simple and intuitive, it is now available on the Play Store.',
  ],
  techs: ['typescript', 'react', 'firebase', 'git', 'github', 'actions'],
  svg: [
    <SVGTypescript key={0} />,
    <SVGReact key={2} />,
    <SVGFirebase key={3} />,
    <SVGGit key={4} />,
    <SVGGitHub key={9} />,
    <SVGGitHubActions key={5} />,
  ],
  site: 'https://play.google.com/store/apps/details?id=com.optimalsolutions.esvegano',
};

const esVeganoAdmin: IProjects = {
  name: 'Es Vegano? Admin',
  photo: 'es-vegano-adm',
  description: [
    'El panel de administración de Es Vegano? permite gestionar productos, ingredientes, recomendaciones y reportes de manera eficiente. Facilita la organización y el mantenimiento de información precisa para la app.',
    'The Es Vegano? admin panel allows for efficient management of products, ingredients, recommendations, and reports. It streamlines the organization and maintenance of accurate information for the app.',
  ],
  techs: ['typescript', 'vite.js', 'react', 'firebase', 'git', 'github'],
  svg: [
    <SVGTypescript key={0} />,
    <SVGVite key={1} />,
    <SVGReact key={2} />,
    <SVGFirebase key={3} />,
    <SVGGit key={4} />,
    <SVGGitHub key={9} />,
  ],
};

const shorthand: IProjects = {
  name: 'Shorthand Comparison Web',
  photo: 'shorthand-app',
  description: [
    'Shorthand Comparison App es una herramienta con OCR integrado y reconocimiento de PDFs, diseñada para evaluar precisión y velocidad en taquigrafía, resaltando errores y mostrando estadísticas.',
    'Shorthand Comparison App is a tool with integrated OCR and PDF recognition, designed to assess shorthand accuracy and speed, highlighting errors and providing statistics.',
  ],
  techs: ['typescript', 'next.js', 'css3', 'tailwind', 'git', 'github'],
  svg: [
    <SVGTypescript key={0} />,
    <SVGNext key={2} />,
    <SVGCss key={9} />,
    <SVGTailwind key={1} />,
    <SVGGit key={4} />,
    <SVGGitHub key={5} />,
  ],
  site: 'https://examspirit.in/',
};

export enum Projects {
  shorthand,
  esVeganoGooglePlay,
  esVeganoAdmin,
  devQuizFront,
  domoChallenge,
  devQuizBackend,
  cashTrackerBackend,
  portfolio,
}

export const projects: IProjects[] = [
  shorthand,
  esVeganoGooglePlay,
  esVeganoAdmin,
  devQuizFront,
  domoChallenge,
  devQuizBackend,
  cashTrackerBackend,
  portfolio,
];
