import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type ContactPayload = {
  fullName?: string;
  email?: string;
  serviceType?: string;
  message?: string;
  termsAccepted?: boolean;
};

function sanitize(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}


function validate(payload: ContactPayload): string | null {
  const fullName = sanitize(payload.fullName);
  const email = sanitize(payload.email);
  const serviceType = sanitize(payload.serviceType);
  const message = sanitize(payload.message);
  const termsAccepted = payload.termsAccepted;

  if (!fullName || fullName.length < 3 || !/^[A-Za-zÀ-ÿ'\-\s]+$/.test(fullName)) {
    return 'El nombre no es valido.';
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return 'El correo no es valido.';
  }

  if (!serviceType) {
    return 'Selecciona un tipo de servicio.';
  }

  if (!message || message.length < 20) {
    return 'El mensaje debe tener al menos 20 caracteres.';
  }

  if (!termsAccepted) {
    return 'Debes aceptar las politicas de privacidad.';
  }

  return null;
}

function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const portRaw = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM;
  const to = process.env.SMTP_TO;
  const secure = process.env.SMTP_SECURE === 'true';

  if (!host || !portRaw || !user || !pass || !from || !to) {
    return null;
  }

  const port = Number(portRaw);

  if (Number.isNaN(port)) {
    return null;
  }

  return {
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
    from,
    to,
  };
}

function getBrevoConfig() {
  const apiKey = sanitize(process.env.BREVO_API_KEY);
  const senderEmail = sanitize(process.env.BREVO_SENDER_EMAIL);
  const senderName = sanitize(process.env.BREVO_SENDER_NAME) || 'FloraFauna';
  const toEmail = sanitize(process.env.BREVO_TO_EMAIL);
  const toName = sanitize(process.env.BREVO_TO_NAME);

  if (!apiKey || !senderEmail || !toEmail) {
    return null;
  }

  return {
    apiKey,
    senderEmail,
    senderName,
    toEmail,
    toName,
  };
}

async function sendWithBrevo(payload: {
  fullName: string;
  email: string;
  serviceType: string;
  message: string;
}) {
  const brevoConfig = getBrevoConfig();

  if (!brevoConfig) {
    return false;
  }

  const htmlMessage = escapeHtml(payload.message).replace(/\n/g, '<br />');

  const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': brevoConfig.apiKey,
    },
    body: JSON.stringify({
      sender: {
        name: brevoConfig.senderName,
        email: brevoConfig.senderEmail,
      },
      to: [
        {
          email: brevoConfig.toEmail,
          ...(brevoConfig.toName ? { name: brevoConfig.toName } : {}),
        },
      ],
      replyTo: {
        email: payload.email,
        name: payload.fullName,
      },
      subject: `Nueva solicitud de contacto: ${payload.serviceType}`,
      textContent: [
        'Nueva solicitud desde el formulario de contacto',
        '',
        `Nombre: ${payload.fullName}`,
        `Correo: ${payload.email}`,
        `Servicio: ${payload.serviceType}`,
        '',
        'Mensaje:',
        payload.message,
      ].join('\n'),
      htmlContent: `
        <h2>Nueva solicitud desde el formulario de contacto</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(payload.fullName)}</p>
        <p><strong>Correo:</strong> ${escapeHtml(payload.email)}</p>
        <p><strong>Servicio:</strong> ${escapeHtml(payload.serviceType)}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${htmlMessage}</p>
      `,
    }),
  });

  if (!response.ok) {
    throw new Error('Brevo API error');
  }

  return true;
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const validationError = validate(payload);

    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const fullName = sanitize(payload.fullName);
    const email = sanitize(payload.email).toLowerCase();
    const serviceType = sanitize(payload.serviceType);
    const message = sanitize(payload.message);

    const sentByBrevo = await sendWithBrevo({
      fullName,
      email,
      serviceType,
      message,
    });

    if (sentByBrevo) {
      return NextResponse.json({ ok: true });
    }

    const smtpConfig = getSmtpConfig();

    if (!smtpConfig) {
      return NextResponse.json(
        {
          error:
            'Falta configuracion de correo. Configura Brevo API (BREVO_API_KEY, BREVO_SENDER_EMAIL, BREVO_TO_EMAIL) o SMTP (SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, SMTP_FROM, SMTP_TO).',
        },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpConfig.host,
      port: smtpConfig.port,
      secure: smtpConfig.secure,
      auth: smtpConfig.auth,
    });

    await transporter.sendMail({
      from: smtpConfig.from,
      to: smtpConfig.to,
      replyTo: email,
      subject: `Nueva solicitud de contacto: ${serviceType}`,
      text: [
        'Nueva solicitud desde el formulario de contacto',
        '',
        `Nombre: ${fullName}`,
        `Correo: ${email}`,
        `Servicio: ${serviceType}`,
        '',
        'Mensaje:',
        message,
      ].join('\n'),
      html: `
        <h2>Nueva solicitud desde el formulario de contacto</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Correo:</strong> ${escapeHtml(email)}</p>
        <p><strong>Servicio:</strong> ${escapeHtml(serviceType)}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      {
        error: 'No se pudo enviar la solicitud. Intenta nuevamente en unos minutos.',
      },
      { status: 500 },
    );
  }
}
