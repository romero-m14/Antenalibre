import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-[#121723] border border-slate-800/80 rounded-3xl p-6 sm:p-8 hover:border-slate-700 transition-all group shadow-xl">
          <Link to="/noticia/1" className="block space-y-4">
            <div className="h-60 sm:h-80 w-full rounded-2xl overflow-hidden bg-slate-800">
              <img
                src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80"
                alt="Noticia Principal"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-indigo-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                Destacado
              </span>
              <span className="text-xs text-slate-400 font-medium">
                23 JULIO, 2026
              </span>
            </div>
            <h1 className="text-xl sm:text-3xl font-black text-white leading-snug sm:leading-tight group-hover:text-indigo-400 transition-colors">
              La era del periodismo digital independiente y el libre flujo de la
              información
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
              Analizamos cómo las nuevas comunidades digitales están creando sus
              propios espacios de transmisión libre y directa sin intermediarios
              tradicionales...
            </p>
          </Link>
        </div>

        <div className="bg-linear-to-br from-[#121723] via-[#171e30] to-[#0f1422] border border-slate-800/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-indigo-600/15 rounded-full blur-3xl group-hover:bg-indigo-600/25 transition-all duration-500"></div>
          <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>

          <div className="relative z-10 space-y-4">
            <div className="flex items-center justify-between">
              <span className="bg-indigo-500/10 text-indigo-400 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-indigo-500/20">
                Nuestra Misión
              </span>
              <span className="text-2xl text-indigo-400 opacity-60 font-serif">
                “
              </span>
            </div>

            <p className="text-base sm:text-lg italic text-slate-100 font-medium leading-relaxed">
              La información libre no solo educa, conecta voluntades y
              transforma realidades.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-2 gap-3 my-6 py-4 border-y border-slate-800/80">
            <div className="bg-[#0f131f]/60 rounded-xl p-3 border border-slate-800/50">
              <span className="block text-xs font-bold text-indigo-400">
                100% Libre
              </span>
              <span className="text-[10px] text-slate-400">Sin censura</span>
            </div>
            <div className="bg-[#0f131f]/60 rounded-xl p-3 border border-slate-800/50">
              <span className="block text-xs font-bold text-cyan-400">
                En Vivo
              </span>
              <span className="text-[10px] text-slate-400">Noticias 24/7</span>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between pt-2">
            <div>
              <h4 className="text-xs font-extrabold text-white tracking-wider uppercase">
                Editorial Antena Libre
              </h4>
              <p className="text-[11px] text-slate-400">
                Periodismo directo y transparente.
              </p>
            </div>

            <Link
              to="/nosotros"
              className="bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/30 text-xs font-bold px-3 py-2 rounded-xl transition-all shadow-md shrink-0"
            >
              Conócenos →
            </Link>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-black text-white tracking-wide border-b border-slate-800/80 pb-3">
          Explorar Secciones
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            to="/noticias"
            className="bg-[#121723] border border-slate-800/80 rounded-3xl p-5 hover:border-slate-700 transition-all group flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="h-44 w-full rounded-2xl overflow-hidden bg-slate-800 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=600&q=80"
                  alt="Noticias"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Noticias
                </span>
                <span className="text-[10px] text-slate-500">Reciente</span>
              </div>
              <h3 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug">
                Paisajes Urbanos: Capturando la ciudad nocturna
              </h3>
            </div>
            <p className="text-xs text-slate-400 mt-3 line-clamp-2">
              Un recorrido visual por las principales metrópolis y sus dinámicas
              informativas nocturnas.
            </p>
          </Link>
          
          <Link
            to="/videos"
            className="bg-[#121723] border border-slate-800/80 rounded-3xl p-5 hover:border-slate-700 transition-all group flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="h-44 w-full rounded-2xl overflow-hidden bg-slate-800 mb-4 relative flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80"
                  alt="Vídeo"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute w-10 h-10 rounded-full bg-indigo-600/90 text-white flex items-center justify-center pl-0.5 shadow-lg group-hover:scale-110 transition-transform">
                  ▶
                </div>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="bg-red-500/10 text-red-400 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Vídeo
                </span>
                <span className="text-[10px] text-slate-500">12:45 min</span>
              </div>
              <h3 className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors leading-snug">
                Entrevista con cineastas de producción independiente
              </h3>
            </div>
            <p className="text-xs text-slate-400 mt-3 line-clamp-2">
              Conversamos sobre el futuro del cine documental libre y la
              distribución en la era del streaming.
            </p>
          </Link>

          <Link
            to="/articulos"
            className="bg-[#121723] border border-slate-800/80 rounded-3xl p-5 hover:border-slate-700 transition-all group flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="h-44 w-full rounded-2xl overflow-hidden bg-slate-800 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
                  alt="Artículos Destacados"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="bg-indigo-500/10 text-indigo-400 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Artículos Destacados
                </span>
                <span className="text-[10px] text-slate-500">
                  22 JULIO, 2026
                </span>
              </div>
              <h3 className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors leading-snug">
                Herramientas de transmisión en tiempo real para creadores
              </h3>
            </div>
            <p className="text-xs text-slate-400 mt-3 line-clamp-2">
              Un desglose de los mejores flujos de trabajo multimedia para
              radiodifusión y publicación digital.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
