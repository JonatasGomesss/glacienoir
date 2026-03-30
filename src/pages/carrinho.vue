<template>
  <div class="carrinho-page">
    <headerCarrinho />

    <main class="carrinho-main">
      <div class="carrinho-container">

        <!-- Page Title -->
        <div class="page-title">
          <span class="chapter-tag">C01</span>
          <h1 class="title-text">
            Sua <span>Sacola</span>
          </h1>
          <p v-if="shop.cart.length > 0" class="item-count">
            {{ cartCount }} {{ cartCount === 1 ? 'item' : 'itens' }}
          </p>
        </div>

        <!-- EMPTY STATE -->
        <div v-if="shop.cart.length === 0" class="empty-state">
          <div class="empty-icon">
            <svg
              fill="none"
              height="64"
              stroke="currentColor"
              stroke-width="0.7"
              viewBox="0 0 24 24"
              width="64"
            >
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </div>
          <h2 class="empty-title">Sua sacola está vazia</h2>
          <p class="empty-sub">Explore nossas criações e encontre o sabor ideal para você.</p>
          <RouterLink class="explore-btn" to="/">
            <span>Explorar Criações</span>
            <svg
              fill="none"
              height="14"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="14"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </RouterLink>
        </div>

        <!-- CART WITH ITEMS -->
        <div v-else class="cart-layout">

          <!-- LEFT — Items List -->
          <div class="items-col">
            <div class="items-header">
              <span class="col-label">Produto</span>
              <span class="col-label">Qtd.</span>
              <span class="col-label">Total</span>
            </div>

            <TransitionGroup name="item" tag="div" class="items-list">
              <div
                v-for="item in shop.cart"
                :key="item.id"
                class="cart-item"
              >
                <!-- Image -->
                <div class="item-img">
                  <img :alt="item.name" :src="item.image">
                </div>

                <!-- Info -->
                <div class="item-info">
                  <h3 class="item-name">{{ item.name }}</h3>
                  <p class="item-desc">{{ item.desc }}</p>
                  <span class="item-unit">R$ {{ item.price.toFixed(2) }} / un.</span>
                </div>

                <!-- Quantity -->
                <div class="qty-wrap">
                  <div class="qty-control">
                    <button
                      class="qty-btn"
                      @click="shop.updateQuantity(item.id, -1)"
                    >
                      −
                    </button>
                    <span class="qty-num">{{ item.quantity }}</span>
                    <button
                      class="qty-btn"
                      @click="shop.updateQuantity(item.id, 1)"
                    >
                      +
                    </button>
                  </div>
                </div>

                <!-- Subtotal + Remove -->
                <div class="item-total-col">
                  <span class="item-subtotal">
                    R$ {{ (item.price * item.quantity).toFixed(2) }}
                  </span>
                  <button
                    class="remove-btn"
                    @click="shop.removeFromCart(item.id)"
                  >
                    Remover
                  </button>
                </div>
              </div>
            </TransitionGroup>

            <!-- Continue Link -->
            <RouterLink class="continue-link" to="/">
              <svg
                fill="none"
                height="14"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="14"
              >
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              <span>Continuar comprando</span>
            </RouterLink>
          </div>

          <!-- RIGHT — Order Summary -->
          <aside class="summary-col">
            <div class="summary-card">
              <h2 class="summary-title">Resumo do Pedido</h2>

              <div class="summary-lines">
                <div class="summary-line">
                  <span>Subtotal</span>
                  <span>R$ {{ cartTotal.toFixed(2) }}</span>
                </div>
                <div class="summary-line">
                  <span>Entrega</span>
                  <span class="free-tag">Grátis</span>
                </div>
                <div class="summary-line discount" v-if="cartCount >= 3">
                  <span>Desconto (3+ itens)</span>
                  <span class="discount-tag">– R$ {{ (cartTotal * 0.05).toFixed(2) }}</span>
                </div>
              </div>

              <div class="summary-total">
                <span>Total</span>
                <span class="total-value">
                  R$ {{ finalTotal.toFixed(2) }}
                </span>
              </div>

              <button class="checkout-btn">
                <span>Finalizar Pedido</span>
                <svg
                  fill="none"
                  height="16"
                  stroke="currentColor"
                  stroke-width="2.5"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              <p class="secure-note">
                <svg
                  fill="currentColor"
                  height="11"
                  viewBox="0 0 24 24"
                  width="11"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Pagamento 100% Seguro
              </p>

              <!-- Promo hint -->
              <div v-if="cartCount < 3" class="promo-hint">
                <div class="promo-bar">
                  <div
                    class="promo-fill"
                    :style="{ width: `${(cartCount / 3) * 100}%` }"
                  />
                </div>
                <p class="promo-text">
                  Adicione mais {{ 3 - cartCount }} {{ (3 - cartCount) === 1 ? 'item' : 'itens' }} e ganhe <strong>5% de desconto</strong>
                </p>
              </div>
            </div>

            <!-- Suggested Products -->
            <div class="suggestions">
              <span class="suggestions-label">Você também pode gostar</span>
              <div class="suggestions-grid">
                <div
                  v-for="product in suggestedProducts"
                  :key="product.id"
                  class="suggestion-card"
                  @click="shop.addToCart(product)"
                >
                  <div class="sug-img">
                    <img :alt="product.name" :src="product.image">
                  </div>
                  <div class="sug-info">
                    <span class="sug-name">{{ product.name }}</span>
                    <span class="sug-price">R$ {{ product.price.toFixed(2) }}</span>
                  </div>
                  <button class="sug-add">+</button>
                </div>
              </div>
            </div>
          </aside>
        </div>

      </div>
    </main>

    <Rodape />
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { RouterLink } from 'vue-router'
  import headerCarrinho from '@/components/headerCarrinho.vue'
  import Rodape from '@/components/Rodape.vue'
  import { cartCount, cartTotal, shop } from '@/store/shop'

  const finalTotal = computed(() => {
    if (cartCount.value >= 3) {
      return cartTotal.value * 0.95
    }
    return cartTotal.value
  })

  const suggestedProducts = computed(() => {
    const cartIds = new Set(shop.cart.map(i => i.id))
    return shop.products
      .filter(p => !cartIds.has(p.id))
      .slice(0, 2)
  })
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600&display=swap');

