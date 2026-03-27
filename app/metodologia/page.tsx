import type { Metadata } from 'next';
import MethodologyCard from '@/components/MethodologyCard';
import Link from "next/link";
import { withBasePath } from '@/lib/base-path';

const methodologies = [
  {
    title: 'Avifauna',
    icon: 'flutter_dash',
    image: `url('${withBasePath('/fauna/fauna5.jpg')}')`,
    fieldMethodology: 'Puntos de conteo de radio fijo y transectos lineales en periodos de máxima actividad reproductiva y migratoria. Registro visual y auditivo estandarizado, considerando estacionalidad y esfuerzo de muestreo acorde a requerimientos del SEIA.',
    bibliographicAnalysis: 'Revisión sistemática en bases de datos (eBird, GBIF) y literatura científica actualizada. Evaluación de estados de conservación (RCE), rutas migratorias, uso de hábitat y sensibilidad frente a intervención del proyecto. Así como también datos complementarios de ciencia ciudadana.'
  },
  {
    title: 'Anfibios',
    icon: 'water_drop',
    image: `url('${withBasePath('/flora/misc/misc3.JPG')}')`,
    fieldMethodology: 'Búsqueda activa por encuentro visual (VES) en cuerpos de agua, vegas y microhábitats asociados. Muestreos nocturnos con identificación auditiva de coros reproductivos y registro de condiciones ambientales.',
    bibliographicAnalysis: 'Evaluación de estados de conservación (RCE), identificación de microhábitats críticos, análisis de conectividad y susceptibilidad a alteración hidrológica o pérdida de hábitat.'
  },
  {
    title: 'Reptiles',
    icon: 'grass',
    image: `url('${withBasePath('/fauna/fauna13.jpg')}')`,
    fieldMethodology: 'Transectos de inspección visual en horarios de máxima actividad térmica. Revisión sistemática de refugios potenciales y captura manual selectiva cuando corresponde. Registro georreferenciado de individuos y microhábitats.',
    bibliographicAnalysis: 'Evaluación de endemismo, distribución altitudinal y uso de hábitat. Identificación de áreas críticas para planes de rescate y relocalización y análisis de vulnerabilidad frente a fragmentación.'
  },
  {
    title: 'Mamíferos',
    icon: 'pets',
    image: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD8mJXs5ibrn83Jb5Sx2_f2_43_25Jj9ax6RctlQrANufGD-YOGrtdLoBOVCO-lFQTSGmqMBvq17LQoxN1x5ftZl2NrhE2PnKzX1mv4jJT2-T5miELB-hLzPVD_RecIzGW1HAcEBMgggmeX7zzWNIg0iHRR8QLIa1ZqjswNg84EsVFHTqxpKi2dy3VLI5Drh1dgBuzgx2TvOSKWCcKR1WIf-BsncdZnPphH-V15xARnlax90Q9A5IdPRb3tG8gOLJUfbxtfY-IP0fs')",
    fieldMethodology: 'Instalación de cámaras trampa, búsqueda de indicios indirectos (huellas, fecas, madrigueras) y uso de trampas Sherman para micromamíferos, considerando estacionalidad y esfuerzo mínimo requerido.',
    bibliographicAnalysis: 'Evaluación de estados de conservación, análisis de conectividad ecológica y corredores biológicos, y determinación de potencial afectación por fragmentación o intervención directa.'
  },
  {
    title: 'Flora y Vegetación',
    icon: 'forest',
    image: `url('${withBasePath('/flora/flor/flor1.jpg')}')`,
    fieldMethodology: 'Levantamiento florístico mediante parcelas y transectos de muestreo representativos de las unidades vegetacionales (arbórea, arbustiva y herbácea) presentes en el área de estudio. Identificación in situ y colecta botánica cuando corresponde, con georreferenciación de individuos y delimitación cartográfica de formaciones vegetacionales. Caracterización estructural y composicional de comunidades vegetales, incluyendo cobertura y abundancia.',
    bibliographicAnalysis: 'Identificación taxonómica mediante análisis morfológico y microscópico. Evaluación de riqueza y composición de comunidades, identificación de especies sensibles y análisis como bioindicadores de calidad ambiental. Determinación de sensibilidad frente a remoción de sustrato, emisión de material particulado o alteración microclimática.'
  },
  {
    title: 'Líquenes',
    icon: 'spa',
    image: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA0En8TK71vACtUjA3ssdz_lwfZrUuCsF68JGpmKbGdOGrOYE43yEZ7TZpTGHL54aNf6x6n-F35KmYSmx1ZATjs4XyIxRdQsJILw23x-Gts8hbU5cr_3_tNUZkw6cDa7LxtniLPesxt5Lk0ppGZS4GUpRMrfE-erNmffS8it0E0aKYtt6ZbjHO074H4Rz60RGlL_uos8BFZZeqevG7bOaunD703mBHO4UOh7qwiJPby91Wtvu5HvvxjU5FPL3k7JH2Ovcl1vO0UX7o')",
    fieldMethodology: 'Levantamiento de comunidades liquénicas mediante transectos y cuadrantes en sustratos representativos (suelo, roca, corteza). Registro de cobertura y presencia, con georreferenciación de puntos de muestreo. Colecta selectiva para identificación microscópica cuando corresponde.',
    bibliographicAnalysis: 'Identificación taxonómica mediante análisis morfológico y microscópico. Evaluación de riqueza y composición de comunidades, identificación de especies sensibles y análisis como bioindicadores de calidad ambiental. Determinación de sensibilidad frente a remoción de sustrato, emisión de material particulado o alteración microclimática.'
  },
  {
    title: 'Hongos y Reino Fungi',
    icon: 'compost',
    image: `url('${withBasePath('/flora/hongo/hongo2.jpg')}')`,
    fieldMethodology: 'Prospección dirigida de macrohongos mediante recorridos sistemáticos en microhábitats representativos. Registro fotográfico, georreferenciación y colecta controlada cuando corresponde. Caracterización preliminar de micobiota asociada a suelo y vegetación en proyectos que lo requieran.',
    bibliographicAnalysis: 'Identificación taxonómica de macrohongos y evaluación de su rol ecológico (descomponedores, micorrícicos, parásitos). Análisis de diversidad y estacionalidad. Evaluación de pérdida potencial de microhábitats, alteración de simbiosis micorrícica y sensibilidad frente a cambio de uso de suelo.'
  },
  {
    title: 'Quirópteros',
    icon: 'nightlight',
    image: `url('${withBasePath('/flora/misc/misc4.jpg')}')`,
    fieldMethodology: 'Monitoreo mediante grabaciones bioacústicas ultrasónicas, instalación de redes de niebla en pasos obligados e identificación de refugios en estructuras naturales y antrópicas.',
    bibliographicAnalysis: 'Análisis comparativo de espectrogramas, revisión de periodos reproductivos e hibernación, evaluación de sensibilidad frente a iluminación, ruido y alteración de refugios.'
  }
];

