import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProjectsMapLoader from "../components/ProjectsMapLoader";
import { withBasePath } from "@/lib/base-path";

export const metadata: Metadata = {
  title: "Consultora Ambiental en Chile",
  description:
    "FloraFauna entrega consultoria ambiental especializada en flora, fauna y biodiversidad: linea base, monitoreo y estrategia para proyectos SEIA en Chile.",
  keywords: [
    "consultora ambiental chile",
    "linea base flora fauna",
    "monitoreo biodiversidad",
    "SEIA",
    "servicios ambientales",
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Consultora Ambiental en Chile",
    description:
      "Linea base, monitoreo y gestion ambiental con enfoque cientifico para proyectos en Chile.",
    url: '/',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Consultora Ambiental en Chile",
    description:
      "Linea base, monitoreo y gestion ambiental con enfoque cientifico para proyectos en Chile.",
  },
};

const servicesOverview = [
  {
    icon: "psychiatry",
    title: "Servicios de Flora",
    description:
      "Líneas base, caracterización de vegetación, rescate y relocalización de flora con enfoque en conservación.",
  },
  {
    icon: "pets",
    title: "Servicios de Fauna",
    description:
      "Monitoreo, inspección en terreno y medidas de manejo para proteger fauna silvestre en zonas de intervención.",
  },
  {
    icon: "diversity_3",
    title: "Servicios de Biodiversidad",
    description:
      "Prefactibilidad ambiental, gestión de riesgos y estrategias de integración de biodiversidad en proyectos.",
  },
];

const clients = [
  { name: "Agrisol", logo: `url('${withBasePath('/empresas/Agrisol.jpg')}')` },
  { name: "Argenta", logo: `url('${withBasePath('/empresas/Argenta.webp')}')` },
  { name: "Ciudad Luz", logo: `url('${withBasePath('/empresas/CiudadLuz.png')}')` },
  { name: "Cospac", logo: `url('${withBasePath('/empresas/Cospac.png')}')` },
  { name: "Espinos", logo: `url('${withBasePath('/empresas/Espinos.svg')}')` },
  { name: "Iknow", logo: `url('${withBasePath('/empresas/Iknow.png')}')` },
  { name: "Solari", logo: `url('${withBasePath('/empresas/Solari.png')}')` },
  { name: "Beltec", logo: `url('${withBasePath('/empresas/Beltec.png')}')` },
  { name: "Nollagam", logo: `url('${withBasePath('/empresas/Nollagam.png')}')` },
  { name: "Banco", logo: `url('${withBasePath('/empresas/Banco.webp')}')` },
  { name: "Atigva", logo: `url('${withBasePath('/empresas/atigva.avif')}')` },
  { name: "Capital", logo: `url('${withBasePath('/empresas/capital.jpg')}')` },
  { name: "Potencia", logo: `url('${withBasePath('/empresas/potencia.jpg')}')` },
  { name: "Nazca", logo: `url('${withBasePath('/empresas/nazca.jpg')}')` },
];