.carrinho-page {
  background: #050505;
  min-height: 100vh;
  font-family: 'Outfit', sans-serif;
  color: #fff;
}

.carrinho-main {
  padding-top: 11rem;
  padding-bottom: 8rem;
}

.carrinho-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 5%;
}

// ─── Page Title ──────────────────────────────────────────
.page-title {
  margin-bottom: 5rem;

  .chapter-tag {
    display: block;
    font-size: 0.65rem;
    letter-spacing: 6px;
    color: #4a5568;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  .title-text {
    font-size: 3.5rem;
    font-weight: 200;
    letter-spacing: 10px;
    text-transform: uppercase;

    span {
      font-weight: 600;
      background: linear-gradient(135deg, #ffffff 0%, #718096 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .item-count {
    margin-top: 0.8rem;
    font-size: 0.75rem;
    letter-spacing: 3px;
    color: #4a5568;
    text-transform: uppercase;
  }
}

// ─── Empty State ─────────────────────────────────────────
.empty-state {
  text-align: center;
  padding: 8rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  .empty-icon {
    color: rgba(255,255,255,0.06);
    margin-bottom: 1rem;
  }

  .empty-title {
    font-size: 1.8rem;
    font-weight: 200;
    letter-spacing: 6px;
    text-transform: uppercase;
  }

  .empty-sub {
    font-size: 0.85rem;
    color: #4a5568;
    letter-spacing: 1px;
    max-width: 400px;
    line-height: 1.7;
  }
}

.explore-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-top: 1rem;
  padding: 1rem 2.5rem;
  border: 1px solid rgba(255,255,255,0.2);
  color: #fff;
  text-decoration: none;
  font-size: 0.75rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    background: rgba(255,255,255,0.05);
    border-color: rgba(255,255,255,0.5);
    gap: 18px;
  }
}

// ─── Cart Layout ─────────────────────────────────────────
.cart-layout {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 4rem;
  align-items: start;
}

// ─── Items Column ────────────────────────────────────────
.items-col {
  display: flex;
  flex-direction: column;
}

.items-header {
  display: grid;
  grid-template-columns: 1fr auto 120px;
  gap: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  margin-bottom: 0;

  .col-label {
    font-size: 0.6rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #4a5568;

    &:last-child {
      text-align: right;
    }
  }
}

.items-list {
  display: flex;
  flex-direction: column;
}

.cart-item {
  display: grid;
  grid-template-columns: 90px 1fr auto 120px;
  gap: 1.5rem;
  align-items: center;
  padding: 2rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255,255,255,0.01);
  }
}

.item-img {
  width: 90px;
  height: 90px;
  overflow: hidden;
  background: #0a0a0c;
  border: 1px solid rgba(255,255,255,0.05);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  &:hover img {
    transform: scale(1.06);
  }
}

.item-info {
  .item-name {
    font-size: 0.9rem;
    font-weight: 400;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 0.4rem;
  }

  .item-desc {
    font-size: 0.75rem;
    color: #4a5568;
    line-height: 1.5;
    margin-bottom: 0.6rem;
    max-width: 280px;
  }

  .item-unit {
    font-size: 0.7rem;
    color: #718096;
    letter-spacing: 1px;
  }
}

