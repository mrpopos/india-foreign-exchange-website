<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import Footer from '@/layout/components/footer.vue'
import { useDomScroll } from '@/hooks/useDomScroll'
import { useAppStore } from '@/stores/modules/app'

const scrollContainer = ref()
const { scrollTop } = useDomScroll(scrollContainer)

watchEffect(() => {
  useAppStore().setScrollTop(scrollTop.value)
})

const discoverData = ref([
  {
    title: 'Service Desk Agent',
    content: 'Mitigate against risk with our extensive range of stop and limit orders.',
  },
  {
    title: 'Senior C++ Developer (Hybrid)',
    content: "We're here 24 hours a day, except from 6am to 4pm on Saturday (UTC+8).",
  },
  {
    title: 'Client Service Associate-English',
    content:
      'Please use our award-winning trading application, available on both web and mobile platforms.',
  },
  {
    title: 'Administrative Assistant, Analytics, Data & Innovation',
    content: 'Open a position for a fraction of the cost with our competitive margins.',
  },
  {
    title: 'Associate Portfolio Manager, Global Capital Markets',
    content: 'React to breaking news with custom price alerts.',
  },
  {
    title: 'Risk Control Group (RCG) Analyst',
    content: 'Enhance your trading skills with guidance and social media learning.',
  },
])
const showAllLegal = ref(true)
const activeLegalIndex = ref(-1)

const showLegalDetail = (index: number) => {
  if (index === activeLegalIndex.value) {
    showAllLegal.value = true
    activeLegalIndex.value = -1
  } else {
    showAllLegal.value = false
    activeLegalIndex.value = index
  }
  // 滚动至顶部
  scrollContainer.value.scrollTop = 0
}
</script>

<template>
  <div class="quick-wrapper h-full">
    <div ref="scrollContainer" class="quick-container h-full overflow-auto">
      <!-- first screen -->
      <section class="quick-banner overflow-hidden bg-cfdbg bg-cover">
        <div class="quick-banner-content w-full pt-40 pb-20">
          <div
            class="w-full px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24 flex flex-col items-center justify-center gap-12"
          >
            <h1
              class="w-full text-white text-3xl font-bold mesm:text-4xl melg:text-5xl text-center"
            >
              WHAT IS CFD TRADING AND HOW DOES IT WORK?
            </h1>
            <div class="desc text-base text-gray-700">
              <p class="text-gray-500 text-base md:text-xl py-1 text-center">
                Discover a complete CFD guide, mastering diverse asset trading with essential
                knowledge and strategies for success.
              </p>
            </div>
            <!-- <div>
              <a class="btn px-8 py-4 bg-btn-color rounded-lg text-lg hover:cursor-pointer"
                >view terms and policies</a
              >
            </div> -->
          </div>
        </div>
      </section>
      <!-- introduce -->
      <section class="suport-team w-full py-20 bg-section-bg">
        <div class="w-full px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24">
          <div class="flex flex-col justify-start items-start gap-12">
            <div
              class="introduce-line1 rounded-lg flex flex-col justify-center items-center gap-2 p-4 memd:flex-row-reverse"
            >
              <div class="line1-left flex flex-col justify-center items-start gap-8">
                <h2 class="title text-lg text-black font-semibold">What is CFD trading?</h2>
                <p class="desc text-sm text-gray-700 font-normal">
                  Trading CFDs, or 'contracts for difference', allows you to speculate on whether an
                  asset's price will move up or down – without having to own the asset. This
                  provides benefits, as well as potential risk to trading. Make sure you understand
                  the fundamentals of CFD trading before you begin.
                </p>
              </div>
              <div class="line1-right w-[240px] memd:w-[280px] flex-none">
                <img class="w-full" src="@/assets/images/cfd1.webp" alt="" />
              </div>
            </div>
            <div
              class="introduce-line2 rounded-lg flex flex-col justify-center items-center gap-2 p-4 memd:flex-row"
            >
              <div class="line1-left flex flex-col justify-center items-start gap-8">
                <h2 class="title text-lg text-black font-semibold">How does CFD trading work?</h2>
                <p class="desc text-sm text-gray-700 font-normal">
                  With CFD trading, you don't buy or sell the underlying asset (for example a
                  physical share, currency pair or commodity). Instead, you buy or sell a number of
                  units for a particular financial instrument​, depending on whether you think
                  prices will go up or down. We offer CFDs on a wide range of global markets,
                  covering currency pairs, stock indices, commodities, shares and treasuries. An
                  example of one of our most popular stock indices is the UK 100, which aggregates
                  the price movements of all the stocks listed on the UK's FTSE 100 index.
                </p>
                <p class="desc text-sm text-gray-700 font-normal">
                  For every point the price of the instrument moves in your favour, you gain
                  multiples of the number of CFD units you have bought or sold. For every point the
                  price moves against you, you will make a loss.
                </p>
              </div>
              <div class="line1-right w-[240px] memd:w-[280px] flex-none">
                <img class="w-full" src="@/assets/images/cfd2.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Fees and Charges -->
      <section class="suport-team w-full py-40 memd:py-20 bg-gray-50">
        <div class="w-full px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24">
          <h2 class="title text-black px-6 pt-4 text-2xl font-semibold mb-8 text-center">
            Why trade CFDs with Guru Trade7
          </h2>
          <div class="discover-list grid grid-cols-1 gap-4 mesm:grid-cols-2 memd:grid-cols-3">
            <div
              class="discover-item py-6 px-4 group flex flex-col justify-start items-center gap-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-100 ease-in-out"
              v-for="(item, index) in discoverData"
              :key="index"
              @click="showLegalDetail(index)"
            >
              <div
                class="text-gray-950 font-semibold group-hover:underline group-hover:underline-offset-2 group-hover:text-blue-500 transition-all duration-100 ease-in-out text-center"
              >
                {{ item.title }}
              </div>
              <div class="text-gray-600 text-center">{{ item.content }}</div>
            </div>
          </div>
        </div>
      </section>
      <!-- footer -->
      <div class="layout-footer">
        <Footer />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.quick-container {
  scrollbar-width: none;
}
</style>
