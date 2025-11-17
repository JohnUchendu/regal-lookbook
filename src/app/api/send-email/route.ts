import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();
  try {
    await resend.emails.send({
      from: 'lookbook@mail.ibiz.name.ng',
      to: 'johnchnd195@gmail.com', // Your email
      subject: 'New Inquiry',
      text: `From: ${name} (${email})\nMessage: ${message}`,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}