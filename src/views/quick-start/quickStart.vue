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
</script>

<template>
  <div class="quick-wrapper h-full">
    <div ref="scrollContainer" class="quick-container h-full overflow-auto">
      <!-- first screen -->
      <section class="quick-banner bg-gradient-to-br from-[#01203f] to-[#021d4b] overflow-hidden">
        <!-- <div class="quick-banner-bg h-full relative">
          <picture
            class="h-[80%] absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 md:translate-x-1/2"
          >
            <source :srcset="homeBg3" type="image/webp" />
            <img class="" :src="homeBg3" alt="" />
          </picture>
        </div> -->
        <div class="quick-banner-content w-full pt-40 pb-20">
          <div
            class="w-full px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24 flex flex-col items-start justify-center gap-12"
          >
            <h1 class="text-white text-3xl font-bold mesm:text-4xl melg:text-5xl">
              How to trade<br />
              on financial markets
            </h1>
            <div class="desc text-sm text-gray-700">
              <p class="text-white text-base md:text-xl">With Pocket Option</p>
            </div>
            <div>
              <a class="btn px-8 py-4 bg-btn-color rounded-lg text-lg hover:cursor-pointer"
                >REGISTRATION</a
              >
            </div>
          </div>
        </div>
      </section>
      <!-- Get started in a few easy steps -->
      <section class="get-started w-full py-20 bg-gradient-to-br from-blue-200 to-slate-200">
        <div class="w-full px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24">
          <h2 class="title text-gray-800 px-6 py-4 text-2xl font-semibold mb-8">
            Get started in a few easy steps
          </h2>
          <div class="step-imgtxt grid grid-cols-1 gap-8 memd:gap-16">
            <div class="step-item flex flex-col justify-start items-center gap-4 memd:flex-row">
              <div class="step-img relative w-[210px] mesm:w-[240px] memd:flex-none">
                <img class="absolute w-full" src="@/assets/images/step1.webp" alt="step-1" />
                <img class="w-full" src="@/assets/images/step1-1.webp" alt="step-1" />
              </div>
              <div class="step-txt">
                <div class="txt-title">
                  <span
                    class="num pr-2 text-6xl font-semibold bg-gradient-to-r from-blue-600 to-green-800 text-transparent bg-clip-text"
                    >1</span
                  >
                  <span class="num-title text-gray-800 text-xl font-semibold">Registration</span>
                </div>
                <div class="desc text-sm text-gray-700">
                  Create a free trading account by using your email address or simply authorize via
                  Facebook or Google accounts.
                </div>
              </div>
            </div>
            <div class="step-item flex flex-col justify-start items-center gap-4 memd:flex-row-reverse">
              <div class="step-img relative w-[210px] mesm:w-[240px] memd:flex-none">
                <img class="absolute" src="@/assets/images/step2.webp" alt="step-1" />
                <img src="@/assets/images/step2-1.webp" alt="step-1" />
              </div>
              <div class="step-txt">
                <div class="txt-title">
                  <span
                    class="num pr-2 text-6xl font-semibold bg-gradient-to-r from-blue-600 to-green-800 text-transparent bg-clip-text"
                    >2</span
                  >
                  <span class="num-title text-gray-800 text-xl font-semibold">Verification</span>
                </div>
                <div class="desc text-sm text-gray-700">
                  Make your account personalized. Enter your personal information in the profile and
                  upload both ID document and address documents.
                </div>
              </div>
            </div>
            <div class="step-item flex flex-col justify-start items-center gap-4  memd:flex-row">
              <div class="step-img relative w-[210px] mesm:w-[240px] memd:flex-none">
                <img class="absolute" src="@/assets/images/step3.webp" alt="step-1" />
                <img src="@/assets/images/step3-1.webp" alt="step-1" />
              </div>
              <div class="step-txt">
                <div class="txt-title">
                  <span
                    class="num pr-2 text-6xl font-semibold bg-gradient-to-r from-blue-600 to-green-800 text-transparent bg-clip-text"
                    >3</span
                  >
                  <span class="num-title text-gray-800 text-xl font-semibold">Deposit</span>
                </div>
                <div class="desc text-sm text-gray-700">
                  Add funds to your trading account balance by using the most comfortable deposit
                  method. Processing time depends on the chosen option.
                </div>
              </div>
            </div>
            <div class="step-item flex flex-col justify-start items-center gap-4  memd:flex-row-reverse">
              <div class="step-img relative w-[210px] mesm:w-[240px] memd:flex-none">
                <img class="absolute" src="@/assets/images/step4.webp" alt="step-1" />
                <img src="@/assets/images/step4-1.webp" alt="step-1" />
              </div>
              <div class="step-txt">
                <div class="txt-title">
                  <span
                    class="num pr-2 text-6xl font-semibold bg-gradient-to-r from-blue-600 to-green-800 text-transparent bg-clip-text"
                    >4</span
                  >
                  <span class="num-title text-gray-800 text-xl font-semibold">Trading</span>
                </div>
                <div class="desc text-sm text-gray-700">
                  Trading on Pocket Option is easy as 123. Choose a trading asset, set up the
                  preferred chart layout and enable indicators for better market analysis. Set the
                  trade amount, purchase time and place either a price decrease or increase order.
                </div>
              </div>
            </div>
            <div class="step-item flex flex-col justify-start items-center gap-4 memd:flex-row">
              <div class="step-img relative w-[210px] mesm:w-[240px] memd:flex-none">
                <img class="absolute w-full" src="@/assets/images/step5.webp" alt="step-1" />
                <img src="@/assets/images/step5-1.webp" alt="step-1" />
              </div>
              <div class="step-txt">
                <div class="txt-title">
                  <span
                    class="num pr-2 text-6xl font-semibold bg-gradient-to-r from-blue-600 to-green-800 text-transparent bg-clip-text"
                    >5</span
                  >
                  <span class="num-title text-gray-800 text-xl font-semibold">Profit</span>
                </div>
                <div class="desc text-sm text-gray-700">
                  Each correct forecast results in a profitable trade order. The order amount plus
                  the generated profit are automatically added to your account balance. Manage your
                  income properly, invest further or withdraw profit if necessary.
                </div>
              </div>
            </div>
            <div class="step-item flex flex-col justify-start items-center gap-4 memd:flex-row-reverse">
              <div class="step-img relative w-[210px] mesm:w-[240px] memd:flex-none">
                <img class="absolute" src="@/assets/images/step6.webp" alt="step-1" />
                <img src="@/assets/images/step6-1.webp" alt="step-1" />
              </div>
              <div class="step-txt">
                <div class="txt-title">
                  <span
                    class="num pr-2 text-6xl font-semibold bg-gradient-to-r from-blue-600 to-green-800 text-transparent bg-clip-text"
                    >6</span
                  >
                  <span class="num-title text-gray-800 text-xl font-semibold">Withdrawal</span>
                </div>
                <div class="desc text-sm text-gray-700">
                  You can withdraw your trading account balance at any time without any restrictions
                  on the amount. Place a withdrawal request via one of the methods previously used
                  for depositing and wait for it to be processed and sent.
                </div>
              </div>
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
