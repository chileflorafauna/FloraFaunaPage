import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Catalogo de Servicios',
  description:
    'Detalle del catalogo de servicios de FloraFauna para flora, fauna y biodiversidad: diagnostico de riesgo, linea base, monitoreo y cumplimiento ambiental.',
  keywords: ['catalogo ambiental', 'servicios flora fauna', 'biodiversidad', 'consultoria SEIA'],
  alternates: {
    canonical: '/servicios/catalogo',
  },
  openGraph: {
    title: 'Catalogo de Servicios',
    description: 'Portafolio completo de soluciones ambientales por area tecnica.',
    url: '/servicios/catalogo',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catalogo de Servicios',
    description: 'Portafolio completo de soluciones ambientales por area tecnica.',
  },
};

const detailedServices = [
  {
    category: "Servicios de Flora y Vegetación",
    icon: "psychiatry",
    services: [
      { id: 1, title: "Diagnóstico Temprano de Riesgo en Flora", description: "Evaluación temprana para identificar especies críticas de flora, analizar riesgo de observaciones, elaborar mapa de conflicto ambiental y definir estrategia de ingreso al SEIA." },
      { id: 2, title: "Estudios de Línea Base de Flora", description: "Levantamiento y caracterización de la flora presente en áreas de proyectos, incluyendo identificación de especies, estado de conservación y elaboración de informes técnicos para procesos de evaluación ambiental." },
      { id: 3, title: "Caracterización de Vegetación", description: "Análisis de comunidades vegetales, estructura y cobertura de la vegetación para comprender la composición y estado ecológico de los ecosistemas presentes en el área de estudio." },
      { id: 4, title: "Manejo y Conservación de Flora Vulnerable", description: "Diseño e implementación de medidas de manejo para especies vegetales en categoría de conservación, incluyendo seguimiento y monitoreo." },
      { id: 5, title: "Rescate, Monitoreo y Relocalización de Flora", description: "Aplicación de procedimientos técnicos para el rescate, monitoreo, traslado y establecimiento de especies vegetales presentes en áreas de intervención.", alliance: "En alianza con Vivero San Pedro" },
      { id: 6, title: "Propagación y Producción de Plantas Nativas", description: "Reproducción y manejo de especies nativas destinadas a programas de restauración ecológica, revegetación y compensación ambiental." },
      { id: 7, title: "Restauración y Revegetación Ecológica", description: "Diseño e implementación de programas de restauración vegetal mediante el uso de especies nativas, orientados a recuperar ecosistemas intervenidos."},
      { id: 8, title: "Producción y Suministro de Cactáceas Nativas", description: "Disponibilidad de cactáceas nativas para proyectos de restauración ecológica, revegetación y compensación ambiental en ecosistemas.", alliance: "En alianza con Vivero San Pedro" },
      { id: 9, title: "Estudios de Línea Base de Hongos y Líquenes", description: "Levantamiento y caracterización de comunidades de hongos y líquenes para determinar su riqueza, distribución y estado de conservación en el área del proyecto." }
    ]
  },
  {
    category: "Servicios de Fauna",
    icon: "pets",
    services: [
      { id: 10, title: "Diagnóstico Temprano de Riesgo en Fauna", description: "Evaluación temprana para identificar especies críticas de fauna, analizar riesgo de observaciones, elaborar mapa de conflicto ambiental y definir estrategia de ingreso al SEIA." },
      { id: 11, title: "Estudios y Monitoreo de Fauna", description: "Levantamiento de información sobre fauna silvestre mediante registros directos e indirectos, orientado a identificar especies presentes y evaluar posibles impactos ambientales." },
      { id: 12, title: "Rescate, Monitoreo y Relocalización de Fauna", description: "Implementación de medidas de rescate, manejo y liberación de fauna silvestre presente en áreas de intervención, asegurando su traslado a hábitats adecuados." },
      { id: 13, title: "Inspección en Terreno", description: "Supervisión durante la ejecución de proyectos para asegurar el cumplimiento de medidas de protección de fauna y la correcta implementación de medidas ambientales." }
    ]
  },
  {
    category: "Servicios de Biodiversidad",
    icon: "diversity_3",
    services: [
      { id: 14, title: "Restauración Ecológica y Manejo de Ecosistemas", description: "Diseño e implementación de estrategias para la recuperación de ecosistemas degradados mediante el uso de especies nativas y prácticas de manejo ecológico." },
      { id: 15, title: "Estrategias de Integración de Biodiversidad en Proyectos", description: "Asesoría para incorporar la biodiversidad como parte del desarrollo de proyectos, identificando oportunidades para mejorar la sostenibilidad y reducir impactos ambientales." },
      { id: 16, title: "Estrategia Sistémica de Biodiversidad", description: "Desarrollo de enfoques basados en pensamiento sistémico para integrar biodiversidad, territorio y actividad productiva, promoviendo proyectos más resilientes y compatibles con los ecosistemas." },
      { id: 17, title: "Prefactibilidad Ambiental de Flora y Fauna", description: "Evaluación temprana de la presencia de flora y fauna relevante en el área de influencia de un proyecto, identificando riesgos ambientales, restricciones regulatorias y oportunidades de diseño para reducir impactos y facilitar su desarrollo." },
      { id: 18, title: "Servicios de Seguimiento y cumplimiento ambiental post RCA", description: "Auditoría y control de compromisos ambientales adquiridos, verificando el cumplimiento normativo en las fases de construcción, operación y cierre." }
    ]
  }
];

