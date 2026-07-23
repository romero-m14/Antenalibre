import React from 'react';
import { Link } from 'react-router-dom';

const articlesList = [
  {
    id: 1,
    title: 'La Transformación del Periodismo Digital en la Era de la Red',
    category: 'Opinión',
    date: '23 JULIO, 2026',
    image: 'https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&w=600&q=80',
    excerpt: 'Reflexiones sobre cómo la tecnología descentralizada está cambiando la forma de compartir información.'
  },
  {
    id: 2,
    title: 'Producción Audiovisual con Herramientas de Código Abierto',
    category: 'Tecnología',
    date: '21 JULIO, 2026',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
    excerpt: 'Un repaso a los programas libres más potentes para creadores de contenido multimedia.'
  },
  {
    id: 3,
    title: 'Ética y Transparencia en Medios Independientes',
    category: 'Editorial',
    date: '19 JULIO, 2026',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80',
    excerpt: 'El compromiso con la audiencia como pilar fundamental de la libertad de expresión.'
  },
];

const Articles = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-black text-white">Artículos y Ensayos</h1>
        <p className="text-slate-400 text-sm mt-1">
          Lecturas a fondo, análisis y notas de opinión publicadas en Antena Libre.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articlesList.map((art) => (
          <Link
            key={art.id}
            to={`/noticia/${art.id}`}
            className="bg-[#121723] border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="h-48 w-full rounded-xl overflow-hidden bg-slate-800 mb-4">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="bg-indigo-500/10 text-indigo-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                  {art.category}
                </span>
                <span className="text-[11px] text-slate-500">{art.date}</span>
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-indigo-400 transition-colors">
                {art.title}
              </h3>
              <p className="text-slate-400 text-xs mt-2 line-clamp-2">
                {art.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Articles;