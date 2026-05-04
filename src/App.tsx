import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { WhatsAppFloat } from './components/WhatsAppFloat'
import { HomePage } from './pages/HomePage'
import { CatalogPage } from './pages/CatalogPage'
import { NovidadesPage } from './pages/NovidadesPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fdf8f6]">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogo" element={<CatalogPage />} />
          <Route path="/novidades" element={<NovidadesPage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/contato" element={<ContactPage />} />
          {/* 404 fallback */}
          <Route
            path="*"
            element={
              <div className="pt-40 pb-20 text-center px-4">
                <div className="text-6xl mb-6">🌸</div>
                <h1 className="font-display text-4xl text-[#3d2b26] mb-4" style={{ fontWeight: 300 }}>
                  Página não encontrada
                </h1>
                <p className="font-body text-[#b08080] mb-8">
                  Ops! Essa página não existe, mas temos peças lindas esperando por você!
                </p>
                <a href="/" className="btn-primary">
                  Ir para o Início
                </a>
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
