import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ShoppingBag, Heart, Instagram } from 'lucide-react'
import { INSTAGRAM_URL, WHATSAPP_URL } from '../data'

const navItems = [
  { label: 'Início', href: '/' },
  { label: 'Catálogo', href: '/catalogo' },
  { label: 'Novidades', href: '/novidades' },
  { label: 'Sobre Nós', href: '/sobre' },
  { label: 'Contato', href: '/contato' },
]

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-glass border-b border-[#edd5c8]/60 py-3 shadow-soft'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-11 h-11 rounded-full bg-[#c49a8a] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                  <span className="font-display text-white text-lg font-light tracking-widest">D</span>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#e8b4b8] border-2 border-white"></div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-2xl text-[#3d2b26] tracking-wider" style={{ fontWeight: 400 }}>
                  DAJU
                </span>
                <span className="font-body text-[10px] text-[#b08080] tracking-[0.25em] uppercase">
                  Moda Feminina
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`nav-link text-sm ${
                    location.pathname === item.href ? 'text-[#c49a8a]' : ''
                  }`}
                >
                  {item.label}
                  {location.pathname === item.href && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#c49a8a] rounded-full"></span>
                  )}
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center text-[#b08080] hover:text-[#c49a8a] hover:bg-[#fdf0ed] transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-sm px-5 py-2.5"
              >
                <WhatsAppIcon />
                Fale Conosco
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center text-[#7a5c55] hover:bg-[#fdf0ed] transition-all duration-200"
              aria-label="Menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-[#3d2b26]/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 bottom-0 w-80 bg-white shadow-xl flex flex-col transition-transform duration-500 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-[#edd5c8]">
            <span className="font-display text-2xl text-[#3d2b26]">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="w-9 h-9 rounded-full flex items-center justify-center text-[#7a5c55] hover:bg-[#fdf0ed] transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto py-6 px-6">
            <ul className="space-y-1">
              {navItems.map((item, i) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={`flex items-center px-4 py-3.5 rounded-2xl font-body text-sm font-medium transition-all duration-200 ${
                      location.pathname === item.href
                        ? 'bg-[#fdf0ed] text-[#c49a8a]'
                        : 'text-[#7a5c55] hover:bg-[#fdf8f6] hover:text-[#c49a8a]'
                    }`}
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-6 border-t border-[#edd5c8] space-y-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full justify-center text-sm"
            >
              <WhatsAppIcon />
              Fale pelo WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full justify-center text-sm"
            >
              <Instagram size={16} />
              @loja_dajumoda
            </a>
          </div>

          {/* Decoration */}
          <div className="absolute bottom-32 left-6 text-5xl opacity-10 select-none pointer-events-none">🌸</div>
          <div className="absolute top-32 right-6 text-3xl opacity-10 select-none pointer-events-none">💕</div>
        </div>
      </div>
    </>
  )
}
