import React, { useState } from 'react'
import { Instagram, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'
import { INSTAGRAM_URL, WHATSAPP_URL } from '../data'

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)

export const ContactPage: React.FC = () => {
  const [form, setForm] = useState({ name: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSend = () => {
    if (!form.name || !form.message) return
    const msg = `Olá! Meu nome é ${form.name}.\n\n${form.message}`
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(msg)}`, '_blank')
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setForm({ name: '', message: '' })
    }, 3000)
  }

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
          <p className="font-body text-xs text-[#c49a8a] uppercase tracking-[0.3em] mb-3">Fale Conosco</p>
          <h1 className="font-display text-5xl md:text-6xl text-[#3d2b26] mb-4" style={{ fontWeight: 300 }}>
            Contato
          </h1>
          <p className="font-body text-[#7a5c55] max-w-md mx-auto">
            Adoramos falar com nossas clientes! Entre em contato pelo canal de sua preferência 💕
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info cards */}
          <div className="space-y-5">
            <h2 className="font-display text-3xl text-[#3d2b26] mb-8" style={{ fontWeight: 400 }}>
              Nos encontre aqui 🌸
            </h2>

            {[
              {
                icon: <WhatsAppIcon />,
                color: 'bg-[#25D366]/10 text-[#25D366]',
                title: 'WhatsApp',
                subtitle: 'Atendimento rápido e personalizado',
                action: { label: 'Iniciar conversa', href: WHATSAPP_URL },
              },
              {
                icon: <Instagram size={20} />,
                color: 'bg-[#e8b4b8]/20 text-[#c49a8a]',
                title: '@loja_dajumoda',
                subtitle: '55.7K seguidoras · Novidades nos stories',
                action: { label: 'Ver Instagram', href: INSTAGRAM_URL },
              },
              {
                icon: <MapPin size={20} />,
                color: 'bg-[#fdf0ed] text-[#c49a8a]',
                title: 'Loja Física',
                subtitle: 'Pontezinha, Pernambuco',
                action: null,
              },
              {
                icon: <Clock size={20} />,
                color: 'bg-[#fdf0ed] text-[#c49a8a]',
                title: 'Horário de Atendimento',
                subtitle: 'Seg–Sex: 9h–18h · Sáb: 9h–14h',
                action: null,
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 border border-[#edd5c8] shadow-soft flex items-start gap-4 hover:shadow-medium transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${card.color}`}>
                  {card.icon}
                </div>
                <div className="flex-1">
                  <p className="font-accent text-[#3d2b26] font-medium">{card.title}</p>
                  <p className="font-body text-sm text-[#b08080] mt-0.5">{card.subtitle}</p>
                  {card.action && (
                    <a
                      href={card.action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-2 font-body text-xs text-[#c49a8a] hover:text-[#a07060] transition-colors"
                    >
                      {card.action.label} →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Message form */}
          <div className="bg-white rounded-3xl p-8 border border-[#edd5c8] shadow-soft">
            <h3 className="font-display text-2xl text-[#3d2b26] mb-2" style={{ fontWeight: 400 }}>
              Enviar mensagem
            </h3>
            <p className="font-body text-sm text-[#b08080] mb-8">
              Preencha abaixo e enviaremos pelo WhatsApp 💬
            </p>

            {sent ? (
              <div className="py-12 text-center">
                <CheckCircle2 size={48} className="text-[#25D366] mx-auto mb-4" />
                <p className="font-accent text-xl text-[#3d2b26]">Mensagem enviada!</p>
                <p className="font-body text-sm text-[#b08080] mt-2">Redirecionando para o WhatsApp...</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="font-body text-sm font-medium text-[#3d2b26] block mb-2">
                    Seu nome
                  </label>
                  <input
                    type="text"
                    placeholder="Como posso te chamar?"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="font-body text-sm font-medium text-[#3d2b26] block mb-2">
                    Mensagem
                  </label>
                  <textarea
                    placeholder="Escreva sua mensagem aqui..."
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="input-field resize-none"
                  />
                </div>

                <button
                  onClick={handleSend}
                  disabled={!form.name || !form.message}
                  className="btn-whatsapp w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <WhatsAppIcon />
                  Enviar pelo WhatsApp
                  <Send size={14} />
                </button>

                <p className="font-body text-xs text-[#b08080] text-center">
                  Ao clicar, você será redirecionada para o WhatsApp 🌸
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
