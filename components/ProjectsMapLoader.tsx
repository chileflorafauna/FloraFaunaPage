'use client';

import dynamic from 'next/dynamic';

const ProjectsMap = dynamic(() => import('./ProjectsMap'), { 
  ssr: false,
  loading: () => <div className="h-[500px] w-full bg-slate-100 animate-pulse rounded-2xl flex items-center justify-center text-slate-400">Cargando mapa...</div>
});

export default function ProjectsMapLoader() {
  return <ProjectsMap />;
}
