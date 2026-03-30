<template>
  <footer id="contato" class="rodape">

    <!-- Top divider line -->
    <div class="rodape-divider" />

    <div class="rodape-container">

      <!-- Top row -->
      <div class="rodape-top">

        <!-- Brand Column -->
        <div class="brand-col">
          <div class="rodape-logo" @click="voltar">
            <span class="logo-text">Glace<strong>Noir</strong></span>
            <div class="logo-underline" />
          </div>
          <p class="brand-statement">
            A arte de transformar o simples em extraordinário.<br>
            Alta gastronomia. Experiência sensorial pura.
          </p>
          <div class="social-links">
            <!-- Instagram -->
            <a
              aria-label="Instagram"
              class="social-btn"
              href="#"
              target="_blank"
            >
              <svg
                fill="none"
                height="18"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                width="18"
              >
                <rect
                  height="20"
                  rx="5"
                  ry="5"
                  width="20"
                  x="2"
                  y="2"
                />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line
                  x1="17.5"
                  x2="17.51"
                  y1="6.5"
                  y2="6.5"
                />
              </svg>
            </a>
            <!-- TikTok -->
            <a
              aria-label="TikTok"
              class="social-btn"
              href="#"
              target="_blank"
            >
              <svg
                fill="currentColor"
                height="18"
                viewBox="0 0 24 24"
                width="18"
              >
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.94a8.2 8.2 0 004.79 1.52V7.02a4.85 4.85 0 01-1.03-.33z" />
              </svg>
            </a>
            <!-- Pinterest -->
            <a
              aria-label="Pinterest"
              class="social-btn"
              href="#"
              target="_blank"
            >
              <svg
                fill="currentColor"
                height="18"
                viewBox="0 0 24 24"
                width="18"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
              </svg>
            </a>
            <!-- WhatsApp -->
            <a
              aria-label="WhatsApp"
              class="social-btn"
              href="#"
              target="_blank"
            >
              <svg
                fill="currentColor"
                height="18"
                viewBox="0 0 24 24"
                width="18"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Navigation Columns -->
        <div class="nav-cols">
          <div class="nav-col">
            <span class="nav-col-title">Explorar</span>
            <ul>
              <li><a href="#inicio">Início</a></li>
              <li><a href="#criacoes">Criações</a></li>
              <li><a href="#sobre">Manifesto</a></li>
              <li><a href="#depoimentos">Depoimentos</a></li>
            </ul>
          </div>

          <div class="nav-col">
            <span class="nav-col-title">A Marca</span>
            <ul>
              <li><a href="#">Nossa História</a></li>
              <li><a href="#">Ingredientes</a></li>
              <li><a href="#">Certificações</a></li>
              <li><a href="#">Imprensa</a></li>
            </ul>
          </div>

          <div class="nav-col">
            <span class="nav-col-title">Atendimento</span>
            <ul>
              <li><a href="#">Perguntas Frequentes</a></li>
              <li><a href="#">Política de Entrega</a></li>
              <li><a href="#">Trocas e Devoluções</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </div>
        </div>

        <!-- Contact / CTA Column -->
        <div class="contact-col">
          <span class="nav-col-title">Receba Novidades</span>
          <p class="contact-sub">Lançamentos exclusivos e experiências Noir diretamente para você.</p>
          <div class="newsletter-form">
            <input
              v-model="email"
              class="newsletter-input"
              placeholder="seu@email.com"
              type="email"
            >
            <button class="newsletter-btn" @click="subscribe">
              <svg
                fill="none"
                height="16"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="16"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <p v-if="subscribed" class="subscribed-msg">✓ Você entrou para a lista Noir.</p>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="rodape-bottom">
        <div class="bottom-left">
          <span>© 2024 Glace Noir. Todos os direitos reservados.</span>
          <span class="dot">·</span>
          <a href="#">Privacidade</a>
          <span class="dot">·</span>
          <a href="#">Termos</a>
        </div>
        <button class="back-top-btn" @click="voltar">
          <svg
            fill="none"
            height="14"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="14"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
          <span>Topo</span>
        </button>
      </div>

    </div>
  </footer>
</template>

<script setup>
  import { ref } from 'vue'

  const email = ref('')
  const subscribed = ref(false)

  function voltar () {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function subscribe () {
    if (email.value && email.value.includes('@')) {
      subscribed.value = true
      email.value = ''
    }
  }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600&display=swap');

.rodape {
  background-color: #030303;
  color: #fff;
  font-family: 'Outfit', sans-serif;
  position: relative;
}

.rodape-divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.08) 70%, transparent 100%);
}

