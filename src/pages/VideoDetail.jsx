import React from 'react';
import { useParams, Link } from 'react-router-dom';

const videosData = [
  {
    id: 'featured',
    title: 'Antena Libre Docs: La evolución del periodismo digital interactivo',
    category: 'Transmisión Especial',
    date: '23 de Julio, 2026',
    duration: '12:45',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    intro: 'En esta entrega especial de Antena Libre Docs, analizamos cómo las plataformas de comunicación independiente están transformando la producción y el consumo de contenidos en tiempo real.',
    description: 'A través de testimonios, casos de estudio y análisis técnico, exploramos el impacto de las herramientas modernas de transmisión libre en comunidades alrededor del mundo.',
    author: 'Redacción Antena Libre'
  },
  {
    id: '1',
    title: 'Reportaje Especial: El impacto de la inteligencia artificial en los medios',
    category: 'Reportajes',
    date: '20 de Octubre, 2026',
    duration: '14:20',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    intro: 'Un análisis exhaustivo sobre la integración de la IA en los flujos de trabajo periodísticos.',
    description: 'Revisamos desde la automatización de transcriptoras hasta la verificación de hechos asistida por algoritmos.',
    author: 'Carlos Mendoza'
  },
  {
    id: '2',
    title: 'Entrevista Exclusiva con activistas de libertad de prensa',
    category: 'Entrevistas',
    date: '18 de Octubre, 2026',
    duration: '25:45',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    intro: 'Conversación directa sobre los retos de la censura digital y la protección de datos.',
    description: 'Diálogo abierto sobre la importancia de mantener redes de información descentralizadas e ininterrumpidas.',
    author: 'Elena Rostova'
  }
];

const VideoDetail = () => {
  const { id } = useParams();
  const video = videosData.find((v) => v.id === id) || videosData[0];

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto space-y-4 sm:space-y-6">
      <Link
        to="/videos"
        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
      >
        ← Volver a la galería
      </Link>

      {/* Reproductor con relación de aspecto adaptativa */}
      <div className="bg-black rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-800 aspect-video relative">
        <video
          src={video.videoUrl}
          controls
          controlsList="nodownload"
          className="w-full h-full object-contain"
        >
          Tu navegador no soporta el reproductor de vídeo HTML5.
        </video>
      </div>

      {/* Información del Vídeo */}
      <div className="bg-[#121723] border border-slate-800/80 rounded-2xl sm:rounded-3xl p-5 sm:p-8 space-y-4 sm:space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="bg-indigo-600 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              {video.category}
            </span>
            <span className="text-[11px] sm:text-xs text-slate-400">{video.date}</span>
          </div>
          <span className="text-[11px] sm:text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-lg w-fit">
            Duración: {video.duration}
          </span>
        </div>

        <div>
          <h1 className="text-xl sm:text-3xl font-black text-white leading-snug sm:leading-tight">
            {video.title}
          </h1>
          <p className="text-xs sm:text-sm font-medium text-slate-300 mt-2">
            Por <strong className="text-indigo-400">{video.author}</strong>
          </p>
        </div>

        <div className="bg-[#171d2c] border border-slate-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 space-y-2">
          <h3 className="text-[10px] sm:text-xs font-bold text-indigo-400 uppercase tracking-widest">
            📌 Introducción
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
            {video.intro}
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">
            Detalles del episodio
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            {video.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;