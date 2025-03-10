import tsSVG from '../public/images/typescript.svg';
import jsSVG from '../public/images/javascript.svg';
import nextSVG from '../public/images/nextjs.svg';
import reactSVG from '../public/images/react.svg';
import htmlSVG from '../public/images/html.svg';
import cssSVG from '../public/images/css.svg';
import tailwindSVG from '../public/images/tailwind.svg';
import figmaSVG from '../public/images/figma.svg';
import nodeSVG from '../public/images/nodejs.svg';
import expressSVG from '../public/images/express.svg';
import firebaseSVG from '../public/images/firebase.svg';
import mongodbSVG from '../public/images/mongodb.svg';
import mongooseSVG from '../public/images/mongoose.svg';
import gitSVG from '../public/images/git.svg';
import githubSVG from '../public/images/github.svg';
import actionsSVG from '../public/images/actions.svg';
import viteSVG from '../public/images/vite.svg';
import jestSVG from '../public/images/jest.svg';
import postgresSVG from '../public/images/postgres.svg';

// Contiene el nombre de la habilidad y su respectiva svg
export interface ISkills {
  name: string;
  svg: any;
}

export const skillsFront: ISkills[] = [
  {
    name: 'TypeScript',
    svg: tsSVG,
  },
  {
    name: 'Next.js',
    svg: nextSVG,
  },
  {
    name: 'React',
    svg: reactSVG,
  },
  {
    name: 'CSS3',
    svg: cssSVG,
  },
  {
    name: 'Tailwind',
    svg: tailwindSVG,
  },
];

export const skillsBack: ISkills[] = [
  {
    name: 'Node.js',
    svg: nodeSVG,
  },
  {
    name: 'Express',
    svg: expressSVG,
  },
  {
    name: 'Firebase',
    svg: firebaseSVG,
  },
  {
    name: 'MongoDB',
    svg: mongodbSVG,
  },
  {
    name: 'Mongoose',
    svg: mongooseSVG,
  },
  {
    name: 'Postgres',
    svg: postgresSVG,
  },
  {
    name: 'Jest',
    svg: jestSVG,
  },
];

export const skillsTools: ISkills[] = [
  {
    name: 'GIT',
    svg: gitSVG,
  },
  {
    name: 'GitHub',
    svg: githubSVG,
  },
  {
    name: 'Actions',
    svg: actionsSVG,
  },
  {
    name: 'Vite.js',
    svg: viteSVG,
  },
];

export const skillsOthers: ISkills[] = [
  {
    name: 'JavaScript',
    svg: jsSVG,
  },
  {
    name: 'HTML5',
    svg: htmlSVG,
  },
  {
    name: 'Figma',
    svg: figmaSVG,
  },
  // {
  //   name: 'NPM',
  //   svg: npmSVG,
  // },
  // {
  //   name: 'VS Code',
  //   svg: vscodeSVG,
  // },
];
