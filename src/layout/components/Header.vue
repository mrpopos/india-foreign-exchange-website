<script setup lang="ts">
import LogoIcon from '../../assets/svg/logo.svg'
</script>

<template>
  <div class="header-wrapper">
    <div class="header-container">
      <div class="logo flex justify-start items-center gap-4">
        <img :src="LogoIcon" alt="logo" />
        <span
          class="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-blue-800 via-20% to-green-700"
          >ForeignExchange</span
        >
      </div>
      <div class="title">
        <span>Help Center</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-wrapper {
  width: 100%;
  // max-width: var(--w-max-content);
  height: 80px;
  margin: auto;

  .header-container {
    height: 100%;
    @include mixins.flex-container();

    .title {
      span {
        font-size: var(--body-fz);
      }
    }
  }
}
</style>
