# 🌸 Daju Moda — Site Oficial

Site feminino e elegante para a **Daju Moda**, loja de moda feminina em Pontezinha, PE.

## 🚀 Como rodar o projeto

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Clone o projeto
cd daju-moda

# Instale as dependências
npm install

# Rode em desenvolvimento
npm run dev

# Build para produção
npm run build
```

O site abrirá em `http://localhost:5173`

---

## 📁 Estrutura do Projeto

```
daju-moda/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Navegação principal com mobile menu
│   │   ├── Footer.tsx          # Rodapé com links e info de contato
│   │   ├── ProductCard.tsx     # Card de produto com hover/animações
│   │   ├── ProductModal.tsx    # Modal de detalhes do produto
│   │   └── WhatsAppFloat.tsx   # Botão flutuante do WhatsApp
│   ├── data/
│   │   └── index.ts            # Produtos, categorias, depoimentos
│   ├── hooks/
│   │   └── useScrollReveal.ts  # Hook para animações de scroll
│   ├── pages/
│   │   ├── HomePage.tsx        # Página inicial com hero, destaques, etc.
│   │   ├── CatalogPage.tsx     # Catálogo com filtros e busca
│   │   ├── NovidadesPage.tsx   # Novidades e promoções
│   │   ├── AboutPage.tsx       # Sobre a loja
│   │   └── ContactPage.tsx     # Contato via WhatsApp
│   ├── types/
│   │   └── index.ts            # TypeScript types
│   ├── App.tsx                 # Roteamento principal
│   ├── main.tsx                # Entry point
│   └── index.css               # Estilos globais + Tailwind
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## ⚙️ Personalização

### 1. Número do WhatsApp
Em `src/data/index.ts`, altere:
```ts
export const WHATSAPP_NUMBER = '5581999999999' // ← seu número aqui
```

### 2. Produtos do Catálogo
Em `src/data/index.ts`, edite o array `products` com suas peças reais.

Cada produto tem:
```ts
{
  id: 'único',
  name: 'Nome da Peça',
  price: 199.90,
  originalPrice: 249.90, // opcional (mostra desconto)
  category: 'vestidos', // all | vestidos | conjuntos | blusas | calças | shorts | macacoes | acessorios
  images: ['url1', 'url2'],
  description: 'Descrição da peça...',
  sizes: ['P', 'M', 'G', 'GG'],
  colors: ['Rosa', 'Preto'],
  isNew: true,        // badge "Novo"
  isBestSeller: true, // badge "Mais Vendido"
  isSale: true,       // badge de desconto
  whatsappMessage: 'Olá! Quero esse produto...',
}
```

### 3. Fotos Reais
Substitua as URLs de imagem do Unsplash pelas fotos reais dos seus produtos.

### 4. Instagram
A URL do Instagram já está configurada: `https://www.instagram.com/loja_dajumoda`

---

## 🎨 Design

- **Paleta**: Tons rosê, nude, champagne e marrom quente
- **Fontes**: Cormorant Garamond (display) + DM Sans (corpo) + Playfair Display (títulos)
- **Animações**: Fade up ao scroll, float, shimmer, petals
- **Mobile-first**: Totalmente responsivo

---

## 🔗 Integrações

- **WhatsApp**: Botão flutuante + links diretos em todos os produtos
- **Instagram**: Link no navbar, footer e seção dedicada na home
- **Redes Sociais**: Configuráveis em `src/data/index.ts`

---

Feito com 💕 para a Daju Moda
