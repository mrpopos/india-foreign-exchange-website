<script setup lang="ts">
import HowHelpYou from './components/HowHelpYou.vue'
import UserGuide from './components/UserGuide.vue'
import { cateData } from '../../data/index.ts'
</script>

<template>
  <div class="w-full py-20">
    <div class="w-full px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24">
      <HowHelpYou />
      <div class="user-guide-p" v-for="item in cateData" :key="item.id" :item="item">
        <UserGuide :data="item" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-guide-p {
  margin-top: 48px;
}
</style>
