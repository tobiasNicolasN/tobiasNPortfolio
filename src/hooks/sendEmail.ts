/**
 * Envia un correo electrónico utilizando la API `/api/send`.
 *
 * @param name Nombre del remitente
 * @param email Email del remitente
 * @param message Mensaje a enviar
 */

export const sendEmail = async (
  name: string,
  email: string,
  message: string
) => {
  const res = await fetch('/api/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      message,
    }),
  });

  if (!res.ok) {
    throw new Error('Error enviando el correo');
  }

  console.log('Email enviado correctamente');
};
