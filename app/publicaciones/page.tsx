import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Publicaciones y Recursos',
  description:
    'Accede a publicaciones cientificas, recursos tecnicos y materiales de divulgacion sobre biodiversidad y monitoreo ambiental en Chile.',
  keywords: ['publicaciones ambientales', 'recursos biodiversidad', 'investigacion chile', 'flora fauna'],
  alternates: {
    canonical: '/publicaciones',
  },
  openGraph: {
    title: 'Publicaciones y Recursos',
    description: 'Repositorio de publicaciones tecnicas y cientificas de FloraFauna.',
    url: '/publicaciones',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Publicaciones y Recursos',
    description: 'Repositorio de publicaciones tecnicas y cientificas de FloraFauna.',
  },
};

export default function PublicationsPage() {
  return (
    <div>
      <main>
        <section className="pt-12 px-6 mb-20">
<div className="max-w-[1200px] mx-auto">
<div className="max-w-3xl">
<span className="inline-block px-3 py-1 bg-[#16a34a]/10 text-[#16a34a] text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-[#16a34a]/20">Repositorio Académico</span>
<h1 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-8 text-[#1e293b]">Publicaciones e <span className="text-[#16a34a] italic">Investigación</span></h1>
<p className="text-xl text-slate-500 leading-relaxed font-medium">
                    Explora nuestro catálogo de publicaciones científicas, proyectos de conservación y recursos educativos. Comprometidos con la difusión del conocimiento para la preservación de la biodiversidad.
                </p>
</div>
</div>
</section>
<section className="px-6 py-16 bg-[#f8fafc]" id="articulos">
<div className="max-w-[1200px] mx-auto">
<div className="flex items-center gap-4 mb-12">
<span className="material-symbols-outlined text-[#16a34a] text-3xl">article</span>
<h2 className="text-3xl font-bold text-[#1e293b]">Artículos y Proyectos</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="bg-white rounded-2xl overflow-hidden card-shadow group border border-slate-100 transition-transform hover:-translate-y-1">
<div className="aspect-video bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCeNkFJjPSuUhoA2JxCg4V42uP4oTzBjfP9MC3dfB16dbyCGSUOaxBPcLJRuN5VQRbk6hXZmVJ11tEuzHVx24ZXMCVjrz0P-XezK5NwyE5YdXrqWQmIUmDqXZBk67vN2iqcHVZPsUUXEba8m2S-IO8S5aOKz87lWt1xaFwLJopXlTTPXOUJ_IzVH4FSjKPp5PV-bsyHTml5s7seo-Em-9fPA-V1KP4iAGxDGCQCJULg0n0IWzNI4GRFhCrdmGtDvUk3iF3v4cV2ECY')"}}></div>
<div className="p-8">
<span className="text-xs font-bold text-[#16a34a] tracking-widest uppercase mb-3 block">Conservación Terrestre</span>
<h3 className="text-xl font-bold mb-4 group-hover:text-[#16a34a] transition-colors">Efectos del cambio climático en la flora altoandina</h3>
<p className="text-slate-500 text-sm mb-6 leading-relaxed">Un estudio longitudinal de 5 años sobre la resiliencia de especies xerofíticas en la zona central de Chile.</p>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
<span className="text-xs font-medium text-slate-400">PDF • 4.2 MB</span>
<button className="text-[#16a34a] font-bold text-sm flex items-center gap-2 hover:underline">
                                Leer más <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</div>
</div>
<div className="bg-white rounded-2xl overflow-hidden card-shadow group border border-slate-100 transition-transform hover:-translate-y-1">
<div className="aspect-video bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD8mJXs5ibrn83Jb5Sx2_f2_43_25Jj9ax6RctlQrANufGD-YOGrtdLoBOVCO-lFQTSGmqMBvq17LQoxN1x5ftZl2NrhE2PnKzX1mv4jJT2-T5miELB-hLzPVD_RecIzGW1HAcEBMgggmeX7zzWNIg0iHRR8QLIa1ZqjswNg84EsVFHTqxpKi2dy3VLI5Drh1dgBuzgx2TvOSKWCcKR1WIf-BsncdZnPphH-V15xARnlax90Q9A5IdPRb3tG8gOLJUfbxtfY-IP0fs')"}}></div>
<div className="p-8">
<span className="text-xs font-bold text-[#16a34a] tracking-widest uppercase mb-3 block">Ecología de Fauna</span>
<h3 className="text-xl font-bold mb-4 group-hover:text-[#16a34a] transition-colors">Monitoreo de felinos nativos mediante foto-trampeo</h3>
<p className="text-slate-500 text-sm mb-6 leading-relaxed">Resultados del programa de monitoreo en corredores biológicos críticos para la conservación del Puma concolor.</p>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
<span className="text-xs font-medium text-slate-400">Digital • Interact</span>
<button className="text-[#16a34a] font-bold text-sm flex items-center gap-2 hover:underline">
                                Leer más <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</div>
