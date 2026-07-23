import React from 'react';

const VideoCard = ({ title, category, duration, date, thumbnail, views }) => {
  return (
    <div className="bg-[#121723] rounded-2xl p-4 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 group cursor-pointer flex flex-col justify-between">
      {/* Miniatura del vídeo */}
      <div className="relative h-44 w-full rounded-xl overflow-hidden bg-slate-800 mb-3">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Overlay con botón de Play */}
        <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-indigo-600/90 text-white flex items-center justify-center pl-0.5 shadow-lg group-hover:scale-110 transition-transform">
            ▶
          </div>
        </div>
        {/* Duración */}
        <span className="absolute bottom-2 right-2 bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded">
          {duration}
        </span>
      </div>

      {/* Info del vídeo */}
      <div>
        <div className="flex items-center justify-between text-[11px] mb-2">
          <span className="bg-indigo-500/10 text-indigo-400 font-bold px-2 py-0.5 rounded uppercase">
            {category}
          </span>
          <span className="text-slate-500">{date}</span>
        </div>
        <h4 className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors line-clamp-2 leading-snug">
          {title}
        </h4>
        <p className="text-slate-500 text-xs mt-2">{views} visualizaciones</p>
      </div>
    </div>
  );
};

export default VideoCard;