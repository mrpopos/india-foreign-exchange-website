<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="main-wrapper">
    <div class="main-container">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-wrapper {
  width: 100%;
  height: 100%;
  // max-width: var(--w-max-content);
  margin: auto;

  .main-container {
    height: 100%;
  }
}
</style>
