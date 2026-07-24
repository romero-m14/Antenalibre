import React from 'react';
import { Link } from 'react-router-dom';
import { articlesData } from '../data/articlesData'; // 👈 Importamos la data

const Articles = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-black text-white">Artículos y Ensayos</h1>
        <p className="text-slate-400 text-xs sm:text-sm mt-1">
          Lecturas a fondo, análisis y notas de opinión publicadas en Antena Libre.
        </p>
      </div>

      {/* Grid de Artículos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articlesData.map((art) => (
          <Link
            key={art.id}
            to={`/articulos/${art.id}`} 
            className="bg-[#121723] border border-slate-800/80 rounded-2xl overflow-hidden hover:border-slate-700 transition-all shadow-lg flex flex-col group"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={art.image}
                alt={art.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold">
                  <span className="text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                    {art.category}
                  </span>
                  <span>{art.date}</span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-indigo-400 transition-colors leading-snug">
                  {art.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                  {art.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Articles;