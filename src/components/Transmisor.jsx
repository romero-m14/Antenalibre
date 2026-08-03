// src/components/Transmisor.jsx
import React, { useState, useRef } from 'react';
import Peer from 'peerjs';

const Transmisor = () => {
  const [pinInput, setPinInput] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLive, setIsLive] = useState(false);
  const peerRef = useRef(null);
  const streamRef = useRef(null);

  // 🔑 Define aquí tu clave secreta (Cámbiala por la que prefieras)
  const PIN_SECRETO = '1234';

  const handleLogin = (e) => {
    e.preventDefault();
    if (pinInput === PIN_SECRETO) {
      setIsAuthenticated(true);
    } else {
      alert('🔒 PIN de acceso incorrecto');
    }
  };

  const startLive = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const peer = new Peer('antena-libre-live');
      peerRef.current = peer;

      peer.on('open', (id) => {
        console.log('🔴 Cabina iniciada con éxito:', id);
        setIsLive(true);
      });

      peer.on('call', (call) => {
        call.answer(streamRef.current);
      });

      peer.on('error', (err) => {
        console.error('Error en PeerJS:', err);
        if (err.type === 'unavailable-id') {
          alert('Ya hay un emisor transmitiendo desde otra ventana o dispositivo.');
        }
      });

    } catch (err) {
      console.error('Error al acceder al micrófono:', err);
      alert('No se pudo acceder al micrófono. Revisa los permisos de tu navegador.');
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

  // 1️⃣ PANTALLA DE BLOQUEO (Pedir PIN)
  if (!isAuthenticated) {
    return (
      <div className="p-6 bg-[#121723] rounded-2xl border border-slate-800 text-white max-w-sm w-full mx-auto shadow-2xl space-y-4">
        <div className="text-center space-y-1">
          <span className="text-3xl">🔒</span>
          <h3 className="font-bold text-base">Cabina Privada de Locución</h3>
          <p className="text-xs text-slate-400">Ingresa la clave para acceder al micrófono</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-3">
          <input
            type="password"
            placeholder="Clave de Acceso"
            value={pinInput}
            onChange={(e) => setPinInput(e.target.value)}
            className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-center text-sm font-bold tracking-widest focus:outline-none focus:border-indigo-500"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 p-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white transition-all shadow-lg"
          >
            Ingresar al Estudio
          </button>
        </form>
      </div>
    );
  }

  // 2️⃣ PANEL DE CONTROL DE TRANSMISIÓN (Solo visible tras poner el PIN correcto)
  return (
    <div className="p-6 bg-[#121723] rounded-2xl border border-slate-800 text-white space-y-4 max-w-sm w-full mx-auto shadow-2xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`h-3 w-3 rounded-full ${isLive ? 'bg-red-500 animate-ping' : 'bg-slate-500'}`} />
          <h3 className="font-bold text-base">Estudio de Locución 🎙️</h3>
        </div>
        <button 
          onClick={() => setIsAuthenticated(false)}
          className="text-[10px] text-slate-500 hover:text-slate-300 underline"
        >
          Bloquear
        </button>
      </div>

      <p className="text-xs text-slate-400">
        {isLive 
          ? "🔴 EN VIVO: Transmitiendo directamente a la web." 
          : "Haz clic abajo para encender tu micrófono y hablar en directo."}
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