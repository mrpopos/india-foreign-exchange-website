<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useDomScroll } from '@/hooks/useDomScroll'
import { useAppStore } from '@/stores/modules/app'
import 'vue3-carousel/carousel.css'
import Footer from '@/layout/components/footer.vue'

const scrollContainer = ref()
const { scrollTop } = useDomScroll(scrollContainer)

watchEffect(() => {
  useAppStore().setScrollTop(scrollTop.value)
})
</script>

<template>
  <div class="home-wrapper h-full">
    <div ref="scrollContainer" class="home-container h-full overflow-auto">
      <!-- Place your trades on best conditions -->
      <div class="w-full py-20 bg-gradient-to-br from-blue-200 to-slate-200">
        <div class="w-full px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24">
          <h2 class="text-text-color-4 text-3xl font-semibold mb-16 md:text-4xl xl:text-5xl">
            Place your trades on best conditions
          </h2>
          <div class="grid grid-cols-1 gap-12 mesm:grid-cols-2">
            <div class="grid-list grid gap-4 grid-cols-2 lg:grid-cols-2">
              <div class="item flex flex-col justify-start items-center gap-2">
                <div
                  class="value text-4xl font-bold bg-gradient-to-br from-red-500 to-blue-500 bg-clip-text text-transparent"
                >
                  $5*
                </div>
                <div class="name text-base text-gray-800 text-center melg:text-lg">
                  Minimum investment amount
                </div>
              </div>
              <div class="item flex flex-col justify-start items-center gap-2">
                <div
                  class="value text-4xl font-bold bg-gradient-to-br from-red-500 to-blue-500 bg-clip-text text-transparent"
                >
                  $1
                </div>
                <div class="name text-base text-gray-800 text-center memd:text-base melg:text-lg">
                  Minimum trade amount
                </div>
              </div>
              <div class="item flex flex-col justify-start items-center gap-2">
                <div
                  class="value text-4xl font-bold bg-gradient-to-br from-red-500 to-blue-500 bg-clip-text text-transparent"
                >
                  $50 000
                </div>
                <div class="name text-base text-gray-800 text-center memd:text-base melg:text-lg">
                  Virtual money on your Demo account
                </div>
              </div>
              <div class="item flex flex-col justify-start items-center gap-2">
                <div
                  class="value text-4xl font-bold bg-gradient-to-br from-red-500 to-blue-500 bg-clip-text text-transparent"
                >
                  50+
                </div>
                <div class="name text-base text-gray-800 text-center memd:text-base melg:text-lg">
                  Payment methods
                </div>
              </div>
              <div class="item flex flex-col justify-start items-center gap-2">
                <div
                  class="value text-4xl font-bold bg-gradient-to-br from-red-500 to-blue-500 bg-clip-text text-transparent"
                >
                  $0
                </div>
                <div class="name text-base text-gray-800 text-center memd:text-base melg:text-lg">
                  No commission on deposit and withdrawal
                </div>
              </div>
              <div class="item flex flex-col justify-start items-center gap-2">
                <div
                  class="value text-4xl font-bold bg-gradient-to-br from-red-500 to-blue-500 bg-clip-text text-transparent"
                >
                  100+
                </div>
                <div class="name text-base text-gray-800 text-center memd:text-base melg:text-lg">
                  Assets for trading
                </div>
              </div>
            </div>
            <div class="img flex items-center justify-center">
              <img src="@/assets/images/nowdata.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
      <!-- footer -->
      <div class="layout-footer">
        <Footer />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-container {
  scrollbar-width: none;
}
</style>
