<template>
  <header class="cart-header">
    <div class="cart-header-inner">

      <!-- Back button -->
      <button class="back-btn" @click="goBack">
        <svg
          fill="none"
          height="16"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          width="16"
        >
          <path d="M19 12H5M12 5l-7 7 7 7" />
        </svg>
        <span>Voltar</span>
      </button>

      <!-- Logo centered -->
      <RouterLink class="logo" to="/">
        <span class="logo-text">Glace<strong>Noir</strong></span>
      </RouterLink>

      <!-- Right: item count -->
      <div class="cart-info" aria-label="Itens no carrinho">
        <svg
          fill="none"
          height="18"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          width="18"
        >
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 01-8 0" />
        </svg>
        <span v-if="cartCount > 0" class="cart-count-text">
          {{ cartCount }} {{ cartCount === 1 ? 'item' : 'itens' }}
        </span>
        <span v-else class="cart-count-text empty">vazio</span>
      </div>

    </div>

    <!-- Subtle progress bar at bottom -->
    <div class="header-progress">
      <div class="progress-step active">
        <span>01</span>
        <span class="step-name">Sacola</span>
      </div>
      <div class="progress-line" />
      <div class="progress-step">
        <span>02</span>
        <span class="step-name">Entrega</span>
      </div>
      <div class="progress-line" />
      <div class="progress-step">
        <span>03</span>
        <span class="step-name">Pagamento</span>
      </div>
    </div>
  </header>
</template>

<script setup>
  import { RouterLink, useRouter } from 'vue-router'
  import { cartCount } from '@/store/shop'

  const router = useRouter()

  function goBack () {
    router.push('/')
  }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600&display=swap');

.cart-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(3, 3, 3, 0.96);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  font-family: 'Outfit', sans-serif;
}

.cart-header-inner {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 5%;
  height: 70px;
}

// ─── Back Button ─────────────────────────────────────────
.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: none;
  border: none;
  color: #4a5568;
  font-family: 'Outfit', sans-serif;
  font-size: 0.65rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #fff;

    svg {
      transform: translateX(-4px);
    }
  }
}

// ─── Logo ─────────────────────────────────────────────────
.logo {
  text-decoration: none;
  display: flex;
  justify-content: center;

  .logo-text {
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 8px;
    text-transform: uppercase;
    color: #fff;

    strong {
      font-weight: 600;
    }
  }
}

// ─── Cart Info ────────────────────────────────────────────
.cart-info {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: flex-end;
  color: #4a5568;

  .cart-count-text {
    font-size: 0.65rem;
    letter-spacing: 2px;
    text-transform: uppercase;

    &.empty {
      color: #2d3748;
    }
  }
}

// ─── Progress Steps ───────────────────────────────────────
.header-progress {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  padding: 0.6rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.03);
}

.progress-step {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 1.5rem;
  color: #2d3748;
  transition: color 0.3s ease;

  span:first-child {
    font-size: 0.55rem;
    letter-spacing: 2px;
  }

  .step-name {
    font-size: 0.6rem;
    letter-spacing: 3px;
    text-transform: uppercase;
  }

  &.active {
    color: #fff;
  }
}

.progress-line {
  flex: 0 0 40px;
  height: 1px;
  background: rgba(255, 255, 255, 0.05);
}
</style>
