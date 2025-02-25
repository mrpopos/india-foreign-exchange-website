<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import Footer from '@/layout/components/footer.vue'
import { useDomScroll } from '@/hooks/useDomScroll'
import { useAppStore } from '@/stores/modules/app'
import img1Webp from '@/assets/images/step1.webp'
import img11Webp from '@/assets/images/step1-1.webp'
import img2Webp from '@/assets/images/step2.webp'
import img21Webp from '@/assets/images/step2-1.webp'
import img3Webp from '@/assets/images/step3.webp'
import img31Webp from '@/assets/images/step3-1.webp'
import img4Webp from '@/assets/images/step4.webp'
import img41Webp from '@/assets/images/step4-1.webp'
import img5Webp from '@/assets/images/step5.webp'
import img51Webp from '@/assets/images/step5-1.webp'
import img6Webp from '@/assets/images/step6.webp'
import img61Webp from '@/assets/images/step6-1.webp'

const scrollContainer = ref()
const { scrollTop } = useDomScroll(scrollContainer)

watchEffect(() => {
  useAppStore().setScrollTop(scrollTop.value)
})

const getStartedData = [
  {
    title: 'Registration',
    desc: [
      'Create a free trading account by using your email address or simply authorize via Facebook or Google accounts.',
      'egistration is a quite simple process. You are able to choose one of the ways for registration: sign up with an email address, use your Facebook account or Google account.',
      'Select the most comfortable option and proceed with your account registration. Please note, that if you sign up via Facebook or Google you may need to reset your password here in order to login to your Pocket Option account by using email and password instead.',
    ],
    img: img1Webp,
    img1: img11Webp,
  },
  {
    title: 'Verification',
    desc: [
      'Make your account personalized. Enter your personal information in the profile and upload both ID document and address documents.',
      'Verification is a required procedure in order to protect your account and funds from unauthorized access as well as comply with all financial regulations and AML requirements.',
      'It is always best to complete verification once you register your account. Navigate to your Profile to enter all the personal and address information and upload ID document and address proof documents.',
      'Your account will be reviewed and confirmed once everything is provided correctly, unlocking you all the features Pocket Option platform has to offer!',
    ],
    img: img2Webp,
    img1: img21Webp,
  },
  {
    title: 'Deposit',
    desc: [
      'Add funds to your trading account balance by using the most comfortable deposit method. Processing time depends on the chosen option.',
      'Once your account is fully verified all the offered deposit options are available to you. Choose the one that is comfortable for you and proceed with the displayed instructions to complete your payment. Depending on the chosen method, it may take some time for the transfer to reflect on your Pocket Option trading account.',
      'Please note that in accordance with the Public Offer Agreement as well as AML policies, you are able to withdraw funds via the methods that you previously used for depositing on your trading account.',
    ],
    img: img3Webp,
    img1: img31Webp,
  },
  {
    title: 'Trading',
    desc: [
      'Trading on Pocket Option is easy as 123. Choose a trading asset, set up the preferred chart layout and enable indicators for better market analysis. Set the trade amount, purchase time and place either a price decrease or increase order.',
      'Trading on Pocket Option is easy. You will need just a few things to easily navigate the trading interface. Start by choosing the trading type (quick, digital or forex MT5), then select the preferred trading asset (currency, stocks, commodities, etc.) and set the chart type (area, line, candles, bars, heikin ashi).',
      'Thereafter, you will find yourself in the current market situation of the chosen asset. Additionally, add the required indicators to the chart, enable signals and drawings to aid technical analysis of the market. Make your forecast and place the order by using the trading panel. You can always track and monitor your trading session in the Trades menu.',
      'View our comprehensive Platform Guide to learn more about all the trading services Pocket Option provides.',
    ],
    img: img4Webp,
    img1: img41Webp,
  },
  {
    title: 'Profit',
    desc: [
      'Each correct forecast results in a profitable trade order. The order amount plus the generated profit are automatically added to your account balance. Manage your income properly, invest further or withdraw profit if necessary.',
      'Each correct forecast results in profit — the originally invested trade order amount plus the generated profit (in accordance with the displayed asset payout %) are automatically added to your account balance.',
      'Manage your income properly, invest further or withdraw profit if necessary. A PRO-trader always follows the money management rules as well as always analyzes and finds the best strategies to fit the current market situation. Read more about trading strategies here.',
    ],
    img: img5Webp,
    img1: img51Webp,
  },
  {
    title: 'Withdrawal',
    desc: [
      'You can withdraw your trading account balance at any time without any restrictions on the amount. Place a withdrawal request via one of the methods previously used for depositing and wait for it to be processed and sent.',
      'If you do not have an active deposit bonuses, you can withdraw your trading account balance at any time without any restrictions on the amount. In case you do have active deposit bonus, the bonus amount will be withheld from your balance if it is not fully executed. View the bonus information and execution progress in the Promo codes section.',
      'Place a withdrawal request via the methods previously used for depositing and wait for it to be processed and sent. Depending on the chosen method, it may take some time for the transfer to reflect on your account.',
    ],
    img: img6Webp,
    img1: img61Webp,
  },
]
</script>

