<template>
  <section id="criacoes" class="criacoes-section">
    <div class="content-wrapper">
      <div class="section-header animate-on-scroll fade-up">
        <span class="chapter-number">C01</span>
        <h2 class="section-title">Obras Primas</h2>
        <div class="title-line" />
        <p class="section-subtitle">Escolha o seu nível de sofisticação</p>
      </div>

      <!-- No products found message -->
      <div v-if="filteredProducts.length === 0" class="no-results animate-on-scroll fade-up">
        <p>Lamentamos, mas não encontramos o sabor "{{ shop.searchQuery }}".</p>
        <button class="clear-search-btn" @click="shop.setSearchQuery('')">Ver todas as criações</button>
      </div>

      <!-- Grid: Centralized when search active or few items -->
      <div 
        v-else 
        class="cards-grid is-vertical"
        :class="{ 
          'is-searching': shop.searchQuery.length > 0,
          'has-fewer-items': filteredProducts.length < 3 
        }"
      >
        <article
          v-for="(item, index) in filteredProducts"
          :id="`product-${item.id}`"
          :key="item.id"
          class="glace-card animate-on-scroll fade-up-cascade"
          :class="{ 'visible': isItemVisible(item.id) }"
          :style="{ '--cascade-delay': `${index * 0.12}s` }"
        >
          <div class="card-outer">
            <div class="image-wrap">
              <img :alt="item.name" :src="item.image">
              <div class="gradient-overlay" />
            </div>

            <div class="glass-ribbon">
              <div class="ribbon-header">
                <span class="ribbon-index">{{ (index + 1).toString().padStart(2, '0') }}</span>
                <div class="name-price">
                  <h3 class="product-name">{{ item.name }}</h3>
                  <span class="product-price">R$ {{ item.price.toFixed(2) }}</span>
                </div>
                <span class="ribbon-tag">Noir</span>
              </div>

              <div class="ribbon-reveal">
                <div class="reveal-inner">
                  <p class="product-desc">{{ item.desc }}</p>
                  <button class="action-btn" @click="shop.addToCart(item)">
                    <span>Adicionar à Sacola</span>
                    <svg
                      fill="none"
                      height="14"
                      stroke="currentColor"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      width="14"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { onMounted, onUnmounted, nextTick, ref } from 'vue'
  import { shop, filteredProducts } from '@/store/shop'

  // Persistent visibility state
  const visibleIds = ref(new Set())
  let observer = null

  function isItemVisible(id) {
    return visibleIds.value.has(id) || shop.searchQuery.length > 0
  }

  // Improved Observe Function
  function observeElements() {
    const cards = document.querySelectorAll('.glace-card')
    cards.forEach(card => {
      if (observer) observer.observe(card)
    })
    
    // Header/Subtitle observer
    const headers = document.querySelectorAll('.animate-on-scroll:not(.glace-card)')
    headers.forEach(h => observer.observe(h))
  }

  onMounted(() => {
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('glace-card')) {
            const id = parseInt(entry.target.id.split('-')[1])
            visibleIds.value.add(id)
          } else {
            entry.target.classList.add('visible')
          }
          // Once seen, we stop observing this specific element (persist logic in visibleIds)
          observer.unobserve(entry.target)
        }
      })
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    })

    nextTick(() => {
      observeElements()
    })
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500&display=swap');

.criacoes-section {
  padding: 10rem 5%;
  background-color: #050505;
  color: #fff;
  font-family: 'Outfit', sans-serif;
  min-height: 100vh;
}

.content-wrapper {
  max-width: 1150px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 7rem;

  .chapter-number {
    display: block;
    font-size: 0.7rem;
    letter-spacing: 6px;
    color: #4a5568;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  .section-title {
    font-size: 3.5rem;
    font-weight: 200;
    letter-spacing: 15px;
    text-transform: uppercase;
    margin-bottom: 2rem;
    background: linear-gradient(135deg, #ffffff 0%, #718096 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .title-line {
    width: 40px;
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
    margin: 0 auto;
  }

  .section-subtitle {
    margin-top: 2rem;
    font-size: 0.8rem;
    letter-spacing: 5px;
    color: #718096;
    text-transform: uppercase;
  }
}

.no-results {
  text-align: center;
  padding: 5rem 0;
  
  p {
    font-size: 1.2rem;
    color: #718096;
    margin-bottom: 2rem;
    letter-spacing: 1px;
  }

  .clear-search-btn {
    background: transparent;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 1rem 2rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.8rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: #fff;
      color: #000;
    }
  }
}