export default function ServicesCatalogPage() {
  return (
    <div>
      <header className="pt-16 pb-12 px-6 bg-[#f0fdf4]">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-[#16a34a]/10 text-[#16a34a] border-[#16a34a]/20 text-xs font-bold tracking-widest uppercase rounded-full shadow-sm mb-6 border">Catálogo Completo</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1e293b]">Detalle de Servicios por Área</h1>
          <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
            Explora nuestro portafolio completo de soluciones ambientales especializadas.
          </p>
        </div>
      </header>

      <section className="py-20 px-6 bg-[#f0fdf4] min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20">
            {detailedServices.map((category, catIndex) => (
              <div key={catIndex} className="relative">
                <div className="flex items-center gap-4 mb-10 border-b border-[#16a34a]/20 pb-4 sticky top-15 bg-[#f0fdf4] z-10 pt-4">
                  <div className="w-12 h-12 rounded-xl bg-[#16a34a] flex items-center justify-center text-white shadow-lg shadow-[#16a34a]/30">
                    <span className="material-symbols-outlined text-2xl">{category.icon}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-[#1a4d2e]">{category.category}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service) => (
                    <div key={service.id} className="bg-white p-6 rounded-2xl border border-[#16a34a]/10 hover:border-[#16a34a]/40 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full">
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-4xl font-black text-[#f0fdf4] group-hover:text-[#dcfce7] transition-colors duration-300 -ml-2 select-none">
                          {service.id < 10 ? `0${service.id}` : service.id}
                        </span>
                        {service.alliance && (
                           <span className="text-[10px] font-bold uppercase tracking-wider bg-orange-50 text-orange-600 px-2 py-1 rounded-full border border-orange-100">
                             Alianza
                           </span>
                        )}
                      </div>
                      <h4 className="text-lg font-bold text-[#1e293b] mb-3 group-hover:text-[#16a34a] transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                        {service.description}
                      </p>
                      {service.alliance && (
                        <div className="mt-4 pt-4 border-t border-slate-50">
                            <p className="text-xs font-medium text-orange-600 flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">handshake</span>
                                {service.alliance}
                            </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto rounded-3xl bg-[#1a4d2e] p-12 text-center text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#16a34a]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
             
             <div className="relative z-10">
                 <h2 className="text-3xl font-bold mb-6">¿Necesitas un servicio a medida?</h2>
                 <p className="text-stone-300 mb-8 max-w-xl mx-auto">
                     Si tu proyecto requiere requerimientos específicos no listados aquí, contáctanos para evaluar una solución personalizada.
                 </p>
                 <Link href="/contacto" className="inline-flex items-center gap-2 bg-white text-[#1a4d2e] hover:bg-stone-100 px-8 py-4 rounded-xl font-bold transition-all">
                    Contáctanos
                 </Link>
             </div>
          </div>
      </section>
    </div>
  );
}
