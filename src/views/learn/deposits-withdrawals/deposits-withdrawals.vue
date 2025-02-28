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
      <section class="quick-banner overflow-hidden bg-depositsbg bg-cover">
        <div class="quick-banner-content w-full pt-40 pb-20">
          <div class="w-full px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24 flex flex-col items-center justify-center gap-12">
            <h1 class="w-full text-white text-3xl font-bold mesm:text-4xl melg:text-5xl text-center text-center">DEPOSITS & WITHDRAWALS</h1>
            <div class="desc text-base text-text-color-6">
              <p class="text-gray-300 text-base md:text-xl py-1 text-center">Quick access to deposits & withdrawal with the most popular and secure payment methods.</p>
            </div>
            <div>
              <a class="btn px-8 py-4 bg-white rounded-lg text-lg hover:cursor-pointer bg-gradient-to-r from-[#0099fa] to-[#002ed9] text-white hover:from-[#1d6b9c] hover:to-[#1e358a]">Start Trading Now</a>
            </div>
          </div>
        </div>
      </section>
      <!-- Fees and Charges -->
      <section class="suport-team w-full py-40 memd:py-20">
        <div class="w-full px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24">
          <div class="flex flex-col justify-start items-start gap-12">
            <div class="introduce-line1 w-full bg-white rounded-lg flex flex-row justify-center items-center gap-8 px-8 pt-24 pb-8 mt-20 memd:mt-0 mesm:flex-row relative">
              <div class="line1-left w-full memd:w-[50%]">
                <h2 class="title text-xl font-semibold mb-6">Payment process</h2>
                <p class="desc text-base text-text-color-6 font-normal">
                  For faster processing we recommend that all account holders deposit funds into their trading account from inside their Secure Client Area. From your Secure Client Area you will be able to fund your account in real time
                  using one of the instant funding methods. In certain instances, it may take up to hours for deposits to be processed into the designated trading account. If the above situation occurs, please contact our professional
                  customer service to deal with.
                </p>
              </div>
              <div class="line1-right absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 memd:static memd:w-[50%] memd:translate-x-0 memd:translate-y-0 flex justify-center items-center memd:bg-white rounded-lg">
                <img class="w-full max-w-[320px] memd:max-w-[400px]" src="@/assets/images/deposits1.webp" alt="" />
              </div>
            </div>
            <div class="introduce-line2 w-full bg-white rounded-lg flex flex-row justify-center items-center gap-8 px-8 pt-24 pb-8 mt-20 memd:mt-0 mesm:flex-row-reverse relative">
              <div class="line1-left w-full memd:w-[50%]">
                <h2 class="title text-xl font-semibold mb-6">Security of Funds</h2>
                <p class="desc text-base text-text-color-6 font-normal">
                  When funding your trading account, client money is held in separate and confidential account. Electronic payments are processed using SSL (Secure Socket Layer) technology and are encrypted to ensure security. All payment
                  information is confidential and used only for the purpose of funding your trading account with Guru Trade7.
                </p>
              </div>
              <div class="line1-right absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 memd:static memd:w-[50%] memd:translate-x-0 memd:translate-y-0 flex justify-center items-center memd:bg-white rounded-lg">
                <img class="w-full max-w-[320px] memd:max-w-[400px]" src="@/assets/images/deposits2.webp" alt="" />
              </div>
            </div>
            <div class="introduce-line3 w-full bg-white rounded-lg flex flex-row justify-center items-center gap-8 px-8 pt-24 pb-8 mt-20 memd:mt-0 mesm:flex-row relative">
              <div class="line1-left w-full memd:w-[50%]">
                <h2 class="title text-xl font-semibold mb-6">Bank Fees</h2>
                <p class="desc text-base text-text-color-6 font-normal">
                  Guru Trade7 does not charge any additional fees for deposits or withdrawals. You should however be aware that you may incur fees, such as intermediary fees, on payments to and from some international banking institutions.
                  Please do not trust any third party payments either for funding your account or for making a withdrawal.
                </p>
              </div>
              <div class="line1-right absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 memd:static memd:w-[50%] memd:translate-x-0 memd:translate-y-0 flex justify-center items-center memd:bg-white rounded-lg">
                <img class="w-full max-w-[320px] memd:max-w-[400px]" src="@/assets/images/deposits3.webp" alt="" />
              </div>
            </div>
            <div class="introduce-line4 w-full bg-white rounded-lg flex flex-row justify-center items-center gap-8 px-8 pt-24 pb-8 mt-20 memd:mt-0 mesm:flex-row-reverse relative">
              <div class="line1-left w-full memd:w-[50%]">
                <h2 class="title text-xl font-semibold mb-6">Withdrawal order processing</h2>
                <p class="desc text-base text-text-color-6 font-normal">
                  Withdrawal requests can be submitted at any time. If you submit your withdrawal request before 9pm, it will be processed on the same day it is received. However, if your withdrawal is submitted after this time, it will be
                  processed on the next business day.
                </p>
              </div>
              <div class="line1-right absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 memd:static memd:w-[50%] memd:translate-x-0 memd:translate-y-0 flex justify-center items-center memd:bg-white rounded-lg">
                <img class="w-full max-w-[320px] memd:max-w-[400px]" src="@/assets/images/deposits4.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- How to deposit? -->
      <section class="suport-team w-full py-20 bg-section-bg">
        <div class="w-full px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24">
          <h2 class="title px-6 pt-4 text-2xl font-semibold mb-8 text-center">How to deposit?</h2>
          <div class="w-full flex flex-col justify-between items-start gap-12 memd:flex-row">
            <div class="w-full introduce-line1 rounded-lg flex flex-col justify-between items-center gap-12 p-4 memd:flex-row">
              <div class="line1-left">
                <h2 class="title text-lg font-semibold mb-14">Experience fast and secure deposits</h2>
                <div class="step relative">
                  <div class="line1 absolute top-0 left-[6px] w-[2px] h-full bg-gray-400"></div>
                  <div class="line2 absolute top-0 left-0"></div>
                  <ul class="flex flex-col justify-start items-start gap-10">
                    <li class="flex flex-row justify-start items-center gap-10 -mt-4">
                      <span class="dot bg-white w-[14px] h-[14px] rounded-[50%] border border-gray-500 relative animate-custom-dot1"></span>
                      <span class="txt text-nowrap text-sm animate-custom-steptxt1">Enter deposit amount</span>
                    </li>
                    <li class="flex flex-row justify-start items-center gap-10">
                      <span class="dot bg-white w-[14px] h-[14px] rounded-[50%] border border-gray-500 relative animate-custom-dot2"></span>
                      <span class="txt text-nowrap text-sm animate-custom-steptxt2">Choose payment method</span>
                    </li>
                    <li class="flex flex-row justify-start items-center gap-10 -mb-4">
                      <span class="dot bg-white w-[14px] h-[14px] rounded-[50%] border border-gray-500 relative animate-custom-dot3"></span>
                      <span class="txt text-nowrap text-sm animate-custom-steptxt3">Takes only minutes to the account </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="line1-right w-full max-w-[320px] h-[450px] bg-howdeposit1 bg-contain bg-no-repeat bg-center relative">
                <img class="avator w-[80px] absolute left-0 top-0" src="@/assets/images/howdeposit2.webp" alt="" />
                <img class="avator w-[80px] absolute right-0 top-0" src="@/assets/images/howdeposit3.webp" alt="" />
                <img class="avator w-[80px] absolute left-0 bottom-0" src="@/assets/images/howdeposit4.webp" alt="" />
                <img class="avator w-[80px] absolute right-0 bottom-0" src="@/assets/images/howdeposit5.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- How to withdrawal? -->
      <section class="suport-team w-full py-20 bg-section-bg">
        <div class="w-full px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24">
          <h2 class="title px-6 pt-4 text-2xl font-semibold mb-8 text-center">How to withdrawal?</h2>
          <div class="w-full flex flex-col justify-between items-start gap-12 memd:flex-row">
            <div class="w-full introduce-line1 rounded-lg flex flex-col justify-between items-center gap-12 p-4 memd:flex-row-reverse">
              <div class="line1-left">
                <h2 class="title text-lg font-semibold mb-14">Safe and secure withdrawals</h2>
                <div class="step relative">
                  <div class="line1 absolute top-0 left-[6px] w-[2px] h-full bg-gray-400"></div>
                  <div class="line2 absolute top-0 left-0"></div>
                  <ul class="flex flex-col justify-start items-start gap-10">
                    <li class="flex flex-row justify-start items-center gap-10 -mt-4">
                      <span class="dot bg-white w-[14px] h-[14px] rounded-[50%] border border-gray-500 relative animate-custom-dot1"></span>
                      <span class="txt text-nowrap text-sm animate-custom-steptxt1">Enter withdrawal amount</span>
                    </li>
                    <li class="flex flex-row justify-start items-center gap-10">
                      <span class="dot bg-white w-[14px] h-[14px] rounded-[50%] border border-gray-500 relative animate-custom-dot2"></span>
                      <span class="txt text-nowrap text-sm animate-custom-steptxt2">Fill in personal bank account information</span>
                    </li>
                    <li class="flex flex-row justify-start items-center gap-10 -mb-4">
                      <span class="dot bg-white w-[14px] h-[14px] rounded-[50%] border border-gray-500 relative animate-custom-dot3"></span>
                      <span class="txt text-nowrap text-sm animate-custom-steptxt3">Transit to your bank account in as little as 20 minutes </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="line1-right flex-none w-full max-w-[320px] h-[450px] bg-howdeposit6 bg-contain bg-no-repeat bg-center relative">
                <img class="avator w-[80px] absolute left-0 top-0" src="@/assets/images/howdeposit7.webp" alt="" />
                <img class="avator w-[80px] absolute right-0 top-0" src="@/assets/images/howdeposit8.webp" alt="" />
                <img class="avator w-[80px] absolute left-0 bottom-0" src="@/assets/images/howdeposit9.webp" alt="" />
                <img class="avator w-[80px] absolute right-0 bottom-0" src="@/assets/images/howdeposit10.webp" alt="" />
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