<template>
  <div class="quick-wrapper h-full">
    <div ref="scrollContainer" class="quick-container h-full overflow-auto">
      <!-- first screen -->
      <section class="quick-banner bg-gradient-to-br from-[#01203f] to-[#021d4b] overflow-hidden">
        <div class="quick-banner-content w-full pt-40 pb-20">
          <div
            class="w-full px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24 flex flex-col items-center justify-center gap-12"
          >
            <h1 class="text-white text-3xl font-bold mesm:text-4xl melg:text-5xl">
              How to trade on financial markets
            </h1>
            <div class="desc text-base mt-4 text-[#515151]">
              <p class="text-white text-base md:text-xl">With Pocket Option</p>
            </div>
            <div>
              <a
                class="btn px-8 py-4 bg-white rounded-lg text-lg hover:cursor-pointer bg-gradient-to-r from-[#0099fa] to-[#002ed9] text-white hover:from-[#1d6b9c] hover:to-[#1e358a]"
                >REGISTRATION</a
              >
            </div>
          </div>
        </div>
      </section>
      <!-- Get started in a few easy steps -->
      <section class="get-started w-full pb-20">
        <h2
          class="title py-10 bg-section-bg text-text-color-4 font-semibold mb-16 text-[20px] mesm:text-[24px] memd:text-[28px] melg:text-[32px] px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24"
        >
          Get started in a few easy steps
        </h2>
        <div class="w-full px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24">
          <div class="step-imgtxt grid grid-cols-1 gap-16 memd:gap-16">
            <div
              v-for="(item, index) in getStartedData"
              :key="index"
              class="step-item flex flex-col justify-start items-center gap-4 memd:flex-row-reverse"
            >
              <div class="step-img relative w-[210px] mesm:w-[240px] memd:flex-none">
                <img class="absolute w-full" :src="item.img" alt="step-1" />
                <img class="w-full" :src="item.img1" alt="step-1" />
              </div>
              <div class="step-txt">
                <div class="txt-title">
                  <span
                    class="num pr-2 text-4xl mesm:text-5xl memd:text-6xl melg:text-7xl font-semibold bg-gradient-to-br from-[#0099fa] to-[#1a4dde] text-transparent bg-clip-text"
                    >{{ index + 1 }}</span
                  >
                  <span class="num-title text-[#515151] text-xl font-semibold uppercase">{{
                    item.title
                  }}</span>
                </div>
                <div class="desc text-base text-[#515151]">
                  <p class="mt-4">{{ item.desc[0] }}</p>
                </div>
                <div
                  class="more-info mt-4 link group text-base font-semibold flex flex-row justify-start items-center gap-4 hover:text-blue-500 text-[#515151]"
                >
                  <a class="group-hover:underline group-hover:underline-offset-2" href="/regulation"
                    >Learn more</a
                  ><span class="group-hover:animate-custom-spin">&gt;</span>
                </div>
              </div>
            </div>
            <!-- <div
              class="step-item flex flex-col justify-start items-center gap-4 memd:flex-row-reverse"
            >
              <div class="step-img relative w-[210px] mesm:w-[240px] memd:flex-none">
                <img class="absolute w-full" src="@/assets/images/step1.webp" alt="step-1" />
                <img class="w-full" src="@/assets/images/step1-1.webp" alt="step-1" />
              </div>
              <div class="step-txt">
                <div class="txt-title">
                  <span
                    class="num pr-2 text-4xl mesm:text-5xl memd:text-6xl melg:text-7xl font-semibold bg-gradient-to-br from-[#0099fa] to-[#1a4dde] text-transparent bg-clip-text"
                    >1</span
                  >
                  <span class="num-title text-[#515151] text-xl font-semibold uppercase"
                    >Registration</span
                  >
                </div>
                <div class="desc text-base mt-4 text-[#515151]">
                  Create a free trading account by using your email address or simply authorize via
                  Facebook or Google accounts.
                </div>
              </div>
            </div>
            <div class="step-item flex flex-col justify-start items-center gap-4 memd:flex-row">
              <div class="step-img relative w-[210px] mesm:w-[240px] memd:flex-none">
                <img class="absolute" src="@/assets/images/step2.webp" alt="step-1" />
                <img src="@/assets/images/step2-1.webp" alt="step-1" />
              </div>
              <div class="step-txt">
                <div class="txt-title">
                  <span
                    class="num pr-2 text-4xl mesm:text-5xl memd:text-6xl melg:text-7xl font-semibold bg-gradient-to-br from-[#0099fa] to-[#1a4dde] text-transparent bg-clip-text"
                    >2</span
                  >
                  <span class="num-title text-[#515151] text-xl font-semibold uppercase"
                    >Verification</span
                  >
                </div>
                <div class="desc text-base mt-4 text-[#515151]">
                  Make your account personalized. Enter your personal information in the profile and
                  upload both ID document and address documents.
                </div>
              </div>
            </div>
            <div
              class="step-item flex flex-col justify-start items-center gap-4 memd:flex-row-reverse"
            >
              <div class="step-img relative w-[210px] mesm:w-[240px] memd:flex-none">
                <img class="absolute" src="@/assets/images/step3.webp" alt="step-1" />
                <img src="@/assets/images/step3-1.webp" alt="step-1" />
              </div>
              <div class="step-txt">
                <div class="txt-title">
                  <span
                    class="num pr-2 text-4xl mesm:text-5xl memd:text-6xl melg:text-7xl font-semibold bg-gradient-to-br from-[#0099fa] to-[#1a4dde] text-transparent bg-clip-text"
                    >3</span
                  >
                  <span class="num-title text-[#515151] text-xl font-semibold uppercase"
                    >Deposit</span
                  >
                </div>
                <div class="desc text-base mt-4 text-[#515151]">
                  Add funds to your trading account balance by using the most comfortable deposit
                  method. Processing time depends on the chosen option.
                </div>
              </div>
            </div>
            <div class="step-item flex flex-col justify-start items-center gap-4 memd:flex-row">
              <div class="step-img relative w-[210px] mesm:w-[240px] memd:flex-none">
                <img class="absolute" src="@/assets/images/step4.webp" alt="step-1" />
                <img src="@/assets/images/step4-1.webp" alt="step-1" />
              </div>
              <div class="step-txt">
                <div class="txt-title">
                  <span
                    class="num pr-2 text-4xl mesm:text-5xl memd:text-6xl melg:text-7xl font-semibold bg-gradient-to-br from-[#0099fa] to-[#1a4dde] text-transparent bg-clip-text"
                    >4</span
                  >
                  <span class="num-title text-[#515151] text-xl font-semibold uppercase"
                    >Trading</span
                  >
                </div>
                <div class="desc text-base mt-4 text-[#515151]">
                  Trading on Pocket Option is easy as 123. Choose a trading asset, set up the
                  preferred chart layout and enable indicators for better market analysis. Set the
                  trade amount, purchase time and place either a price decrease or increase order.
                </div>
              </div>
            </div>
            <div
              class="step-item flex flex-col justify-start items-center gap-4 memd:flex-row-reverse"
            >
              <div class="step-img relative w-[210px] mesm:w-[240px] memd:flex-none">
                <img class="absolute w-full" src="@/assets/images/step5.webp" alt="step-1" />
                <img src="@/assets/images/step5-1.webp" alt="step-1" />
              </div>
              <div class="step-txt">
                <div class="txt-title">
                  <span
                    class="num pr-2 text-4xl mesm:text-5xl memd:text-6xl melg:text-7xl font-semibold bg-gradient-to-br from-[#0099fa] to-[#1a4dde] text-transparent bg-clip-text"
                    >5</span
                  >
                  <span class="num-title text-[#515151] text-xl font-semibold uppercase"
                    >Profit</span
                  >
                </div>
                <div class="desc text-base mt-4 text-[#515151]">
                  Each correct forecast results in a profitable trade order. The order amount plus
                  the generated profit are automatically added to your account balance. Manage your
                  income properly, invest further or withdraw profit if necessary.
                </div>
              </div>
            </div>
            <div class="step-item flex flex-col justify-start items-center gap-4 memd:flex-row">
              <div class="step-img relative w-[210px] mesm:w-[240px] memd:flex-none">
                <img class="absolute" src="@/assets/images/step6.webp" alt="step-1" />
                <img src="@/assets/images/step6-1.webp" alt="step-1" />
              </div>
              <div class="step-txt">
                <div class="txt-title">
                  <span
                    class="num pr-2 text-4xl mesm:text-5xl memd:text-6xl melg:text-7xl font-semibold bg-gradient-to-br from-[#0099fa] to-[#1a4dde] text-transparent bg-clip-text"
                    >6</span
                  >
                  <span class="num-title text-[#515151] text-xl font-semibold uppercase"
                    >Withdrawal</span
                  >
                </div>
                <div class="desc text-base mt-4 text-[#515151]">
                  You can withdraw your trading account balance at any time without any restrictions
                  on the amount. Place a withdrawal request via one of the methods previously used
                  for depositing and wait for it to be processed and sent.
                </div>
              </div>
            </div> -->
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
