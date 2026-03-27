import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-50 border-t border-slate-100 pt-16 pb-8">
      <div className="mx-8 px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Columna 1: Identidad y Descripción SEO */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="material-symbols-outlined text-[#15803d] text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-lg text-slate-900 tracking-tight uppercase group-hover:text-[#15803d] transition-colors">FloraFauna</span>
                <span className="font-display text-[#15803d] text-xs tracking-[0.2em] font-medium">CHILE</span>
              </div>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Consultoría líder en estudios biológicos avanzados para el desarrollo sostenible del territorio.
            </p>
            <div className="flex gap-4">
              {/* Iconos sociales con etiquetas ARIA importantes para SEO */}
              <SocialLink href="#" label="Síguenos en Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </SocialLink>
              <SocialLink href="#" label="Síguenos en LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </SocialLink>
              <SocialLink href="#" label="Síguenos en Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </SocialLink>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos (Site Structure) */}
          <div>
            <h3 className="font-display font-bold text-slate-900 text-lg mb-4">Explorar</h3>
            <ul className="space-y-3">
              <FooterLink href="https://www.chileflora.com/Florachilena/FloraSpanish/SPlantdbase.htm">Flora Nativa</FooterLink>
              <FooterLink href="https://www.sea.gob.cl/">Guías Evaluación Ambiental</FooterLink>
              <FooterLink href="https://www.conaf.cl/parques-nacionales/">Parques Nacionales</FooterLink>
              <FooterLink href="/galeria">Galería</FooterLink>
            </ul>
          </div>

          {/* Columna 3: Servicios y Empresa */}
          <div>
            <h3 className="font-display font-bold text-slate-900 text-lg mb-4">Organización</h3>
            <ul className="space-y-3">
              <FooterLink href="/nosotros">Quiénes Somos</FooterLink>
              <FooterLink href="/servicios">Consultoría Ambiental</FooterLink>
              <FooterLink href="/metodologia">Metodología</FooterLink>
              <FooterLink href="/contacto">Contacto</FooterLink>
            </ul>
          </div>

          {/* Columna 4: Información de Contacto (Local SEO) */}
          <div>
            <h3 className="font-display font-bold text-slate-900 text-lg mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-500 text-sm">
                <span className="material-symbols-outlined text-[#15803d]">location_on</span>
                <span>Viña del Mar, Chile</span>
              </li>
              <li className="flex items-center gap-3 text-slate-500 text-sm">
                <span className="material-symbols-outlined text-[#15803d]">mail</span>
                <span>
                  Pdauelsberg@komunconsulting.com
                </span>
              </li>
              <li className="flex items-center gap-3 text-slate-500 text-sm">
                <span className="material-symbols-outlined text-[#15803d]">call</span>
                <span>
                  +56 9 4257 1804
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} FloraFauna Chile. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-slate-400">
            <Link href="/privacidad" className="hover:text-[#15803d] transition-colors">Política de Privacidad</Link>
            <Link href="/terminos" className="hover:text-[#15803d] transition-colors">Términos y Condiciones</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Subcomponente para enlaces limpios
function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link 
        href={href} 
        className="text-slate-500 text-sm hover:text-[#15803d] hover:translate-x-1 transition-all duration-300 inline-block"
      >
        {children}
      </Link>
    </li>
  );
}

// Subcomponente para redes sociales
function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      aria-label={label}
      className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#15803d] hover:bg-[#15803d] hover:text-white transition-all duration-300 transform hover:scale-110"
    >
      {children}
    </a>
  );
}