/* Base Animations */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: all 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  &.fade-up-cascade {
    transition-delay: var(--cascade-delay, 0s);
  }
}

.cards-grid {
  display: grid;
  gap: 4rem;
  transition: all 0.5s ease;

  &.is-vertical {
    grid-template-columns: repeat(3, 1fr);
    .card-outer { aspect-ratio: 1/1.35; }
    .image-wrap img { object-position: center; }
  }

  &.has-fewer-items {
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(300px, 350px));
  }
  
  /* Focus dimming logic - ensure it only works on REALLY visible items */
  &:has(.glace-card:hover) .glace-card:not(:hover) {
    opacity: 0.4;
    filter: blur(2px) grayscale(0.5);
  }
}

.glace-card {
  position: relative;
  overflow: visible;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1), 
              opacity 0.6s ease,
              filter 0.6s ease;

  &:hover {
    transform: translateY(-8px);

    .image-wrap img {
      transform: scale(1.08);
      filter: brightness(0.6);
    }

    .glass-ribbon {
      background: rgba(10, 10, 12, 0.75);
      border-color: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(30px);
      -webkit-backdrop-filter: blur(30px);
      padding-bottom: 1.8rem;
    }

    .ribbon-reveal {
      grid-template-rows: 1fr;
      opacity: 1;
      padding-top: 1rem;
    }
  }
}

.card-outer {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 2px;
  background: #0a0a0c;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.image-wrap {
  width: 100%;
  height: 100%;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .gradient-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(0deg, rgba(5, 5, 5, 0.85) 0%, transparent 60%);
  }
}

.glass-ribbon {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.18rem;
  background: rgba(10, 10, 12, 0.4);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  z-index: 5;

  .ribbon-header {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    .ribbon-index {
      font-size: 1rem;
      font-weight: 200;
      color: rgba(255, 255, 255, 0.2);
      font-family: serif;
    }

    .name-price {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }

    .product-name {
      font-size: 0.9rem;
      font-weight: 400;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: #fff;
    }

    .product-price {
      font-size: 0.75rem;
      font-weight: 300;
      color: rgba(255, 255, 255, 0.6);
      letter-spacing: 1px;
    }

    .ribbon-tag {
      font-size: 0.5rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: rgba(168, 216, 255, 0.5);
      border: 1px solid rgba(168, 216, 255, 0.1);
      padding: 2px 6px;
    }
  }

  .ribbon-reveal {
    display: grid;
    grid-template-rows: 0fr;
    opacity: 0;
    transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    overflow: hidden;

    .reveal-inner {
      min-height: 0;
    }

    .product-desc {
      font-size: 0.85rem;
      color: #94a3b8;
      line-height: 1.8;
      font-weight: 300;
      margin-bottom: 1.5rem;
    }
  }
}

.action-btn {
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 0.7rem 1.2rem;
  font-family: 'Outfit', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.65rem;
  cursor: pointer;
  transition: all 0.4s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;

  &:hover {
    background: #fff;
    color: #000;
    border-color: #fff;
    
    svg {
      transform: scale(1.1);
    }
  }
}

@media (max-width: 1100px) {
  .cards-grid {
    &.is-vertical {
      grid-template-columns: repeat(2, 1fr);
      gap: 3rem 2rem;
    }
  }
}

@media (max-width: 768px) {
  .criacoes-section {
    padding: 6rem 5%;
  }

  .section-header {
    margin-bottom: 4rem;
    .section-title {
      font-size: 2.8rem;
      letter-spacing: 12px;
    }
  }

  .cards-grid {
    &.is-vertical {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    &:has(.glace-card:hover) .glace-card:not(:hover) {
      opacity: 1;
      filter: none;
    }
  }

  .glass-ribbon {
    background: rgba(10, 10, 12, 0.85);
    .ribbon-reveal {
      grid-template-rows: 1fr;
      opacity: 1;
      padding-top: 1rem;
    }
  }
}
</style>