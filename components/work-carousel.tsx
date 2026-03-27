'use client';

import Image from 'next/image';
import Link from 'next/link';

const images = [
  '/fauna/fauna5.jpg',
  '/fauna/fauna8.jpg',
  '/fauna/fauna12.jpg',
  '/fauna/fauna14.jpg',
  '/flora/cactus/cactus1.jpg',
  '/flora/flor/flor3.jpg',
  '/flora/hongo/hongo2.jpg',
  '/flora/misc/misc1.jpg',
];

export default function WorkCarousel() {
  return (
    <div className="w-full relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#f0fdf4] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#f0fdf4] to-transparent pointer-events-none" />
      
      <div className="flex gap-6 animate-scroll whitespace-nowrap w-max hover:[animation-play-state:paused]">
        {[...images, ...images].map((src, index) => (
          <div 
            key={index} 
            className="w-[300px] h-[300px] relative rounded-2xl overflow-hidden shadow-md flex-shrink-0 group"
          >
            <Image
              src={src}
              alt="Trabajo en terreno"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="300px"
            />
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link 
          href="/galeria" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#16a34a] hover:bg-[#15803d] text-white font-bold rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          <span>Ver Galería Completa</span>
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
