import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos y Condiciones | FloraFauna',
  description: 'Lea los términos y condiciones de uso de nuestros servicios de consultoría ambiental y plataforma web.',
  keywords: ['términos', 'condiciones', 'legal', 'servicios ambientales', 'contrato'],
};

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-white px-6 py-24 sm:px-16">
      <main className="w-full max-w-4xl space-y-12">
        <section className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Términos y Condiciones
          </h1>
          <p className="mt-4 text-zinc-500">
            Última actualización: 30 de Enero de 2026
          </p>
        </section>

        <section className="space-y-8 text-zinc-700 leading-relaxed text-justify">
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Introducción</h2>
            <p>
              Bienvenido a FloraFauna. Estos Términos y Condiciones regulan el uso de nuestro sitio web y la contratación de nuestros servicios de consultoría ambiental. Al acceder a este sitio o contratar nuestros servicios, usted acepta estos términos en su totalidad.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Definición de Servicios</h2>
            <p>
              FloraFauna provee servicios especializados en el levantamiento de líneas de base, monitoreo de biodiversidad, gestión de permisos ambientales y elaboración de estudios técnicos para el Sistema de Evaluación de Impacto Ambiental (SEIA). Todos nuestros informes se basan en metodologías científicas y normativas vigentes en Chile.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Propiedad Intelectual</h2>
            <p>
              Todo el contenido publicado en este sitio web, incluyendo textos, gráficos, logotipos, imágenes y software, es propiedad exclusiva de FloraFauna o de sus licenciantes y está protegido por las leyes de propiedad intelectual chilenas e internacionales. No se permite la reproducción total o parcial sin autorización expresa.
            </p>
            <p className="mt-2">
              Respecto a los informes entregados a clientes, estos pasarán a ser propiedad del cliente unavez completado el pago total de los servicios, reservándose FloraFauna el derecho de autoría moral y el uso de datos anonimizados para fines estadísticos.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Limitación de Responsabilidad</h2>
            <p>
              FloraFauna realiza sus estudios con el máximo rigor técnico. Sin embargo, no garantizamos la aprobación de proyectos por parte de la autoridad ambiental, ya que esta decisión depende de múltiples factores ajenos a nuestro control. Nuestra responsabilidad se limita a la correcta ejecución técnica y cumplimiento de los términos de referencia acordados.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Confidencialidad</h2>
            <p>
              Nos comprometemos a mantener la confidencialidad de toda la información sensible proporcionada por nuestros clientes para la ejecución de los proyectos, salvo aquella que deba ser pública por exigencia del SEIA o normativa aplicable.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Modificaciones</h2>
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigencia inmediatamente después de su publicación en el sitio web.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">7. Legislación Aplicable</h2>
            <p>
              Estos términos se rigen por las leyes de la República de Chile. Cualquier controversia será sometida a la jurisdicción de los tribunales ordinarios de justicia de la ciudad de Santiago.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
