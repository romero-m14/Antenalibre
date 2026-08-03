import React from 'react';
import { useContact } from '../hooks/useContact'; 

const AboutUs = () => {
  const { openWhatsApp } = useContact(); 

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto space-y-8">
      <div className="bg-[#121723] border border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 text-center md:text-left">
          <div className="relative shrink-0">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-indigo-500/30 p-1 bg-linear-to-tr from-indigo-500 to-cyan-400">
              <img
                src="/perfil.jpg" 
                alt="AntenaLibre"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Información */}
          <div className="space-y-3 flex-1">
            <div>
              <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                Fundador & Director
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-white mt-2">
                AntenaLibre
              </h1>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
              Apasionado por la comunicación digital, la tecnología y el periodismo independiente. Creé <strong className="text-white">Antena Libre</strong> como un espacio sin censura para compartir historias auténticas, reportajes en vídeo y análisis de actualidad.
            </p>

            {/* botones */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <a
                href="https://www.facebook.com/profile.php?id=100077501584106"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1877F2]/20 hover:bg-[#1877F2] text-[#1877F2] hover:text-white border border-[#1877F2]/40 text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-md flex items-center gap-2"
              >
                Facebook
              </a>

              <button
                onClick={() => openWhatsApp("¡Hola Antena Libre! Tengo esta información para que puedas publicar:")}
                className="bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/40 text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                WhatsApp
              </button>

            </div>
          </div>

        </div>
      </div>

      {/* mision y vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#121723] border border-slate-800/80 rounded-3xl p-6 space-y-3 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-lg">🎯</span>
            <h2 className="text-base font-bold text-white">Nuestra Misión</h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Brindar información objetiva y multimedia de alta calidad, conectando con nuestra audiencia a través de formatos dinámicos como vídeos, galerías fotográficas y artículos de opinión.
          </p>
        </div>
        <div className="bg-[#121723] border border-slate-800/80 rounded-3xl p-6 space-y-3 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-lg">🚀</span>
            <h2 className="text-base font-bold text-white">Visión</h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Convertir a Antena Libre en el medio digital independiente de referencia para la comunidad, destacando por nuestro contenido audiovisual impactante.
          </p>
        </div>

      </div>

    </div>
  );
};

export default AboutUs;