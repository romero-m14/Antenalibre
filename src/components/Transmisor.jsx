// src/components/Transmisor.jsx
import React, { useState, useRef } from 'react';
import Peer from 'peerjs';

const Transmisor = () => {
  const [isLive, setIsLive] = useState(false);
  const peerRef = useRef(null);
  const streamRef = useRef(null);

  const startLive = async () => {
    try {
      // 1. Obtener acceso al micrófono
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      // 2. Crear el Peer con el ID único para la sala en vivo
      const peer = new Peer('antena-libre-live');
      peerRef.current = peer;

      peer.on('open', (id) => {
        console.log('🔴 Transmisión iniciada en la sala:', id);
        setIsLive(true);
      });

      // 3. Responder a los oyentes que llamen enviando la señal del micrófono
      peer.on('call', (call) => {
        console.log('🎧 Un oyente se ha conectado a la transmisión');
        call.answer(streamRef.current);
      });

      peer.on('error', (err) => {
        console.error('Error de PeerJS:', err);
        if (err.type === 'unavailable-id') {
          alert('El ID "antena-libre-live" ya está en uso. Si tenías otra pestaña abierta, ciérrala e intentalo de nuevo.');
        }
      });

    } catch (err) {
      console.error('Error al acceder al micrófono:', err);
      alert('No se pudo acceder al micrófono. Revisa los permisos del navegador.');
    }
  };

  const stopLive = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }
    if (peerRef.current) {
      peerRef.current.destroy();
    }
    setIsLive(false);
  };

  return (
    <div className="p-6 bg-[#121723] rounded-2xl border border-slate-800 text-white space-y-4 max-w-sm w-full shadow-2xl">
      <div className="flex items-center gap-2">
        <span className={`h-3 w-3 rounded-full ${isLive ? 'bg-red-500 animate-ping' : 'bg-slate-500'}`} />
        <h3 className="font-bold text-base">Estudio de Locución 🎙️</h3>
      </div>

      <p className="text-xs text-slate-400">
        {isLive 
          ? "🔴 EN VIVO: Transmitiendo voz en directo." 
          : "Haz clic abajo para comenzar a transmitir con tu micrófono."}
      </p>

      <button
        onClick={isLive ? stopLive : startLive}
        className={`px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all w-full shadow-lg ${
          isLive 
            ? 'bg-red-600 hover:bg-red-700 animate-pulse text-white' 
            : 'bg-indigo-600 hover:bg-indigo-700 text-white'
        }`}
      >
        {isLive ? '🔴 Detener Transmisión' : '🎙️ Encender Micrófono y Hablar'}
      </button>
    </div>
  );
};

export default Transmisor;