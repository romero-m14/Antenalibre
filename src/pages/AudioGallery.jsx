// src/pages/AudioGallery.jsx
import React from 'react';
import { audiosData, liveStreamData } from '../data/audiosData';

const AudioGallery = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto space-y-8">
      {/* Encabezado Principal */}
      <div className="border-b border-slate-800 pb-6 space-y-2">
        <span className="text-[10px] font-bold tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 uppercase">
          PODCAST & EMISIONES
        </span>
        <h1 className="text-3xl font-black text-white flex items-center gap-2">
          Audios de Antena Libre 🎙️
        </h1>
        <p className="text-slate-400 text-xs sm:text-sm">
          Escucha nuestros reportajes sonoros, programas en vivo y podcasts exclusivos.
        </p>
      </div>

      {/* 🔴 BANNER EN VIVO (Obtiene los datos desde liveStreamData) */}
      {liveStreamData.isLive && (
        <div className="bg-linear-to-r from-red-950/40 via-[#121723] to-[#121723] border border-red-500/30 rounded-2xl p-5 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <span className="text-red-400 font-extrabold text-xs tracking-wider uppercase">
                {liveStreamData.badge}
              </span>
            </div>
            <h2 className="text-xl font-bold text-white">{liveStreamData.title}</h2>
            <p className="text-slate-400 text-xs">{liveStreamData.description}</p>
          </div>

          <div className="w-full md:w-80 shrink-0">
            <audio 
              controls 
              controlsList="nodownload" 
              onContextMenu={(e) => e.preventDefault()}
              className="w-full h-10 accent-red-500 rounded-lg"
            >
              <source src={liveStreamData.streamUrl} type="audio/mpeg" />
              Tu navegador no soporta el reproductor de audio.
            </audio>
          </div>
        </div>
      )}

      {/* 📻 LISTA DE AUDIOS GRABADOS */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white pt-2">Episodios Anteriores</h3>
        {audiosData.map((audio) => (
          <div
            key={audio.id}
            className="bg-[#121723] border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700 transition-all shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="space-y-2 flex-1">
              <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400">
                <span className="text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded border border-indigo-500/20">
                  {audio.type}
                </span>
                <span>• {audio.date}</span>
                <span>• ⏱️ {audio.duration}</span>
              </div>

              <h2 className="text-lg font-bold text-white">{audio.title}</h2>
              <p className="text-slate-400 text-xs leading-relaxed">{audio.description}</p>
            </div>

            <div className="w-full md:w-80 shrink-0">
              <audio 
                controls 
                controlsList="nodownload" 
                onContextMenu={(e) => e.preventDefault()}
                className="w-full h-10 accent-indigo-500 rounded-lg"
              >
                <source src={audio.audioUrl} type="audio/mpeg" />
              </audio>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AudioGallery;