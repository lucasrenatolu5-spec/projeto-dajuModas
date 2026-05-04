import React, { useState, useMemo, useEffect } from 'react'
import { Search, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ProductCard } from '../components/ProductCard'
import { ProductModal } from '../components/ProductModal'
import { products, categories } from '../data'
import { Product, CategoryId } from '../types'
import { useLocation } from 'react-router-dom'

type SortOption = 'relevance' | 'price-asc' | 'price-desc' | 'newest'

export const CatalogPage: React.FC = () => {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const initialCategory = (params.get('categoria') as CategoryId) || 'all'

  const [activeCategory, setActiveCategory] = useState<CategoryId>(initialCategory)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<SortOption>('relevance')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500])
  const [onlySale, setOnlySale] = useState(false)
  const [onlyNew, setOnlyNew] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory)
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      )
    }

    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])

    if (onlySale) result = result.filter((p) => p.isSale)
    if (onlyNew) result = result.filter((p) => p.isNew)

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
        break
      default:
        result.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0))
    }

    return result
  }, [activeCategory, searchQuery, sortBy, priceRange, onlySale, onlyNew])

  const clearFilters = () => {
    setActiveCategory('all')
    setSearchQuery('')
    setSortBy('relevance')
    setPriceRange([0, 500])
    setOnlySale(false)
    setOnlyNew(false)
  }

  const hasActiveFilters =
    activeCategory !== 'all' || searchQuery || onlySale || onlyNew || priceRange[0] > 0 || priceRange[1] < 500

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="font-body text-xs text-[#c49a8a] uppercase tracking-[0.3em] mb-3 text-center">
            Escolha com amor
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-[#3d2b26] text-center mb-4" style={{ fontWeight: 300 }}>
            Catálogo
          </h1>
          <p className="font-body text-[#7a5c55] text-center max-w-md mx-auto">
            {products.length} peças exclusivas esperando por você ✨
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Search + controls bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#b08080]" />
            <input
              type="text"
              placeholder="Buscar peças..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field pl-10 pr-10"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#b08080] hover:text-[#c49a8a]"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="input-field pr-10 appearance-none cursor-pointer min-w-[180px]"
            >
              <option value="relevance">Relevância</option>
              <option value="newest">Mais Recentes</option>
              <option value="price-asc">Menor Preço</option>
              <option value="price-desc">Maior Preço</option>
            </select>
            <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#b08080] pointer-events-none" />
          </div>

          {/* Filters toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl border text-sm font-body font-medium transition-all duration-200 ${
              showFilters || hasActiveFilters
                ? 'bg-[#c49a8a] text-white border-[#c49a8a]'
                : 'bg-white text-[#7a5c55] border-[#edd5c8] hover:border-[#c49a8a] hover:text-[#c49a8a]'
            }`}
          >
            <SlidersHorizontal size={15} />
            Filtros
            {hasActiveFilters && (
              <span className="w-5 h-5 rounded-full bg-white/30 text-xs flex items-center justify-center">!</span>
            )}
          </button>
        </div>

        {/* Filters panel */}
        {showFilters && (
          <div className="bg-white rounded-3xl border border-[#edd5c8] p-6 mb-8 shadow-soft animate-fade-up">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-accent text-[#3d2b26] font-medium">Filtros</h3>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="font-body text-xs text-[#c49a8a] hover:text-[#a07060] transition-colors flex items-center gap-1"
                >
                  <X size={12} /> Limpar tudo
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Checkboxes */}
              <div>
                <p className="font-body text-sm font-medium text-[#3d2b26] mb-3">Tipo de Peça</p>
                <div className="space-y-2">
                  {[
                    { label: 'Novidades', value: onlyNew, set: setOnlyNew },
                    { label: 'Em Promoção', value: onlySale, set: setOnlySale },
                  ].map(({ label, value, set }) => (
                    <label key={label} className="flex items-center gap-2 cursor-pointer group">
                      <div
                        className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                          value ? 'bg-[#c49a8a] border-[#c49a8a]' : 'border-[#edd5c8] group-hover:border-[#c49a8a]'
                        }`}
                        onClick={() => set(!value)}
                      >
                        {value && (
                          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <path d="M1 4L3 6L7 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                      <span className="font-body text-sm text-[#7a5c55]">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price range */}
              <div>
                <p className="font-body text-sm font-medium text-[#3d2b26] mb-3">
                  Faixa de Preço: R$ {priceRange[0]} – R$ {priceRange[1]}
                </p>
                <input
                  type="range"
                  min={0}
                  max={500}
                  step={10}
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-full accent-[#c49a8a]"
                />
                <div className="flex justify-between mt-1">
                  <span className="font-body text-xs text-[#b08080]">R$ 0</span>
                  <span className="font-body text-xs text-[#b08080]">R$ 500</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-body font-medium transition-all duration-200 border ${
                activeCategory === cat.id
                  ? 'bg-[#c49a8a] text-white border-[#c49a8a] shadow-sm'
                  : 'bg-white text-[#7a5c55] border-[#edd5c8] hover:border-[#c49a8a] hover:text-[#c49a8a]'
              }`}
            >
              <span>{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="font-body text-sm text-[#b08080]">
            <span className="text-[#3d2b26] font-medium">{filteredProducts.length}</span> peças encontradas
          </p>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="font-body text-xs text-[#c49a8a] hover:text-[#a07060] transition-colors flex items-center gap-1"
            >
              <X size={12} /> Limpar filtros
            </button>
          )}
        </div>

        {/* Products grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-24 text-center">
            <div className="text-6xl mb-4">🌸</div>
            <h3 className="font-display text-2xl text-[#3d2b26] mb-3" style={{ fontWeight: 400 }}>
              Nenhuma peça encontrada
            </h3>
            <p className="font-body text-[#b08080] mb-8">
              Tente ajustar os filtros ou buscar por outro termo.
            </p>
            <button onClick={clearFilters} className="btn-outline">
              Limpar Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, i) => (
              <div
                key={product.id}
                className="opacity-0 animate-fade-up"
                style={{ animationDelay: `${(i % 8) * 0.07}s`, animationFillMode: 'forwards' }}
              >
                <ProductCard product={product} onView={setSelectedProduct} />
              </div>
            ))}
          </div>
        )}
      </div>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  )
}
