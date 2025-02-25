<script setup lang="ts">
import HowHelpYou from './components/HowHelpYou.vue'
import UserGuide from './components/UserGuide.vue'
import { cateData } from '../../data/index.ts'
</script>

<template>
  <div class="quick-wrapper h-full">
    <div ref="scrollContainer" class="quick-container h-full overflow-auto">
      <!-- first screen -->
      <section class="quick-banner bg-gradient-to-br from-[#01203f] to-[#021d4b] overflow-hidden">
        <div class="quick-banner-content w-full pt-40 pb-20">
          <div
            class="w-full px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24 flex flex-col items-start justify-center gap-12"
          >
            <HowHelpYou />
          </div>
        </div>
      </section>

      <!-- Get started in a few easy steps -->
      <section class="get-started w-full py-20">
        <div class="w-full px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24">
          <div class="user-guide-p" v-for="item in cateData" :key="item.id" :item="item">
            <UserGuide :data="item" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-guide-p {
  margin-top: 48px;
}
</style>
