import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, MapPin, Phone, Heart } from 'lucide-react'
import { INSTAGRAM_URL, WHATSAPP_URL, WHATSAPP_NUMBER } from '../data'

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3d2b26] text-white">
      {/* Top wave */}
      <div className="relative h-16 overflow-hidden">
        <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full">
          <path d="M0 64L60 58.7C120 53.3 240 42.7 360 37.3C480 32 600 32 720 37.3C840 42.7 960 53.3 1080 56C1200 58.7 1320 53.3 1380 50.7L1440 48V64H1380C1320 64 1200 64 1080 64C960 64 840 64 720 64C600 64 480 64 360 64C240 64 120 64 60 64H0Z" fill="#3d2b26"/>
        </svg>
        <div className="h-full bg-[#fdf8f6]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#c49a8a] flex items-center justify-center">
                <span className="font-display text-white text-xl font-light tracking-widest">D</span>
              </div>
              <div>
                <div className="font-display text-2xl text-white tracking-wider">DAJU</div>
                <div className="font-body text-[10px] text-[#b08080] tracking-[0.25em] uppercase">Moda Feminina</div>
              </div>
            </div>
            <p className="font-body text-sm text-[#b08080] leading-relaxed mb-6">
              Seja linda como você. Moda feminina com estilo, qualidade e muito amor em cada detalhe.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#c49a8a] hover:bg-[#c49a8a] hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="font-display text-lg text-white mb-6" style={{ fontWeight: 400 }}>
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Início', href: '/' },
                { label: 'Catálogo', href: '/catalogo' },
                { label: 'Novidades', href: '/novidades' },
                { label: 'Sobre Nós', href: '/sobre' },
                { label: 'Contato', href: '/contato' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="font-body text-sm text-[#b08080] hover:text-[#e8b4b8] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#c49a8a] opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categorias */}
          <div>
            <h3 className="font-display text-lg text-white mb-6" style={{ fontWeight: 400 }}>
              Categorias
            </h3>
            <ul className="space-y-3">
              {['Vestidos', 'Conjuntos', 'Macacões', 'Blusas', 'Calças', 'Shorts'].map((cat) => (
                <li key={cat}>
                  <Link
                    to={`/catalogo?categoria=${cat.toLowerCase()}`}
                    className="font-body text-sm text-[#b08080] hover:text-[#e8b4b8] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#c49a8a] opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-display text-lg text-white mb-6" style={{ fontWeight: 400 }}>
              Encontre-nos
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-[#c49a8a]" />
                </div>
                <div>
                  <p className="font-body text-sm text-white font-medium">Loja Física</p>
                  <p className="font-body text-sm text-[#b08080]">Pontezinha, PE</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <WhatsAppIcon />
                </div>
                <div>
                  <p className="font-body text-sm text-white font-medium">WhatsApp</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-[#b08080] hover:text-[#25D366] transition-colors"
                  >
                    {WHATSAPP_NUMBER.replace('55', '+55 ').replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Instagram size={14} className="text-[#c49a8a]" />
                </div>
                <div>
                  <p className="font-body text-sm text-white font-medium">Instagram</p>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-[#b08080] hover:text-[#e8b4b8] transition-colors"
                  >
                    @loja_dajumoda
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-[#b08080]">
            © {new Date().getFullYear()} Daju Moda. Todos os direitos reservados.
          </p>
          <p className="font-body text-sm text-[#b08080] flex items-center gap-1.5">
            Feito com <Heart size={12} className="text-[#e8b4b8] fill-current" /> para todas as mulheres
          </p>
        </div>
      </div>
    </footer>
  )
}
