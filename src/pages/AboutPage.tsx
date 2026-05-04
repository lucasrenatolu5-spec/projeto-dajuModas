import React from 'react'
import { Heart, Star, MapPin, Instagram } from 'lucide-react'
import { INSTAGRAM_URL, WHATSAPP_URL } from '../data'

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)

export const AboutPage: React.FC = () => {
  return (
    <>
      {/* Header */}
      <div className="pt-28 pb-12 bg-gradient-rose relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #c49a8a 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="font-body text-xs text-[#c49a8a] uppercase tracking-[0.3em] mb-3">Nossa História</p>
          <h1 className="font-display text-5xl md:text-6xl text-[#3d2b26] mb-4" style={{ fontWeight: 300 }}>
            Sobre a Daju Moda
          </h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#e8b4b8] to-[#c49a8a] rounded-full mx-auto"></div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="font-display text-4xl text-[#3d2b26] mb-6" style={{ fontWeight: 300 }}>
              Nossa história começa com <em className="text-gradient not-italic">amor</em> pela moda
            </h2>
            <p className="font-body text-[#7a5c55] leading-relaxed mb-4" style={{ fontWeight: 300 }}>
              A Daju Moda nasceu do sonho de levar moda feminina de qualidade para cada mulher que deseja se sentir linda e confiante no dia a dia. Com cuidado e dedicação, selecionamos cada peça pensando em você.
            </p>
            <p className="font-body text-[#7a5c55] leading-relaxed mb-8" style={{ fontWeight: 300 }}>
              Localizada em Pontezinha, PE, nossa loja física é um espaço acolhedor onde cada cliente é tratada com atenção especial. E para quem não pode nos visitar, atendemos com todo o carinho pelo WhatsApp e Instagram!
            </p>
            <div className="flex gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <WhatsAppIcon />
                Falar Conosco
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <Instagram size={16} />
                Instagram
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-strong aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&q=85"
                alt="Loja Daju Moda"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Float card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-medium">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#fdf0ed] flex items-center justify-center text-2xl">
                  🌸
                </div>
                <div>
                  <p className="font-accent text-[#3d2b26] font-medium">Daju Moda</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    {[1,2,3,4,5].map((s) => (
                      <Star key={s} size={10} className="text-[#e8b4b8] fill-current" />
                    ))}
                    <span className="font-body text-xs text-[#b08080] ml-1">5.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: '💕',
              title: 'Amor pelo que fazemos',
              desc: 'Cada peça é escolhida com cuidado e dedicação para que você se sinta especial.',
            },
            {
              icon: '✨',
              title: 'Qualidade garantida',
              desc: 'Trabalhamos apenas com tecidos e fornecedores de confiança para garantir o melhor.',
            },
            {
              icon: '🌸',
              title: 'Moda para todas',
              desc: 'Acreditamos que toda mulher merece se sentir linda e confiante todos os dias.',
            },
          ].map((val) => (
            <div
              key={val.title}
              className="bg-white rounded-3xl p-8 text-center border border-[#edd5c8] shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#fdf0ed] flex items-center justify-center mx-auto mb-4 text-3xl">
                {val.icon}
              </div>
              <h3 className="font-accent text-[#3d2b26] font-medium mb-3">{val.title}</h3>
              <p className="font-body text-sm text-[#b08080] leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-[#3d2b26] rounded-3xl p-10 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { value: '55.7K', label: 'Seguidoras', icon: '💕' },
            { value: '2.9K+', label: 'Publicações', icon: '📸' },
            { value: '3.2K+', label: 'Seguindo', icon: '✨' },
            { value: '100%', label: 'Satisfação', icon: '🌸' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl mb-2">{stat.icon}</div>
              <p className="font-display text-3xl text-[#e8b4b8] mb-1" style={{ fontWeight: 400 }}>
                {stat.value}
              </p>
              <p className="font-body text-xs text-white/60 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Location */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#fdf0ed] rounded-full">
            <MapPin size={16} className="text-[#c49a8a]" />
            <span className="font-body text-sm text-[#7a5c55]">Loja Física em Pontezinha, PE</span>
          </div>
          <h2 className="font-display text-3xl text-[#3d2b26] mb-4" style={{ fontWeight: 400 }}>
            Venha nos visitar!
          </h2>
          <p className="font-body text-[#b08080] mb-8 max-w-md mx-auto">
            Nossa loja física está esperando por você. Ou se preferir, faça seu pedido pelo WhatsApp com toda comodidade.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <WhatsAppIcon />
            Pedir pelo WhatsApp
          </a>
        </div>
      </div>
    </>
  )
}
