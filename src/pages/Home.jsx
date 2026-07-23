import React from 'react';
import { Link } from 'react-router-dom';
import NewsCard from '../components/cards/NewsCard';

const Home = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Encabezado */}
      <div>
        <h1 className="text-3xl font-black text-white tracking-wide">Últimas Destacadas</h1>
        <p className="text-slate-400 text-sm mt-1">
          Historias seleccionadas, reportajes multimedia y periodismo independiente en Antena Libre.
        </p>
      </div>

      {/* Grid Bento / Distribución de Contenido */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Noticia Destacada Principal (Usa NewsCard con prop isFeatured) */}
        <NewsCard
          id="1"
          title="La era del periodismo digital independiente y el libre flujo de la información"
          category="Reportaje"
          date="23 JULIO, 2026"
          image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80"
          description="Analizamos cómo las nuevas comunidades digitales están creando sus propios espacios de transmisión libre y directa sin intermediarios tradicionales..."
          isFeatured={true}
        />

        {/* Noticia Secundaria Lateral */}
        <NewsCard
          id="2"
          title="Herramientas de transmisión en tiempo real para creadores"
          category="Tecnología"
          date="22 JULIO, 2026"
          image="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80"
          description="Un desglose de los mejores flujos de trabajo multimedia para radiodifusión y publicación digital."
        />

        {/* Tarjeta 3: Fotogalería en miniatura */}
        <Link to="/galeria" className="bg-[#121723] rounded-3xl p-6 border border-slate-800 hover:border-slate-700 transition-all group">
          <div className="h-40 w-full rounded-2xl overflow-hidden bg-slate-800 mb-4">
            <img
              src="https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&w=600&q=80"
              alt="Fotografía"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
            Fotogalería
          </span>
          <h4 className="text-sm font-bold text-white mt-3 group-hover:text-indigo-400 transition-colors">
            Paisajes Urbanos: Capturando la ciudad nocturna
          </h4>
        </Link>

        {/* Tarjeta 4: Vídeo Destacado */}
        <Link to="/videos" className="bg-[#121723] rounded-3xl p-6 border border-slate-800 hover:border-slate-700 transition-all group">
          <div className="h-40 w-full rounded-2xl overflow-hidden bg-slate-800 mb-4 relative flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=600&q=80"
              alt="Vídeo"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute w-10 h-10 rounded-full bg-indigo-600/90 text-white flex items-center justify-center pl-0.5 shadow-lg">
              ▶
            </div>
          </div>
          <span className="bg-red-500/10 text-red-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
            Vídeo
          </span>
          <h4 className="text-sm font-bold text-white mt-3 group-hover:text-indigo-400 transition-colors">
            Entrevista con cineastas de producción independiente
          </h4>
        </Link>

        {/* Tarjeta 5: Cita o Editorial */}
        <div className="bg-[#121723] rounded-3xl p-6 border border-slate-800 flex flex-col justify-center text-center items-center">
          <span className="text-4xl text-indigo-500 font-serif">“</span>
          <p className="text-sm font-semibold text-slate-200 italic leading-relaxed">
            "La información libre no solo educa, conecta voluntades y transforma realidades."
          </p>
          <div className="w-8 h-1 bg-indigo-500/40 my-3 rounded-full"></div>
          <span className="text-xs text-slate-500 font-medium">— Editorial Antena Libre</span>
        </div>

      </div>
    </div>
  );
};

export default Home;