.qty-wrap {
  display: flex;
  justify-content: center;
}

.qty-control {
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid rgba(255,255,255,0.08);
  padding: 0.4rem 0.8rem;

  .qty-btn {
    background: none;
    border: none;
    color: #718096;
    cursor: pointer;
    font-size: 1.1rem;
    line-height: 1;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.2s ease;

    &:hover {
      color: #fff;
    }
  }

  .qty-num {
    font-size: 0.85rem;
    font-weight: 400;
    min-width: 20px;
    text-align: center;
    letter-spacing: 1px;
  }
}

.item-total-col {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.8rem;

  .item-subtotal {
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 1px;
  }

  .remove-btn {
    background: none;
    border: none;
    color: #4a5568;
    font-family: 'Outfit', sans-serif;
    font-size: 0.65rem;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #fc8181;
    }
  }
}

.continue-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 2.5rem;
  color: #4a5568;
  text-decoration: none;
  font-size: 0.7rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  transition: all 0.3s ease;

  &:hover {
    color: #fff;
    gap: 16px;
  }
}

// ─── Summary Column ───────────────────────────────────────
.summary-col {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: sticky;
  top: 8rem;
}

.summary-card {
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.06);
  padding: 2.5rem;

  .summary-title {
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 5px;
    text-transform: uppercase;
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }
}

.summary-lines {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.summary-line {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #718096;
  letter-spacing: 0.5px;

  .free-tag {
    color: #68d391;
    font-size: 0.75rem;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .discount-tag {
    color: #68d391;
  }
}

.summary-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  border-top: 1px solid rgba(255,255,255,0.05);
  margin-bottom: 2rem;
  font-size: 0.75rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #718096;

  .total-value {
    font-size: 1.6rem;
    font-weight: 300;
    letter-spacing: 2px;
    color: #fff;
  }
}

.checkout-btn {
  width: 100%;
  height: 58px;
  background: #fff;
  color: #000;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  font-family: 'Outfit', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    background: #f0f0f0;
    transform: translateY(-2px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.5);

    svg {
      transform: translateX(5px);
    }
  }
}

.secure-note {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-top: 1.2rem;
  font-size: 0.6rem;
  color: #4a5568;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

// Promo hint
.promo-hint {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255,255,255,0.04);

  .promo-bar {
    width: 100%;
    height: 2px;
    background: rgba(255,255,255,0.06);
    margin-bottom: 1rem;
    overflow: hidden;

    .promo-fill {
      height: 100%;
      background: linear-gradient(90deg, #4a5568, #fff);
      transition: width 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
  }

  .promo-text {
    font-size: 0.7rem;
    color: #4a5568;
    line-height: 1.6;
    letter-spacing: 0.5px;

    strong {
      color: #a0aec0;
    }
  }
}

// ─── Suggestions ─────────────────────────────────────────
.suggestions {
  .suggestions-label {
    display: block;
    font-size: 0.6rem;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #4a5568;
    margin-bottom: 1.2rem;
  }
}

.suggestions-grid {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.suggestion-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem;
  border: 1px solid rgba(255,255,255,0.04);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(255,255,255,0.1);
    background: rgba(255,255,255,0.02);
  }

  .sug-img {
    width: 50px;
    height: 50px;
    overflow: hidden;
    flex-shrink: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: grayscale(0.3);
    }
  }

  .sug-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 3px;

    .sug-name {
      font-size: 0.75rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #a0aec0;
    }

    .sug-price {
      font-size: 0.7rem;
      color: #4a5568;
    }
  }

  .sug-add {
    width: 28px;
    height: 28px;
    background: transparent;
    border: 1px solid rgba(255,255,255,0.1);
    color: #718096;
    font-size: 1.1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
      background: #fff;
      color: #000;
      border-color: #fff;
    }
  }
}

// ─── Item Transitions ─────────────────────────────────────
.item-enter-active, .item-leave-active {
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.item-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}
.item-leave-to {
  opacity: 0;
  transform: translateX(20px);
  height: 0;
  padding: 0;
}

// ─── Responsive ──────────────────────────────────────────
@media (max-width: 1000px) {
  .cart-layout {
    grid-template-columns: 1fr;
  }

  .summary-col {
    position: static;
  }
}

@media (max-width: 768px) {
  .carrinho-main {
    padding-top: 7rem;
  }

  .page-title .title-text {
    font-size: 2.5rem;
    letter-spacing: 6px;
  }

  .cart-item {
    grid-template-columns: 70px 1fr;
    grid-template-rows: auto auto;

    .qty-wrap {
      grid-column: 2;
      justify-content: flex-start;
    }

    .item-total-col {
      grid-column: 1 / -1;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
