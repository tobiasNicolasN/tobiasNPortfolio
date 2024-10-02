'use client';

import { useLang } from '@/context/LanguageContext';
import Footer from '@/src/Footer';
import NavBar from '@/src/NavBar';
import { Projects, projects } from '@/src/projectsArrays';
import Techs from '@/src/Techs';
import PreviousPageButton from '@/src/PreviousPageButton';
import LinkButtons from '@/src/LinkButtons';

export default function DevQuiz() {
  const { language } = useLang();
  const lang = language === 'spanish';
  // const octokid = new Octokit();
  // const [textES, setTextES] = useState<string>('');
  // const [text, setText] = useState<string>('');

  // const getReadme = async () => {
  //   const res = await octokid.request('GET /repos/{owner}/{repo}/readme', {
  //     owner: 'tobiasnicolasn',
  //     repo: 'cashTracker-backend-ts',
  //   });
  //   const resES = await octokid.request('GET /repos/{owner}/{repo}/contents/{path}', {
  //     owner: 'tobiasnicolasn',
  //     repo: 'cashTracker-backend-ts',
  //     path: 'README-ES.md'
  //   });

  //   const readmeContent = atob(res.data.content);
  //   const readmeContentES = atob(resES.data.content);
  //   console.log(readmeContent);
  //   console.log(readmeContentES)
  //   setText(readmeContent);
  //   setTextES(readmeContentES);
  // };

  // useEffect(() => {
  //   getReadme();
  // }, []);

  return (
    <div>
      <div className="w-full flex flex-col items-center mt-14 md:mt-16 lg:mt-20 mb-20">
        <NavBar />
        <main className="flex w-11/12 md:w-10/12 lg:w-10/12 xl:w-9/12 2xl:w-7/12 flex-col justify-center font-sans">
          <PreviousPageButton />

          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-2 mb-2 font-semibold font-mono text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            DevQuiz Frontend
          </h1>

          <Techs num={Projects.devQuizBackend} projects={projects} />

          <LinkButtons
            lang={lang}
            codeRef={'https://github.com/tobiasNicolasN/devquiz'}
            siteRef={'https://devquiz-production.up.railway.app/'}
          />

          <h2 className="mt-8 mb-1 lg:mb-2 text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium font-mono text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            {lang
              ? 'Servidor, Base de Datos y Configuración'
              : 'Server, Database, and Configuration'}
          </h2>

          <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in">
            {lang ? (
              <>
                Utiliza para autenticar y autorizar usuarios. Los usuarios
                reciben un token al registrarse o iniciar sesión, que deben
                incluir en cada solicitud.
              </>
            ) : (
              <>
                Uses{' '}
                <a
                  target="_blank"
                  href="https://github.com/auth0/node-jsonwebtoken"
                  className="text-second-light hover:text-offset-second-light dark:text-second dark:hover:text-offset-second underline"
                >
                  JSON Web Tokens (JWT)
                </a>{' '}
                for user authentication and authorization. Users receive a token
                after registering or logging in, which they must include in each
                request.
              </>
            )}
          </p>

          {/* 
                <a
                  target="_blank"
                  href="https://github.com/auth0/node-jsonwebtoken"
                  className="text-second-light hover:text-offset-second-light dark:text-second dark:hover:text-offset-second underline"
                >
                  JSON Web Tokens (JWT)
                </a> 
                */}
        </main>
      </div>
      <Footer />
    </div>
  );
}
