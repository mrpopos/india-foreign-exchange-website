<script setup lang="ts">
import Header from './components/Header.vue'
import Main from './components/Main.vue'
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
  padding: 0 var(--padding-40) var(--padding-40);

  .layout-header {
    margin-bottom: 8px;
  }

  // .layout-main {
  // }

  .layout-footer {
    margin: 32px calc(var(--padding-40) * -1) 0;
    padding: 0 var(--padding-40);
    background-color: var(--c-black-1);
  }
}

@media screen and (max-width: 767px) {
  .layout-wrapper {
    padding: 0 var(--padding-24) var(--padding-24);
  }
}
</style>
