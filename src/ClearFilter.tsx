import { SetStateAction } from 'react';

interface IClearFilterProps {
  lang: boolean;
  setTechs: (value: SetStateAction<string[]>) => void
}

function ClearFilter({lang, setTechs}: IClearFilterProps) {
  return (
    <div
      className={`flex flex-col lg:grid lg:grid-cols-2 gap-4 duration-300 mt-6`}
    >
      <div className="flex flex-col rounded-lg bg-button-light dark:bg-button dark:bg-opacity-50 w-full duration-300">
        <div className="w-full p-4 flex flex-col font-mono gap-2 text-left">
          <h1 className="font-sans text-sm md:text-base xl:text-lg mb-4 text-gray-700 dark:text-gray-300">
            {lang
              ? 'Actualmente no hay proyectos que utilicen las tecnologías seleccionadas.'
              : 'There are currently no projects using the selected technologies.'}
          </h1>
          <div>
            <button
              className="flex bg-offset-button-light dark:bg-button text-gray-800 dark:text-gray-200 hover:bg-offset-button-light dark:hover:bg-offset-button hover:cursor-pointer ring-second-light dark:ring-second hover:ring-2 p-2 px-4 rounded-lg duration-300 justify-center items-center text-sm md:text-base lg:text-lg xl:text-xl"
              onClick={() => setTechs([])}
            >
              {lang ? 'Limpiar Filtros' : 'Clear Filters'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClearFilter;
