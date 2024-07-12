import SVGTypescript from '../public/images/typescript.svg';
import SVGReact from '../public/images/react.svg';
import SVGTailwind from '../public/images/tailwind.svg';
import SVGNodejs from '../public/images/nodejs.svg';
import SVGExpress from '../public/images/express.svg';
import SVGMongodb from '../public/images/mongodb.svg';
import SVGMongoose from '../public/images/mongoose.svg';

interface IProjects {
  name: string;
  description: string[]; // Español: decription[0], Ingles: description[1]
  techs: any[];
}

const cashTracker: IProjects = {
  name: 'cashTracker',
  description: [
    'Una aplicación fullstack que permite registrar gastos y consumos. Utiliza la API del dólar para anotar los gastos en pesos argentinos y en dólares, según el valor del dólar al momento del gasto. Disponible en versiones mobile y web.',
    'A fullstack application that allows you to record expenses and consumption. It uses the dollar API to log expenses in Argentine pesos and dollars, according to the exchange rate at the time of the expense. Available in mobile and web versions.',
  ],
  techs: [
    <SVGTypescript />,
    <SVGReact />,
    <SVGTailwind />,
    <SVGNodejs />,
    <SVGExpress />,
    <SVGMongodb />,
    <SVGMongoose />,
  ],
};

export const projects: IProjects[] = [cashTracker];
