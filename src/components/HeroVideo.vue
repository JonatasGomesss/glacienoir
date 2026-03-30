<template>
  <section id="inicio" class="hero-section">
    <div class="video-container">
      <video
        ref="videoRef"
        autoplay
        class="bg-video"
        loop
        muted
        playsinline
        preload="auto"
        src="../assets/video/90C38CC9_db612c34-88bc-4092-645d-441163da7906.mp4"
      />
      <div class="overlay" />
    </div>
    <div class="content">
      <h1 class="title">Glace Noir</h1>
      <p class="subtitle">A arte da frieza refinada</p>
      <a class="cta-btn" href="#criacoes">
        <span>Explorar Criações</span>
        <svg
          fill="none"
          height="16"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          width="16"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>
    <div class="scroll-indicator">
      <span class="scroll-label">Scroll</span>
      <div class="scroll-line">
        <div class="scroll-dot" />
      </div>
    </div>
  </section>
</template>

<script setup>
  import { onMounted, ref } from 'vue'

  const videoRef = ref(null)

  onMounted(() => {
    if (videoRef.value) {
      // Ajusta a velocidade para dar um ar mais cinemático e misterioso (câmera lenta suave)
      videoRef.value.playbackRate = 0.7
    }
  })
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500&display=swap');

.hero-section {
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #050505;
}

.video-container {
  position: absolute;
  top: 0%;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  .bg-video {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    object-position: center 25%;
    opacity: 0.9;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(10, 10, 12, 0.4) 0%, rgba(5, 5, 5, 0.95) 100%);
    z-index: 2;
  }
}

.content {
  position: relative;
  z-index: 3;
  text-align: center;
  color: #ffffff;
  font-family: 'Outfit', sans-serif;
  padding: 0 20px;

  .title {
    font-size: 4.7rem;
    font-weight:300;
    letter-spacing: 12px;
    margin-bottom: 1rem;
    text-transform: uppercase;
    text-shadow: 0px 10px 10px  rgb(0, 0, 0,9  );
    animation: fadeSlideUp 1.2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  }

  .subtitle {
    font-size: 1.1rem;
    font-weight: 400;
    letter-spacing: 6px;
    text-transform: uppercase;
    color: #a0aab2;
    opacity: 0;
    animation: fadeSlideUp 1.2s cubic-bezier(0.165, 0.84, 0.44, 1) 0.4s forwards;
  }

  .cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 14px;
    margin-top: 3rem;
    padding: 1rem 2.5rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #fff;
    text-decoration: none;
    font-size: 0.75rem;
    font-weight: 300;
    letter-spacing: 4px;
    text-transform: uppercase;
    opacity: 0;
    animation: fadeSlideUp 1.2s cubic-bezier(0.165, 0.84, 0.44, 1) 0.8s forwards;
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(255, 255, 255, 0.05);
      transform: translateX(-100%);
      transition: transform 0.4s ease;
    }

    &:hover {
      border-color: rgba(255, 255, 255, 0.5);
      gap: 20px;

      &::before {
        transform: translateX(0);
      }
    }

    svg {
      transition: transform 0.4s ease;
    }

    &:hover svg {
      transform: translateX(4px);
    }
  }
}

.scroll-indicator {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  opacity: 0;
  animation: fadeSlideUp 1s ease 1.4s forwards;

  .scroll-label {
    font-size: 0.55rem;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.25);
  }

  .scroll-line {
    width: 1px;
    height: 50px;
    background: rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
  }

  .scroll-dot {
    position: absolute;
    top: -100%;
    left: 0;
    width: 1px;
    height: 100%;
    background: rgba(255, 255, 255, 0.6);
    animation: scrollDrop 1.8s ease-in-out infinite;
  }
}

@keyframes scrollDrop {
  0%   { top: -100%; opacity: 0; }
  20%  { opacity: 1; }
  80%  { opacity: 1; }
  100% { top: 100%; opacity: 0; }
}

@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .content {
    .title {
      font-size: 2.8rem;
      letter-spacing: 6px;
    }
    .subtitle {
      font-size: 0.85rem;
      letter-spacing: 4px;
    }
  }
}
</style>