export default function Home() {
  return (
    <div>
      <main>
        <section className="relative pt-12 pb-12 px-6 max-[400px]:px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="relative rounded-3xl overflow-visible min-h-[640px] flex flex-col justify-center px-8 max-[400px]:px-4 md:px-20">
              <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 hero-gradient z-10"></div>
                <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAD5JD0-Lpv9p6BWHfhwv-qj7GSYmHKBo6cq4GQt4hxVrWbjed3gocTvjPcXcRA1YTuN3L2aP-NOfL-azRpSwBw9Oa3dITBd2E_ap4Hwczb8V4nW6nQutXHunGvULnUM3ZWQhmyBN281XuwI68-6BEp4wmg-Rna4VyiH-qIVL4-7NvCodgWspkXcRB5b75zBABe5odxfrFsat4_1smUWR2vDY0x8P26r3_1gN1vw07kx3inw0wgsvx5Gy37CLPKfe0dGgiNGw5PWTo')" }}></div>
              </div>
              <div className="relative z-20 max-w-2xl max-[400px]:mx-auto max-[400px]:text-center">
                <span className="inline-block px-3 py-1 bg-[#16a34a]/10 text-[#16a34a] text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-[#16a34a]/20">Líderes en Consultoría Ambiental</span>
                <h1 className="text-3xl md:text-5xl font-bold leading-[1.2] mb-6 text-[#1e293b]">Reducimos el riesgo ambiental<br/>y aceleramos la aprobación de <span className="text-[#16a34a] italic">tu proyecto</span></h1>
                <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-medium">
                  Donde la gestión de flora y fauna define el éxito ambiental del proyecto. Te ayudamos a anticipar y mitigar impactos ambientales que podrían frenar tu inversión. Líneas base, monitoreo y estrategias para proyectos complejos en SEIA.
                </p>
                <div className="flex flex-wrap gap-4 max-[400px]:justify-center">
                  <Link href="/servicios" className="bg-[#16a34a] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all shadow-lg shadow-[#16a34a]/20 cursor-pointer">
                    Ver Servicios
                  </Link>
                  <Link href="/metodologia" className="bg-white backdrop-blur-sm text-[#1e293b] border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/50 transition-all cursor-pointer shadow-lg shadow-slate-200/20">
                    Nuestra Metodología
                  </Link>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-8 z-30 w-[330px] max-w-[calc(100%-2rem)] rounded-2xl border border-[#16a34a]/30 bg-white p-5 shadow-2xl shadow-slate-900/15 max-[900px]:static max-[900px]:mt-8 max-[900px]:mx-auto max-[900px]:w-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#16a34a]/10 text-[#16a34a] flex items-center justify-center">
                    <span className="material-symbols-outlined text-xl">target</span>
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#16a34a]">Misión</p>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Buscamos agregar valor a tu proyecto a través de un enfoque sistémico que integre ciencia, empresa y políticas públicas, actuando como un puente efectivo entre el sector productivo y las instituciones responsables de la gestión ambiental.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-[#f8fafc]" id="servicios">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <h2 className="text-[#16a34a] text-sm font-bold uppercase tracking-[0.2em] mb-4">Servicios Generales</h2>
                <h3 className="text-3xl md:text-5xl font-bold text-[#1e293b] mb-4">Soluciones ambientales para todo el ciclo del proyecto</h3>
                <p className="text-slate-600">
                  Desde prefactibilidad hasta seguimiento post RCA, acompañamos decisiones técnicas con evidencia de campo.
                </p>
              </div>
              <Link href="/servicios/catalogo" className="inline-flex items-center gap-2 bg-[#16a34a] text-white px-6 py-3 rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg shadow-[#16a34a]/20 w-fit">
                Ver catálogo completo
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {servicesOverview.map((service) => (
                <article key={service.title} className="bg-white border border-slate-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-[#16a34a]/10 text-[#16a34a] flex items-center justify-center mb-5">
                    <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                  </div>
                  <h4 className="text-xl font-bold text-[#1e293b] mb-3">{service.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
<section className="py-24 px-6 bg-white" id="nosotros">
        <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-[#16a34a] text-sm font-bold uppercase tracking-[0.2em] mb-4">Nuestro Equipo</h2>
        <h3 className="text-4xl font-bold mb-20 text-[#1e293b]">Excelencia Técnica en FloraFauna Chile</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
        <div className="flex flex-col items-center">
        <div className="size-44 rounded-full border border-slate-100 p-2 mb-8 shadow-sm">
        <div className="w-full h-full rounded-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-500" style={{ backgroundImage: `url('${withBasePath('/members/PDauelsberg.jpeg')}')` }}></div>
        </div>
        <h4 className="text-lg font-bold text-[#1e293b]">Patricia Dauelsberg</h4>
        <p className="text-[#16a34a] text-sm font-semibold uppercase tracking-wider mt-1">Directora de Proyectos</p>
        </div>
        <div className="flex flex-col items-center">
        <div className="size-44 rounded-full border border-slate-100 p-2 mb-8 shadow-sm">
        <div className="w-full h-full rounded-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-500" style={{ backgroundImage: `url('${withBasePath('/members/JLeyton.jpg')}')` }}></div>
        </div>
        <h4 className="text-lg font-bold text-[#1e293b]">Javiera Leyton</h4>
        <p className="text-[#16a34a] text-sm font-semibold uppercase tracking-wider mt-1">Coordinación y Jefatura de Proyectos</p>
        </div>
        <div className="flex flex-col items-center">
        <div className="size-44 rounded-full border border-slate-100 p-2 mb-8 shadow-sm">
        <div className="w-full h-full rounded-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-500" style={{ backgroundImage: `url('${withBasePath('/members/EEwok.jpg')}')` }}></div>
        </div>
        <h4 className="text-lg font-bold text-[#1e293b]">Elías Encina</h4>
        <p className="text-[#16a34a] text-sm font-semibold uppercase tracking-wider mt-1">Encargado de Campañas</p>
        </div>
        <div className="flex flex-col items-center">
        <div className="size-44 rounded-full border border-slate-100 p-2 mb-8 shadow-sm">
        <div className="w-full h-full rounded-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-500" style={{ backgroundImage: `url('${withBasePath('/members/UUnnamed.jpg')}')` }}></div>
        </div>
        <h4 className="text-lg font-bold text-[#1e293b]">Felipe Góngora</h4>
        <p className="text-[#16a34a] text-sm font-semibold uppercase tracking-wider mt-1">Ayudante de Campañas</p>
        </div>
        <div className="flex flex-col items-center">
        <div className="size-44 rounded-full border border-slate-100 p-2 mb-8 shadow-sm">
        <div className="w-full h-full rounded-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-500" style={{ backgroundImage: `url('${withBasePath('/members/EFuentes.jpg')}')` }}></div>
        </div>
        <h4 className="text-lg font-bold text-[#1e293b]">Emilia Fuentes</h4>
        <p className="text-[#16a34a] text-sm font-semibold uppercase tracking-wider mt-1">Especialista Flora, Vegetación y Artrópodos</p>
        </div>
        <div className="flex flex-col items-center">
        <div className="size-44 rounded-full border border-slate-100 p-2 mb-8 shadow-sm">
        <div className="w-full h-full rounded-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-500" style={{ backgroundImage: `url('${withBasePath('/members/RodrigoMeneses.jpg')}')` }}></div>
        </div>
        <h4 className="text-lg font-bold text-[#1e293b]">Rodrigo Meneses</h4>
        <p className="text-[#16a34a] text-sm font-semibold uppercase tracking-wider mt-1">Encargado de Modelación de Sistemas</p>
        </div>
        </div>
        </div>
        </section>
        <section className="py-20 px-6 bg-[#f8fafc]" id="empresas">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-[#16a34a] text-sm font-bold uppercase tracking-[0.2em] mb-4">Empresas</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">Organizaciones que confían en nuestro trabajo</h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Colaboramos con empresas que requieren soporte técnico ambiental serio, trazable y orientado a resultados.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-items-center">
              {clients.map((client) => (
                <div
                  key={client.name}
                  className="w-full h-28 md:h-32 flex items-center justify-center p-6 rounded-xl border border-slate-800/20 bg-[#1a4d2e] shadow-md hover:opacity-80 transition-all"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={client.logo}
                      alt={`Logo ${client.name}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 px-6 bg-white" id="proyectos">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
              <div className="text-center w-full">
                <h2 className="text-[#16a34a] text-sm font-bold uppercase tracking-[0.2em] mb-4">Cobertura de Proyectos</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">Mapa de zonas intervenidas</h3>
                <p className="text-slate-600">
                  Conoce en que territorios hemos desarrollado líneas base, monitoreo y acciones de conservación.
                </p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg shadow-slate-200/40 bg-white p-2 md:p-3">
              <div className="relative w-full z-0 rounded-2xl overflow-hidden">
                <ProjectsMapLoader />
              </div>
            </div>
          </div>
        </section>

        
        
        <section className="py-24 px-6 bg-[#f0fdf4]" id="valor">
        <div className="max-w-[1200px] mx-auto">
        <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 p-8 md:p-20 relative overflow-hidden">
        <div className="absolute top-[-100px] right-[-170px] w-1/2 h-full pointer-events-none text-[#f8fafc] flex items-center justify-center overflow-visible">
        <span className="material-symbols-outlined text-[#f0fdf4]" style={{ fontSize: '600px' }}>biotech</span>
        </div>
        <div className="relative z-10">
        <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-5 max-w-[800px]">
        <h2 className="text-[#16a34a] text-sm font-bold uppercase tracking-[0.25em]">Servicio Estratégico</h2>
        <h3 className="text-4xl md:text-5xl font-bold leading-tight text-[#1e293b]">Evaluación de Valor de Biodiversidad</h3>
        <p className="text-lg text-slate-600 leading-relaxed">
                                        Metodología pionera en Chile para la valorización de terrenos basada en su riqueza ecosistémica, servicios ambientales y patrimonio natural único. Transformamos datos científicos en activos estratégicos.
                                    </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col gap-5">
        <div className="w-14 h-14 rounded-2xl bg-[#16a34a]/10 flex items-center justify-center text-[#16a34a]">
        <span className="material-symbols-outlined text-3xl font-light">trending_up</span>
        </div>
        <h4 className="text-xl font-bold text-[#1e293b]">Plusvalía Ecológica</h4>
        <p className="text-slate-500 text-sm leading-relaxed">Aumente el valor real de su propiedad mediante la certificación científica de sus servicios ecosistémicos.</p>
        </div>
        <div className="flex flex-col gap-5">
        <div className="w-14 h-14 rounded-2xl bg-[#16a34a]/10 flex items-center justify-center text-[#16a34a]">
        <span className="material-symbols-outlined text-3xl font-light">verified_user</span>
        </div>
        <h4 className="text-xl font-bold text-[#1e293b]">Compliance Ambiental</h4>
        <p className="text-slate-500 text-sm leading-relaxed">Garantía de cumplimiento con los más altos estándares nacionales de inversión responsable y ética.</p>
        </div>
        <div className="flex flex-col gap-5">
        <div className="w-14 h-14 rounded-2xl bg-[#16a34a]/10 flex items-center justify-center text-[#16a34a]">
        <span className="material-symbols-outlined text-3xl font-light">public</span>
        </div>
        <h4 className="text-xl font-bold text-[#1e293b]">Sustentabilidad Real</h4>
        <p className="text-slate-500 text-sm leading-relaxed">Análisis de impacto y mitigación para el manejo responsable de recursos naturales y biodiversidad.</p>
        </div>
        </div>
        <div className="pt-4">
        <Link href="/metodologia" className="bg-[#1e293b] cursor-pointer text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white border border-slate-800 border-2 hover:text-slate-800 transition-all flex items-center gap-3 w-fit">
                                        Ver Metodología
        </Link>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
      </main>
    </div>
  );
}
