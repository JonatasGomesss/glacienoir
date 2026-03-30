<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
  //
</script>

<style>
/* ── Scrollbar Glace Noir ─────────────────────────── */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #050505;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 3px;
  transition: background 0.3s ease;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.35);
}

/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.12) #050505;
}

/* ── Base resets ──────────────────────────────────── */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #050505;
  overflow-x: hidden;
}
</style>
