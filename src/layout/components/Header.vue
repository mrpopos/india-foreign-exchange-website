<script setup lang="ts">
import LogoIcon from '../../assets/svg/logo.svg'
</script>

<template>
  <div class="header-wrapper">
    <div class="header-container">
      <div class="logo">
        <img :src="LogoIcon" alt="logo" />
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
  max-width: var(--w-max-content);
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
