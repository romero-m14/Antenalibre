import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ id, title, category, date, image, description, isFeatured = false }) => {
  // Si la noticia es destacada (ocupará más espacio en la cuadrícula)
  if (isFeatured) {
    return (
      <Link
        to={`/noticia/${id}`}
        className="lg:col-span-2 bg-[#121723] rounded-3xl p-6 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group space-y-6"
      >
        <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden bg-slate-800">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
              Destacado
            </span>
            {category && (
              <span className="bg-slate-900/80 backdrop-blur-md text-slate-200 text-xs font-bold px-3 py-1 rounded-full uppercase">
                {category}
              </span>
            )}
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold text-indigo-400 tracking-wider uppercase">{date}</span>
          <h2 className="text-2xl font-extrabold text-white mt-1 mb-2 group-hover:text-indigo-400 transition-colors">
            {title}
          </h2>
          {description && (
            <p className="text-slate-400 text-sm line-clamp-2">
              {description}
            </p>
          )}
        </div>
      </Link>
    );
  }

  // Tarjeta de noticia estándar
  return (
    <Link
      to={`/noticia/${id}`}
      className="bg-[#121723] rounded-3xl p-6 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group"
    >
      <div className="h-48 w-full rounded-2xl overflow-hidden bg-slate-800 mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div>
        <div className="flex items-center justify-between mb-2">
          {category && (
            <span className="bg-sky-500/10 text-sky-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
              {category}
            </span>
          )}
          <span className="text-[11px] text-slate-500">{date}</span>
        </div>
        <h3 className="text-lg font-bold text-white mt-1 mb-2 group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>
        {description && (
          <p className="text-slate-400 text-xs line-clamp-3">
            {description}
          </p>
        )}
      </div>
    </Link>
  );
};

export default NewsCard;