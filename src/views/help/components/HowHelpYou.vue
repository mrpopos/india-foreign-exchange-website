<template>
  <div class="how-help-you">
    <div class="text">
      <span>How can we help you?</span>
    </div>
    <div class="img">
      <img :src="HowHelpYouIcon" alt="HowHelpYouIcon" />
    </div>
  </div>
</template>

<script setup lang="ts">
import HowHelpYouIcon from '@/assets/images/how-help-you.png'
</script>

<style scoped lang="scss">
.how-help-you {
  width: 100%;
  @include mixins.flex-container();

  .text {
    font-size: 48px;
    font-weight: 600;
    color: var(--c-white);
    line-height: 4rem;

    @media screen and (max-width: 667px) {
      font-size: 24px;
    }
  }

  .img {
    flex: none;
    img {
      height: 240px;
    }

    @media screen and (max-width: 667px) {
      display: none;
    }
  }
}
</style>
