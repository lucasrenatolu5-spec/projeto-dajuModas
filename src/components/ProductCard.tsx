import React, { useState } from 'react'
import { Heart, ShoppingBag, Eye } from 'lucide-react'
import { Product } from '../types'
import { WHATSAPP_URL } from '../data'

interface ProductCardProps {
  product: Product
  onView?: (product: Product) => void
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onView }) => {
  const [liked, setLiked] = useState(false)
  const [imgIdx, setImgIdx] = useState(0)

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation()
    const msg = product.whatsappMessage || `Olá! Tenho interesse no produto: ${product.name}`
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div
      className="card-product"
      onMouseEnter={() => product.images[1] && setImgIdx(1)}
      onMouseLeave={() => setImgIdx(0)}
      onClick={() => onView?.(product)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#fdf0ed]">
        <img
          src={product.images[imgIdx] || product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isNew && (
            <span className="px-2.5 py-1 bg-[#e8b4b8] text-[#3d2b26] text-xs font-body font-medium rounded-full">
              Novo ✨
            </span>
          )}
          {product.isBestSeller && (
            <span className="px-2.5 py-1 bg-[#3d2b26] text-white text-xs font-body font-medium rounded-full">
              Mais Vendido
            </span>
          )}
          {product.isSale && discount > 0 && (
            <span className="px-2.5 py-1 bg-[#c49a8a] text-white text-xs font-body font-medium rounded-full">
              -{discount}%
            </span>
          )}
        </div>

        {/* Actions overlay */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
          <button
            onClick={(e) => { e.stopPropagation(); setLiked(!liked) }}
            className={`w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-200 hover:scale-110 ${
              liked ? 'text-red-400' : 'text-[#b08080]'
            }`}
            aria-label="Favoritar"
          >
            <Heart size={15} className={liked ? 'fill-current' : ''} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onView?.(product) }}
            className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-[#b08080] hover:text-[#c49a8a] transition-all duration-200 hover:scale-110"
            aria-label="Visualizar"
          >
            <Eye size={15} />
          </button>
        </div>

        {/* Quick buy button */}
        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
          <button
            onClick={handleWhatsApp}
            className="w-full py-2.5 bg-[#25D366] text-white text-sm font-body font-medium rounded-2xl flex items-center justify-center gap-2 hover:bg-[#1ebe57] transition-colors duration-200 shadow-lg"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Pedir pelo WhatsApp
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="font-body text-xs text-[#b08080] uppercase tracking-wider mb-1">
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </p>
        <h3 className="font-accent text-[#3d2b26] text-base font-medium leading-snug mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Colors */}
        <div className="flex flex-wrap gap-1 mb-3">
          {product.colors.slice(0, 3).map((color) => (
            <span key={color} className="text-xs font-body text-[#b08080] bg-[#fdf0ed] px-2 py-0.5 rounded-full">
              {color}
            </span>
          ))}
          {product.colors.length > 3 && (
            <span className="text-xs font-body text-[#b08080]">+{product.colors.length - 3}</span>
          )}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            {product.originalPrice && (
              <span className="font-body text-xs text-[#b08080] line-through">
                R$ {product.originalPrice.toFixed(2).replace('.', ',')}
              </span>
            )}
            <span className="font-display text-xl text-[#c49a8a]" style={{ fontWeight: 500 }}>
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
          </div>
          <button
            onClick={handleWhatsApp}
            className="w-9 h-9 rounded-full bg-[#fdf0ed] flex items-center justify-center text-[#c49a8a] hover:bg-[#c49a8a] hover:text-white transition-all duration-200"
            aria-label="Comprar"
          >
            <ShoppingBag size={15} />
          </button>
        </div>
      </div>
    </div>
  )
}
