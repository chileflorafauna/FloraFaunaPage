import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad | FloraFauna',
  description: 'Conozca cómo FloraFauna recopila, protege y utiliza sus datos personales y corporativos.',
  keywords: ['privacidad', 'protección de datos', 'habeas data', 'confidencialidad', 'seguridad'],
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-white px-6 py-24 sm:px-16">
      <main className="w-full max-w-4xl space-y-12">
        <section className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Política de Privacidad
          </h1>
          <p className="mt-4 text-zinc-500">
            Última actualización: 30 de Enero de 2026
          </p>
        </section>

        <section className="space-y-8 text-zinc-700 leading-relaxed text-justify">
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Compromiso de Privacidad</h2>
            <p>
              En FloraFauna respetamos su privacidad y nos comprometemos a proteger los datos personales que nos proporciona. Esta política explica cómo recopilamos, usamos y resguardamos su información de acuerdo a la Ley N° 19.628 sobre Protección de la Vida Privada.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Información que Recopilamos</h2>
            <p>
              Podemos recopilar información personal como nombre, correo electrónico, número de teléfono y empresa cuando usted utiliza nuestros formularios de contacto, solicita una cotización o se suscribe a nuestro boletín.
            </p>
            <p className="mt-2">
              Además, recopilamos datos técnicos de navegación anónimos para mejorar la experiencia de usuario en nuestro sitio web.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Uso de la Información</h2>
            <p>
              La información recopilada se utiliza exclusivamente para:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Responder a sus consultas y solicitudes de presupuesto.</li>
              <li>Proveer los servicios de consultoría contratados.</li>
              <li>Enviar información relevante sobre normativa ambiental y actualizaciones de nuestros servicios (si ha optado por recibirla).</li>
              <li>Cumplir con obligaciones legales y contractuales.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Protección de Datos</h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos contra el acceso no autorizado, alteración, divulgación o destrucción. Nuestros sistemas de almacenamiento cuentan con encriptación y acceso restringido.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Compartir Información</h2>
            <p>
              No vendemos, comercializamos ni transferimos sus datos personales a terceros externos. Esto no incluye a terceros de confianza que nos asisten en la operación de nuestro sitio web o la conducción de nuestro negocio, siempre que dichas partes acuerden mantener esta información confidencial.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Derechos ARCO</h2>
            <p>
              Usted tiene derecho a acceder, rectificar, cancelar u oponerse al tratamiento de sus datos personales. Para ejercer estos derechos, puede contactarnos en cualquier momento a través del correo electrónico contacto@florafauna.cl.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">7. Cookies</h2>
            <p>
              Nuestro sitio utiliza cookies para mejorar la navegación. Usted puede configurar su navegador para rechazar todas las cookies o para indicar cuándo se envía una cookie.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
