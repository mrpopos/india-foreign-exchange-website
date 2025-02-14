<script setup lang="ts">
import { defineComponent } from 'vue'

import HowHelpYou from './components/HowHelpYou.vue'
import UserGuide from './components/UserGuide.vue'
import { cateData } from '../../data/index.ts'

defineComponent({
  name: 'HelpCenter',
})
</script>

<template>
  <div class="w-full py-20">
    <div class="w-full px-4 mx-auto melg:max-w-[1200px] melg:px-24">
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
