function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

function sanitize(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function validate(payload) {
  const fullName = sanitize(payload.fullName);
  const email = sanitize(payload.email);
  const serviceType = sanitize(payload.serviceType);
  const message = sanitize(payload.message);

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

  if (payload.termsAccepted !== true) {
    return 'Debes aceptar las politicas de privacidad.';
  }

  return null;
}

async function sendWithBrevo(env, payload) {
  const apiKey = sanitize(env.BREVO_API_KEY);
  const senderEmail = sanitize(env.BREVO_SENDER_EMAIL);
  const senderName = sanitize(env.BREVO_SENDER_NAME) || 'FloraFauna';
  const toEmail = sanitize(env.BREVO_TO_EMAIL);
  const toName = sanitize(env.BREVO_TO_NAME);
  const ccEmail = sanitize(env.BREVO_CC_EMAIL);

  if (!apiKey || !senderEmail || !toEmail) {
    throw new Error('Missing Brevo config');
  }

  const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': apiKey,
    },
    body: JSON.stringify({
      sender: {
        name: senderName,
        email: senderEmail,
      },
      to: [
        {
          email: toEmail,
          ...(toName ? { name: toName } : {}),
        },
      ],
      ...(ccEmail
        ? {
            cc: [
              {
                email: ccEmail,
              },
            ],
          }
        : {}),
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
        <p><strong>Nombre:</strong> ${payload.fullName}</p>
        <p><strong>Correo:</strong> ${payload.email}</p>
        <p><strong>Servicio:</strong> ${payload.serviceType}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${payload.message.replace(/\n/g, '<br />')}</p>
      `,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Brevo request failed: ${errorText}`);
  }
}

const workerHandler = {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return jsonResponse({ ok: true });
    }

    if (request.method !== 'POST') {
      return jsonResponse({ error: 'Method not allowed' }, 405);
    }

    try {
      const payload = await request.json();
      const validationError = validate(payload);

      if (validationError) {
        return jsonResponse({ error: validationError }, 400);
      }

      const normalizedPayload = {
        fullName: sanitize(payload.fullName),
        email: sanitize(payload.email).toLowerCase(),
        serviceType: sanitize(payload.serviceType),
        message: sanitize(payload.message),
        termsAccepted: payload.termsAccepted,
      };

      await sendWithBrevo(env, normalizedPayload);
      return jsonResponse({ ok: true });
    } catch {
      return jsonResponse(
        {
          error: 'No se pudo enviar la solicitud. Intenta nuevamente en unos minutos.',
        },
        500,
      );
    }
  },
};

export default workerHandler;
