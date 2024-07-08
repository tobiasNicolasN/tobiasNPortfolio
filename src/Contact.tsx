import { useLang } from '@/context/LanguageContext';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormData {
  name: string;
  email: string;
  message: string;
}

function Contact() {
  const { language } = useLang();
  const lang = language === 'spanish';
  const { register, handleSubmit } = useForm<IFormData>();
  const onSubmit: SubmitHandler<IFormData> = (data) => console.log(data);

  return (
    <div className="flex flex-col w-full h-96 items-left mb-40 font-sans text-gray-200">
      <div className="">
        <h1 className="text-4xl mb-6 font-mono font-medium">
          {lang ? 'CONTÁCTAME' : 'CONTACT ME'}
        </h1>
        <div className="flex gap-2 w-full text-lg">
          <form
            className="flex flex-col gap-3 w-1/2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              autoComplete="off"
              className="p-2 bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-button focus:outline-none focus:border-b-second hover:border-b-second"
              placeholder={lang ? 'Nombre' : 'Name'}
              {...register('name')}
            />
            <input
              autoComplete="off"
              className="p-2 bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-button focus:outline-none focus:border-b-second hover:border-b-second"
              placeholder={lang ? 'Correo electrónico' : 'E-mail'}
              {...register('email')}
            />
            <textarea
              autoComplete="off"
              className="p-2 h-32 bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-button focus:outline-none focus:border-b-second hover:border-b-second"
              placeholder={lang ? 'Mensaje' : 'Message'}
              {...register('message')}
            />
            <button
              className="bg-button hover:bg-offset-button hover:ring-2 ring-second duration-300 rounded-lg h-10"
              type="submit"
            >
              {lang ? 'Enviar' : 'Send'}
            </button>
          </form>
          <div className="flex flex-col p-2 w-1/2 gap-2">
            <h1 className='text-xl font-medium'>Mi correo</h1>
            <div className="flex justify-between">
              <h1 className='text-lg'>tobias.nicolas001@gmail.com</h1>
              <button>a</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
