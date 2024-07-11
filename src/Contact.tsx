import { useLang } from '@/context/LanguageContext';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IEmailTemplateProps } from './EmailTemplate';
import Link from 'next/link';
import SVGGitHub from '@/public/images/github.svg';
import SVGLinkedIn from '@/public/images/linkedin.svg';
import { Element } from 'react-scroll';
import { useState } from 'react';
import SVGSpinner from '../public/images/spinner.svg';
import SVGCheck from '../public/images/check.svg';

function Contact() {
  const { language } = useLang();
  const lang = language === 'spanish';
  const { register, handleSubmit } = useForm<IEmailTemplateProps>();

  // Send: 0, Sending: 1, Sended: 2, Error: 4
  const [sendingEmail, setSendingEmail] = useState(0);

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

  const onSubmit: SubmitHandler<IEmailTemplateProps> = async (data) => {
    try {
      setSendingEmail(1);
      await sendEmail(data.name, data.email, data.message);
      setSendingEmail(2);
      setTimeout(() => {
        // reset form
        setSendingEmail(0);
      }, 1500);
      return console.log('Email enviado correctamente');
    } catch (error) {
      console.error('Error enviando el email:', error);
    }
  };

  return (
    <Element
      name="contact"
      className="flex flex-col w-full h-96 items-left mb-40 font-sans text-gray-200"
    >
      <h1 className="text-4xl mb-6 font-mono font-medium">
        {lang ? 'CONTÁCTAME' : 'CONTACT ME'}
      </h1>
      <div className="flex gap-6 w-full text-lg">
        <form
          className="flex flex-col gap-3 w-1/2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            autoComplete="off"
            id="inputName"
            className="p-2 bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-button focus:outline-none focus:border-b-second hover:border-b-second"
            placeholder={lang ? 'Nombre' : 'Name'}
            {...register('name')}
          />
          <input
            autoComplete="off"
            id="inputEmail"
            className="p-2 bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-button focus:outline-none focus:border-b-second hover:border-b-second"
            placeholder={lang ? 'Correo electrónico' : 'E-mail'}
            {...register('email')}
          />
          <textarea
            autoComplete="off"
            id="inputMessage"
            className="p-2 h-40 bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-button focus:outline-none focus:border-b-second hover:border-b-second"
            maxLength={250}
            placeholder={lang ? 'Mensaje' : 'Message'}
            {...register('message')}
          />

          {sendingEmail === 0 && (
            <button
              className="bg-button hover:bg-offset-button hover:ring-2 ring-second duration-300 rounded-lg h-10"
              type="submit"
            >
              {lang ? 'Enviar' : 'Send'}
            </button>
          )}

          {sendingEmail === 1 && (
            <button
              className="bg-offset-button ring-2 ring-second duration-300 rounded-lg h-10 flex items-center justify-center align-middle gap-2 text-gray-400"
              disabled={true}
            >
              <div className="w-6 h-6 flex items-center">
                <SVGSpinner />
              </div>
              {lang ? 'Enviando' : 'Sending'}
            </button>
          )}

          {sendingEmail === 2 && (
            <button
              className="bg-offset-button ring-2 ring-green-700 text-gray-400 duration-300 rounded-lg h-10 flex items-center justify-center align-middle gap-2"
              type="submit"
              disabled={true}
            >
              <div className="w-6 h-6 flex items-center">
                <SVGCheck />
              </div>
              {lang ? 'Enviado' : 'Sended'}
            </button>
          )}
        </form>

        <div className="flex flex-col p-2 w-1/2 gap-2 text-lg">
          <h1>
            {lang
              ? 'En busqueda de nuevas oportunidades, retos y colaboraciones. Si tenés algún proyecto en mente o una oferta de trabajo, enviame un correo.'
              : "I'm looking for new opportunities, challenges, and collaborations. If you have a project or a job offer, please send me an email."}
          </h1>
          <h1>
            {lang
              ? 'Enviame un mensaje utilizando el formulario o escribime directamente a '
              : 'Send me a message using the form or write to me directly at '}
            <span className="text-second">tobias.nicolas001@gmail.com</span>
            {lang
              ? '. Responderé lo más pronto posible.'
              : ". I'll respond as soon as possible."}
          </h1>
          <div className="flex justify-center gap-6 mt-4">
            <Link
              href={'https://www.linkedin.com/in/tobiasnicolasn/'}
              target="_blank"
              className="bg-button hover:bg-offset-button ring-second hover:ring-2 hover:scale-105 duration-500 rounded-lg w-12 h-12 flex items-center justify-center"
            >
              <div className="w-6 h-6">
                <SVGLinkedIn />
              </div>
            </Link>
            <Link
              href={'https://github.com/tobiasNicolasN'}
              target="_blank"
              className="bg-button hover:bg-offset-button ring-second hover:ring-2 hover:scale-105 duration-500 rounded-lg w-12 h-12 flex items-center justify-center"
            >
              <div className="w-8 h-8">
                <SVGGitHub />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Contact;
