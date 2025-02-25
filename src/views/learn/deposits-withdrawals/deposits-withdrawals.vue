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
      <section class="quick-banner overflow-hidden bg-fundbg bg-cover">
        <div class="quick-banner-content w-full pt-40 pb-20">
          <div
            class="w-full px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24 flex flex-col items-center justify-center gap-12"
          >
            <h1
              class="w-full text-white text-3xl font-bold mesm:text-4xl melg:text-5xl text-center"
            >
              DEPOSITS & WITHDRAWALS
            </h1>
            <div class="desc text-base text-gray-700">
              <p class="text-gray-300 text-base md:text-xl py-1 text-center">
                Quick access to deposits & withdrawal with the most popular and secure payment
                methods.
              </p>
            </div>
            <!-- <div>
              <a class="btn px-8 py-4 bg-white rounded-lg text-lg hover:cursor-pointer bg-gradient-to-r from-[#0099fa] to-[#002ed9] text-white hover:from-[#1d6b9c] hover:to-[#1e358a]"
                >view terms and policies</a
              >
            </div> -->
          </div>
        </div>
      </section>
      <!-- Fees and Charges -->
      <section class="suport-team w-full py-40 memd:py-20">
        <div class="w-full px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24">
          <div class="flex flex-col justify-start items-start gap-12">
            <div
              class="introduce-line1 w-full bg-white rounded-lg flex flex-row justify-center items-center gap-8 px-8 pt-24 pb-8 mesm:flex-row-reverse relative memd:pt-8"
            >
              <div class="line1-left w-full memd:w-[50%]">
                <h2 class="title text-xl text-black font-semibold mb-6">Payment process</h2>
                <p class="desc text-base text-gray-700 font-normal">
                  For faster processing we recommend that all account holders deposit funds into
                  their trading account from inside their Secure Client Area. From your Secure
                  Client Area you will be able to fund your account in real time using one of the
                  instant funding methods. In certain instances, it may take up to hours for
                  deposits to be processed into the designated trading account. If the above
                  situation occurs, please contact our professional customer service to deal with.
                </p>
              </div>
              <div
                class="line1-right absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 memd:static memd:w-[50%] memd:translate-x-0 memd:translate-y-0 flex justify-center items-center memd:bg-gray-200 rounded-lg"
              >
                <img class="w-full max-w-[250px]" src="@/assets/images/fund4.webp" alt="" />
              </div>
            </div>
            <div
              class="introduce-line2 w-full bg-white rounded-lg flex flex-row justify-center items-center gap-8 px-8 pt-24 pb-8 mesm:flex-row-reverse relative memd:pt-8 mt-20 memd:mt-0"
            >
              <div
                class="line1-right absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 memd:static memd:w-[50%] memd:translate-x-0 memd:translate-y-0 flex justify-center items-center memd:bg-gray-200 rounded-lg"
              >
                <img class="w-full max-w-[250px]" src="@/assets/images/fund5.webp" alt="" />
              </div>
              <div class="line1-left w-full memd:w-[50%]">
                <h2 class="title text-xl text-black font-semibold mb-6">Guru Trade7 Offers You</h2>
                <p
                  class="desc text-base text-gray-700 font-normal flex flex-row justify-between items-center py-2 before:content-[''] before:absolute relative before:border-dashed before:border-b-2 before:border-gray-500 before:w-full before:h-[2px] z-10"
                >
                  <span class="bg-white relative">Real-time Quotes</span>
                  <span class="bg-white relative">Free</span>
                </p>
                <p
                  class="desc text-base text-gray-700 font-normal flex flex-row justify-between items-center py-2 before:content-[''] before:absolute relative before:border-dashed before:border-b-2 before:border-gray-500 before:w-full before:h-[2px]"
                >
                  <span class="bg-white relative">Beginners Teaching</span>
                  <span class="bg-white relative">Free</span>
                </p>
                <p
                  class="desc text-base text-gray-700 font-normal flex flex-row justify-between items-center py-2 before:content-[''] before:absolute relative before:border-dashed before:border-b-2 before:border-gray-500 before:w-full before:h-[2px]"
                >
                  <span class="bg-white relative">Market Insights</span>
                  <span class="bg-white relative">Free</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Trade with a partner you can trust -->
      <section class="suport-team w-full py-20 bg-section-bg">
        <div class="w-full px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24">
          <div class="flex flex-col justify-start items-start gap-12">
            <div
              class="introduce-line1 bg-gray-100 rounded-lg flex flex-col justify-center items-center gap-2 p-4 mesm:flex-row-reverse"
            >
              <div class="line1-left">
                <h2 class="title text-lg text-black font-semibold mb-6">Payment process</h2>
                <p class="desc text-base text-gray-700 font-normal">
                  For faster processing we recommend that all account holders deposit funds into
                  their trading account from inside their Secure Client Area. From your Secure
                  Client Area you will be able to fund your account in real time using one of the
                  instant funding methods. In certain instances, it may take up to hours for
                  deposits to be processed into the designated trading account. If the above
                  situation occurs, please contact our professional customer service to deal with.
                </p>
              </div>
              <div class="line1-right w-full max-w-[320px] mesm:min-w-[250px]">
                <img class="w-full" src="@/assets/images/fund1.webp" alt="" />
              </div>
            </div>
            <div
              class="introduce-line2 bg-gray-100 rounded-lg flex flex-col justify-center items-center gap-2 p-4 mesm:flex-row"
            >
              <div class="line1-left">
                <h2 class="title text-lg text-black font-semibold mb-6">24/7 Coverage</h2>
                <p class="desc text-base text-gray-700 font-normal">
                  Our commitment to providing unwavering support aligns with the 24/7 nature of the
                  markets. To ensure seamless service, our Operations, Security, and Engineering
                  teams employ a round-the-clock coverage model, ready to respond promptly to any
                  market fluctuations or emerging challenges.
                </p>
              </div>
              <div class="line1-right w-full max-w-[320px] mesm:min-w-[250px]">
                <img class="w-full" src="@/assets/images/fund2.webp" alt="" />
              </div>
            </div>
            <div
              class="introduce-line3 bg-gray-100 rounded-lg flex flex-col justify-center items-center gap-2 p-4 mesm:flex-row-reverse"
            >
              <div class="line1-left">
                <h2 class="title text-lg text-black font-semibold mb-6">Safeguarding User Data</h2>
                <p class="desc text-base text-gray-700 font-normal">
                  At Guru Trade7, your privacy is of utmost importance. We strictly adhere to
                  permissible data processing purposes, never utilizing personal data for automated
                  decision-making or profiling. Our robust security protocols guarantee the secure
                  storage and processing of your data. Explore further details on how we protect
                  your information.
                </p>
              </div>
              <div class="line1-right w-full max-w-[320px] mesm:min-w-[250px]">
                <img class="w-full" src="@/assets/images/fund3.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Support Team from us -->
      <section class="suport-team w-full py-20 bg-gradient-to-br from-blue-950 to-slate-900">
        <div class="w-full px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24">
          <div class="card-list grid grid-cols-1 gap-4 mexs:grid-cols-2 memd:grid-cols-3">
            <div
              class="card-item bg-gray-100 p-2 mesm:p-7 rounded-lg flex flex-col justify-center items-center gap-2"
            >
              <div class="flex flex-col-reverse justify-center items-center gap-2">
                <div class="cart-left flex flex-col justify-center items-center gap-1">
                  <div class="card-value text-xl text-gray-800 font-semibold text-center">
                    Zero fees
                  </div>
                  <div class="card-desc text-center text-base text-gray-700 font-normal">
                    We do not charge commissions for either withdrawals or deposits.
                  </div>
                </div>
                <div class="cart-right w-full max-w-[100px]">
                  <img src="@/assets/images/fundicon1.webp" alt="" />
                </div>
              </div>
            </div>
            <div
              class="card-item bg-gray-100 p-2 mesm:p-7 rounded-lg flex flex-col justify-center items-center gap-2"
            >
              <div class="flex flex-col-reverse justify-center items-center gap-2">
                <div class="cart-left flex flex-col justify-center items-center gap-1">
                  <div class="card-value text-xl text-gray-800 font-semibold text-center">
                    Fast deposits & withdrawal
                  </div>
                  <div class="card-desc text-center text-base text-gray-700 font-normal">
                    Deposit orders can be processed in as little as 3 minutes and withdrawals can be
                    made in as little as 20 minutes.
                  </div>
                </div>
                <div class="cart-right w-full max-w-[100px]">
                  <img src="@/assets/images/fundicon2.webp" alt="" />
                </div>
              </div>
            </div>
            <div
              class="card-item bg-gray-100 p-2 mesm:p-7 rounded-lg flex flex-col justify-center items-center gap-2"
            >
              <div class="flex flex-col-reverse justify-center items-center gap-2">
                <div class="cart-left flex flex-col justify-center items-center gap-1">
                  <div class="card-value text-xl text-gray-800 font-semibold text-center">
                    5+ Payment Methods
                  </div>
                  <div class="card-desc text-center text-base text-gray-700 font-normal">
                    Supports several local payment channels and international payment channels.
                  </div>
                </div>
                <div class="cart-right w-full max-w-[100px]">
                  <img src="@/assets/images/fundicon3.webp" alt="" />
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
