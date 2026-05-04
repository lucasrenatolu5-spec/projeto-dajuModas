import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Instagram, ChevronDown } from 'lucide-react'
import { ProductCard } from '../components/ProductCard'
import { ProductModal } from '../components/ProductModal'
import { products, testimonials, INSTAGRAM_URL, WHATSAPP_URL } from '../data'
import { Product } from '../types'

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)

// Petals component
const FloatingPetals: React.FC = () => {
  const petals = ['🌸', '🌺', '💮', '🌹', '🪷']
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {Array.from({ length: 8 }).map((_, i) => (
        <span
          key={i}
          className="absolute text-2xl opacity-20 select-none"
          style={{
            left: `${(i * 13 + 7) % 100}%`,
            top: '-30px',
            animation: `petalFall ${9 + (i % 5)}s ease-in ${i * 1.5}s infinite`,
            fontSize: `${14 + (i % 3) * 4}px`,
          }}
        >
          {petals[i % petals.length]}
        </span>
      ))}
    </div>
  )
}

export const HomePage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map())
  const [testimonialIdx, setTestimonialIdx] = useState(0)

  const featuredProducts = products.filter((p) => p.isBestSeller).slice(0, 4)
  const newProducts = products.filter((p) => p.isNew).slice(0, 4)

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = (entry.target as HTMLElement).dataset.section
            if (id) setVisibleSections((prev) => new Set([...prev, id]))
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    sectionRefs.current.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const registerSection = (id: string) => (el: HTMLElement | null) => {
    if (el) {
      el.dataset.section = id
      sectionRefs.current.set(id, el)
    }
  }

  const isVisible = (id: string) => visibleSections.has(id)

  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIdx((i) => (i + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <FloatingPetals />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-rose">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #c49a8a 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Blobs */}
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-[#e8b4b8] opacity-20 blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#c49a8a] opacity-15 blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              {/* Eyebrow */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 rounded-full mb-6 shadow-soft border border-[#edd5c8]"
                style={{ animation: 'fadeUp 0.6s ease-out forwards' }}
              >
                <span className="text-base">🌸</span>
                <span className="font-body text-xs text-[#c49a8a] uppercase tracking-widest font-medium">
                  Nova Coleção Disponível
                </span>
              </div>

              <h1
                className="font-display text-6xl md:text-7xl lg:text-8xl text-[#3d2b26] leading-none mb-6"
                style={{ animation: 'fadeUp 0.7s ease-out 0.1s both', fontWeight: 300 }}
              >
                Seja
                <br />
                <em className="text-gradient not-italic">linda</em>
                <br />
                como você
              </h1>

              <p
                className="font-body text-lg text-[#7a5c55] leading-relaxed mb-10 max-w-md"
                style={{ animation: 'fadeUp 0.7s ease-out 0.2s both', fontWeight: 300 }}
              >
                Moda feminina com estilo, qualidade e muito amor em cada detalhe. 
                Peças exclusivas para você se sentir especial todos os dias. 💕
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4"
                style={{ animation: 'fadeUp 0.7s ease-out 0.3s both' }}
              >
                <Link to="/catalogo" className="btn-primary text-base">
                  Ver Catálogo
                  <ArrowRight size={18} />
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-base"
                >
                  <WhatsAppIcon />
                  Falar Conosco
                </a>
              </div>

              {/* Stats */}
              <div
                className="flex items-center gap-8 mt-12 pt-8 border-t border-[#edd5c8]"
                style={{ animation: 'fadeUp 0.7s ease-out 0.4s both' }}
              >
                {[
                  { value: '55.7K', label: 'Seguidoras' },
                  { value: '2.9K+', label: 'Publicações' },
                  { value: '100%', label: 'Satisfação' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-display text-2xl text-[#c49a8a]" style={{ fontWeight: 500 }}>
                      {stat.value}
                    </p>
                    <p className="font-body text-xs text-[#b08080] uppercase tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image collage */}
            <div
              className="relative hidden lg:block"
              style={{ animation: 'fadeIn 1s ease-out 0.3s both' }}
            >
              <div className="relative w-full aspect-square">
                {/* Main image */}
                <div className="absolute inset-8 rounded-[3rem] overflow-hidden shadow-strong bg-[#fdf0ed]">
                  <img
                    src="https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=700&q=85"
                    alt="Moda Daju"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating cards */}
                <div
                  className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-medium"
                  style={{ animation: 'float 6s ease-in-out infinite' }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#e8b4b8] flex items-center justify-center">
                      <span className="text-base">✨</span>
                    </div>
                    <div>
                      <p className="font-body text-xs font-medium text-[#3d2b26]">Nova Coleção</p>
                      <p className="font-body text-xs text-[#b08080]">Primavera/Verão</p>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-medium"
                  style={{ animation: 'float 6s ease-in-out 2s infinite' }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    {[1,2,3,4,5].map((s) => (
                      <Star key={s} size={10} className="text-[#e8b4b8] fill-current" />
                    ))}
                  </div>
                  <p className="font-body text-xs font-medium text-[#3d2b26]">"Amei demais!"</p>
                  <p className="font-body text-xs text-[#b08080]">— Maria Clara</p>
                </div>

                <div
                  className="absolute top-1/2 -right-6 bg-[#c49a8a] rounded-2xl p-4 shadow-medium -translate-y-1/2"
                  style={{ animation: 'float 6s ease-in-out 1s infinite' }}
                >
                  <p className="font-display text-3xl text-white font-light">55K</p>
                  <p className="font-body text-xs text-white/80">Seguidoras</p>
                </div>

                {/* Decorative circles */}
                <div className="absolute top-2 right-20 w-16 h-16 rounded-full border-2 border-[#e8b4b8] opacity-40"></div>
                <div className="absolute bottom-12 left-0 w-10 h-10 rounded-full bg-[#e8b4b8] opacity-30"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 animate-bounce">
          <ChevronDown size={20} className="text-[#c49a8a]" />
        </div>
      </section>

      {/* ─── CATEGORIES STRIP ─── */}
      <section className="bg-[#3d2b26] py-5 overflow-hidden">
        <div className="flex animate-[slideX_20s_linear_infinite]" style={{ animation: 'none' }}>
          <div className="flex items-center gap-8 px-8 whitespace-nowrap">
            {['Vestidos', 'Conjuntos', 'Macacões', 'Blusas', 'Calças', 'Shorts', 'Novidades'].map((cat, i) => (
              <React.Fragment key={cat}>
                <span className="font-display text-white/60 text-sm tracking-widest uppercase" style={{ fontWeight: 300 }}>
                  {cat}
                </span>
                {i < 6 && <span className="text-[#c49a8a]">✦</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BEST SELLERS ─── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#fdf8f6]">
        <div className="max-w-7xl mx-auto">
          <div
            ref={registerSection('bestsellers')}
            className={`text-center mb-14 transition-all duration-700 ${
              isVisible('bestsellers') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="font-body text-xs text-[#c49a8a] uppercase tracking-[0.3em] mb-3">Favoritas</p>
            <h2 className="section-title mb-4">Mais Vendidas</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle mt-4 max-w-xl mx-auto">
              As peças que as nossas clientes mais amam. Escolhas certeiras para o seu guarda-roupa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, i) => (
              <div
                key={product.id}
                className={`transition-all duration-700 ${
                  isVisible('bestsellers')
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <ProductCard product={product} onView={setSelectedProduct} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/catalogo" className="btn-outline">
              Ver Catálogo Completo
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── BANNER ─── */}
      <section
        ref={registerSection('banner')}
        className="relative py-32 overflow-hidden bg-[#3d2b26]"
      >
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1600&q=70"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <p
            className={`font-body text-xs text-[#e8b4b8] uppercase tracking-[0.3em] mb-4 transition-all duration-700 ${
              isVisible('banner') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Loja Física & Online
          </p>
          <h2
            className={`font-display text-5xl md:text-6xl text-white mb-6 transition-all duration-700 delay-100 ${
              isVisible('banner') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ fontWeight: 300 }}
          >
            Venha nos visitar em{' '}
            <em className="text-[#e8b4b8] not-italic">Pontezinha</em>
          </h2>
          <p
            className={`font-body text-lg text-white/70 mb-10 leading-relaxed transition-all duration-700 delay-200 ${
              isVisible('banner') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Ou faça seus pedidos pelo WhatsApp com toda a comodidade que você merece. 
            Atendimento personalizado para cada cliente especial. 💕
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${
              isVisible('banner') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <WhatsAppIcon />
              Pedir pelo WhatsApp
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>
              <Instagram size={16} />
              Seguir no Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ─── NEW ARRIVALS ─── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#fff0f3]/30">
        <div className="max-w-7xl mx-auto">
          <div
            ref={registerSection('new')}
            className={`text-center mb-14 transition-all duration-700 ${
              isVisible('new') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="font-body text-xs text-[#c49a8a] uppercase tracking-[0.3em] mb-3">Chegou Agora</p>
            <h2 className="section-title mb-4">Novidades ✨</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle mt-4 max-w-xl mx-auto">
              As últimas tendências chegaram! Confira as peças mais fresquinhas do nosso acervo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newProducts.map((product, i) => (
              <div
                key={product.id}
                className={`transition-all duration-700 ${
                  isVisible('new') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <ProductCard product={product} onView={setSelectedProduct} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/novidades" className="btn-primary">
              Ver Todas as Novidades
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section
        ref={registerSection('features')}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fdf8f6] border-t border-[#edd5c8]"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '✨', title: 'Peças Exclusivas', desc: 'Modelos únicos selecionados com muito cuidado e carinho' },
              { icon: '💕', title: 'Atendimento VIP', desc: 'Atendimento personalizado pelo WhatsApp com amor' },
              { icon: '🏪', title: 'Loja Física', desc: 'Venha nos visitar em Pontezinha, PE' },
              { icon: '🌸', title: 'Qualidade Premium', desc: 'Tecidos e acabamentos de alta qualidade em cada peça' },
            ].map((feat, i) => (
              <div
                key={feat.title}
                className={`text-center transition-all duration-700 ${
                  isVisible('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-[#fdf0ed] flex items-center justify-center mx-auto mb-4 text-2xl">
                  {feat.icon}
                </div>
                <h3 className="font-accent text-[#3d2b26] font-medium mb-2">{feat.title}</h3>
                <p className="font-body text-sm text-[#b08080] leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section
        ref={registerSection('testimonials')}
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-rose overflow-hidden"
      >
        <div className="max-w-4xl mx-auto">
          <div
            className={`text-center mb-14 transition-all duration-700 ${
              isVisible('testimonials') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="font-body text-xs text-[#c49a8a] uppercase tracking-[0.3em] mb-3">Clientes Felizes</p>
            <h2 className="section-title mb-4">O que dizem sobre nós</h2>
            <div className="section-divider"></div>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible('testimonials') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative bg-white rounded-3xl p-10 shadow-soft text-center overflow-hidden">
              {/* Deco */}
              <div className="absolute top-4 left-6 text-6xl text-[#e8b4b8] opacity-20 font-display leading-none select-none">"</div>

              <div className="flex items-center justify-center gap-1 mb-6">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} size={16} className="text-[#e8b4b8] fill-current" />
                ))}
              </div>

              <p className="font-accent text-xl text-[#3d2b26] leading-relaxed mb-8 max-w-2xl mx-auto italic" style={{ fontWeight: 400 }}>
                "{testimonials[testimonialIdx].text}"
              </p>

              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#c49a8a] flex items-center justify-center">
                  <span className="font-display text-white font-light">{testimonials[testimonialIdx].avatar}</span>
                </div>
                <div className="text-left">
                  <p className="font-body text-sm font-medium text-[#3d2b26]">{testimonials[testimonialIdx].name}</p>
                  <p className="font-body text-xs text-[#b08080]">Cliente Daju Moda ✓</p>
                </div>
              </div>

              {/* Dots */}
              <div className="flex items-center justify-center gap-2 mt-8">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTestimonialIdx(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === testimonialIdx ? 'w-6 h-2 bg-[#c49a8a]' : 'w-2 h-2 bg-[#edd5c8]'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INSTAGRAM FEED ─── */}
      <section
        ref={registerSection('instagram')}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-10 transition-all duration-700 ${
              isVisible('instagram') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="font-body text-xs text-[#c49a8a] uppercase tracking-[0.3em] mb-3">Redes Sociais</p>
            <h2 className="section-title mb-4">Siga no Instagram</h2>
            <div className="section-divider"></div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 font-body text-sm text-[#b08080] hover:text-[#c49a8a] transition-colors"
            >
              <Instagram size={14} />
              @loja_dajumoda
            </a>
          </div>

          {/* Instagram grid preview */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {[
              'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&q=80',
              'https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=300&q=80',
              'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&q=80',
              'https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=300&q=80',
              'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=300&q=80',
              'https://images.unsplash.com/photo-1554412933-514a83d2f3cf?w=300&q=80',
            ].map((src, i) => (
              <a
                key={i}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative aspect-square overflow-hidden rounded-2xl group transition-all duration-700 ${
                  isVisible('instagram') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <img
                  src={src}
                  alt={`Instagram post ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#3d2b26]/0 group-hover:bg-[#3d2b26]/40 transition-colors duration-300 flex items-center justify-center">
                  <Instagram size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Instagram size={16} />
              Ver Mais no Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Product modal */}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  )
}
