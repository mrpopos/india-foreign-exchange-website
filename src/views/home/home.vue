<script setup lang="ts">
import { defineComponent } from 'vue'
import homeBg1 from '@/assets/images/homebg1.webp'
import homeBg2 from '@/assets/images/homebg2.webp'
import homeBg3 from '@/assets/images/homebg3.webp'

defineComponent({
  name: 'HomeView',
})
</script>

<template>
  <div class="home-wrapper h-full">
    <div class="home-container h-full">
      <!-- first screen -->
      <div class="home-banner h-full relative">
        <div class="home-banner-bg h-full relative">
          <picture class="absolute top-1/2 left-0 transform -translate-y-1/2">
            <source :srcset="homeBg1" type="image/webp" />
            <img :src="homeBg1" alt="" />
          </picture>
          <picture class="absolute top-1/2 left-0 transform translate-y-1/3">
            <source :srcset="homeBg2" type="image/webp" />
            <img :src="homeBg2" alt="" />
          </picture>
          <picture class="h-full absolute bottom-0 right-0 transform translate-x-1/3 md:translate-x-1/2">
            <source :srcset="homeBg3" type="image/webp" />
            <img class="h-full" :src="homeBg3" alt="" />
          </picture>
        </div>
        <div
          class="home-banner-content w-full absolute top-0 left-1/2 transform translate-y-1/3 -translate-x-1/2"
        >
          <div class="w-full py-20">
            <div class="w-full melg:max-w-[1200px] px-6 mx-auto flex flex-col items-start justify-center gap-12">
              <h1 class="text-white text-2xl font-bold sm:text-5xl">
                The right place<br />
                for online trading<br />
                on financial markets
              </h1>
              <div class="desc">
                <p class="text-white text-base md:text-xl">The most user-friendly interface</p>
                <p class="text-white text-base md:text-xl">Get access to trade over 100 global trading assets</p>
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
      <!-- Why choose us? -->
      <div class="w-full py-20">
        <div class="w-full melg:max-w-[1200px] px-6 mx-auto">
          <div class="text-3xl font-semibold mb-16 md:text-4xl xl:text-5xl">Why choose us?</div>
          <div class="grid-list grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div class="item">
              <img src="@/assets/svg/why1.svg" alt="" />
              <div class="content">
                <div class="title text-xl font-semibold my-2">Flexible Trading</div>
                <div class="desc">
                  Latest trends: quick and digital trading, express trades, Forex MT5, pending
                  orders, trades copying. Payouts up to 218%.
                </div>
              </div>
            </div>
            <div class="item">
              <img src="@/assets/svg/why2.svg" alt="" />
              <div class="content">
                <div class="title text-xl font-semibold my-2">Flexible Trading</div>
                <div class="desc">
                  Latest trends: quick and digital trading, express trades, Forex MT5, pending
                  orders, trades copying. Payouts up to 218%.
                </div>
              </div>
            </div>
            <div class="item">
              <img src="@/assets/svg/why3.svg" alt="" />
              <div class="content">
                <div class="title text-xl font-semibold my-2">Flexible Trading</div>
                <div class="desc">
                  Latest trends: quick and digital trading, express trades, Forex MT5, pending
                  orders, trades copying. Payouts up to 218%.
                </div>
              </div>
            </div>
            <div class="item">
              <img src="@/assets/svg/why4.svg" alt="" />
              <div class="content">
                <div class="title text-xl font-semibold my-2">Flexible Trading</div>
                <div class="desc">
                  Latest trends: quick and digital trading, express trades, Forex MT5, pending
                  orders, trades copying. Payouts up to 218%.
                </div>
              </div>
            </div>
            <div class="item">
              <img src="@/assets/svg/why5.svg" alt="" />
              <div class="content">
                <div class="title text-xl font-semibold my-2">Flexible Trading</div>
                <div class="desc">
                  Latest trends: quick and digital trading, express trades, Forex MT5, pending
                  orders, trades copying. Payouts up to 218%.
                </div>
              </div>
            </div>
            <div class="item">
              <img src="@/assets/svg/why6.svg" alt="" />
              <div class="content">
                <div class="title text-xl font-semibold my-2">Flexible Trading</div>
                <div class="desc">
                  Latest trends: quick and digital trading, express trades, Forex MT5, pending
                  orders, trades copying. Payouts up to 218%.
                </div>
              </div>
            </div>
            <div class="item">
              <img src="@/assets/svg/why7.svg" alt="" />
              <div class="content">
                <div class="title text-xl font-semibold my-2">Flexible Trading</div>
                <div class="desc">
                  Latest trends: quick and digital trading, express trades, Forex MT5, pending
                  orders, trades copying. Payouts up to 218%.
                </div>
              </div>
            </div>
            <div class="item">
              <img src="@/assets/svg/why8.svg" alt="" />
              <div class="content">
                <div class="title text-xl font-semibold my-2">Flexible Trading</div>
                <div class="desc">
                  Latest trends: quick and digital trading, express trades, Forex MT5, pending
                  orders, trades copying. Payouts up to 218%.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
