import React, { useState, useEffect } from 'react'
import { X, Heart, ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Product } from '../types'
import { WHATSAPP_URL } from '../data'

interface ProductModalProps {
  product: Product | null
  onClose: () => void
}

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [imgIdx, setImgIdx] = useState(0)
  const [selectedSize, setSelectedSize] = useState<string>('')
  const [selectedColor, setSelectedColor] = useState<string>('')
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    if (product) {
      setImgIdx(0)
      setSelectedSize('')
      setSelectedColor('')
      document.body.style.overflow = 'hidden'
    }
    return () => { document.body.style.overflow = '' }
  }, [product])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  if (!product) return null

  const handleWhatsApp = () => {
    const sizeInfo = selectedSize ? ` - Tamanho: ${selectedSize}` : ''
    const colorInfo = selectedColor ? ` - Cor: ${selectedColor}` : ''
    const msg = `${product.whatsappMessage || `Olá! Tenho interesse em: ${product.name}`}${sizeInfo}${colorInfo}`
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={onClose}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#3d2b26]/50 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white w-full sm:max-w-4xl sm:rounded-3xl overflow-hidden shadow-2xl max-h-[95vh] sm:max-h-[90vh] flex flex-col sm:flex-row animate-scale-in"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'scaleIn 0.3s ease-out forwards' }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-[#7a5c55] hover:text-[#c49a8a] transition-colors duration-200"
          aria-label="Fechar"
        >
          <X size={16} />
        </button>

        {/* Images */}
        <div className="relative w-full sm:w-1/2 aspect-square sm:aspect-auto bg-[#fdf0ed] flex-shrink-0">
          <img
            src={product.images[imgIdx]}
            alt={product.name}
            className="w-full h-full object-cover"
          />

          {/* Arrows */}
          {product.images.length > 1 && (
            <>
              <button
                onClick={() => setImgIdx((i) => (i - 1 + product.images.length) % product.images.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-[#7a5c55] hover:text-[#c49a8a] shadow-md transition-all duration-200 hover:scale-110"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => setImgIdx((i) => (i + 1) % product.images.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-[#7a5c55] hover:text-[#c49a8a] shadow-md transition-all duration-200 hover:scale-110"
              >
                <ChevronRight size={16} />
              </button>
            </>
          )}

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {product.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setImgIdx(i)}
                className={`rounded-full transition-all duration-200 ${
                  i === imgIdx ? 'w-4 h-2 bg-[#c49a8a]' : 'w-2 h-2 bg-white/60'
                }`}
              />
            ))}
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.isNew && (
              <span className="px-2.5 py-1 bg-[#e8b4b8] text-[#3d2b26] text-xs font-body font-medium rounded-full">Novo ✨</span>
            )}
            {product.isSale && discount > 0 && (
              <span className="px-2.5 py-1 bg-[#c49a8a] text-white text-xs font-body font-medium rounded-full">-{discount}%</span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 flex flex-col">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <p className="font-body text-xs text-[#b08080] uppercase tracking-wider mb-1">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </p>
              <h2 className="font-accent text-2xl text-[#3d2b26]" style={{ fontWeight: 500 }}>
                {product.name}
              </h2>
            </div>
            <button
              onClick={() => setLiked(!liked)}
              className={`w-10 h-10 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                liked
                  ? 'border-red-300 bg-red-50 text-red-400'
                  : 'border-[#edd5c8] text-[#b08080] hover:border-[#c49a8a] hover:text-[#c49a8a]'
              }`}
            >
              <Heart size={16} className={liked ? 'fill-current' : ''} />
            </button>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-5">
            {[1,2,3,4,5].map((s) => (
              <Star key={s} size={14} className="text-[#e8b4b8] fill-current" />
            ))}
            <span className="font-body text-xs text-[#b08080] ml-1">(4.9)</span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3 mb-5">
            {product.originalPrice && (
              <span className="font-body text-sm text-[#b08080] line-through">
                R$ {product.originalPrice.toFixed(2).replace('.', ',')}
              </span>
            )}
            <span className="font-display text-3xl text-[#c49a8a]" style={{ fontWeight: 500 }}>
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
          </div>

          {/* Description */}
          <p className="font-body text-sm text-[#7a5c55] leading-relaxed mb-6">
            {product.description}
          </p>

          {/* Colors */}
          <div className="mb-5">
            <p className="font-body text-sm font-medium text-[#3d2b26] mb-2.5">
              Cor: {selectedColor && <span className="text-[#c49a8a] font-normal">{selectedColor}</span>}
            </p>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-3 py-1.5 rounded-full text-xs font-body border transition-all duration-200 ${
                    selectedColor === color
                      ? 'border-[#c49a8a] bg-[#c49a8a] text-white'
                      : 'border-[#edd5c8] text-[#7a5c55] hover:border-[#c49a8a] hover:text-[#c49a8a]'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-8">
            <p className="font-body text-sm font-medium text-[#3d2b26] mb-2.5">
              Tamanho: {selectedSize && <span className="text-[#c49a8a] font-normal">{selectedSize}</span>}
            </p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-11 h-11 rounded-xl text-sm font-body border transition-all duration-200 ${
                    selectedSize === size
                      ? 'border-[#c49a8a] bg-[#c49a8a] text-white'
                      : 'border-[#edd5c8] text-[#7a5c55] hover:border-[#c49a8a] hover:text-[#c49a8a]'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={handleWhatsApp}
            className="btn-whatsapp w-full justify-center text-base py-4"
          >
            <WhatsAppIcon />
            Pedir pelo WhatsApp
          </button>

          <p className="font-body text-xs text-[#b08080] text-center mt-3">
            Atendimento rápido e personalizado 💕
          </p>
        </div>
      </div>
    </div>
  )
}
