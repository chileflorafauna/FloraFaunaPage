"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        // Hysteresis logic to prevent flickering/shivering
        // Only shrink when we are well past the top (e.g., > 50px)
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else if (window.scrollY < 10) {
            // Only expand when we are very close to the top
            setIsScrolled(false);
        }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lista de enlaces consistente
  const navLinks = [
    { name: "Servicios", href: "/servicios" },
    // { name: "Proyectos", href: "/proyectos" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Metodología", href: "/metodologia" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
        <nav className="top-0 w-full z-50 border-b border-slate-100">
            <div className={`mx-5 px-6 flex items-center justify-between transition-all duration-300 ease-in-out ${isScrolled ? 'h-16' : 'h-24'}`}>
                <Link href="/" className="group flex items-center gap-3 h-full">
                    <span className="material-symbols-outlined text-[#15803d] flex items-center justify-center transition-all duration-300 group-hover:scale-105" style={{ fontSize: '56px', fontVariationSettings: "'FILL' 1" }}>eco</span>
                    <h2 className="text-xl font-bold tracking-tight uppercase text-slate-900 font-display flex flex-col justify-center leading-none mt-1">
                        <span className="transition-transform duration-300 group-hover:translate-x-1">FLORAFAUNA</span>
                        <span className="text-[#15803d] text-sm tracking-widest font-display transition-transform duration-300 delay-75 group-hover:translate-x-1.5">Chile</span>
                    </h2>
                </Link>
                
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                        <Link 
                            key={link.name} 
                            href={link.href}
                            className={`relative text-sm font-semibold transition-colors duration-300
                                ${isActive ? 'text-[#16a34a]' : 'text-slate-600 hover:text-[#22c55e]'}
                                after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:origin-center 
                                after:transition-transform after:duration-300
                                ${isActive ? 'after:scale-x-100 after:bg-[#16a34a]' : 'after:scale-x-0 after:bg-[#22c55e] hover:after:scale-x-100'}
                            `}
                        >
                            {link.name}
                        </Link>
                        );
                    })}
                    <Link 
                        href="/contacto"
                        className="bg-[#15803d] hover:bg-[#22c55e] text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-500 cursor-pointer"
                    >
                        Cotizar Proyecto
                    </Link>
                </div>

                {/* Mobile Toggle Button */}
                <div className="md:hidden">
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="text-slate-900 focus:outline-none p-2"
                        aria-label="Toggle menu"
                    >
                         <span className="material-symbols-outlined text-3xl">
                             {isOpen ? 'close' : 'menu'}
                         </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                 <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 shadow-lg animate-in slide-in-from-top-5 fade-in duration-200">
                    <div className="flex flex-col p-6 space-y-4">
                        {navLinks.map((link) => {
                             const isActive = pathname === link.href;
                             return (
                             <Link 
                                key={link.name} 
                                href={link.href}
                                className={`text-base font-semibold pb-2 border-b transition-colors
                                    ${isActive 
                                        ? 'text-[#16a34a] border-green-100 pl-2 border-l-4 border-l-[#16a34a]' 
                                        : 'text-slate-600 border-slate-50 hover:text-[#22c55e]'
                                    }
                                `}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                             );
                        })}
                        <Link 
                            href="/contacto"
                            className="bg-[#15803d] hover:bg-[#22c55e] text-white px-6 py-3 rounded-lg text-sm font-bold transition-all duration-500 cursor-pointer w-full mt-4 text-center block"
                            onClick={() => setIsOpen(false)}
                        >
                            Cotizar Proyecto
                        </Link>
                    </div>
                 </div>
            )}
        </nav>
    </header>
  );
}
                 