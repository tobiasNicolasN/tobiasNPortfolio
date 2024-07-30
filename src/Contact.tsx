'use client';
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
import SVGError from '../public/images/error.svg';
import { sendEmail } from './hooks/sendEmail';

function Contact() {
  const { language } = useLang();
  const lang = language === 'spanish';
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IEmailTemplateProps>();

  // Send: 0, Sending: 1, Sended: 2, Error: 3
  const [sendingEmail, setSendingEmail] = useState(0);

  const onSubmit: SubmitHandler<IEmailTemplateProps> = async (data) => {
    try {
      setSendingEmail(1); // Indica que el envío del correo está en proceso
      await sendEmail(data.name, data.email, data.message);
      setSendingEmail(2); // Indica que el correo se envió correctamente
      setTimeout(() => {
        setSendingEmail(0); // Resetea el estado del botón después de 2s
      }, 2000);
      reset();
    } catch (error) {
      setSendingEmail(3); // Indica que hubo un error al enviar el correo
      console.error('Error enviando el email:', error);
    }
  };

  return (
    <Element
      name="contact"
      className="flex flex-col w-full items-left mb-20 md:mb-24 font-sans text-gray-800 dark:text-gray-200 animate-fade-right animate-once animate-duration-[400ms] animate-delay-[900ms] animate-ease-in"
    >
      <h1 className="text-xl md:text-2xl xl:text-3xl mb-4 gap-4 font-mono font-medium">
        {lang ? 'CONTÁCTAME' : 'CONTACT ME'}
      </h1>

      <div className="flex flex-col-reverse lg:flex lg:flex-row md:gap-6 w-full md:text-base lg:text-lg xl:text-xl">
        <form
          className="flex flex-col gap-5 mt-6 lg:w-1/2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex relative items-center">
            <input
              autoComplete="off"
              readOnly={sendingEmail !== 0}
              className={`w-full p-2 bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-button-light dark:border-b-button focus:outline-none focus:border-b-second-light dark:focus:border-b-second hover:border-b-second-light dark:hover:border-b-second ${
                sendingEmail !== 0 ? 'text-gray-400' : ''
              }`}
              placeholder={lang ? 'Nombre' : 'Name'}
              {...register('name', {
                required: lang ? 'Nombre requerido' : 'Name required',
                setValueAs: (value) => value.trim(), // Aplica trim al input
              })}
            />
            {errors.name && (
              <div className="z-50 absolute -top-5 p-2 rounded-lg text-red-500 dark:text-red-600 text-sm md:text-base pointer-events-none font-sans">
                {errors.name.message}
              </div>
            )}
          </div>

          <div className="flex relative items-center">
            <input
              autoComplete="off"
              readOnly={sendingEmail !== 0}
              className={`w-full p-2 bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-button-light dark:border-b-button focus:outline-none focus:border-b-second-light dark:focus:border-b-second hover:border-b-second-light dark:hover:border-b-second ${
                sendingEmail !== 0 ? 'text-gray-400' : ''
              }`}
              placeholder={lang ? 'Correo electrónico' : 'Email'}
              {...register('email', {
                required: lang
                  ? 'Correo electrónico requerido'
                  : 'Email required',
                setValueAs: (value) => value.trim(), // Aplica trim al input
                pattern: {
                  // Valida si se cumplen los requisitos para un correo electrónico
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: lang
                    ? 'Correo electrónico inválido'
                    : 'Invalid email',
                },
              })}
            />
            {errors.email && (
              <div className="z-50 absolute -top-5 p-2 rounded-lg text-red-500 dark:text-red-600 text-sm md:text-base pointer-events-none font-sans">
                {errors.email.message}
              </div>
            )}
          </div>

          <div className="flex relative items-center">
            <textarea
              autoComplete="off"
              readOnly={sendingEmail !== 0}
              className={`w-full h-40 p-2 bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-button-light dark:border-b-button focus:outline-none focus:border-b-second-light dark:focus:border-b-second hover:border-b-second-light dark:hover:border-b-second resize-none ${
                sendingEmail !== 0 ? 'text-gray-400' : ''
              }`}
              maxLength={250}
              placeholder={lang ? 'Mensaje' : 'Message'}
              {...register('message', {
                required: lang ? 'Mensaje requerido' : 'Message required',
                setValueAs: (value) => value.trim(), // Aplica trim al input
                minLength: {
                  value: 16,
                  message: lang
                    ? 'Mínimo de 16 caracteres'
                    : 'Minimum of 16 characters',
                },
              })}
            />
            {errors.message && (
              <div className="z-50 absolute -top-5 p-2 rounded-lg text-red-500 dark:text-red-600 text-sm md:text-base pointer-events-none font-sans">
                {errors.message.message}
              </div>
            )}
          </div>

          {/* Se muestra el boton correspondiente al estado */}
          {sendingEmail === 0 && (
            <button
              className="bg-button-light dark:bg-button hover:bg-offset-button-light dark:hover:bg-offset-button hover:ring-2 ring-second-light dark:ring-second duration-300 rounded-lg h-10"
              type="submit"
            >
              {lang ? 'Enviar' : 'Send'}
            </button>
          )}

          {sendingEmail === 1 && (
            <button
              className="bg-offset-button-light dark:bg-offset-button ring-2 ring-second-light dark:ring-second duration-300 rounded-lg h-10 flex items-center justify-center align-middle gap-2 text-gray-600 dark:text-gray-400"
              type="submit"
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
              className="bg-offset-button-light dark:bg-offset-button ring-2 ring-green-500 dark:ring-green-700 text-gray-600 dark:text-gray-400 duration-300 rounded-lg h-10 flex items-center justify-center align-middle gap-2"
              type="submit"
              disabled={true}
            >
              <div className="w-6 h-6 flex items-center">
                <SVGCheck />
              </div>
              {lang ? 'Enviado' : 'Sended'}
            </button>
          )}

          {sendingEmail === 3 && (
            <button
              className="bg-offset-button-light dark:bg-offset-button ring-2 ring-red-600 dark:ring-red-600 text-red-600 dark:text-red-600 duration-300 rounded-lg h-10 flex items-center justify-center align-middle gap-2"
              type="submit"
              disabled={true}
            >
              <div className="w-5 h-5 flex items-center">
                <SVGError />
              </div>
              {lang ? 'Error al enviar' : 'Error sending'}
            </button>
          )}
        </form>

        <div className="flex flex-col md:p-2 lg:w-1/2 gap-2 text-sm md:text-base lg:text-lg">
          <h1>
            {lang
              ? 'En busqueda de nuevas oportunidades, retos y colaboraciones. Si tenés algún proyecto en mente o una oferta de trabajo, enviame un correo.'
              : "I'm looking for new opportunities, challenges, and collaborations. If you have a project or a job offer, please send me an email."}
          </h1>
          <h1>
            {lang
              ? 'Enviame un mensaje utilizando el formulario o escribime directamente a '
              : 'Send me a message using the form or write to me directly at '}
            <span className="text-second-light dark:text-second">tobias.nicolas001@gmail.com</span>
            {lang
              ? '. Responderé lo más pronto posible.'
              : ". I'll respond as soon as possible."}
          </h1>
          <div className="hidden lg:flex justify-center gap-6 mt-4">
            <Link
              href={'https://www.linkedin.com/in/tobiasnicolasn/'}
              target="_blank"
              aria-label="TobiasNicolasN LinkedIn"
              className="bg-button-light dark:bg-button hover:bg-offset-button-light dark:hover:bg-offset-button ring-second-light dark:ring-second hover:ring-2 hover:scale-105 duration-500 rounded-lg w-12 h-12 flex items-center justify-center"
            >
              <div className="w-6 h-6 text-gray-800 dark:text-gray-200">
                <SVGLinkedIn />
              </div>
            </Link>
            <Link
              href={'https://github.com/tobiasNicolasN'}
              target="_blank"
              aria-label="TobiasNicolasN GitHub"
              className="bg-button-light dark:bg-button hover:bg-offset-button-light dark:hover:bg-offset-button ring-second-light dark:ring-second-light hover:ring-2 hover:scale-105 duration-500 rounded-lg w-12 h-12 flex items-center justify-center"
            >
              <div className="w-8 h-8 text-gray-800 dark:text-gray-200">
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
