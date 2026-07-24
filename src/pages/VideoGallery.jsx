import React from 'react';
import { Link } from 'react-router-dom';
import { videosData } from '../data/videosData';

const VideoGallery = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-black text-white">Galería de Vídeos</h1>
        <p className="text-slate-400 text-xs sm:text-sm mt-1">
          Reportajes audiovisuales, coberturas en vivo y programas especiales.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videosData.map((video) => (
          <Link
            key={video.id}
            to={`/video/${video.id}`}
            className="bg-[#121723] border border-slate-800/80 rounded-2xl overflow-hidden hover:border-slate-700 transition-all shadow-lg flex flex-col group"
          >
            <div className="relative aspect-video bg-slate-900 overflow-hidden flex items-center justify-center">
              <span className="text-4xl group-hover:scale-125 transition-transform duration-300 z-10">▶️</span>
              <div className="absolute inset-0 bg-indigo-600/10 group-hover:bg-indigo-600/20 transition-colors"></div>
              <span className="absolute bottom-3 right-3 bg-black/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                ⏱️ {video.duration}
              </span>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[10px] font-bold">
                  <span className="text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                    {video.category}
                  </span>
                  <span className="text-slate-400">{video.date}</span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-indigo-400 transition-colors leading-snug">
                  {video.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                  {video.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;