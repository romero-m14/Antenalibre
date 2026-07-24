import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import News from "./pages/News";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import VideoGallery from "./pages/VideoGallery";
import VideoDetail from "./pages/VideoDetail";
import AudioGallery from "./pages/AudioGallery";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0b0e14] text-slate-100 flex flex-col justify-between font-sans">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* NOTICIAS */}
            <Route path="/noticias" element={<News />} />
            <Route path="/noticias/:id" element={<ArticleDetail />} />
            <Route path="/noticia/:id" element={<ArticleDetail />} />

            {/* ARTÍCULOS */}
            <Route path="/articulos" element={<Articles />} />
            <Route path="/articulos/:id" element={<ArticleDetail />} />
            <Route path="/articulo/:id" element={<ArticleDetail />} />

            {/* VÍDEOS  */}
            <Route path="/videos" element={<VideoGallery />} />
            <Route path="/videos/:id" element={<VideoDetail />} />
            <Route path="/video/:id" element={<VideoDetail />} />

            {/* AUDIOS Y NOSOTROS */}
            <Route path="/audios" element={<AudioGallery />} />
            <Route path="/nosotros" element={<AboutUs />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;  