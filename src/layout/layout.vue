<script setup lang="ts">
import Header from './components/header.vue'
import headerMobile from './components/headerMobile.vue'
import Main from './components/main.vue'
import { useWindowSize } from '@/hooks/useWindowSize'

const windowSize = useWindowSize()
</script>

<template>
  <div class="layout-wrapper">
    <div class="layout-header">
      <Header v-if="windowSize.width >= 1200" />
      <headerMobile v-if="windowSize.width < 1200" />
    </div>
    <div class="layout-main">
      <Main />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-wrapper {
  height: 100%;
  // padding: 0 var(--padding-40) var(--padding-40);

  .layout-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    // margin-bottom: 8px;
    // padding: 0 var(--padding-40);
  }

  .layout-main {
    width: 100%;
    height: 100%;
    // padding-top: 80px;
  }

  .layout-footer {
    margin: 32px calc(var(--padding-40) * -1) 0;
    padding: 0 var(--padding-40);
    background-color: var(--c-black-1);
  }
}
</style>
