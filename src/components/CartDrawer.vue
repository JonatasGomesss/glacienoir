<template>
  <v-navigation-drawer
    v-model="shop.isCartOpen"
    class="cart-drawer-glass"
    location="right"
    temporary
    width="400"
  >
    <div class="cart-layout">
      <!-- Fixed Header -->
      <div class="cart-header">
        <div class="header-left">
          <span class="cart-label">Seu Pedido</span>
          <span class="cart-count">({{ cartCount }} {{ cartCount === 1 ? 'item' : 'itens' }})</span>
        </div>
        <button class="close-btn" @click="shop.toggleCart">
          <svg
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Scrollable Content -->
      <div class="cart-content">
        <div v-if="shop.cart.length === 0" class="empty-cart">
          <div class="empty-icon">
            <svg
              fill="none"
              height="60"
              stroke="currentColor"
              stroke-dasharray="2 2"
              stroke-width="0.5"
              viewBox="0 0 24 24"
              width="60"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" />
              <line
                x1="9"
                x2="9.01"
                y1="9"
                y2="9"
              />
              <line
                x1="15"
                x2="15.01"
                y1="9"
                y2="9"
              />
            </svg>
          </div>
          <p class="empty-title">Sua sacola está vazia</p>
          <p class="empty-subtitle">Explore nossas criações e encontre seu sabor ideal.</p>
          <button class="shop-now-btn" @click="shop.toggleCart">Explorar Sabores</button>
        </div>

        <div v-else class="cart-items">
          <div v-for="item in shop.cart" :key="item.id" class="cart-item-card">
            <div class="item-image">
              <img :alt="item.name" :src="item.image">
            </div>
            <div class="item-details">
              <div class="item-main">
                <h4 class="item-title">{{ item.name }}</h4>
                <span class="item-price">R$ {{ item.price.toFixed(2) }}</span>
              </div>
              <p class="item-category">Noir Selection</p>

              <div class="item-actions">
                <div class="qty-selector">
                  <button class="qty-btn" @click="shop.updateQuantity(item.id, -1)">-</button>
                  <span class="qty-num">{{ item.quantity }}</span>
                  <button class="qty-btn" @click="shop.updateQuantity(item.id, 1)">+</button>
                </div>
                <button class="remove-link" @click="shop.removeFromCart(item.id)">Remover</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Fixed Footer -->
      <div v-if="shop.cart.length > 0" class="cart-footer">
        <div class="summary-line">
          <span class="label">Subtotal</span>
          <span class="value">R$ {{ cartTotal.toFixed(2) }}</span>
        </div>
        <div class="summary-line promo">
          <span class="label">Entrega</span>
          <span class="value free">Grátis</span>
        </div>

        <button class="checkout-button">
          <span class="btn-text">Finalizar Pedido</span>
          <div class="btn-icon">
            <svg
              fill="none"
              height="20"
              stroke="currentColor"
              stroke-width="2.5"
              viewBox="0 0 24 24"
              width="20"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </button>

        <p class="secure-checkout">
          <svg
            fill="currentColor"
            height="12"
            viewBox="0 0 24 24"
            width="12"
          >
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 17C10.8954 17 10 16.1046 10 15C10 13.8954 10.8954 13 12 13C13.1046 13 14 13.8954 14 15C14 16.1046 13.1046 17 12 17Z" />
          </svg>
          Pagamento 100% Seguro
        </p>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script setup>
  import { cartCount, cartTotal, shop } from '@/store/shop'
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600&display=swap');

.cart-drawer-glass {
  background: rgba(8, 8, 10, 0.98) !important;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border-left: 1px solid rgba(255, 255, 255, 0.05);
  font-family: 'Outfit', sans-serif;
  color: #fff;
}

.cart-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.cart-header {
  padding: 2.5rem 2rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
  background: rgba(8, 8, 10, 0.5);

  .cart-label {
    font-size: 1.1rem;
    font-weight: 300;
    letter-spacing: 5px;
    text-transform: uppercase;
  }

  .cart-count {
    font-size: 0.65rem;
    color: #4a5568;
    margin-left: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .close-btn {
    background: transparent;
    border: none;
    color: #4a5568;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      color: #fff;
      transform: rotate(90deg);
    }
  }
}

.cart-content {
  flex: 1;
  overflow-y: auto;
  padding: 2rem;

  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
  }
}

.cart-item-card {
  display: flex;
  gap: 1.2rem;
  margin-bottom: 1.5rem;
  padding: 1.2rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 4px;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.12);
  }

  .item-image {
    width: 70px;
    height: 70px;
    flex-shrink: 0;
    border-radius: 2px;
    overflow: hidden;
    background: #000;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.8;
    }
  }

  .item-details {
    flex: 1;

    .item-main {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 0.2rem;

      .item-title {
        font-size: 0.95rem;
        font-weight: 400;
        letter-spacing: 1px;
      }

      .item-price {
        font-size: 0.85rem;
        font-weight: 300;
        color: #a0aec0;
      }
    }

    .item-category {
      font-size: 0.65rem;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: #4a5568;
      margin-bottom: 1.2rem;
    }

    .item-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .remove-link {
        font-size: 0.65rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #718096;
        background: none;
        border: none;
        cursor: pointer;

        &:hover {
          color: #fc8181;
        }
      }
    }
  }
}

.qty-selector {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(0, 0, 0, 0.3);
  padding: 4px 8px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);

  .qty-btn {
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    color: #718096;
    cursor: pointer;
    font-size: 1.1rem;
    transition: color 0.2s;

    &:hover {
      color: #fff;
    }
  }

  .qty-num {
    font-size: 0.8rem;
    min-width: 15px;
    text-align: center;
    font-weight: 500;
  }
}

.cart-footer {
  padding: 2rem;
  background: rgba(8, 8, 10, 0.8);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);

  .summary-line {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.8rem;

    .label {
      font-size: 0.8rem;
      color: #718096;
      text-transform: uppercase;
      letter-spacing: 1.5px;
    }

    .value {
      font-size: 1rem;
      font-weight: 300;

      &.free {
        color: #68d391;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
    }

    &.promo {
      margin-bottom: 2rem;
    }
  }
}

.checkout-button {
  width: 100%;
  height: 60px;
  background: #fff;
  color: #000;
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  overflow: hidden;
  position: relative;

  .btn-text {
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    z-index: 1;
  }

  .btn-icon {
    transition: transform 0.4s ease;
  }

  &:hover {
    background: #f0f0f0;
    transform: translateY(-2px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);

    .btn-icon {
      transform: translateX(5px);
    }
  }
}

.secure-checkout {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 0.6rem;
  color: #4a5568;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 1.5rem;
}

.empty-cart {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 2rem;

  .empty-icon {
    color: #1a1a1a;
    margin-bottom: 2rem;
  }

  .empty-title {
    font-size: 1.1rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  .empty-subtitle {
    font-size: 0.8rem;
    color: #4a5568;
    line-height: 1.6;
    margin-bottom: 3rem;
  }

  .shop-now-btn {
    background: transparent;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 1rem 2.5rem;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: #fff;
      color: #000;
      border-color: #fff;
    }
  }
}
</style>
