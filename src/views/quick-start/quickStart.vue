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
            <div class="desc">
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
          <h2 class="title">Get started in a few easy steps</h2>
          <div class="step-imgtxt">
            <div class="step-item">
              <div class="step-txt">
                <div class="txt-title">
                  <span>1</span>
                  <span>Registration</span>
                </div>
                <div class="desc">
                  Create a free trading account by using your email address or simply authorize via
                  Facebook or Google accounts.
                </div>
              </div>
              <div class="step-img">
                <img src="@/assets/images/step1.webp" alt="step-1" />
              </div>
            </div>
            <div class="step-item">
              <div class="step-img">
                <img src="@/assets/images/step2.webp" alt="step-1" />
              </div>
              <div class="step-txt">
                <div class="txt-title">
                  <span>2</span>
                  <span>Registration</span>
                </div>
                <div class="desc">
                  Create a free trading account by using your email address or simply authorize via
                  Facebook or Google accounts.
                </div>
              </div>
            </div>
            <div class="step-item">
              <div class="step-txt">
                <div class="txt-title">
                  <span>3</span>
                  <span>Registration</span>
                </div>
                <div class="desc">
                  Create a free trading account by using your email address or simply authorize via
                  Facebook or Google accounts.
                </div>
              </div>
              <div class="step-img">
                <img src="@/assets/images/step3.webp" alt="step-1" />
              </div>
            </div>
            <div class="step-item">
              <div class="step-img">
                <img src="@/assets/images/step4.webp" alt="step-1" />
              </div>
              <div class="step-txt">
                <div class="txt-title">
                  <span>4</span>
                  <span>Registration</span>
                </div>
                <div class="desc">
                  Create a free trading account by using your email address or simply authorize via
                  Facebook or Google accounts.
                </div>
              </div>
            </div>
            <div class="step-item">
              <div class="step-txt">
                <div class="txt-title">
                  <span>5</span>
                  <span>Registration</span>
                </div>
                <div class="desc">
                  Create a free trading account by using your email address or simply authorize via
                  Facebook or Google accounts.
                </div>
              </div>
              <div class="step-img">
                <img src="@/assets/images/step5.webp" alt="step-1" />
              </div>
            </div>
            <div class="step-item">
              <div class="step-img">
                <img src="@/assets/images/step6.webp" alt="step-1" />
              </div>
              <div class="step-txt">
                <div class="txt-title">
                  <span>6</span>
                  <span>Registration</span>
                </div>
                <div class="desc">
                  Create a free trading account by using your email address or simply authorize via
                  Facebook or Google accounts.
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
