import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import NewPostModal from './components/modals/NewPostModal';

// Páginas
import Home from './pages/Home';
import News from './pages/News';
import ArticleDetail from './pages/ArticleDetail';
import VideoGallery from './pages/VideoGallery';
import VideoDetail from './pages/VideoDetail'; // <-- ¡Verifica esta importación!
import Articles from './pages/Articles';
import AboutUs from './pages/AboutUs';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-[#0a0d14] text-slate-100 flex flex-col font-sans">
        <Navbar onOpenModal={() => setIsModalOpen(true)} />

        <main className="flex-1 bg-[#0a0d14]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/noticias" element={<News />} />
            <Route path="/noticia/:id" element={<ArticleDetail />} />
            <Route path="/articulos" element={<Articles />} />
            <Route path="/videos" element={<VideoGallery />} />
            {/* RUTA CLAVE PARA QUE RENDERICE /video/2 */}
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/nosotros" element={<AboutUs />} />
          </Routes>
        </main>

        <Footer />

        <NewPostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </Router>
  );
}

export default App;