</div>
<div className="bg-white rounded-2xl overflow-hidden card-shadow group border border-slate-100 transition-transform hover:-translate-y-1">
<div className="aspect-video bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA0En8TK71vACtUjA3ssdz_lwfZrUuCsF68JGpmKbGdOGrOYE43yEZ7TZpTGHL54aNf6x6n-F35KmYSmx1ZATjs4XyIxRdQsJILw23x-Gts8hbU5cr_3_tNUZkw6cDa7LxtniLPesxt5Lk0ppGZS4GUpRMrfE-erNmffS8it0E0aKYtt6ZbjHO074H4Rz60RGlL_uos8BFZZeqevG7bOaunD703mBHO4UOh7qwiJPby91Wtvu5HvvxjU5FPL3k7JH2Ovcl1vO0UX7o')"}}></div>
<div className="p-8">
<span className="text-xs font-bold text-[#16a34a] tracking-widest uppercase mb-3 block">Microbiología</span>
<h3 className="text-xl font-bold mb-4 group-hover:text-[#16a34a] transition-colors">Biodiversidad de líquenes como bioindicadores</h3>
<p className="text-slate-500 text-sm mb-6 leading-relaxed">Análisis de la calidad del aire basado en la composición taxonómica de comunidades liquénicas.</p>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
<span className="text-xs font-medium text-slate-400">PDF • 2.8 MB</span>
<button className="text-[#16a34a] font-bold text-sm flex items-center gap-2 hover:underline">
                                Leer más <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="px-6 py-24" id="biblioteca">
<div className="max-w-[1200px] mx-auto">
<div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-[#16a34a] text-3xl">auto_stories</span>
<h2 className="text-3xl font-bold text-[#1e293b]">Biblioteca de Autor</h2>
</div>
<div className="flex gap-4">
<button className="px-4 py-2 rounded-lg bg-slate-100 text-[#1e293b] font-bold text-sm hover:bg-slate-200 transition-all">Ver Libros</button>
<button className="px-4 py-2 rounded-lg text-slate-400 font-bold text-sm hover:text-[#1e293b] transition-all">Ver Posters</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="flex flex-col md:flex-row gap-8 items-start bg-slate-50 rounded-3xl p-8 border border-slate-100">
<div className="w-full md:w-48 aspect-[3/4] bg-slate-200 rounded-lg shadow-2xl flex-shrink-0 bg-cover" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBLlnuYdwUmGWzP95P38aA23ofSIRhdFmdyed1sBcfQESFTWuN0M6wa0_Q2jxR2k4Jeat_KjycCUgO3J8KL4Lbj3pbId4OYRl_91LxReDXgoFfGV5OwIAUbU_aOJ8caGSSBseKYF5SRNVrVrUl_I0tAqbHdfJDAp4mUG0f16pSHmLtWDWrqHKgIxzQXYXwR0chSnYt-44QUKXKx38qiFv0UiSHVn_upd0OsOYsCLFBok4MtESKKV1ES_AS2L5TRNE4wqzntsZxrb6w')"}}></div>
<div className="flex flex-col justify-center">
<h3 className="text-2xl font-bold mb-2">Guía de Campo: Hongos de Chile Central</h3>
<p className="text-slate-400 text-sm mb-6 italic">Por Dra. Elena Rivas &amp; Equipo FloraFauna Chile</p>
<p className="text-slate-600 text-sm mb-8 leading-relaxed">
                            Una obra exhaustiva que describe más de 120 especies de macrohongos, con ilustraciones técnicas y claves dicotómicas para identificación en terreno.
                        </p>
<button className="bg-[#16a34a] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-green-700 transition-all w-fit flex items-center gap-2">
<span className="material-symbols-outlined text-lg">shopping_bag</span> Adquirir Ejemplar
                        </button>
</div>
</div>
<div className="flex flex-col gap-8">
<div className="bg-[#1e293b] text-white rounded-3xl p-8 flex items-center gap-6 group cursor-pointer overflow-hidden relative">
<div className="absolute inset-0 bg-[#16a34a]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="size-16 rounded-2xl bg-[#16a34a] flex items-center justify-center text-3xl relative z-10">
<span className="material-symbols-outlined">play_circle</span>
</div>
<div className="relative z-10">
<h4 className="font-bold text-lg">Videos de Difusión</h4>
<p className="text-slate-400 text-sm">Serie documental sobre restauración ecológica</p>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-3xl p-8 flex items-center gap-6 group cursor-pointer transition-all hover:border-[#16a34a]/50">
<div className="size-16 rounded-2xl bg-slate-100 flex items-center justify-center text-[#16a34a] text-3xl">
<span className="material-symbols-outlined">filter_frames</span>
</div>
<div>
<h4 className="font-bold text-lg text-[#1e293b]">Posters Científicos</h4>
<p className="text-slate-500 text-sm">Láminas educativas de alta resolución para descarga</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="px-6 py-24 bg-[#f8fafc]" id="datos">
<div className="max-w-[1200px] mx-auto">
<div className="bg-white rounded-[2.5rem] p-10 md:p-16 border border-slate-100 shadow-sm citation-box">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<div className="flex items-center gap-4 mb-8">
<span className="material-symbols-outlined text-[#16a34a] text-3xl">database</span>
<h2 className="text-3xl font-bold text-[#1e293b]">Bases de Datos Disponibles</h2>
</div>
<p className="text-slate-500 mb-10 leading-relaxed">
                            En FloraFauna Chile creemos en el poder de los datos abiertos. Ponemos a disposición de la comunidad científica y académica nuestros registros depurados de presencia de especies.
                        </p>
<div className="space-y-4">
<div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between group hover:bg-white hover:shadow-md transition-all">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-slate-400">csv</span>
<div>
<p className="font-bold text-[#1e293b]">Inventario Flora 2023-24</p>
<p className="text-xs text-slate-400">Actualizado hace 2 semanas • CSV • 12MB</p>
</div>
</div>
<button className="size-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#16a34a] group-hover:bg-[#16a34a] group-hover:text-white transition-all">
<span className="material-symbols-outlined text-xl">download</span>
</button>
</div>
<div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between group hover:bg-white hover:shadow-md transition-all">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-slate-400">dataset</span>
<div>
<p className="font-bold text-[#1e293b]">Registros Fauna Silvestre (SIG)</p>
<p className="text-xs text-slate-400">Shapefiles georeferenciados • ZIP • 45MB</p>
</div>
</div>
<button className="size-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#16a34a] group-hover:bg-[#16a34a] group-hover:text-white transition-all">
<span className="material-symbols-outlined text-xl">download</span>
</button>
</div>
</div>
</div>
<div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#16a34a]/20 blur-3xl rounded-full translate-x-10 -translate-y-10"></div>
<h3 className="text-xl font-bold mb-6 flex items-center gap-3">
<span className="material-symbols-outlined text-[#16a34a]">format_quote</span>
                            Cómo Citar el Trabajo
                        </h3>
<p className="text-slate-400 text-sm mb-6 leading-relaxed">
                            El uso de estos datos es gratuito bajo licencia Creative Commons BY 4.0. Se requiere la citación adecuada para mantener la integridad académica del repositorio.
                        </p>
<div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 mb-8">
<code className="text-xs text-slate-300 block font-mono">
                                FloraFauna Chile Investigación (2024). Repositorio de Datos de Biodiversidad de Chile Central, v2.1. Recuperado de: https://FloraFauna Chile.cl/datos
                            </code>
</div>
<div className="space-y-4">
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-[#16a34a] text-xl">check_circle</span>
<p className="text-sm text-slate-300">Incluir fecha de acceso y versión del dataset.</p>
</div>
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-[#16a34a] text-xl">check_circle</span>
<p className="text-sm text-slate-300">Dar crédito a los investigadores principales mencionados en los metadatos.</p>
</div>
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
