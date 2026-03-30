<template>
  <section id="sobre" class="sobre-section">
    <div class="content-wrapper">
      <div class="sobre-layout">
        <!-- Text Column -->
        <div class="text-content animate-on-scroll fade-right">
          <span class="chapter-number">M01</span>
          <h2 class="sobre-title">O Manifesto <span>Noir</span></h2>
          <div class="accent-line" />
          
          <div class="manifesto-body">
            <p class="highlight-text">
              "A escuridão não é a ausência de luz, mas a presença de todas as cores reveladas no silêncio."
            </p>
            <p class="description-text">
              Nascida no epicentro da alta gastronomia contemporânea, a <strong>Glace Noir</strong> desafia o convencional. 
              Nossa filosofia é simples: O luxo reside no que é essencial, elevado ao estado de arte.
            </p>
            <p class="description-text">
              Cada scoop é uma obra alquímica. Utilizamos apenas ingredientes de procedência única — da baunilha maturada sob o sol de Madagascar ao carvão ativado japonês — criando uma textura que não é apenas saboreada, mas sentida.
            </p>
          </div>

          <div class="values-grid">
            <div class="value-item">
              <span class="value-label">01. Pureza</span>
              <p>Minimalismo levado ao extremo da qualidade.</p>
            </div>
            <div class="value-item">
              <span class="value-label">02. Mistério</span>
              <p>Sabores complexos ocultos sob o véu Noir.</p>
            </div>
            <div class="value-item">
              <span class="value-label">03. Alquimia</span>
              <p>A união perfeita entre ciência e alta doçaria.</p>
            </div>
          </div>
        </div>

        <!-- Visual Column -->
        <div class="visual-content animate-on-scroll fade-left">
          <div class="heritage-frame">
            <div class="image-showcase">
              <div class="glass-orb" />
              <div class="main-visual">
                <!-- Film Grain Overlay -->
                <div class="grain-overlay" />
                <div class="visual-overlay" />
                
                <!-- Using local asset with Heritage Noir filters -->
                <img 
                  :src="imgAbout" 
                  alt="A Herança Glace Noir" 
                  class="essence-image heritage-filter"
                >
                
                <div class="conceptual-box">
                  <span class="box-tag">VINTAGE SELECTION</span>
                  <p class="box-quote">Est. 2024</p>
                </div>

                <!-- Premium Alchemist Seal -->
                <div class="alchemy-seal">
                  <div class="seal-inner">
                    <span class="seal-text">ALQUIMIA PURA</span>
                    <div class="seal-divider" />
                    <span class="seal-sub">SINCE THE ORIGINS</span>
                  </div>
                </div>
              </div>

              <div class="floating-badge">
                <svg
                  fill="currentColor"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                Heritage Collection
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { onMounted, onUnmounted } from 'vue'
  import imgAbout from '@/assets/image/midnight_truffle.png'

  let observer = null

  function initObserver() {
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    })

    const animatedElements = document.querySelectorAll('.animate-on-scroll')
    animatedElements.forEach(el => observer.observe(el))
  }

  onMounted(() => {
    initObserver()
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600&display=swap');

.sobre-section {
  padding: 12rem 5%;
  background-color: #050505;
  color: #fff;
  font-family: 'Outfit', sans-serif;
  overflow: hidden;
  position: relative;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.sobre-layout {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 8rem;
  align-items: center;
}

.text-content {
  .chapter-number {
    display: block;
    font-size: 0.7rem;
    letter-spacing: 6px;
    color: #4a5568;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
  }

  .sobre-title {
    font-size: 4rem;
    font-weight: 200;
    letter-spacing: 8px;
    text-transform: uppercase;
    margin-bottom: 2rem;
    line-height: 1.1;

    span {
      font-weight: 600;
      background: linear-gradient(135deg, #ffffff 0%, #4a5568 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .accent-line {
    width: 60px;
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
    margin-bottom: 3.5rem;
  }
}

.manifesto-body {
  margin-bottom: 4rem;

  .highlight-text {
    font-size: 1.5rem;
    font-weight: 200;
    font-style: italic;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 2.5rem;
    line-height: 1.4;
    border-left: 2px solid rgba(255, 255, 255, 0.1);
    padding-left: 1.5rem;
  }

  .description-text {
    font-size: 1rem;
    color: #94a3b8;
    line-height: 1.8;
    font-weight: 300;
    margin-bottom: 1.5rem;
    letter-spacing: 0.5px;
  }
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  .value-item {
    .value-label {
      display: block;
      font-size: 0.7rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #fff;
      margin-bottom: 0.8rem;
      font-weight: 600;
    }

    p {
      font-size: 0.75rem;
      color: #4a5568;
      line-height: 1.5;
    }
  }
}

/* Visual Column */
.visual-content {
  position: relative;
}

.heritage-frame {
  padding: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  background: rgba(10, 10, 12, 0.4);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: 4px;
    border: 1px solid rgba(255, 255, 255, 0.03);
    pointer-events: none;
  }
}

.image-showcase {
  position: relative;
  width: 100%;
  aspect-ratio: 1/1.2;
  
  .main-visual {
    width: 100%;
    height: 100%;
    background: #000;
    border-radius: 2px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    .essence-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 2s cubic-bezier(0.165, 0.84, 0.44, 1);
      
      &.heritage-filter {
        filter: grayscale(1) brightness(0.6) contrast(1.1) sepia(0.15);
      }
    }
    
    &:hover .essence-image {
      transform: scale(1.03);
      filter: grayscale(1) brightness(0.75) contrast(1.1) sepia(0.1);
    }

    .grain-overlay {
      position: absolute;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
      opacity: 0.04;
      pointer-events: none;
      z-index: 2;
      mix-blend-mode: overlay;
    }

    .visual-overlay {
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at center, transparent 30%, rgba(0, 0, 0, 0.8) 100%);
      z-index: 1;
    }

    .conceptual-box {
      position: absolute;
      top: 60px;
      text-align: center;
      z-index: 3;
      
      .box-tag {
        font-size: 0.6rem;
        letter-spacing: 5px;
        color: rgba(255, 255, 255, 0.3);
        display: block;
        margin-bottom: 1rem;
      }

      .box-quote {
        font-size: 1rem;
        font-weight: 200;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.2);
      }
    }
  }

  .alchemy-seal {
    position: absolute;
    bottom: 20%;
    right: -20px;
    background: rgba(8, 8, 10, 0.85);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 1.2rem;
    z-index: 5;
    transform: rotate(3deg);
    box-shadow: 0 15px 45px rgba(0, 0, 0, 0.9);

    .seal-inner {
      border: 1px solid rgba(255, 255, 255, 0.05);
      padding: 0.5rem 1rem;
      text-align: center;

      .seal-text {
        display: block;
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 4px;
        color: #fff;
      }

      .seal-divider {
        width: 100%;
        height: 1px;
        background: rgba(255, 255, 255, 0.1);
        margin: 0.4rem 0;
      }

      .seal-sub {
        font-size: 0.5rem;
        letter-spacing: 2px;
        color: #4a5568;
        text-transform: uppercase;
      }
    }
  }

  .glass-orb {
    position: absolute;
    top: -50px;
    right: -50px;
    width: 200px;
    height: 200px;
    background: rgba(255, 255, 255, 0.02);
    border-radius: 50%;
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.05);
    z-index: 4;
    animation: floating 10s infinite ease-in-out;
  }

  .floating-badge {
    position: absolute;
    bottom: 30px;
    left: -30px;
    background: #fff;
    color: #000;
    padding: 0.8rem 1.4rem;
    font-size: 0.6rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    display: flex;
    align-items: center;
    gap: 12px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
    z-index: 5;
  }
}

/* Animations */
@keyframes floating {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-15px, 25px) scale(1.05); }
}

.animate-on-scroll {
  opacity: 0;
  transition: all 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);

  &.fade-right { transform: translateX(-40px); }
  &.fade-left { transform: translateX(40px); }

  &.visible {
    opacity: 1;
    transform: translate(0);
  }
}

@media (max-width: 1000px) {
  .sobre-layout {
    grid-template-columns: 1fr;
    gap: 6rem;
  }

  .visual-content {
    order: -1;
    max-width: 500px;
    margin: 0 auto;
  }

  .sobre-title {
    font-size: 3rem;
  }

  .values-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}

@media (max-width: 768px) {
  .sobre-section {
    padding: 6rem 5%;
  }

  .alchemy-seal {
    bottom: 10%;
    right: 0;
  }
}
</style>
