import React from 'react';

interface MethodologyCardProps {
  title: string;
  icon: string;
  image: string;
  fieldMethodology: string;
  bibliographicAnalysis: string;
}

export default function MethodologyCard({
  title,
  icon,
  image,
  fieldMethodology,
  bibliographicAnalysis,
}: MethodologyCardProps) {
  return (
    <div className="method-card group bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
      <div className="h-64 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <div
          className="w-full h-full bg-cover bg-center img-zoom group-hover:scale-110 transition-transform duration-700"
          style={{ backgroundImage: image }}
        ></div>
        <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-2xl">{icon}</span>
          </div>
          <h3 className="text-white font-bold text-xl uppercase tracking-wide">
            {title}
          </h3>
        </div>
      </div>
      <div className="p-8">
        <div className="space-y-6">
          <div>
            <h4 className="text-xs font-bold text-[#16a34a] uppercase tracking-[0.2em] mb-2">
              Metodología de Campo
            </h4>
            <div className="relative">
              <div className="max-h-[4.9rem] overflow-hidden group-hover:max-h-[500px] transition-all duration-700 ease-in-out">
                <p className="text-sm text-slate-600 leading-relaxed pb-1">
                  {fieldMethodology}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white to-transparent group-hover:opacity-0 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          </div>
          <div className="pt-6 border-t border-slate-50">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">
              Análisis Bibliográfico
            </h4>
            <div className="relative">
              <div className="max-h-[4.9rem] overflow-hidden group-hover:max-h-[500px] transition-all duration-700 ease-in-out">
                <p className="text-sm text-slate-500 leading-relaxed italic pb-1">
                  {bibliographicAnalysis}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white to-transparent group-hover:opacity-0 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
