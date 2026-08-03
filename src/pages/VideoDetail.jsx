import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { videosData } from '../data/videosData';

const VideoDetail = () => {
  const { id } = useParams();
  const video = videosData.find((item) => String(item.id) === String(id));

  if (!video) {
    return (
      <div className="p-8 max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-2xl font-bold text-white">Vídeo no encontrado ⚠️</h1>
        <p className="text-slate-400 text-sm">El contenido solicitado no existe o el enlace es incorrecto.</p>
        <Link to="/videos" className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all">
          Volver a Vídeos
        </Link>
      </div>
    );
  }

  return (
    <article className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto space-y-6">
      <Link to="/videos" className="inline-flex items-center gap-2 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors">
        ← Volver a Vídeos
      </Link>

      <div className="space-y-3">
        <div className="flex items-center gap-3 text-xs">
          <span className="font-bold text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            {video.category}
          </span>
          <span className="text-slate-500">• {video.date}</span>
          <span className="text-slate-500">• ⏱️ {video.duration}</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">
          {video.title}
        </h1>
      </div>

      {/* Reproductor de vídeo responsive */}
      <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-800 bg-black shadow-2xl">
        <iframe
          src={video.embedUrl}
          title={video.title}
          className="w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <p className="text-slate-200 text-sm sm:text-base font-semibold leading-relaxed border-l-2 border-indigo-500 pl-4 py-1 italic bg-indigo-500/5 rounded-r-xl">
        {video.summary}
      </p>

      <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 pt-2">
        {video.details && video.details.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>
      
    </article>
  );
};

export default VideoDetail;