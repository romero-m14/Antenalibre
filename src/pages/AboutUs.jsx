import React from 'react';

const AboutUs = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-12 text-slate-300">
      {/* Header del Autor */}
      <section className="bg-[#121723] border border-slate-800 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
          alt="Creador de Antena Libre"
          className="w-36 h-36 rounded-full object-cover border-4 border-indigo-500/30"
        />
        <div className="space-y-3">
          <span className="bg-indigo-500/10 text-indigo-400 text-xs font-bold px-3 py-1 rounded-full uppercase">
            Fundador & Director
          </span>
          <h1 className="text-3xl font-extrabold text-white">Miguel Romero</h1>
          <p className="text-slate-400 text-sm leading-relaxed">
            Apasionado por la comunicación digital, la tecnología y el periodismo independiente. Creé **Antena Libre** como un espacio sin censura para compartir historias auténticas, reportajes en vídeo y análisis de actualidad.
          </p>
          
          {/* Botones de Redes */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="bg-red-600/20 text-red-400 hover:bg-red-600 hover:text-white text-xs font-bold px-4 py-2 rounded-lg transition-all">
              YouTube
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white text-xs font-bold px-4 py-2 rounded-lg transition-all">
              Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="bg-pink-600/20 text-pink-400 hover:bg-pink-600 hover:text-white text-xs font-bold px-4 py-2 rounded-lg transition-all">
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#121723] border border-slate-800 p-6 rounded-2xl">
          <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            <span>🎯</span> Nuestra Misión
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Brindar información objetiva y multimedia de alta calidad, conectando con nuestra audiencia a través de formatos dinámicos como vídeos, galerías fotográficas y artículos de opinión.
          </p>
        </div>

        <div className="bg-[#121723] border border-slate-800 p-6 rounded-2xl">
          <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            <span>🚀</span> Visión
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Convertir a Antena Libre en el medio digital independiente de referencia para la comunidad, destacando por nuestro contenido audiovisual impactante.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;