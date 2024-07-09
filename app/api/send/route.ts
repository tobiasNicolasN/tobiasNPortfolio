import { NextRequest } from 'next/server';
import { EmailTemplate } from '../../../src/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_API_KEY);

/**
 * Maneja las solicitudes POST enviadas al servidor.
 * La función recibe un objeto de solicitud, extrae los datos JSON (nombre, correo electrónico y mensaje),
 * y utiliza el servicio de Resend para enviar un correo electrónico con los datos proporcionados.
 * Si ocurre algún error durante el envío del correo, la función responde con un código de estado 500
 * y el error correspondiente.
 *
 * Proceso:
 * 1. Extraer los datos JSON (nombre, correo electrónico y mensaje) de la solicitud.
 * 2. Intentar enviar un correo electrónico utilizando el servicio de Resend.
 * 3. Si el envío es exitoso, responder con los datos del correo enviado.
 * 4. Si ocurre un error durante el envío, responder con un código de estado 500 y el error correspondiente.
 */

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'tobias.nicolas001@gmail.com',
      subject: 'Email desde el portfolio',
      react: EmailTemplate({
        name,
        email,
        message,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
