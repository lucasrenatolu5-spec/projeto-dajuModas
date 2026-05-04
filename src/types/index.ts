export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  category: CategoryId
  images: string[]
  description: string
  sizes: string[]
  colors: string[]
  isNew?: boolean
  isBestSeller?: boolean
  isSale?: boolean
  whatsappMessage?: string
}

export type CategoryId =
  | 'all'
  | 'vestidos'
  | 'conjuntos'
  | 'blusas'
  | 'calças'
  | 'shorts'
  | 'macacoes'
  | 'acessorios'

export interface Category {
  id: CategoryId
  label: string
  emoji: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
}

export interface NavItem {
  label: string
  href: string
}

export interface Testimonial {
  id: string
  name: string
  text: string
  rating: number
  avatar: string
}
