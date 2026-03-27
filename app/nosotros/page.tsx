import type { Metadata } from 'next';
import WorkCarousel from '@/components/work-carousel';

export const metadata: Metadata = {
    title: 'Sobre Nosotros',
    description:
        'Conoce al equipo multidisciplinario de FloraFauna y nuestro enfoque cientifico para consultoria ambiental, biodiversidad y proyectos SEIA en Chile.',
    keywords: ['equipo florafauna', 'consultoria ambiental', 'biodiversidad', 'SEIA', 'chile'],
    alternates: {
        canonical: '/nosotros',
    },
  openGraph: {
        title: 'Sobre Nosotros',
        description: 'Equipo y trayectoria de FloraFauna en consultoria ambiental y biodiversidad.',
        url: '/nosotros',
        locale: 'es_CL',
    type: 'website',
  },
    twitter: {
        card: 'summary_large_image',
        title: 'Sobre Nosotros',
        description: 'Equipo y trayectoria de FloraFauna en consultoria ambiental y biodiversidad.',
    },
};

export default function AboutPage() {
  return (
    <div>
      <main>
        <header className="pt-12 pb-20 px-6">
            <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="inline-block px-3 py-1 bg-[#16a34a]/10 text-[#16a34a] text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-[#16a34a]/20">Nuestro Propósito</span>
                        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8 text-[#1e293b]">Consultoría con <span className="text-[#16a34a]">rigor científico</span> y sentido humano.</h1>
                        <p className="text-xl text-slate-600 leading-relaxed mb-8">
                            En FloraFauna Chile, transformamos la relación entre el desarrollo y el entorno natural a través de un profundo conocimiento de la biodiversidad.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                            <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url('./members/GrupoFF.jpg')"}}></div>
                        </div>
                        <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block max-w-xs">
                            <p className="text-[#16a34a] font-bold text-lg mb-1">Impacto Positivo</p>
                            <p className="text-slate-500 text-sm">Más de 50 estudios de biodiversidad realizados con excelencia técnica en todo el territorio nacional.</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section className="py-24 px-6 bg-[#f8fafc]">
            <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col h-full">
                        <div className="w-12 h-12 bg-[#16a34a]/10 rounded-xl flex items-center justify-center text-[#16a34a] mb-6">
                            <span className="material-symbols-outlined">target</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-[#1e293b]">Objetivo</h3>
                        <p className="text-slate-600 leading-relaxed">Proveer soluciones ambientales de alta precisión que aseguren la viabilidad técnica y ecológica de proyectos complejos en ecosistemas sensibles.</p>
                    </div>
                    <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col h-full">
                        <div className="w-12 h-12 bg-[#78350f]/10 rounded-xl flex items-center justify-center text-[#78350f] mb-6">
                            <span className="material-symbols-outlined">psychiatry</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-[#1e293b]">Enfoque</h3>
                        <p className="text-slate-600 leading-relaxed">Metodologías basadas en evidencia científica y trabajo de campo exhaustivo, garantizando que cada dato refleje la realidad del territorio.</p>
                    </div>
                    <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col h-full">
                        <div className="w-12 h-12 bg-[#3f6212]/10 rounded-xl flex items-center justify-center text-[#3f6212] mb-6">
                            <span className="material-symbols-outlined">visibility</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-[#1e293b]">Proyección</h3>
                        <p className="text-slate-600 leading-relaxed">Ser el referente nacional en la integración de tecnología de punta para el monitoreo y conservación de la biodiversidad.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-24 px-6 bg-white" id="team">
<div className="max-w-[1200px] mx-auto">
<div className="text-center mb-20">
<h2 className="text-[#16a34a] text-sm font-bold uppercase tracking-[0.2em] mb-4">Quiénes la conforman</h2>
<h3 className="text-4xl md:text-5xl font-bold text-[#1e293b]">Un equipo multidisciplinario</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
<div className="group">
<div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative">
<div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: "url('./members/PDauelsberg.jpeg')"}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<h4 className="text-xl font-bold text-[#1e293b]">Patricia Dauelsberg</h4>
<p className="text-[#16a34a] font-bold text-xs uppercase tracking-widest mt-1 mb-3">Directora de Proyectos</p>
<p className="text-slate-500 text-sm leading-relaxed text-justify">Bióloga pucv , doctora en ciencias de la agricultura PUC, magister en gestión, experta en dar soluciones a sistemas complejos y diversidad.</p>
</div>
<div className="group">
<div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative">
<div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: "url('./members/JLeyton.jpg')"}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<h4 className="text-xl font-bold text-[#1e293b]">Javiera Leyton</h4>
<p className="text-[#16a34a] font-bold text-xs uppercase tracking-widest mt-1 mb-3">Coordinación y Jefatura de Proyectos</p>
<p className="text-slate-500 text-sm leading-relaxed text-justify">Ingeniera en Medio Ambiente con experiencia en línea base de flora y fauna para proyectos del SEIA. Realiza trabajo de terreno, monitoreo de biodiversidad, análisis geoespacial y elaboración de informes técnicos para evaluación ambiental.</p>
</div>
<div className="group">
<div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative">
<div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: "url('./members/EEwok.jpg')"}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<h4 className="text-xl font-bold text-[#1e293b]">Elías Encina</h4>
<p className="text-[#16a34a] font-bold text-xs uppercase tracking-widest mt-1 mb-3">Encargado de Campañas</p>
<p className="text-slate-500 text-sm leading-relaxed text-justify">Geógrafo y doctorando en Ecología Integrativa, con experiencia en biodiversidad, evaluación ambiental, monitoreo de fauna, cartografía y proyectos del SEIA, además de investigación científica en ecología.</p>
</div>
<div className="group">
<div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative">
<div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: "url('./members/UUnnamed.jpg')"}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<h4 className="text-xl font-bold text-[#1e293b]">Felipe Góngora</h4>
<p className="text-[#16a34a] font-bold text-xs uppercase tracking-widest mt-1 mb-3">Ayudante de Campañas</p>
<p className="text-slate-500 text-sm leading-relaxed text-justify">Especialista en trabajo de campo en flora y fauna, con enfoque en ecología aplicada. Experiencia en rescate y relocalización de fauna silvestre, monitoreo de flora nativa y análisis estadístico de datos ecológicos.</p>
</div>
<div className="group">
<div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative">
<div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: "url('./members/EFuentes.jpg')"}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<h4 className="text-xl font-bold text-[#1e293b]">Emilia Fuentes</h4>
<p className="text-[#16a34a] font-bold text-xs uppercase tracking-widest mt-1 mb-3">Especialista Flora, Vegetación y Artrópodos</p>
<p className="text-slate-500 text-sm leading-relaxed text-justify">Ingeniera Forestal especializada en flora y biodiversidad, con experiencia en línea base de vegetación, monitoreo de polinizadores e inventarios para proyectos de investigación y del SEIA, utilizando análisis ecológico y cartografía.</p>
</div>
<div className="group">
<div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative">
<div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: "url('./members/RodrigoMeneses.jpg')"}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<h4 className="text-xl font-bold text-[#1e293b]">Rodrigo Meneses</h4>
<p className="text-[#16a34a] font-bold text-xs uppercase tracking-widest mt-1 mb-3">Encargado de Modelación de Sistemas</p>
<p className="text-slate-500 text-sm leading-relaxed text-justify">Ingeniero Civíl Matemático especializado en modelación matemática aplicada a fenómenos complejos, desde procesos en geofísica y astrofísica hasta dinámicas y patrones presentes en ecosistemas y fauna.</p>
</div>
</div>
</div>
</section>
<section className="py-24 px-6 bg-[#f0fdf4]">
<div className="max-w-[1200px] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-8">
<div className="max-w-xl">
<h2 className="text-[#16a34a] text-sm font-bold uppercase tracking-[0.2em] mb-4">Nuestro Trabajo</h2>
<h3 className="text-4xl font-bold text-[#1e293b]">Ciencia en el terreno</h3>
</div>
<p className="text-slate-600 text-lg">Donde la teoría se encuentra con la biodiversidad real.</p>
</div>
<WorkCarousel />
</div>
</section>
      </main>
    </div>
  );
}
