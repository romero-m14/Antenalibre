import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0b0e14] border-t border-slate-800/80 px-8 py-8 text-slate-400 text-sm mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-white text-lg font-bold tracking-wider">ANTENA LIBRE</h2>
          <p className="text-xs text-slate-500 mt-1">Plataforma multimedia independiente de noticias y contenido.</p>
        </div>

        {/* Redes Sociales */}
        <div className="flex items-center gap-6 text-sm">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">Facebook</a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-red-500 transition-colors">YouTube</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition-colors">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-colors">X (Twitter)</a>
        </div>

        <p className="text-xs text-slate-600">© 2026 Antena Libre. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;