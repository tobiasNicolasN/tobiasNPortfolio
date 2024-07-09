import { useLang } from '@/context/LanguageContext';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IEmailTemplateProps } from './EmailTemplate';

function Contact() {
  const { language } = useLang();
  const lang = language === 'spanish';
  const { register, handleSubmit } = useForm<IEmailTemplateProps>();

  const sendEmail = async (name: string, email: string, message: string) => {
    const res = await fetch('/api/send', {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });
    console.log('Email sent correctly.');
  };

  const onSubmit: SubmitHandler<IEmailTemplateProps> = (data) => {
    console.log('por ennviar el correo');
    sendEmail(data.name, data.email, data.message);
  };

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
              className="p-2 h-40 bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-button focus:outline-none focus:border-b-second hover:border-b-second"
              maxLength={250}
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
          <div className="flex flex-col p-2 w-1/2 gap-2 text-xl">
            <h1>
              Estoy abierto a nuevas oportunidades y colaboraciones. Si tenés
              algún proyecto interesante, una oferta de trabajo, o simplemente
              querés charlar sobre tecnología y desarrollo web, no dudes en
              contactarme.
            </h1>
            <h1>Podés enviarme un mensaje usando el formulario a
              continuación o escribirme directamente a <span className='text-second hover:cursor-copy' onClick={() => console.log("hola")}>tobias.nicolas001@gmail.com</span>. Haré lo
              posible por responderte a la brevedad. ¡Espero tu mensaje!</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
