<script setup lang="ts">
import Header from './components/header.vue'
import Main from './components/main.vue'
// import Footer from './components/Footer.vue'
import { defineComponent } from 'vue'

defineComponent({
  name: 'LayoutPage',
})
</script>

<template>
  <div class="layout-wrapper">
    <div class="layout-header">
      <Header />
    </div>
    <div class="layout-main">
      <Main />
    </div>
    <!-- <div class="layout-footer">
      <Footer />
    </div> -->
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
    padding: 0 var(--padding-40);
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

// @media screen and (max-width: 767px) {
//   .layout-wrapper {
//     padding: 0 var(--padding-24) var(--padding-24);
//   }
// }
</style>