export const metadata: Metadata = {
  title: 'Metodologia de Monitoreo',
  description:
    'Conoce la metodologia de FloraFauna para monitoreo de flora, fauna y biodiversidad con rigor cientifico y estandares del SEIA.',
  keywords: ['metodologia ambiental', 'monitoreo fauna', 'monitoreo flora', 'SEIA', 'consultoria cientifica'],
  alternates: {
    canonical: '/metodologia',
  },
  openGraph: {
    title: 'Metodologia de Monitoreo',
    description: 'Protocolos cientificos para linea base y monitoreo ambiental en Chile.',
    url: '/metodologia',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Metodologia de Monitoreo',
    description: 'Protocolos cientificos para linea base y monitoreo ambiental en Chile.',
  },
};

export default function MethodologyPage() {
  return (
    <div>
      <main>
        <header className="pt-12 pb-16 px-6 bg-[#f8fafc]">
          <div className="max-w-[1200px] mx-auto">
            <span className="inline-block px-3 py-1 bg-[#16a34a]/10 text-[#16a34a] text-xs font-bold tracking-widest uppercase rounded-full mb-4">Protocolos Científicos</span>
            <h1 className="text-5xl font-bold text-[#1e293b] mb-6">Metodologías de <span className="text-[#16a34a]">Monitoreo</span></h1>
            <p className="text-xl text-slate-500 max-w-3xl leading-relaxed">
              Nuestros procesos integran análisis bibliográfico exhaustivo con metodologías de campo estandarizadas para el levantamiento de fauna, cumpliendo con los requerimientos del SEIA y los más altos estándares científicos.
            </p>
          </div>
        </header>
        <main className="py-20 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
              {methodologies.map((methodology, index) => (
                <MethodologyCard
                  key={index}
                  title={methodology.title}
                  icon={methodology.icon}
                  image={methodology.image}
                  fieldMethodology={methodology.fieldMethodology}
                  bibliographicAnalysis={methodology.bibliographicAnalysis}
                />
              ))}

              <div className="flex flex-col justify-center p-8 bg-[#16a34a]/5 rounded-3xl border border-[#16a34a]/10">
                <span className="material-symbols-outlined text-[#16a34a] text-5xl mb-6">verified_user</span>
                <h3 className="text-xl font-bold text-[#1e293b] mb-4">Compromiso de Calidad</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Todos nuestros levantamientos siguen las guías de descripción de fauna del Servicio de Evaluación Ambiental (SEA) y se ejecutan bajo permisos de caza científica vigentes otorgados por el SAG.
                </p>
                <Link href="https://www.sea.gob.cl/" className="cursor-pointer flex items-center gap-2 text-[#16a34a] font-bold text-sm hover:underline">
                  Descargar Guía de Estándares <span className="material-symbols-outlined text-sm">open_in_new</span>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-[#16a34a] text-sm font-bold uppercase tracking-[0.2em] mb-4">Integridad de Datos</h2>
              <h3 className="text-4xl font-bold text-[#1e293b] mb-8 leading-tight">Procesamiento de información con rigor científico</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[#16a34a] text-xl">dataset</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1e293b]">Taxonomía Actualizada</h4>
                    <p className="text-slate-500 text-sm mt-1">Utilizamos la nomenclatura más reciente aceptada internacionalmente y por la Academia Chilena de Ciencias.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[#16a34a] text-xl">map</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1e293b]">Georreferenciación de Precisión</h4>
                    <p className="text-slate-500 text-sm mt-1">Todos los avistamientos son procesados en plataformas SIG (QGIS/ArcGIS) para análisis espacial avanzado.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[#16a34a] text-xl">menu_book</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1e293b]">Reportes Técnicos</h4>
                    <p className="text-slate-500 text-sm mt-1">Documentación detallada lista para ser ingresada al Sistema de Evaluación de Impacto Ambiental.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white rounded-[2.5rem] p-12 shadow-2xl shadow-slate-200 flex flex-col justify-center">
                <div className="grid grid-cols-2 gap-8 text-center">
                  <div className="p-6 rounded-2xl bg-slate-50">
                    <p className="text-3xl font-bold text-[#16a34a] mb-1">+15</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Años de Experiencia</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-slate-50">
                    <p className="text-3xl font-bold text-[#16a34a] mb-1">500+</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Especies Registradas</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-slate-50">
                    <p className="text-3xl font-bold text-[#16a34a] mb-1">100%</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Cumplimiento SAG</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-slate-50">
                    <p className="text-3xl font-bold text-[#16a34a] mb-1">24/7</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Monitoreo Remoto</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#16a34a]/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-full blur-3xl"></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
