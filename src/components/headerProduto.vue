<template>
  <header
    class="header-main"
    :class="{ 'scrolled': isScrolled || !isHomePage }"
  >
    <div class="header-container">
      <div class="logo-section" @click="goHome">
        <h1 class="logo-text">Glace<span>Noir</span></h1>
        <div class="logo-line" />
      </div>

      <nav class="nav-links">
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#criacoes">Criações</a></li>
          <li><a href="#sobre">Sobre</a></li>
        </ul>
      </nav>

      <div class="actions">
        <!-- Search bar expanding -->
        <div class="search-wrapper" :class="{ 'active': isSearchActive }">
          <input
            v-model="shop.searchQuery"
            placeholder="Buscar sabor..."
            type="text"
            @blur="checkSearch"
          >
          <button class="icon-btn search-trigger" @click="toggleSearch">
            <svg
              fill="none"
              height="20"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="20"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>
        </div>

        <!-- Cart trigger -->
        <button class="icon-btn cart-btn" @click="handleCartClick">
          <svg
            fill="none"
            height="20"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="20"
          >
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
          <span v-if="cartCount > 0" class="badge">{{ cartCount }}</span>
        </button>
      </div>
    </div>
  </header>

  <!-- Externalized Drawer -->
  <CartDrawer />
</template>

<script setup>
  import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { cartCount, shop } from '@/store/shop'
  import CartDrawer from './CartDrawer.vue'

  const router = useRouter()
  const route = useRoute()

  const isScrolled = ref(false)
  const isSearchActive = ref(false)

  const isHomePage = computed(() => route.path === '/')

  function handleCartClick () {
    if (route.path === '/carrinho') return
    router.push('/carrinho')
  }

  function handleScroll () {
    isScrolled.value = window.scrollY > 50
  }

  function toggleSearch () {
    isSearchActive.value = !isSearchActive.value
    if (isSearchActive.value) {
      nextTick(() => {
        const input = document.querySelector('.search-wrapper input')
        if (input) input.focus()
      })
    }
  }

  function checkSearch () {
    if (shop.searchQuery === '') {
      isSearchActive.value = false
    }
  }

  function goHome () {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600&display=swap');

$text-color: #e2e8f0;
$text-hover: #ffffff;
$accent-color: #ffffff;

.header-main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 2.5rem 5%;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  font-family: 'Outfit', sans-serif;

  &.scrolled {
    padding: 1.2rem 5%;
    background: rgba(8, 8, 10, 0.85);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
}

.header-container {
  max-width: 1400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  gap: 210px;
}

.logo-section {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .logo-text {
    font-size: 1.4rem;
    font-weight: 300;
    letter-spacing: 8px;
    text-transform: uppercase;
    color: #fff;
    margin: 0;

    span {
      font-weight: 600;
      color: #fff;
    }
  }

  .logo-line {
    width: 0;
    height: 1px;
    background: #fff;
    margin-top: 4px;
    transition: width 0.4s ease;
  }

  &:hover .logo-line {
    width: 100%;
  }
}

.nav-links {
  ul {
    display: flex;
    list-style: none;
    gap: 3.5rem;
    margin: 0;
    padding: 0;

    li a {
      text-decoration: none;
      color: $text-color;
      font-size: 0.75rem;
      font-weight: 300;
      text-transform: uppercase;
      letter-spacing: 4px;
      transition: all 0.3s ease;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: -6px;
        left: 0;
        width: 0;
        height: 1px;
        background: #fff;
        transition: width 0.3s ease;
      }

      &:hover {
        color: $text-hover;
        &::after {
          width: 100%;
        }
      }
    }
  }
}

.actions {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.2rem;
}

.icon-btn {
  background: transparent;
  border: none;
  color: $text-color;
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  position: relative;
  border-radius: 50%;

  &:hover {
    color: $text-hover;
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-2px);
  }

  .badge {
    position: absolute;
    top: 5px;
    right: 5px;
    background: #fff;
    color: #000;
    font-size: 9px;
    font-weight: 700;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 5px rgba(0,0,0,0.5);
  }
}

.search-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);

  input {
    width: 0;
    opacity: 0;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 30px;
    padding: 10px 0;
    color: #fff;
    font-family: inherit;
    font-size: 0.8rem;
    outline: none;
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    letter-spacing: 1px;
  }

  &.active input {
    width: 240px;
    opacity: 1;
    padding: 10px 20px;
    padding-right: 45px;
    margin-right: -42px;
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
  }
}

@media (max-width: 1000px) {
  .nav-links {
    display: none;
  }

  .header-main {
    padding: 1.5rem 5%;
  }

  .search-wrapper.active input {
    width: 180px;
  }
}
</style>
