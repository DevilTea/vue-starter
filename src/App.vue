<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <nav>
    <RouterLink :to="{name: 'home'}">
      Home
    </RouterLink>
    <RouterLink :to="{name: 'about'}">
      About
    </RouterLink>
  </nav>
  <RouterView />
</template>

<style lang="scss">
/* stylelint-disable-next-line selector-max-id */
#app {
  margin-top: 60px;
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav > a {
  margin: 0 1rem;
}
</style>
