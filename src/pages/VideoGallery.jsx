import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const videosList = [
  {
    id: '1',
    title: 'Reportaje Especial: El impacto de la inteligencia artificial en los medios',
    category: 'Reportajes',
    date: 'OCT 20, 2026',
    duration: '14:20',
    views: '1.2k visualizaciones',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '2',
    title: 'Entrevista Exclusiva con activistas de libertad de prensa',
    category: 'Entrevistas',
    date: 'OCT 18, 2026',
    duration: '25:45',
    views: '3.4k visualizaciones',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '3',
    title: 'Resumen Semanal: Noticias clave que marcaron la agenda regional',
    category: 'Noticias',
    date: 'OCT 15, 2026',
    duration: '08:15',
    views: '850 visualizaciones',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '4',
    title: 'Cobertura en Vivo: Foro de tecnología y comunicación independiente',
    category: 'En Vivo',
    date: 'OCT 10, 2026',
    duration: '45:00',
    views: '5.1k visualizaciones',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80'
  }
];

const VideoGallery = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filters = ['Todos', 'Noticias', 'Entrevistas', 'Reportajes', 'En Vivo'];

  const filteredVideos = activeFilter === 'Todos'
    ? videosList
    : videosList.filter(video => video.category === activeFilter);

  return (
    <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8">
      {/* Hero / Banner de Vídeo Destacado */}
      <div className="relative rounded-3xl overflow-hidden bg-[#121723] border border-slate-800 p-8 sm:p-12 min-h-[380px] flex items-end shadow-2xl">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80"
            alt="Fondo destacado"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-[#0a0d14]/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-2xl space-y-4">
          <span className="bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
            Transmisión Especial
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">
            Antena Libre Docs: La evolución del periodismo digital interactivo
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm line-clamp-2">
            Un análisis profundo sobre cómo las plataformas independientes están transformando el consumo de noticias en tiempo real.
          </p>

          <div className="pt-2 flex items-center gap-4">
            {/* Redirige a la página de detalle del video */}
            <Link
              to="/video/featured"
              className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold px-6 py-3 rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-indigo-600/30 active:scale-95"
            >
              <span>▶</span> Reproducir Ahora
            </Link>
          </div>
        </div>
      </div>

      {/* Sección Explorar Vídeos y Filtros */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <h2 className="text-2xl font-black text-white tracking-wide">Explorar Vídeos</h2>

        {/* Categorías / Filtros */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeFilter === filter
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-[#121723] text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de Vídeos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredVideos.map((video) => (
          <Link
            key={video.id}
            to={`/video/${video.id}`}
            className="bg-[#121723] border border-slate-800 rounded-2xl p-4 hover:border-slate-700 transition-all group flex flex-col justify-between"
          >
            <div>
              {/* Miniatura con overlay de Play y Duración */}
              <div className="relative h-40 w-full rounded-xl overflow-hidden bg-slate-800 mb-3">
                <img
                  src={video.image}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-600/90 text-white flex items-center justify-center pl-0.5 shadow-lg group-hover:scale-110 transition-transform">
                    ▶
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-mono px-2 py-0.5 rounded">
                  {video.duration}
                </span>
              </div>

              {/* Info del Vídeo */}
              <div className="flex items-center justify-between mb-2">
                <span className="bg-indigo-500/10 text-indigo-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                  {video.category}
                </span>
                <span className="text-[10px] text-slate-500">{video.date}</span>
              </div>

              <h3 className="text-xs font-bold text-white group-hover:text-indigo-400 transition-colors line-clamp-2 leading-snug">
                {video.title}
              </h3>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-800/80 text-[10px] text-slate-500">
              {video.views}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;