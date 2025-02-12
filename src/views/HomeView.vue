<script setup lang="ts">
import { onMounted } from 'vue'
// import TheWelcome from '../components/TheWelcome.vue'
onMounted(() => {
  // console.log('home')
  document.documentElement.dataset.theme = 'light'
})
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    地方GHJKL：
  </main>
</template>

<style lang="scss" scoped>
main {
  color: var(--color-text);
  background-color: var(--color-background);
}
</style>
