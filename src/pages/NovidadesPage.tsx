import React, { useState } from 'react'
import { ProductCard } from '../components/ProductCard'
import { ProductModal } from '../components/ProductModal'
import { products } from '../data'
import { Product } from '../types'

export const NovidadesPage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const newProducts = products.filter((p) => p.isNew)
  const saleProducts = products.filter((p) => p.isSale)

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
          <p className="font-body text-xs text-[#c49a8a] uppercase tracking-[0.3em] mb-3">
            Acabou de Chegar
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-[#3d2b26] mb-4" style={{ fontWeight: 300 }}>
            Novidades ✨
          </h1>
          <p className="font-body text-[#7a5c55] max-w-md mx-auto">
            As peças mais fresquinhas do nosso acervo! Aproveite antes que acabe 💕
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* New arrivals */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div>
              <h2 className="font-display text-3xl text-[#3d2b26]" style={{ fontWeight: 400 }}>
                Chegou Agora
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-[#e8b4b8] to-[#c49a8a] rounded-full mt-2"></div>
            </div>
            <span className="ml-auto px-3 py-1 bg-[#e8b4b8] text-[#3d2b26] text-xs font-body font-medium rounded-full">
              {newProducts.length} peças
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {newProducts.map((product, i) => (
              <div
                key={product.id}
                className="opacity-0 animate-fade-up"
                style={{ animationDelay: `${i * 0.07}s`, animationFillMode: 'forwards' }}
              >
                <ProductCard product={product} onView={setSelectedProduct} />
              </div>
            ))}
          </div>
        </div>

        {/* Sale */}
        {saleProducts.length > 0 && (
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div>
                <h2 className="font-display text-3xl text-[#3d2b26]" style={{ fontWeight: 400 }}>
                  Em Promoção 🏷️
                </h2>
                <div className="w-12 h-0.5 bg-gradient-to-r from-[#e8b4b8] to-[#c49a8a] rounded-full mt-2"></div>
              </div>
              <span className="ml-auto px-3 py-1 bg-[#c49a8a] text-white text-xs font-body font-medium rounded-full">
                {saleProducts.length} peças em oferta
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {saleProducts.map((product, i) => (
                <div
                  key={product.id}
                  className="opacity-0 animate-fade-up"
                  style={{ animationDelay: `${i * 0.07}s`, animationFillMode: 'forwards' }}
                >
                  <ProductCard product={product} onView={setSelectedProduct} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  )
}
