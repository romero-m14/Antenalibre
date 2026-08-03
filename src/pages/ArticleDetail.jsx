import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { articlesData } from '../data/articlesData';
import { newsData } from '../data/newsData';

const ArticleDetail = () => {
  const { id } = useParams();
  const allContent = [...articlesData, ...newsData];
  const item = allContent.find((entry) => String(entry.id) === String(id));

  if (!item) {
    return (
      <div className="p-8 max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-2xl font-bold text-white">Publicación no encontrada ⚠️</h1>
        <p className="text-slate-400 text-sm">El contenido solicitado no existe o el enlace es incorrecto.</p>
        <Link to="/noticias" className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all">
          Volver a Noticias
        </Link>
      </div>
    );
  }

  return (
    <article className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto space-y-6">
      <Link to={-1} className="inline-flex items-center gap-2 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors">
        ← Volver
      </Link>

      <div className="space-y-3">
        <div className="flex items-center gap-3 text-xs">
          <span className="font-bold text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            {item.category}
          </span>
          <span className="text-slate-500">• {item.date || item.timeAgo}</span>
          {item.readTime && <span className="text-slate-500">• {item.readTime}</span>}
        </div>

        <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">
          {item.title}
        </h1>

        {item.author && (
          <p className="text-xs text-slate-400 border-b border-slate-800 pb-4">
            Por <strong className="text-slate-200">{item.author}</strong>
          </p>
        )}
      </div>

      {item.image && (
        <div className="rounded-2xl overflow-hidden border border-slate-800 max-h-96">
          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
        </div>
      )}

      {(item.summary || item.description) && (
        <p className="text-slate-200 text-sm sm:text-base font-semibold leading-relaxed border-l-2 border-indigo-500 pl-4 py-1 italic bg-indigo-500/5 rounded-r-xl">
          {item.summary || item.description}
        </p>
      )}

      <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 pt-2">
        {item.content && item.content.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
};

export default ArticleDetail;