.rodape-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 6rem 5% 3rem;
}

// ─── Top Row ───────────────────────────────────────
.rodape-top {
  display: grid;
  grid-template-columns: 1.5fr 2fr 1.2fr;
  gap: 5rem;
  margin-bottom: 5rem;
}

// Brand Column
.brand-col {
  .rodape-logo {
    cursor: pointer;
    display: inline-flex;
    flex-direction: column;
    margin-bottom: 2rem;

    .logo-text {
      font-size: 1.3rem;
      font-weight: 300;
      letter-spacing: 8px;
      text-transform: uppercase;
      color: #fff;

      strong {
        font-weight: 600;
      }
    }

    .logo-underline {
      width: 0;
      height: 1px;
      background: #fff;
      margin-top: 4px;
      transition: width 0.4s ease;
    }

    &:hover .logo-underline {
      width: 100%;
    }
  }

  .brand-statement {
    font-size: 0.8rem;
    color: #4a5568;
    line-height: 1.8;
    letter-spacing: 0.5px;
    margin-bottom: 2.5rem;
  }
}

.social-links {
  display: flex;
  gap: 0.8rem;
}

.social-btn {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255,255,255,0.07);
  color: #4a5568;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  border-radius: 2px;

  &:hover {
    border-color: rgba(255,255,255,0.25);
    color: #fff;
    background: rgba(255,255,255,0.04);
    transform: translateY(-3px);
  }
}

// Navigation Columns
.nav-cols {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}

.nav-col {
  .nav-col-title {
    display: block;
    font-size: 0.65rem;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #fff;
    font-weight: 500;
    margin-bottom: 1.8rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    li a {
      text-decoration: none;
      color: #4a5568;
      font-size: 0.8rem;
      font-weight: 300;
      letter-spacing: 1px;
      transition: all 0.3s ease;
      position: relative;
      display: inline-block;

      &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 1px;
        background: rgba(255,255,255,0.3);
        transition: width 0.3s ease;
      }

      &:hover {
        color: #fff;
        &::after { width: 100%; }
      }
    }
  }
}

// Contact Column
.contact-col {
  .nav-col-title {
    display: block;
    font-size: 0.65rem;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #fff;
    font-weight: 500;
    margin-bottom: 1.8rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }

  .contact-sub {
    font-size: 0.78rem;
    color: #4a5568;
    line-height: 1.7;
    margin-bottom: 1.8rem;
  }
}

.newsletter-form {
  display: flex;
  border: 1px solid rgba(255,255,255,0.08);
  overflow: hidden;
  transition: border-color 0.3s ease;

  &:focus-within {
    border-color: rgba(255,255,255,0.25);
  }
}

.newsletter-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  padding: 0.85rem 1rem;
  color: #fff;
  font-family: 'Outfit', sans-serif;
  font-size: 0.78rem;
  letter-spacing: 0.5px;

  &::placeholder {
    color: #2d3748;
  }
}

.newsletter-btn {
  background: rgba(255,255,255,0.06);
  border: none;
  border-left: 1px solid rgba(255,255,255,0.08);
  padding: 0 1.2rem;
  color: #718096;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    background: rgba(255,255,255,0.12);
    color: #fff;
  }
}

.subscribed-msg {
  font-size: 0.7rem;
  color: rgba(104, 211, 145, 0.8);
  letter-spacing: 1px;
  margin-top: 1rem;
}

// ─── Bottom Bar ──────────────────────────────────
.rodape-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255,255,255,0.04);

  .bottom-left {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-size: 0.65rem;
    color: #2d3748;
    letter-spacing: 1px;
    text-transform: uppercase;

    a {
      color: #2d3748;
      text-decoration: none;
      transition: color 0.3s ease;
      &:hover { color: #718096; }
    }

    .dot {
      color: #1a202c;
    }
  }
}

.back-top-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.07);
  color: #4a5568;
  font-family: 'Outfit', sans-serif;
  font-size: 0.6rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    border-color: rgba(255,255,255,0.3);
    color: #fff;
    svg { transform: translateY(-3px); }
  }
}

// ─── Responsive ──────────────────────────────────
@media (max-width: 1100px) {
  .rodape-top {
    grid-template-columns: 1fr 1.5fr;
    gap: 4rem;
  }

  .contact-col {
    grid-column: 1 / -1;
  }
}

@media (max-width: 768px) {
  .rodape-top {
    grid-template-columns: 1fr;
    gap: 3.5rem;
  }

  .nav-cols {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .rodape-bottom {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
}
</style>
