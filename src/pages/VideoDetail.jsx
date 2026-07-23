import React from 'react';
import { useParams, Link } from 'react-router-dom';

const VideoDetail = () => {
  const { id } = useParams();

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-6">
      <Link to="/videos" className="text-xs text-indigo-400 hover:underline">
        ← Volver a vídeos
      </Link>
      
      <h1 className="text-2xl font-bold text-white">Reproduciendo Vídeo #{id}</h1>

      {/* Reproductor de Video */}
      <div className="aspect-video bg-black rounded-2xl overflow-hidden border border-slate-800">
        <video
          controls
          className="w-full h-full object-contain"
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        >
          Tu navegador no soporta el formato de vídeo.
        </video>
      </div>

      <div className="bg-[#121723] p-6 rounded-2xl border border-slate-800 space-y-3">
        <h2 className="text-lg font-bold text-white">Introducción del episodio</h2>
        <p className="text-slate-400 text-sm">
          Este es un texto introductorio de prueba para el vídeo con ID {id}. Aquí puedes colocar los detalles completos y la descripción del reporte.
        </p>
      </div>
    </div>
  );
};

export default VideoDetail;