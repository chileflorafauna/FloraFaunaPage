import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="bg-green-50 p-8 rounded-full mb-6">
        <span className="material-symbols-outlined text-green-600 text-6xl">
          forest
        </span>
      </div>
      <h1 className="text-6xl font-bold text-slate-900 mb-2">404</h1>
      <h2 className="text-2xl font-semibold text-slate-800 mb-4">Página no encontrada</h2>
      <p className="text-slate-600 max-w-md mb-8">
        Lo sentimos, parece que te has adentrado demasiado en el bosque. La página que buscas no existe o ha sido movida.
      </p>
      <Link 
        href="/"
        className="bg-[#16a34a] text-white px-8 py-3 rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-600/20 flex items-center gap-2"
      >
        <span className="material-symbols-outlined text-sm">arrow_back</span>
        Volver al Inicio
      </Link>
    </div>
  );
}
