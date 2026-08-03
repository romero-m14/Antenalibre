import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    `px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
      isActive
        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
        : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
    }`;

  return (
    <header className="bg-[#0d111a] border-b border-slate-800/80 sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        <div className="flex items-center gap-4 lg:gap-8">
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <img
              src="/icono.jpg"
              alt="Antena Icono"
              className="h-7 w-7 sm:h-8 sm:w-8 object-contain rounded group-hover:scale-105 transition-transform"
            />
            <span
              className="text-lg sm:text-xl font-black tracking-wider text-white select-none"
              style={{
                textShadow: '1.5px 1.5px 0px #ff2a5f, -1.5px -1.5px 0px #00e5ff',
              }}
            >
              ANTENA LIBRE
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1.5">
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

            <NavLink to="/audios" className={linkStyle}>
              Audios
            </NavLink>

            <NavLink to="/nosotros" className={linkStyle}>
              Nosotros
            </NavLink>
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="relative hidden lg:block">
            <input
              type="text"
              placeholder="Buscar tu noticia..."
              className="bg-[#171d2c] text-xs text-slate-200 placeholder-slate-500 px-4 py-2 rounded-xl border border-slate-700/50 focus:outline-none focus:border-indigo-500 w-48 xl:w-56 transition-all"
            />
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white bg-[#171d2c] border border-slate-800 rounded-xl"
            aria-label="Abrir menú"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden border-t border-slate-800/80 bg-[#0d111a] px-4 py-3 flex flex-col gap-2">
          <NavLink
            to="/"
            end
            className={linkStyle}
            onClick={() => setIsMenuOpen(false)}
          >
            Inicio
          </NavLink>
          <NavLink
            to="/noticias"
            className={linkStyle}
            onClick={() => setIsMenuOpen(false)}
          >
            Noticias
          </NavLink>
          <NavLink
            to="/articulos"
            className={linkStyle}
            onClick={() => setIsMenuOpen(false)}
          >
            Artículos
          </NavLink>
          <NavLink
            to="/videos"
            className={linkStyle}
            onClick={() => setIsMenuOpen(false)}
          >
            Vídeos
          </NavLink>

          <NavLink
            to="/audios"
            className={linkStyle}
            onClick={() => setIsMenuOpen(false)}
          >
            Audios
          </NavLink>

          <NavLink
            to="/nosotros"
            className={linkStyle}
            onClick={() => setIsMenuOpen(false)}
          >
            Nosotros
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Navbar;