import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ onOpenModal }) => {
  const linkStyle = ({ isActive }) =>
    `px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
      isActive
        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
        : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
    }`;

  return (
    <header className="flex items-center justify-between px-6 py-3 bg-[#0d111a] border-b border-slate-800/80 sticky top-0 z-40">
      {/* Brand + Menú de Navegación Horizontal */}
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-2.5 group shrink-0">
          <img
            src="/icono.jpg"
            alt="Antena Icono"
            className="h-8 w-8 object-contain rounded group-hover:scale-105 transition-transform"
          />
          <span
            className="text-xl font-black tracking-wider text-white select-none"
            style={{
              textShadow: '1.5px 1.5px 0px #ff2a5f, -1.5px -1.5px 0px #00e5ff',
            }}
          >
            ANTENA LIBRE
          </span>
        </Link>

        {/* Navegación Superior */}
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/" end className={linkStyle}>
            Inicio
          </NavLink>
          <NavLink to="/noticias" className={linkStyle}>
            Noticias
          </NavLink>
          <NavLink to="/articulos" className={linkStyle}>
            Artículos
          </NavLink>
          <NavLink to="/videos" className={linkStyle}>
            Vídeos
          </NavLink>
          <NavLink to="/nosotros" className={linkStyle}>
            Nosotros
          </NavLink>
        </nav>
      </div>

      {/* Buscador y Botón Crear */}
      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <input
            type="text"
            placeholder="Buscar en el archivo..."
            className="bg-[#171d2c] text-xs text-slate-200 placeholder-slate-500 px-4 py-2 rounded-xl border border-slate-700/50 focus:outline-none focus:border-indigo-500 w-56 transition-all"
          />
        </div>

        <button
          onClick={onOpenModal}
          className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-md shadow-indigo-600/20 active:scale-95"
        >
          + Publicar
        </button>
      </div>
    </header>
  );
};

export default Navbar;