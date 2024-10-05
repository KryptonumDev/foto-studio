import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { REGEX } from '@/global/constants';

type RequestTypes = {
  phone: string;
  email: string;
  topic: string;
  message: string;
  legal: boolean;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const req = (await request.json()) as RequestTypes;
  const { phone, email, topic, message, legal } = req;

  const isValid = REGEX.phone.test(phone) && REGEX.email.test(email) && topic && message && legal;
  if (!isValid) return NextResponse.json({ success: false }, { status: 422 });

  const body = [
    `<p>Adres e-mail: <b>${email}</b></p>`,
    `<p>Numer telefonu: <b>${phone}</b></p>`,
    `<p>Temat: <b>${topic}</b></p>`,
    `<p>${message.trim()}</p>`,
    '<br />',
    '<p><em>Wyrażono zgodę na politykę prywatności</em></p>',
  ].join('');

  const text = body.replace(/<[^>]*>/g, '');

  try {
    await resend.emails.send({
      from: `Acme <onboarding@resend.dev>`,
      to: 'marta.zaorska2@gmail.com',
      subject: `Wiadomość przesłana przez formularz kontaktowy`,
      replyTo: email,
      html: body,
      text,
    });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false }, { status: 422 });
  }
}
