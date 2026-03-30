<template>
  <div class="page-container">
    <headerProduto />
    <HeroVideo />
    <Criar />
    <Sobre />
    <Depoimentos />
    <Rodape />
  </div>
</template>

<script setup>
  import Criar from '@/components/Criar.vue'
  import Depoimentos from '@/components/Depoimentos.vue'
  import headerProduto from '@/components/headerProduto.vue'
  import HeroVideo from '@/components/HeroVideo.vue'
  import Rodape from '@/components/Rodape.vue'
  import Sobre from '@/components/Sobre.vue'
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500&display=swap');

.page-container {
  background-color: #050505;
  min-height: 100vh;
}
</style>
