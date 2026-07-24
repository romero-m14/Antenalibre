import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ onOpenModal }) => {
  const linkStyle = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
      isActive
        ? 'bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-600/20'
        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
    }`;

  return (
    <aside className="w-64 bg-[#0d111a] text-slate-300 flex flex-col justify-between p-6 border-r border-slate-800/80 shrink-0 md:flex min-h-[calc(100vh-65px)]">
      <div className="space-y-6">
        <div>
          <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Navegación</h2>
          <nav className="space-y-1.5">
            <NavLink to="/" end className={linkStyle}>
              <span>🏠</span> Inicio
            </NavLink>
            <NavLink to="/noticias" className={linkStyle}>
              <span>📰</span> Noticias
            </NavLink>
            <NavLink to="/articulos" className={linkStyle}>
              <span>📝</span> Artículos
            </NavLink>
            <NavLink to="/videos" className={linkStyle}>
              <span>🎬</span> Vídeos
            </NavLink>
            <NavLink to="/nosotros" className={linkStyle}>
              <span>👤</span> Nosotros
            </NavLink>
          </nav>
        </div>
      </div>

      <button
        onClick={onOpenModal}
        className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-indigo-600/20 active:scale-95"
      >
        <span>➕</span> Crear Publicación
      </button>
    </aside>
  );
};

export default Sidebar;