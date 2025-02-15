<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useDomScroll } from '@/hooks/useDomScroll'
import { useAppStore } from '@/stores/modules/app'
import homeBg1 from '@/assets/images/homebg1.webp'
import homeBg2 from '@/assets/images/homebg2.webp'
import homeBg3 from '@/assets/images/homebg3.webp'

const scrollContainer = ref<HTMLElement>()
const { scrollTop } = useDomScroll(scrollContainer)

watchEffect(() => {
  useAppStore().setScrollTop(scrollTop.value)
})
</script>

<template>
  <div class="home-wrapper h-full">
    <div ref="scrollContainer" class="home-container h-full overflow-auto">
      <!-- first screen -->
      <div class="home-banner h-full relative overflow-hidden">
        <div class="home-banner-bg h-full relative">
          <picture class="absolute top-1/2 left-0 transform -translate-y-1/2">
            <source :srcset="homeBg1" type="image/webp" />
            <img :src="homeBg1" alt="" />
          </picture>
          <picture class="h-[30%] absolute bottom-0 left-0 transform -translate-y-1/2">
            <source :srcset="homeBg2" type="image/webp" />
            <img :src="homeBg2" alt="" />
          </picture>
          <picture
            class="h-[80%] absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 md:translate-x-1/2"
          >
            <source :srcset="homeBg3" type="image/webp" />
            <img class="" :src="homeBg3" alt="" />
          </picture>
        </div>
        <div
          class="home-banner-content w-full absolute top-0 left-1/2 transform translate-y-1/3 -translate-x-1/2"
        >
          <div class="w-full py-20">
            <div
              class="w-full px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24 flex flex-col items-start justify-center gap-12"
            >
              <h1 class="text-white text-2xl font-bold sm:text-5xl">
                The right place<br />
                for online trading<br />
                on financial markets
              </h1>
              <div class="desc">
                <p class="text-white text-base md:text-xl">The most user-friendly interface</p>
                <p class="text-white text-base md:text-xl">
                  Get access to trade over 100 global trading assets
                </p>
              </div>
              <div>
                <a class="btn px-8 py-4 bg-btn-color rounded-lg text-lg hover:cursor-pointer"
                  >Start Trading Now</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Place your trades on best conditions -->
      <div class="w-full py-20 bg-gradient-to-br from-blue-200 to-slate-200">
        <div class="w-full px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24">
          <h2 class="text-text-color-4 text-3xl font-semibold mb-16 md:text-4xl xl:text-5xl">
            Place your trades on best conditions
          </h2>
          <div class="grid grid-cols-1 gap-12 mesm:grid-cols-2">
            <div class="grid-list grid gap-4 grid-cols-2 lg:grid-cols-3">
              <div class="item flex flex-col justify-start items-center gap-2">
                <div
                  class="value text-4xl font-bold bg-gradient-to-br from-red-500 to-blue-500 bg-clip-text text-transparent"
                >
                  $5*
                </div>
                <div class="name text-base text-gray-800 text-center memd:text-lg melg:text-xl">
                  Minimum investment amount
                </div>
              </div>
              <div class="item flex flex-col justify-start items-center gap-2">
                <div
                  class="value text-4xl font-bold bg-gradient-to-br from-red-500 to-blue-500 bg-clip-text text-transparent"
                >
                  $1
                </div>
                <div class="name text-base text-gray-800 text-center memd:text-lg melg:text-xl">
                  Minimum trade amount
                </div>
              </div>
              <div class="item flex flex-col justify-start items-center gap-2">
                <div
                  class="value text-4xl font-bold bg-gradient-to-br from-red-500 to-blue-500 bg-clip-text text-transparent"
                >
                  $50 000
                </div>
                <div class="name text-base text-gray-800 text-center memd:text-lg melg:text-xl">
                  Virtual money on your Demo account
                </div>
              </div>
              <div class="item flex flex-col justify-start items-center gap-2">
                <div
                  class="value text-4xl font-bold bg-gradient-to-br from-red-500 to-blue-500 bg-clip-text text-transparent"
                >
                  50+
                </div>
                <div class="name text-base text-gray-800 text-center memd:text-lg melg:text-xl">
                  Payment methods
                </div>
              </div>
              <div class="item flex flex-col justify-start items-center gap-2">
                <div
                  class="value text-4xl font-bold bg-gradient-to-br from-red-500 to-blue-500 bg-clip-text text-transparent"
                >
                  $0
                </div>
                <div class="name text-base text-gray-800 text-center memd:text-lg melg:text-xl">
                  No commission on deposit and withdrawal
                </div>
              </div>
              <div class="item flex flex-col justify-start items-center gap-2">
                <div
                  class="value text-4xl font-bold bg-gradient-to-br from-red-500 to-blue-500 bg-clip-text text-transparent"
                >
                  100+
                </div>
                <div class="name text-base text-gray-800 text-center memd:text-lg melg:text-xl">
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
      <!-- Why choose us? -->
      <div class="w-full py-20 bg-white">
        <div class="w-full px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24">
          <div class="text-text-color-4 text-3xl font-semibold mb-16 md:text-4xl xl:text-5xl">
            Why choose us?
          </div>
          <div class="grid-list grid grid-cols-1 gap-12 mesm:grid-cols-2 lg:grid-cols-4">
            <div
              class="item flex flex-col justify-start items-center gap-2 bg-gradient-to-br from-slate-500 via-blue-300 via-50% to-gray-500 p-2 rounded-lg hover:shadow-2xl shadow-gray-700 hover:cursor-pointer hover:scale-105 hover:skew-x-3 transition-all duration-300 ease-in-out"
            >
              <img src="@/assets/svg/why1.svg" alt="" class="p-1 shadow-xl" />
              <div class="content flex flex-col justify-start items-center gap-2">
                <div class="title text-text-color-5 text-xl font-semibold my-2">
                  Flexible Trading
                </div>
                <div class="desc text-text-color-6">
                  Latest trends: quick and digital trading, express trades, Forex MT5, pending
                  orders, trades copying. Payouts up to 218%.
                </div>
              </div>
            </div>
            <div
              class="item flex flex-col justify-start items-center gap-2 bg-gradient-to-br from-slate-500 via-blue-300 via-50% to-gray-500 p-2 rounded-lg hover:shadow-2xl shadow-gray-700 hover:cursor-pointer hover:scale-105 hover:skew-x-3 transition-all duration-300 ease-in-out"
            >
              <img src="@/assets/svg/why2.svg" alt="" class="p-1 shadow-xl" />
              <div class="content flex flex-col justify-start items-center gap-2">
                <div class="title text-text-color-5 text-xl font-semibold my-2">
                  Comprehensive Education
                </div>
                <div class="desc text-text-color-6">
                  Our help section contains tutorials, guides and various trading strategies.
                </div>
              </div>
            </div>
            <div
              class="item flex flex-col justify-start items-center gap-2 bg-gradient-to-br from-slate-500 via-blue-300 via-50% to-gray-500 p-2 rounded-lg hover:shadow-2xl shadow-gray-700 hover:cursor-pointer hover:scale-105 hover:skew-x-3 transition-all duration-300 ease-in-out"
            >
              <img src="@/assets/svg/why3.svg" alt="" class="p-1 shadow-xl" />
              <div class="content flex flex-col justify-start items-center gap-2">
                <div class="title text-text-color-5 text-xl font-semibold my-2">
                  Diverse Trading Instruments
                </div>
                <div class="desc text-text-color-6">
                  Assets suitable for any trader: currency, commodities, stocks.
                </div>
              </div>
            </div>
            <div
              class="item flex flex-col justify-start items-center gap-2 bg-gradient-to-br from-slate-500 via-blue-300 via-50% to-gray-500 p-2 rounded-lg hover:shadow-2xl shadow-gray-700 hover:cursor-pointer hover:scale-105 hover:skew-x-3 transition-all duration-300 ease-in-out"
            >
              <img src="@/assets/svg/why4.svg" alt="" class="p-1 shadow-xl" />
              <div class="content flex flex-col justify-start items-center gap-2">
                <div class="title text-text-color-5 text-xl font-semibold my-2">Demo Account</div>
                <div class="desc text-text-color-6">
                  Try all platform benefits on the Demo account using virtual money. No investment
                  needed, no risks involved.
                </div>
              </div>
            </div>
            <div
              class="item flex flex-col justify-start items-center gap-2 bg-gradient-to-br from-slate-500 via-blue-300 via-50% to-gray-500 p-2 rounded-lg hover:shadow-2xl shadow-gray-700 hover:cursor-pointer hover:scale-105 hover:skew-x-3 transition-all duration-300 ease-in-out"
            >
              <img src="@/assets/svg/why5.svg" alt="" class="p-1 shadow-xl" />
              <div class="content flex flex-col justify-start items-center gap-2">
                <div class="title text-text-color-5 text-xl font-semibold my-2">
                  Easy Deposits and Withdrawals
                </div>
                <div class="desc text-text-color-6">
                  Use the most convenient payment method for hassle-free deposits and withdrawals.
                </div>
              </div>
            </div>
            <div
              class="item flex flex-col justify-start items-center gap-2 bg-gradient-to-br from-slate-500 via-blue-300 via-50% to-gray-500 p-2 rounded-lg hover:shadow-2xl shadow-gray-700 hover:cursor-pointer hover:scale-105 hover:skew-x-3 transition-all duration-300 ease-in-out"
            >
              <img src="@/assets/svg/why6.svg" alt="" class="p-1 shadow-xl" />
              <div class="content flex flex-col justify-start items-center gap-2">
                <div class="title text-text-color-5 text-xl font-semibold my-2">
                  High Customer Loyalty
                </div>
                <div class="desc text-text-color-6">
                  Trading tournaments, regular bonuses, gifts, promo codes and contests are
                  available to any trader.
                </div>
              </div>
            </div>
            <div
              class="item flex flex-col justify-start items-center gap-2 bg-gradient-to-br from-slate-500 via-blue-300 via-50% to-gray-500 p-2 rounded-lg hover:shadow-2xl shadow-gray-700 hover:cursor-pointer hover:scale-105 hover:skew-x-3 transition-all duration-300 ease-in-out"
            >
              <img src="@/assets/svg/why7.svg" alt="" class="p-1 shadow-xl" />
              <div class="content flex flex-col justify-start items-center gap-2">
                <div class="title text-text-color-5 text-xl font-semibold my-2">
                  Trading Advantages
                </div>
                <div class="desc text-text-color-6">
                  Use cashback and other advantages for a more comfortable trading experience with
                  minimal risks.
                </div>
              </div>
            </div>
            <div
              class="item flex flex-col justify-start items-center gap-2 bg-gradient-to-br from-slate-500 via-blue-300 via-50% to-gray-500 p-2 rounded-lg hover:shadow-2xl shadow-gray-700 hover:cursor-pointer hover:scale-105 hover:skew-x-3 transition-all duration-300 ease-in-out"
            >
              <img src="@/assets/svg/why8.svg" alt="" class="p-1 shadow-xl" />
              <div class="content flex flex-col justify-start items-center gap-2">
                <div class="title text-text-color-5 text-xl font-semibold my-2">
                  Indicators and Signals
                </div>
                <div class="desc text-text-color-6">
                  Everything you need for a top-tier trading experience including popular indicators
                  and signals.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-container {
  scrollbar-width: none;
}
</style>
