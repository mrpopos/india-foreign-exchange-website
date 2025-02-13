<script setup lang="ts">
import { defineComponent } from 'vue'
import homeBg1 from '@/assets/images/homebg1.webp'
import homeBg2 from '@/assets/images/homebg2.webp'
import homeBg3 from '@/assets/images/homebg3.webp'

defineComponent({
  name: 'HomeView',
})
</script>

<template>
  <div class="home-wrapper h-full">
    <div class="home-container h-full">
      <!-- first screen -->
      <div class="home-banner h-full relative">
        <div class="home-banner-bg h-full">
          <picture class="absolute top-1/2 left-0 transform -translate-y-1/2">
            <source :srcset="homeBg1" type="image/webp" />
            <img :src="homeBg1" alt="" />
          </picture>
          <picture class="absolute top-1/2 left-0 transform -translate-y-1/2">
            <source :srcset="homeBg2" type="image/webp" />
            <img :src="homeBg2" alt="" />
          </picture>
          <picture class="h-full absolute top-0 right-0 transform translate-x-1/2">
            <source :srcset="homeBg3" type="image/webp" />
            <img class="h-full" :src="homeBg3" alt="" />
          </picture>
        </div>
        <div
          class="home-banner-content absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 flex flex-col items-start justify-center gap-8"
        >
          <h1 class="text-white text-7xl font-bold">
            The right place<br />
            for online trading<br />
            on financial markets
          </h1>
          <div class="desc">
            <p class="text-white text-xl">The most user-friendly interface</p>
            <p class="text-white text-xl">Get access to trade over 100 global trading assets</p>
          </div>
          <a class="btn px-8 py-4 bg-btn-color rounded-lg text-lg hover:cursor-pointer"
            >Start Trading Now</a
          >
        </div>
      </div>
      <!-- Why choose us? -->
      <div class="w-full bg-red-100 py-20">
        <div class="w-full melg:max-w-[1200px] px-6 bg-gray-300 mx-auto">wertyu</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
