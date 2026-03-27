import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Servicios Ambientales',
  description:
    'Servicios de consultoria ambiental para flora, fauna y biodiversidad: linea base, monitoreo, rescate, relocalizacion y soporte para evaluacion ambiental en Chile.',
  keywords: ['servicios ambientales', 'consultoria ambiental', 'linea base', 'fauna', 'flora', 'SEIA'],
  alternates: {
    canonical: '/servicios',
  },
  openGraph: {
    title: 'Servicios Ambientales',
    description:
      'Soluciones tecnicas para linea base, monitoreo y gestion ambiental de proyectos en Chile.',
    url: '/servicios',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicios Ambientales',
    description:
      'Soluciones tecnicas para linea base, monitoreo y gestion ambiental de proyectos en Chile.',
  },
};

const highlightServices = [
  {
    title: "Flora y Vegetación",
    image: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCeNkFJjPSuUhoA2JxCg4V42uP4oTzBjfP9MC3dfB16dbyCGSUOaxBPcLJRuN5VQRbk6hXZmVJ11tEuzHVx24ZXMCVjrz0P-XezK5NwyE5YdXrqWQmIUmDqXZBk67vN2iqcHVZPsUUXEba8m2S-IO8S5aOKz87lWt1xaFwLJopXlTTPXOUJ_IzVH4FSjKPp5PV-bsyHTml5s7seo-Em-9fPA-V1KP4iAGxDGCQCJULg0n0IWzNI4GRFhCrdmGtDvUk3iF3v4cV2ECY')",
    icon: "psychiatry",
    tag: "Botánica",
    description: "Levantamiento de línea base florística y vegetacional para ingreso al SEIA. Caracterización de formaciones vegetacionales, análisis de estado de conservación y elaboración de cartografía temática. Desarrollo e implementación de planes de manejo, rescate y relocalización de especies protegidas.",
    items: [
      "Línea base de flora y vegetación para DIA y EIA",
      "Cartografía y delimitación de formaciones vegetacionales",
      "Censos de especies protegidas y en categoría de conservación",
      "Planes de rescate y relocalización aprobados por RCA",
      "Planes de manejo forestal nativo",
      "Seguimiento post-relocalización"
    ]
  },
  {
    title: "Fauna Silvestre",
    image: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD8mJXs5ibrn83Jb5Sx2_f2_43_25Jj9ax6RctlQrANufGD-YOGrtdLoBOVCO-lFQTSGmqMBvq17LQoxN1x5ftZl2NrhE2PnKzX1mv4jJT2-T5miELB-hLzPVD_RecIzGW1HAcEBMgggmeX7zzWNIg0iHRR8QLIa1ZqjswNg84EsVFHTqxpKi2dy3VLI5Drh1dgBuzgx2TvOSKWCcKR1WIf-BsncdZnPphH-V15xARnlax90Q9A5IdPRb3tG8gOLJUfbxtfY-IP0fs')",
    icon: "pets",
    tag: "Zoología",
    description: "Levantamiento de línea base de fauna (aves, mamíferos, quirópteros, reptiles y anfibios) mediante metodologías directas e indirectas, conforme a requerimientos del SEIA. Diseño e implementación de planes de rescate y relocalización, monitoreo y seguimiento ambiental.",
    items: [
      "Línea base de aves, mamíferos, quirópteros y herpetofauna",
      "Monitoreo estacional",
      "Uso de trampas cámara y registros indirectos",
      "Planes de rescate y relocalización de fauna",
      "Planes de perturbación controlada",
      "Seguimiento post-intervención"
    ]
  },
  {
    title: "Líquenes",
    image: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA0En8TK71vACtUjA3ssdz_lwfZrUuCsF68JGpmKbGdOGrOYE43yEZ7TZpTGHL54aNf6x6n-F35KmYSmx1ZATjs4XyIxRdQsJILw23x-Gts8hbU5cr_3_tNUZkw6cDa7LxtniLPesxt5Lk0ppGZS4GUpRMrfE-erNmffS8it0E0aKYtt6ZbjHO074H4Rz60RGlL_uos8BFZZeqevG7bOaunD703mBHO4UOh7qwiJPby91Wtvu5HvvxjU5FPL3k7JH2Ovcl1vO0UX7o')",
    icon: "grain",
    tag: "Liquenología",
    description: "Estudios taxonómicos e inventarios de comunidades liquénicas para línea base ambiental. Evaluación de bioindicadores de calidad de aire y caracterización en ecosistemas altoandinos y de alta sensibilidad.",
    items: [
      "Línea base de líquenes para proyectos en zonas sensibles",
      "Identificación microscópica especializada",
      "Inventarios taxonómicos",
      "Evaluación como bioindicadores ambientales"
    ]
  },
  {
    title: "Hongos y Reino Fungi",
    image: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBLlnuYdwUmGWzP95P38aA23ofSIRhdFmdyed1sBcfQESFTWuN0M6wa0_Q2jxR2k4Jeat_KjycCUgO3J8KL4Lbj3pbId4OYRl_91LxReDXgoFfGV5OwIAUbU_aOJ8caGSSBseKYF5SRNVrVrUl_I0tAqbHdfJDAp4mUG0f16pSHmLtWDWrqHKgIxzQXYXwR0chSnYt-44QUKXKx38qiFv0UiSHVn_upd0OsOYsCLFBok4MtESKKV1ES_AS2L5TRNE4wqzntsZxrb6w')",
    icon: "energy_savings_leaf",
    tag: "Micología",
    description: "Levantamiento de macrohongos y caracterización de micobiota nativa en estudios de línea base. Evaluación de roles ecosistémicos y simbiosis micorrícica en proyectos de restauración y compensación ambiental.",
    items: [
      "Inventario de macrohongos",
      "Caracterización de micobiota del suelo",
      "Evaluación funcional en restauración ecológica",
      "Línea base fúngica para SEIA"
    ]
  }
];



