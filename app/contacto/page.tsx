import type { Metadata } from 'next';
import ContactForm from '../../components/ContactForm';

export const metadata: Metadata = {
  title: 'Contacto | FloraFauna',
    description:
        'Contacto y cotizaciones de FloraFauna en Chile. Solicita presupuestos para estudios de línea base, monitoreo biológico y gestión ambiental con respaldo científico.',
    keywords: [
        'contacto florafauna',
        'cotización ambiental',
        'consultora ambiental chile',
        'línea de base flora fauna',
        'monitoreo biológico',
        'SEIA',
    ],
    alternates: {
        canonical: '/contacto',
    },
    openGraph: {
        title: 'Contacto y Cotizaciones | FloraFauna',
        description:
            'Solicita una propuesta técnica para estudios de flora, fauna y biodiversidad en Chile.',
        url: '/contacto',
        locale: 'es_CL',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contacto y Cotizaciones | FloraFauna',
        description:
            'Solicita una propuesta técnica para estudios de flora, fauna y biodiversidad en Chile.',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function ContactPage() {
    const contactJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contacto y Cotizaciones FloraFauna',
        description:
            'Canal de contacto para cotizaciones y consultas técnicas de servicios ambientales en Chile.',
        inLanguage: 'es-CL',
        mainEntity: {
            '@type': 'Organization',
            name: 'FloraFauna',
            email: 'Pdauelsberg@komunconsulting.com',
            telephone: '+56 9 4257 1804',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Vina del Mar',
                addressCountry: 'CL',
            },
            contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer support',
                email: 'Pdauelsberg@komunconsulting.com',
                telephone: '+56 9 4257 1804',
                areaServed: 'CL',
                availableLanguage: ['Spanish'],
            },
        },
    };

  return (
    <div className='bg-[#f8faf9]'>
        <main>
                        <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
                        />
            <header className="pt-20 pb-20 px-6 bg-[#f0fdf4]">
                <div className="max-w-7xl mx-auto text-center">
                    <span className="inline-block px-4 py-1.5 bg-[#16a34a]/10 text-[#16a34a] border-[#16a34a]/20 text-xs font-bold tracking-widest uppercase rounded-full shadow-sm mb-6 border">Consultas y Presupuestos</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Contacto y Cotizaciones</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Transformamos desafíos ambientales en soluciones sostenibles. Escríbanos para iniciar una colaboración profesional con respaldo científico.
                    </p>
                </div>
            </header>
            <section className="py-16 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-20 items-start">
                        <div className="lg:w-5/12 space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">Información de Contacto</h2>
                                <p className="text-slate-500 leading-relaxed mb-10 text-justify">
                                    Nuestra oficina central se encuentra en el polo empresarial de Santiago. Estamos disponibles para coordinar visitas técnicas en terreno.
                                </p>
                            </div>
                            <div className="space-y-5">
                                <div className="flex gap-6 group">
                                    <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#15803d] shadow-sm border border-slate-100 group-hover:bg-[#15803d] group-hover:text-white transition-all">
                                        <span className="material-symbols-outlined text-2xl">location_on</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Localización</p>
                                        <p className="text-lg font-semibold text-slate-800">Viña del Mar, Chile</p>
                                        <p className="text-slate-500">Cobertura en todo el país</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 group">
                                    <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#15803d] shadow-sm border border-slate-100 group-hover:bg-[#15803d] group-hover:text-white transition-all">
                                        <span className="material-symbols-outlined text-2xl">mail</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Escríbenos</p>
                                        <a className="text-lg font-semibold text-slate-800 hover:text-[#15803d]" href="mailto:Pdauelsberg@komunconsulting.com">Pdauelsberg@komunconsulting.com</a>
                                        <p className="text-slate-500">Respuesta en menos de 24 horas</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 group">
                                    <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#15803d] shadow-sm border border-slate-100 group-hover:bg-[#15803d] group-hover:text-white transition-all">
                                        <span className="material-symbols-outlined text-2xl">call</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Llámanos</p>
                                        <a className="text-lg font-semibold text-slate-800 hover:text-[#15803d]" href="tel:+56942571804">+56 9 4257 1804</a>
                                        <p className="text-slate-500">Lunes a Viernes, 09:00 - 18:00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="py-2 px-8 bg-slate-50 rounded-2xl border border-slate-100 mt-2 text-justify">
                                <h4 className="font-bold text-slate-900 mb-2">Compromiso de Transparencia</h4>
                                <p className="text-sm text-slate-500">Todos nuestros presupuestos incluyen un desglose detallado de metodología, tiempos de ejecución y normativa aplicable según el SEIA.</p>
                            </div>
                        </div>
                        <div className="lg:w-7/12 w-full">
                            <div className="glass-card p-10 md:p-12 rounded-3xl form-shadow">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pb-16 px-6 pt-16 bg-[#fff]">
                <div className="max-w-7xl mx-auto">
                    <div className="rounded-3xl overflow-hidden h-[400px] border border-slate-200 relative grayscale hover:grayscale-0 transition-all duration-700 cursor-crosshair">
                        <div className="absolute inset-0 bg-slate-200 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAD5JD0-Lpv9p6BWHfhwv-qj7GSYmHKBo6cq4GQt4hxVrWbjed3gocTvjPcXcRA1YTuN3L2aP-NOfL-azRpSwBw9Oa3dITBd2E_ap4Hwczb8V4nW6nQutXHunGvULnUM3ZWQhmyBN281XuwI68-6BEp4wmg-Rna4VyiH-qIVL4-7NvCodgWspkXcRB5b75zBABe5odxfrFsat4_1smUWR2vDY0x8P26r3_1gN1vw07kx3inw0wgsvx5Gy37CLPKfe0dGgiNGw5PWTo')", opacity: 0.4}}></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
                                <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
                                <div>
                                    <p className="font-bold text-slate-900">Nuestra Casa Matriz</p>
                                    <p className="text-sm text-slate-500">Viña del Mar, Quinta Región</p>
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
