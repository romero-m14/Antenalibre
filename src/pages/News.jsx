import React from 'react';
import { Link } from 'react-router-dom';
import { newsData } from '../data/newsData';

const News = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-black text-white">Noticias de Última Hora</h1>
        <p className="text-slate-400 text-xs sm:text-sm mt-1">
          Cobertura independiente de acontecimientos locales e internacionales.
        </p>
      </div>

      <div className="space-y-4">
        {newsData.map((item) => (
          <div 
            key={item.id} 
            className="bg-[#121723] border border-slate-800/80 rounded-2xl p-4 sm:p-5 hover:border-slate-700 transition-all shadow-lg flex flex-col md:flex-row gap-6 items-center"
          >
            <div className="w-full md:w-64 h-40 shrink-0 rounded-xl overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            </div>

            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-3 text-[11px] font-bold">
                <span className="text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded border border-indigo-500/20 uppercase">
                  {item.category}
                </span>
                <span className="text-slate-400">• {item.timeAgo}</span>
                <span className="text-slate-400">• {item.readTime}</span>
              </div>

              <h2 className="text-lg font-bold text-white hover:text-indigo-400 transition-colors">
                {item.title}
              </h2>

              <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                {item.summary}
              </p>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-slate-500">Escrito por <strong className="text-slate-300">{item.author}</strong></span>
                <Link 
                  to={`/noticias/${item.id}`} 
                  className="text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1"
                >
                  Leer noticia →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;