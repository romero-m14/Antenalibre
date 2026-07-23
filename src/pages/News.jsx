import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const newsData = [
  {
    id: 1,
    title: 'Nuevas regulaciones de libertad digital en transmisiones internacionales',
    category: 'Internacional',
    date: 'HACE 2 HORAS',
    readTime: '4 min de lectura',
    author: 'Elena Rostova',
    image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80',
    summary: 'Organizaciones globales debaten sobre los límites y las garantías de protección para comunicadores y medios independientes en la red.',
    isBreaking: true
  },
  {
    id: 2,
    title: 'El auge del periodismo ciudadano a través de plataformas desentralizadas',
    category: 'Tecnología',
    date: 'HACE 5 HORAS',
    readTime: '6 min de lectura',
    author: 'Carlos Mendoza',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80',
    summary: 'Cómo los teléfonos móviles y las redes Mesh están permitiendo coberturas en tiempo real durante eventos de emergencia.'
  },
  {
    id: 3,
    title: 'Análisis: El impacto de la Inteligencia Artificial en la verificación de datos',
    category: 'Análisis',
    date: 'AYER',
    readTime: '8 min de lectura',
    author: 'Sofía Valenzuela',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
    summary: 'Herramientas de automatización ayudan a los equipos de redacción a combatir la desinformación en minutos.'
  },
  {
    id: 4,
    title: 'Reportaje: Fotoperiodismo urbano y la narrativa de la calle',
    category: 'Cultura',
    date: '22 JULIO',
    readTime: '5 min de lectura',
    author: 'Mateo Silva',
    image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=600&q=80',
    summary: 'Una mirada profunda a los fotógrafos que documentan los cambios culturales en las metrópolis modernas.'
  }
];

const News = () => {
  const [activeCategory, setActiveCategory] = useState('Todas');

  const categories = ['Todas', 'Internacional', 'Tecnología', 'Análisis', 'Cultura'];

  const filteredNews = activeCategory === 'Todas'
    ? newsData
    : newsData.filter(item => item.category === activeCategory);

  const breakingNews = newsData.find(item => item.isBreaking);

  return (
    <div className="p-6 sm:p-8 max-w-6xl mx-auto space-y-8">
      {/* Cabecera de la Sección */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="text-xs font-bold text-indigo-400 tracking-widest uppercase">Feed Informativo</span>
          <h1 className="text-3xl sm:text-4xl font-black text-white mt-1">Últimas Noticias</h1>
        </div>

        {/* Filtros por Categoría */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-[#121723] text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Banner Noticia ÚLTIMA HORA / Destacada Horizontal */}
      {breakingNews && activeCategory === 'Todas' && (
        <Link
          to={`/noticia/${breakingNews.id}`}
          className="relative block bg-[#121723] rounded-3xl border border-indigo-500/30 hover:border-indigo-500/60 transition-all overflow-hidden group shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-7 h-64 lg:h-auto overflow-hidden">
              <img
                src={breakingNews.image}
                alt={breakingNews.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-red-600 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full animate-pulse uppercase">
                    Última Hora
                  </span>
                  <span className="text-xs text-slate-400">{breakingNews.date}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-white group-hover:text-indigo-400 transition-colors leading-snug">
                  {breakingNews.title}
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm mt-3 line-clamp-3 leading-relaxed">
                  {breakingNews.summary}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-800/80">
                <span>Por <strong className="text-slate-300">{breakingNews.author}</strong></span>
                <span>{breakingNews.readTime}</span>
              </div>
            </div>
          </div>
        </Link>
      )}

      {/* Lista Estilo Feed Periodístico (Filas Horizontales) */}
      <div className="space-y-4">
        {filteredNews.map((item) => (
          <Link
            key={item.id}
            to={`/noticia/${item.id}`}
            className="bg-[#121723] rounded-2xl p-4 sm:p-5 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col sm:flex-row gap-5 group items-center"
          >
            {/* Miniatura de la noticia */}
            <div className="w-full sm:w-48 h-40 sm:h-32 rounded-xl overflow-hidden bg-slate-800 shrink-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Contenido */}
            <div className="flex-1 space-y-2 w-full">
              <div className="flex items-center gap-3">
                <span className="bg-indigo-500/10 text-indigo-400 text-[10px] font-bold px-2.5 py-0.5 rounded-md uppercase">
                  {item.category}
                </span>
                <span className="text-[11px] text-slate-500">{item.date}</span>
                <span className="text-[11px] text-slate-500 hidden sm:inline">• {item.readTime}</span>
              </div>

              <h3 className="text-base sm:text-lg font-extrabold text-white group-hover:text-indigo-400 transition-colors leading-snug">
                {item.title}
              </h3>

              <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed">
                {item.summary}
              </p>

              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                <span>Escrito por <strong className="text-slate-300">{item.author}</strong></span>
                <span className="text-indigo-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Leer noticia →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default News;