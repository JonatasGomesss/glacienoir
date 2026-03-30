<template>
  <section id="depoimentos" class="depoimentos-section">
    <div class="content-wrapper">

      <div class="section-header animate-on-scroll fade-up">
        <span class="chapter-number">D01</span>
        <h2 class="section-title">Vozes <span>Noir</span></h2>
        <div class="title-line" />
        <p class="section-subtitle">Experiências que transcendem o sabor</p>
      </div>

      <div class="testimonials-grid">
        <div
          v-for="(dep, index) in depoimentos"
          :key="dep.id"
          class="testimonial-card animate-on-scroll fade-up"
          :style="{ '--delay': `${index * 0.15}s` }"
        >
          <div class="card-top">
            <div class="stars">
              <svg
                v-for="s in 5"
                :key="s"
                fill="currentColor"
                height="12"
                viewBox="0 0 24 24"
                width="12"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
            <span class="verified-tag">Compra Verificada</span>
          </div>

          <blockquote class="quote-text">
            "{{ dep.texto }}"
          </blockquote>

          <div class="client-info">
            <div class="client-avatar">
              <span>{{ dep.iniciais }}</span>
            </div>
            <div class="client-meta">
              <strong class="client-name">{{ dep.nome }}</strong>
              <span class="client-detail">{{ dep.detalhe }}</span>
            </div>
            <span class="product-tag">{{ dep.sabor }}</span>
          </div>
        </div>
      </div>

      <!-- Bottom Stats Bar -->
      <div class="stats-bar animate-on-scroll fade-up">
        <div class="stat-item">
          <span class="stat-number">4.9</span>
          <span class="stat-label">Avaliação média</span>
        </div>
        <div class="stat-divider" />
        <div class="stat-item">
          <span class="stat-number">2.400+</span>
          <span class="stat-label">Clientes satisfeitos</span>
        </div>
        <div class="stat-divider" />
        <div class="stat-item">
          <span class="stat-number">98%</span>
          <span class="stat-label">Recomendam a marca</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
  import { onMounted, onUnmounted } from 'vue'

  const depoimentos = [
    {
      id: 1,
      texto: 'Uma experiência sensorial que vai além do que eu poderia imaginar. O Midnight Truffle tem uma profundidade de sabor que simplesmente não existe em mais nenhum lugar.',
      nome: 'Isabela Monteiro',
      iniciais: 'IM',
      detalhe: 'São Paulo, SP',
      sabor: 'Midnight Truffle',
    },
    {
      id: 2,
      texto: 'A estética do produto é impecável, mas o que realmente surpreende é a textura. Cremosa, densa e elegante. Glace Noir redefiniu o que é um sorvete premium.',
      nome: 'Rafael Andrade',
      iniciais: 'RA',
      detalhe: 'Rio de Janeiro, RJ',
      sabor: 'Charcoal Velvet',
    },
    {
      id: 3,
      texto: 'Presentei minha esposa e ela ficou absolutamente encantada. A apresentação, o aroma, o sabor — cada detalhe foi pensado com cuidado. Voltaremos sempre.',
      nome: 'Caio & Fernanda',
      iniciais: 'CF',
      detalhe: 'Curitiba, PR',
      sabor: 'Obsidian Rose',
    },
  ]

  let observer = null

  function initObserver () {
    observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      }
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' })

    const els = document.querySelectorAll('.depoimentos-section .animate-on-scroll')
    for (const el of els) {
      observer.observe(el)
    }
  }

  onMounted(() => {
    initObserver()
  })
  onUnmounted(() => {
    if (observer) observer.disconnect()
  })
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600&display=swap');

.depoimentos-section {
  padding: 10rem 5%;
  background-color: #050505;
  color: #fff;
  font-family: 'Outfit', sans-serif;
  overflow: hidden;
  position: relative;

  // Subtle top border separator
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 10%;
    right: 10%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent);
  }
}

.content-wrapper {
  max-width: 1150px;
  margin: 0 auto;
}

// --- Header ---
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
    letter-spacing: 12px;
    text-transform: uppercase;
    margin-bottom: 2rem;
    color: #fff;

    span {
      font-weight: 600;
      background: linear-gradient(135deg, #ffffff 0%, #718096 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
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
    letter-spacing: 4px;
    color: #718096;
    text-transform: uppercase;
  }
}

// --- Cards Grid ---
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 6rem;
}

.testimonial-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '"';
    position: absolute;
    top: -10px;
    right: 20px;
    font-size: 8rem;
    font-weight: 700;
    color: rgba(255,255,255,0.02);
    font-family: serif;
    line-height: 1;
    pointer-events: none;
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.12);
    background: rgba(255, 255, 255, 0.04);
    transform: translateY(-6px);
    box-shadow: 0 30px 60px rgba(0,0,0,0.5);
  }
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .stars {
    display: flex;
    gap: 3px;
    color: rgba(255, 255, 255, 0.5);
  }

  .verified-tag {
    font-size: 0.55rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #4a5568;
    border: 1px solid rgba(255,255,255,0.05);
    padding: 3px 8px;
  }
}

.quote-text {
  font-size: 0.95rem;
  font-weight: 300;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.65);
  font-style: italic;
  flex: 1;
  border: none;
  padding: 0;
  margin: 0;
}

.client-info {
  display: flex;
  align-items: center;
  gap: 1rem;

  .client-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    span {
      font-size: 0.75rem;
      font-weight: 500;
      letter-spacing: 1px;
      color: rgba(255,255,255,0.5);
    }
  }

  .client-meta {
    flex: 1;

    .client-name {
      display: block;
      font-size: 0.85rem;
      font-weight: 500;
      letter-spacing: 1px;
      color: #fff;
      margin-bottom: 3px;
    }

    .client-detail {
      font-size: 0.65rem;
      color: #4a5568;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
  }

  .product-tag {
    font-size: 0.55rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: rgba(168, 216, 255, 0.5);
    border: 1px solid rgba(168, 216, 255, 0.1);
    padding: 4px 8px;
    white-space: nowrap;
    flex-shrink: 0;
  }
}

// --- Stats Bar ---
.stats-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(255, 255, 255, 0.01);

  .stat-item {
    text-align: center;

    .stat-number {
      display: block;
      font-size: 2.5rem;
      font-weight: 200;
      letter-spacing: 4px;
      color: #fff;
      margin-bottom: 0.5rem;
    }

    .stat-label {
      font-size: 0.65rem;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: #4a5568;
    }
  }

  .stat-divider {
    width: 1px;
    height: 50px;
    background: rgba(255, 255, 255, 0.06);
  }
}

// --- Animations ---
.animate-on-scroll {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 1.1s cubic-bezier(0.165, 0.84, 0.44, 1) var(--delay, 0s),
              transform 1.1s cubic-bezier(0.165, 0.84, 0.44, 1) var(--delay, 0s);

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1000px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5rem;
  }

  .stats-bar {
    gap: 2rem;
    flex-wrap: wrap;
    padding: 2.5rem;
  }
}

@media (max-width: 768px) {
  .depoimentos-section {
    padding: 6rem 5%;
  }

  .section-title {
    font-size: 2.5rem !important;
    letter-spacing: 8px !important;
  }
}
</style>
