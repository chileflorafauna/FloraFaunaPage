import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { withBasePath } from '@/lib/base-path';

export const metadata: Metadata = {
  title: 'Galería | FloraFauna',
  description: 'Nuestra galería de imágenes de flora y fauna chilena.',
};

function getImagesFromDir(dirPath: string): string[] {
  const publicDir = path.join(process.cwd(), 'public');
  const fullPath = path.join(publicDir, dirPath);
  
  if (!fs.existsSync(fullPath)) return [];
  
  const files = fs.readdirSync(fullPath);
  return files
    .filter(file => /\.(jpg|jpeg|png|webp|svg)$/i.test(file))
    .map(file => path.join('/', dirPath, file).replace(/\\/g, '/'));
}

export default function GalleryPage() {
  const faunaImages = getImagesFromDir(`url('${withBasePath('/fauna')}')`);
  const cactusImages = getImagesFromDir(`url('${withBasePath('/flora/cactus')}')`);
  const florImages = getImagesFromDir(`url('${withBasePath('/flora/flor')}')`);
  const hongoImages = getImagesFromDir(`url('${withBasePath('/flora/hongo')}')`);
  const miscImages = getImagesFromDir(`url('${withBasePath('/flora/misc')}')`);

  const allImages = [...faunaImages, ...cactusImages, ...florImages, ...hongoImages, ...miscImages];

  return (
    <main className="min-h-screen bg-slate-50 py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <Link href="/nosotros" className="text-[#16a34a] hover:underline mb-4 inline-block text-sm font-bold uppercase tracking-widest">
            ← Volver a Nosotros
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-6">Nuestra Galería</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Un registro visual de la biodiversidad que protegemos y estudiamos en cada proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allImages.map((src, index) => (
            <div key={index} className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <Image
                src={src}
                alt={`Imagen de galería ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
