// src/pages/AudioGallery.jsx
import React, { useState, useRef } from 'react';
import Peer from 'peerjs';
import { audiosData, liveStreamData } from '../data/audiosData';

const AudioGallery = () => {
  const [isListening, setIsListening] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null); // Mensaje elegante en UI
  const audioLiveRef = useRef(null);
  const peerRef = useRef(null);

  // Crear una señal de audio mudo técnica para establecer WebRTC
  const createDummyAudioStream = () => {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const dst = osc.connect(ctx.createMediaStreamDestination());
    osc.start();
    const track = dst.stream.getAudioTracks()[0];
    track.enabled = false;
    return new MediaStream([track]);
  };

  const toggleLiveConnection = () => {
    // Si ya está escuchando, desconectamos
    if (isListening) {
      if (peerRef.current) peerRef.current.destroy();
      if (audioLiveRef.current) {
        audioLiveRef.current.srcObject = null;
      }
      setIsListening(false);
      setStatusMessage(null);
      return;
    }

    // Limpiar mensajes anteriores
    setStatusMessage(null);

    const peer = new Peer();
    peerRef.current = peer;

    peer.on('open', () => {
      const dummyStream = createDummyAudioStream();
      const call = peer.call('antena-libre-live', dummyStream);

      call.on('stream', (remoteStream) => {
        if (audioLiveRef.current) {
          audioLiveRef.current.srcObject = remoteStream;
          audioLiveRef.current
            .play()
            .then(() => {
              setIsListening(true);
              setStatusMessage({
                type: 'success',
                text: '🟢 ¡Conectado con exito! Escuchando la voz en vivo.'
              });
            })
            .catch((err) => {
              console.error('Error al reproducir audio:', err);
            });
        }
      });
    });

    // En lugar de una alerta emergente (alert), mostramos un aviso elegante dentro de la app
    peer.on('error', (err) => {
      console.error('Error al conectar:', err);
      setIsListening(false);
      setStatusMessage({
        type: 'info',
        text: '📻 La transmisión aún no está en vivo. ¡Pronto volveremos a estar al aire!'
      });

      // Auto-ocultar el mensaje después de 6 segundos
      setTimeout(() => {
        setStatusMessage(null);
      }, 6000);
    });
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto space-y-8 relative">
      {/* Elemento de audio para reproducir la voz en directo */}
      <audio ref={audioLiveRef} autoPlay controls className="hidden" />

      {/* 🌟 MENSAJE NOTIFICACIÓN ELEGANTE EN LUGAR DE ALERT */}
      {statusMessage && (
        <div
          className={`transition-all transform duration-300 ease-out border rounded-xl p-4 flex items-center justify-between shadow-2xl backdrop-blur-md animate-fade-in ${
            statusMessage.type === 'success'
              ? 'bg-emerald-950/80 border-emerald-500/40 text-emerald-200'
              : 'bg-amber-950/80 border-amber-500/40 text-amber-200 ring-1 ring-amber-500/20'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="text-xl animate-bounce">
              {statusMessage.type === 'success' ? '🎙️' : '⏳'}
            </span>
            <p className="text-xs sm:text-sm font-semibold tracking-wide">
              {statusMessage.text}
            </p>
          </div>
          <button
            onClick={() => setStatusMessage(null)}
            className="text-xs opacity-60 hover:opacity-100 font-bold px-2 py-1 transition-opacity"
          >
            ✕
          </button>
        </div>
      )}

      {/* ENCABEZADO */}
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

      {/* BANNER REPRODUCTOR EN VIVO DE VOZ */}
      <div className="bg-gradient-to-r from-red-950/40 via-[#121723] to-[#121723] border border-red-500/30 rounded-2xl p-5 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="relative flex h-3 w-3">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isListening ? 'bg-emerald-400' : 'bg-red-400'} opacity-75`}></span>
              <span className={`relative inline-flex rounded-full h-3 w-3 ${isListening ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
            </span>
            <span className={`${isListening ? 'text-emerald-400' : 'text-red-400'} font-extrabold text-xs tracking-wider uppercase`}>
              {isListening ? 'VOZ TRANSMITIENDO EN DIRECTO' : 'TRANSMISIÓN DE VOZ EN DIRECTO'}
            </span>
          </div>
          <h2 className="text-xl font-bold text-white">Antena Libre FM - Cabina en Vivo</h2>
          <p className="text-slate-400 text-xs">
            {isListening
              ? "🟢 Sintonizado correctamente. Escuchando al locutor en directo."
              : "Haz clic en el botón para escuchar la voz del locutor en tiempo real."}
          </p>
        </div>

        <button
          onClick={toggleLiveConnection}
          className={`px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white transition-all shadow-lg shrink-0 ${
            isListening
              ? 'bg-red-600 hover:bg-red-700 animate-pulse'
              : 'bg-indigo-600 hover:bg-indigo-700 hover:scale-105'
          }`}
        >
          {isListening ? '🎧 Desconectar Voz' : '🎙️ Sintonizar En Vivo'}
        </button>
      </div>

      {/* STREAMING SECUNDARIO / PODCASTS */}
      {liveStreamData?.isLive && (
        <div className="bg-[#121723] border border-slate-800/80 rounded-2xl p-5 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-slate-400 font-extrabold text-xs tracking-wider uppercase">
              {liveStreamData.badge}
            </span>
            <h2 className="text-xl font-bold text-white">{liveStreamData.title}</h2>
            <p className="text-slate-400 text-xs">{liveStreamData.description}</p>
          </div>

          <div className="w-full md:w-80 shrink-0">
            <audio
              controls
              controlsList="nodownload"
              onContextMenu={(e) => e.preventDefault()}
              className="w-full h-10 accent-indigo-500 rounded-lg"
            >
              <source src={liveStreamData.streamUrl} type="audio/mpeg" />
            </audio>
          </div>
        </div>
      )}

      {/* EPISODIOS ANTERIORES */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white pt-2">Episodios Anteriores</h3>
        {audiosData?.map((audio) => (
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