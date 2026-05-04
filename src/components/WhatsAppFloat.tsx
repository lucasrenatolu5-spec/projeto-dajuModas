import React, { useState } from 'react'
import { X, MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '../data'

export const WhatsAppFloat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const quickMessages = [
    { text: '💕 Ver novidades', msg: 'Olá! Quero ver as novidades da Daju Moda!' },
    { text: '👗 Ver catálogo completo', msg: 'Olá! Gostaria de ver o catálogo completo.' },
    { text: '🛍️ Fazer um pedido', msg: 'Olá! Gostaria de fazer um pedido.' },
    { text: '📍 Localização da loja', msg: 'Olá! Quero saber a localização da loja física.' },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Quick messages panel */}
      <div
        className={`transition-all duration-400 origin-bottom-right ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="bg-white rounded-2xl shadow-xl border border-[#edd5c8] p-4 w-64">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="font-accent text-sm font-medium text-[#3d2b26]">Daju Moda</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
                <p className="font-body text-xs text-[#b08080]">Online agora</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full flex items-center justify-center text-[#b08080] hover:text-[#c49a8a] hover:bg-[#fdf0ed] transition-colors"
            >
              <X size={14} />
            </button>
          </div>

          <p className="font-body text-xs text-[#7a5c55] mb-3 leading-relaxed">
            Olá! Como podemos te ajudar? 🌸
          </p>

          <div className="flex flex-col gap-2">
            {quickMessages.map((item, i) => (
              <a
                key={i}
                href={`${WHATSAPP_URL}?text=${encodeURIComponent(item.msg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-left px-3 py-2 rounded-xl bg-[#fdf8f6] border border-[#edd5c8] text-xs font-body text-[#7a5c55] hover:bg-[#fdf0ed] hover:border-[#c49a8a] hover:text-[#c49a8a] transition-all duration-200"
              >
                {item.text}
              </a>
            ))}
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 w-full py-2.5 bg-[#25D366] text-white text-xs font-body font-medium rounded-xl hover:bg-[#1ebe57] transition-colors duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Abrir WhatsApp
          </a>
        </div>
        {/* Arrow */}
        <div className="w-4 h-4 bg-white border-r border-b border-[#edd5c8] rotate-45 ml-auto mr-5 -mt-2"></div>
      </div>

      {/* Main button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 ${
          isOpen ? 'bg-[#c49a8a]' : 'bg-[#25D366]'
        }`}
        aria-label="WhatsApp"
      >
        {isOpen ? (
          <X size={22} className="text-white" />
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        )}
        {/* Pulse ring */}
        {!isOpen && (
          <span className="absolute w-14 h-14 rounded-full bg-[#25D366] animate-ping opacity-30"></span>
        )}
      </button>
    </div>
  )
}
