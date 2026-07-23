import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ArticleDetail = () => {
  const { id } = useParams();

  return (
    <article className="max-w-4xl mx-auto p-6 sm:p-8 space-y-8 text-slate-300">
      {/* Botón Volver */}
      <Link to="/" className="text-xs text-slate-400 hover:text-white transition-colors inline-block">
        ← Volver a Noticias
      </Link>

      {/* Encabezado de la Noticia */}
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
            Noticia Principal #{id || '1'}
          </span>
          <span className="text-xs text-slate-500">Publicado el 23 de Julio, 2026</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
          La Convergencia de la Estética Digital: Redefiniendo el Periodismo Libre
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed">
          Un análisis exhaustivo sobre los límites de la tecnología y la creatividad humana en el panorama audiovisual contemporáneo.
        </p>
      </header>

      {/* Imagen Principal */}
      <div className="h-80 sm:h-[450px] w-full rounded-3xl overflow-hidden bg-slate-800 border border-slate-800">
        <img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
          alt="Detalle de Noticia"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Cuerpo del Artículo */}
      <div className="space-y-6 text-base leading-relaxed text-slate-300">
        <p>
          A medida que las fronteras entre el contenido multimedia y las transmisiones digitales continúan disolviéndose, nos encontramos ante un momento crucial en la historia de la comunicación.
        </p>
        <p className="bg-[#121723] border-l-4 border-indigo-500 p-4 rounded-r-xl text-slate-200 italic">
          "Antena Libre busca ser la ventana desde la cual se analizan estos fenómenos con total independencia periodística."
        </p>
        <p>
          Con el avance de nuevas herramientas de edición y transmisión en vivo, los comunicadores independientes ahora cuentan con las mismas capacidades de producción que las grandes cadenas de noticias tradicionalmente monopolizaban.
        </p>
      </div>

      {/* Tarjeta del Autor / Sobre Mí */}
      <section className="bg-[#121723] border border-slate-800 rounded-3xl p-6 flex items-center gap-6 mt-12">
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
          alt="Autor"
          className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500/40"
        />
        <div>
          <h3 className="text-white font-bold text-base">Escrito por Miguel Romero</h3>
          <p className="text-xs text-slate-400">Director & Fundador de Antena Libre.</p>
          <Link to="/nosotros" className="text-indigo-400 hover:underline text-xs font-semibold mt-1 inline-block">
            Conoce más sobre el equipo →
          </Link>
        </div>
      </section>
    </article>
  );
};

export default ArticleDetail;