import { reactive, computed } from 'vue'

// Assets - Import images correctly
import imgEspresso from '@/assets/image/espresso_noir.png'
import imgCaramel from '@/assets/image/golden_caramel.png'
import imgTruffle from '@/assets/image/midnight_truffle.png'
import imgPistachio from '@/assets/image/pistachio_shadow.png'
import imgRuby from '@/assets/image/ruby_dark.png'
import imgVanilla from '@/assets/image/vanilla_noir.png'

export const shop = reactive({
  // State
  products: [
    {
      id: 1,
      name: 'Vanilla Noir',
      desc: 'Baunilha de Madagascar sob o véu do carvão ativado.',
      image: imgVanilla,
      price: 28.00,
    },
    {
      id: 2,
      name: 'Ruby Dark',
      desc: 'Frutas vermelhas em sinfonia com cacau amargo.',
      image: imgRuby,
      price: 32.00,
    },
    {
      id: 3,
      name: 'Midnight Truffle',
      desc: 'Intensidade magnética e profundidade de sabor.',
      image: imgTruffle,
      price: 35.00,
    },
    {
      id: 4,
      name: 'Pistachio Shadow',
      desc: 'Pistache denso envolvido em mistério noturno.',
      image: imgPistachio,
      price: 34.00,
    },
    {
      id: 5,
      name: 'Espresso Noir',
      desc: 'Grãos arábica maturados sob a luz do luar.',
      image: imgEspresso,
      price: 30.00,
    },
    {
      id: 6,
      name: 'Golden Caramel',
      desc: 'Caramelo purista com toques de ouro 24k.',
      image: imgCaramel,
      price: 38.00,
    },
  ],
  cart: [],
  searchQuery: '',
  isCartOpen: false,

  // Actions
  toggleCart() {
    this.isCartOpen = !this.isCartOpen
  },

  setSearchQuery(query) {
    this.searchQuery = query
  },

  addToCart(product) {
    const existingItem = this.cart.find(item => item.id === product.id)
    if (existingItem) {
      existingItem.quantity++
    } else {
      this.cart.push({ ...product, quantity: 1 })
    }
    // Open cart automatically when adding item
    this.isCartOpen = true
  },

  removeFromCart(productId) {
    const index = this.cart.findIndex(item => item.id === productId)
    if (index !== -1) {
      this.cart.splice(index, 1)
    }
  },

  updateQuantity(productId, delta) {
    const item = this.cart.find(item => item.id === productId)
    if (item) {
      item.quantity += delta
      if (item.quantity <= 0) {
        this.removeFromCart(productId)
      }
    }
  },
})

// Computeds
export const filteredProducts = computed(() => {
  if (!shop.searchQuery) return shop.products
  const query = shop.searchQuery.toLowerCase()
  return shop.products.filter(p => 
    p.name.toLowerCase().includes(query) || 
    p.desc.toLowerCase().includes(query)
  )
})

export const cartCount = computed(() => {
  return shop.cart.reduce((total, item) => total + item.quantity, 0)
})

export const cartTotal = computed(() => {
  return shop.cart.reduce((total, item) => total + (item.price * item.quantity), 0)
})
