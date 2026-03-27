import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ProjectsMapLoader from '../../components/ProjectsMapLoader';

export const metadata: Metadata = {
  title: 'Proyectos Realizados',
  description:
    'Portafolio de proyectos de FloraFauna en biodiversidad, linea base y monitoreo ambiental para empresas y proyectos en Chile.',
  keywords: ['proyectos ambientales', 'portafolio flora fauna', 'monitoreo ambiental', 'consultoria chile'],
  alternates: {
    canonical: '/proyectos',
  },
  openGraph: {
    title: 'Proyectos Realizados',
    description: 'Experiencia en terreno y cobertura geografica de proyectos ambientales en Chile.',
    url: '/proyectos',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Proyectos Realizados',
    description: 'Experiencia en terreno y cobertura geografica de proyectos ambientales en Chile.',
  },
};

const clients = [
  { name: 'Agrisol', logo: '/empresas/Agrisol.jpg' },
  { name: 'Argenta', logo: '/empresas/Argenta.webp' },
  { name: 'Ciudad Luz', logo: '/empresas/CiudadLuz.png' },
  { name: 'Cospac', logo: '/empresas/Cospac.png' },
  { name: 'Espinos', logo: '/empresas/Espinos.svg' },
  { name: 'Iknow', logo: '/empresas/Iknow.png' },
  { name: 'Solari', logo: '/empresas/Solari.png' },
];

const highlights = [
  {
    title: 'Cobertura Nacional',
    value: '15+ zonas',
    description: 'Presencia operativa desde Coquimbo hasta Maule.',
  },
  {
    title: 'Proyectos Ejecutados',
    value: '50+',
    description: 'Experiencia en líneas base y monitoreos ambientales.',
  },
  {
    title: 'Clientes',
    value: '7 empresas',
    description: 'Alianzas de largo plazo con foco en sustentabilidad.',
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <main>
        <header className="pt-12 pb-14 px-6 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-3 py-1 bg-[#16a34a]/10 text-[#16a34a] text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-[#16a34a]/20">
                Proyectos Realizados
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-[#1e293b] mb-6 leading-tight">
                Nuestra Experiencia <br />
                <span className="text-[#16a34a] italic">en Terreno</span>
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed font-medium">
                Desplegamos equipos multidisciplinarios en zonas clave del pais para
                levantar informacion robusta, acompanar procesos regulatorios y
                proteger la biodiversidad local.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {highlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-100 bg-[#f8fafc] p-7 shadow-sm"
                >
                  <p className="text-sm font-bold uppercase tracking-widest text-[#16a34a] mb-3">
                    {item.title}
                  </p>
                  <p className="text-3xl font-bold text-[#1e293b] mb-3">{item.value}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </header>

        <section className="py-20 px-6 bg-[#f8fafc]">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <h2 className="text-[#16a34a] text-sm font-bold uppercase tracking-[0.2em] mb-4">
                  Cobertura Geografica
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
                  Mapa real de zonas intervenidas
                </h3>
                <p className="text-slate-600">
                  Visualiza los puntos donde hemos ejecutado campanas de terreno,
                  monitoreo ambiental y levantamientos de linea base.
                </p>
              </div>
              <div className="rounded-xl bg-white border border-slate-200 px-4 py-3 text-xs md:text-sm text-slate-500">
                Usa el scroll para acercar y arrastra para explorar el mapa.
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg shadow-slate-200/40 bg-white p-2 md:p-3">
              <div className="relative w-full z-0 rounded-2xl overflow-hidden">
                <ProjectsMapLoader />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 bg-[#16a34a]/10 text-[#16a34a] text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-[#16a34a]/20">
                Confianza Corporativa
              </span>
              <h3 className="text-3xl md:text-5xl font-bold text-[#1e293b] mb-6">Confian en Nosotros</h3>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Colaboramos con empresas e instituciones que priorizan decisiones
                ambientales basadas en evidencia cientifica.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
              {clients.map((client) => (
                <div
                  key={client.name}
                  className="w-full h-32 flex items-center justify-center p-6 rounded-xl transition-all duration-300 border border-slate-800/20 bg-[#1a4d2e] hover:opacity-75 shadow-md"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={client.logo}
                      alt={`Logo ${client.name}`}
                      fill
                      className="object-contain transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-[#f0fdf4]">
          <div className="max-w-[1200px] mx-auto text-center">
            <div className="bg-white rounded-[2rem] p-12 md:p-20 border border-[#16a34a]/10 shadow-sm">
              <h3 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-6">
                Necesitas asesoria tecnica para tu proximo proyecto?
              </h3>
              <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">
                Nuestros especialistas disenan soluciones a medida para cumplir
                exigencias normativas y proteger el valor ecologico del territorio.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/contacto"
                  className="bg-[#16a34a] text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-green-700 transition-all shadow-lg shadow-[#16a34a]/20"
                >
                  Hablemos de tu Proyecto
                </Link>
                <Link
                  href="/metodologia"
                  className="bg-white text-[#1e293b] border border-slate-200 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all"
                >
                  Revisar Metodologia
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