export default function ServicesPage() {
  return (
    <div>
      <main>
        <header className="py-20 px-6 bg-[#f8faf9]">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 bg-[#16a34a]/10 text-[#16a34a] border border-[#16a34a]/20 text-xs font-bold tracking-widest uppercase rounded-full mb-6">Excelencia Técnica</span>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-8 leading-tight">Nuestros Servicios <span className="text-[#16a34a] italic">Ambientales</span></h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Especialistas en el levantamiento, caracterización y monitoreo de la biodiversidad bajo los más altos estándares científicos y normativos.
              </p>
            </div>
          </div>
        </header>

        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 rounded-2xl border border-[#16a34a]/20 bg-[#f8faf9] p-6">
              <p className="text-lg font-bold text-[#1a4d2e] mb-3">Diagnóstico temprano de riesgo en flora y fauna</p>
              <p className="text-sm font-semibold text-slate-700 mb-3">Incluye:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <span className="material-symbols-outlined text-[#16a34a] text-base shrink-0">check_circle</span>
                  <span>Identificación de especies críticas</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <span className="material-symbols-outlined text-[#16a34a] text-base shrink-0">check_circle</span>
                  <span>Evaluación de riesgo de observaciones</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <span className="material-symbols-outlined text-[#16a34a] text-base shrink-0">check_circle</span>
                  <span>Mapa de conflicto ambiental</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-600">
                  <span className="material-symbols-outlined text-[#16a34a] text-base shrink-0">check_circle</span>
                  <span>Estrategia de ingreso al SEIA</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlightServices.map((service, index) => (
                <div key={index} className="service-card rounded-2xl overflow-hidden flex flex-col bg-slate-50 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="h-64 overflow-hidden relative">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: service.image }}></div>
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#16a34a] text-sm">{service.icon}</span>
                      <span className="text-[10px] font-bold tracking-widest uppercase">{service.tag}</span>
                    </div>
                  </div>
                  <div className="p-8 flex-grow">
                    <h3 className="text-2xl font-bold text-[#1a4d2e] mb-4">{service.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-8">
                      {service.items.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-500">
                          <span className="material-symbols-outlined text-[#16a34a] text-base shrink-0">check_circle</span>
                          <span>{item}</span>
                        </li>
                      ))}
                      {service.items.length > 3 && (
                        <li className="text-xs text-[#16a34a] font-bold pl-6 pt-2">
                          + {service.items.length - 3} servicios adicionales
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16 text-center">
              <Link href="/servicios/catalogo" className="inline-flex items-center gap-3 bg-[#16a34a] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#1a4d2e] transition-all shadow-lg shadow-[#16a34a]/30">
                            Ver Catálogo Completo
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </Link>
          </div>
          
        </section>

        <section className="py-24 px-6 bg-[#1a4d2e] text-white overflow-hidden">

<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="inline-block px-4 py-1.5 bg-[#16a34a] text-white text-xs font-bold tracking-widest uppercase rounded-full mb-8">Metodología Servicio</div>
<h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight italic">Evaluación de Valor de Biodiversidad</h2>
<p className="text-xl text-stone-200 mb-10 leading-relaxed">
                    Nuestra metodología propietaria permite asignar un valor científico y económico a la riqueza biológica de un territorio. Es una herramienta clave para inversionistas, conservación privada y cumplimiento de estándares ESG.
                </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
<div className="flex flex-col gap-3">
<span className="material-symbols-outlined text-[#16a34a] text-4xl">analytics</span>
<h4 className="font-bold text-lg">Diagnóstico Ecológico Temprano</h4>
<p className="text-stone-300 text-sm">Identificamos atributos críticos de flora, fauna y hábitat para anticipar riesgos desde etapas iniciales.</p>
</div>
<div className="flex flex-col gap-3">
<span className="material-symbols-outlined text-[#16a34a] text-4xl">verified</span>
<h4 className="font-bold text-lg">Gestión de Riesgos Ambientales</h4>
<p className="text-stone-300 text-sm">Definimos restricciones regulatorias y oportunidades de diseño para reducir impactos y facilitar el desarrollo.</p>
</div>
</div>
<Link href="/metodologia" className="bg-white text-[#1a4d2e] hover:bg-stone-100 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center gap-3 w-fit">
                    Conocer la Metodología <span className="material-symbols-outlined">arrow_forward</span>
</Link>
</div>
<div className="relative lg:h-[600px] flex items-center justify-center">
<div className="absolute inset-0 bg-[#16a34a]/20 rounded-full blur-[120px] scale-75"></div>
<div className="relative z-10 w-full aspect-square border-2 border-[#16a34a]/30 rounded-full p-12 animate-spin-slow">
<div className="w-full h-full bg-cover bg-center rounded-full opacity-90 grayscale hover:grayscale-0 transition-all duration-700" data-alt="Breathtaking landscape of Chilean Andes mountains with morning mist" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAD5JD0-Lpv9p6BWHfhwv-qj7GSYmHKBo6cq4GQt4hxVrWbjed3gocTvjPcXcRA1YTuN3L2aP-NOfL-azRpSwBw9Oa3dITBd2E_ap4Hwczb8V4nW6nQutXHunGvULnUM3ZWQhmyBN281XuwI68-6BEp4wmg-Rna4VyiH-qIVL4-7NvCodgWspkXcRB5b75zBABe5odxfrFsat4_1smUWR2vDY0x8P26r3_1gN1vw07kx3inw0wgsvx5Gy37CLPKfe0dGgiNGw5PWTo')"}}></div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
<div className="bg-white text-[#1a4d2e] p-6 rounded-2xl shadow-2xl text-center border-4 border-[#16a34a]">
<span className="text-5xl font-black block mb-1">+45%</span>
<span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Valor de Conservación</span>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 px-6 bg-white">
<div className="max-w-7xl mx-auto text-center">
<h2 className="text-[#16a34a] text-sm font-bold uppercase tracking-[0.3em] mb-4">Metodología de Campo</h2>
<h3 className="text-4xl font-bold mb-20">Rigor Científico en Cada Etapa</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="flex flex-col items-center">
<div className="w-20 h-20 bg-[#f8faf9] rounded-2xl flex items-center justify-center mb-6 text-[#1a4d2e] border border-[#e5e7eb]">
<span className="material-symbols-outlined text-4xl">map</span>
</div>
<h4 className="text-xl font-bold mb-4">1. Planificación SIG</h4>
<p className="text-slate-500 text-sm max-w-xs leading-relaxed">Definición de áreas de influencia y estratificación del terreno mediante sistemas de información geográfica de alta precisión.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-20 h-20 bg-[#f8faf9] rounded-2xl flex items-center justify-center mb-6 text-[#1a4d2e] border border-[#e5e7eb]">
<span className="material-symbols-outlined text-4xl">biotech</span>
</div>
<h4 className="text-xl font-bold mb-4">2. Campañas de Terreno</h4>
<p className="text-slate-500 text-sm max-w-xs leading-relaxed">Ejecución de muestreos estacionales liderados por especialistas con PhD en cada línea biológica correspondiente.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-20 h-20 bg-[#f8faf9] rounded-2xl flex items-center justify-center mb-6 text-[#1a4d2e] border border-[#e5e7eb]">
<span className="material-symbols-outlined text-4xl">description</span>
</div>
<h4 className="text-xl font-bold mb-4">3. Elaboración de LB</h4>
<p className="text-slate-500 text-sm max-w-xs leading-relaxed">Informes técnicos robustos que superan las exigencias del SEIA (Servicio de Evaluación de Impacto Ambiental).</p>
</div>
</div>
</div>
</section>
      </main>
    </div>
  );
}
