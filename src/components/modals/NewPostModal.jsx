import React, { useState } from 'react';

const NewPostModal = ({ isOpen, onClose, onAddPost }) => {
  const [formData, setFormData] = useState({
    title: '',
    type: 'noticia',
    category: 'Noticias',
    image: '',
    content: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.image) return;
    onAddPost({ ...formData, id: Date.now(), date: 'HOY' });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-[#121723] border border-slate-800 rounded-3xl p-6 sm:p-8 w-full max-w-lg space-y-6">
        <div className="flex justify-between items-center border-b border-slate-800 pb-4">
          <h3 className="text-xl font-bold text-white">Nueva Publicación</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-white">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          <div>
            <label className="block text-slate-300 font-semibold mb-1">Título</label>
            <input
              type="text"
              required
              placeholder="Ej: Cobertura especial sobre..."
              className="w-full bg-[#171d2c] border border-slate-700/60 rounded-xl p-3 text-white focus:outline-none focus:border-indigo-500"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Tipo</label>
              <select
                className="w-full bg-[#171d2c] border border-slate-700/60 rounded-xl p-3 text-white focus:outline-none focus:border-indigo-500"
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              >
                <option value="noticia">Artículo / Noticia</option>
                <option value="video">Vídeo</option>
                <option value="galeria">Galería</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Categoría</label>
              <input
                type="text"
                placeholder="Ej: Reportajes"
                className="w-full bg-[#171d2c] border border-slate-700/60 rounded-xl p-3 text-white focus:outline-none focus:border-indigo-500"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">URL de Imagen</label>
            <input
              type="url"
              required
              placeholder="https://images.unsplash.com/..."
              className="w-full bg-[#171d2c] border border-slate-700/60 rounded-xl p-3 text-white focus:outline-none focus:border-indigo-500"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">Descripción / Contenido</label>
            <textarea
              rows="3"
              placeholder="Resumen de la noticia..."
              className="w-full bg-[#171d2c] border border-slate-700/60 rounded-xl p-3 text-white focus:outline-none focus:border-indigo-500"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="w-1/2 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/30"
            >
              Publicar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPostModal;