<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useDomScroll } from '@/hooks/useDomScroll'
import { useAppStore } from '@/stores/modules/app'
import homeBg1 from '@/assets/images/homebg1.webp'
import homeBg2 from '@/assets/images/homebg2.webp'
import homeBg3 from '@/assets/images/homebg3.webp'
import 'vue3-carousel/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import Footer from '@/layout/components/footer.vue'

const scrollContainer = ref()
const { scrollTop } = useDomScroll(scrollContainer)

watchEffect(() => {
  useAppStore().setScrollTop(scrollTop.value)
})

const carouselConfig = {
  // dir: 'ltr',
  autoplay: 5000,
  // breakpointMode: 'viewport',
  itemsToShow: 1,
  wrapAround: true,
  transition: 500
}

const peopleSays = [
  {
    datetime: '2025-02-14 21:06:22',
    content: 'One of the best broker Fast withdrawal fast deposit And fast support chat Thank you.',
    name: 'Md Ali A.',
    uid: '92871649'
  },
  {
    datetime: '2025-02-06 16:02:41',
    content: 'very good broker, good support and fast deposit and withdrawal',
    name: 'Grace Bis. M.',
    uid: '86806202'
  },
  {
    datetime: '2025-02-06 04:10:04',
    content: 'Pocket option is a very good broker, and good support and fast withdraw, thank you pocket option, I recommend everyone to trade with pocket option',
    name: 'Buang Joh. L.',
    uid: '76984067'
  },
  {
    datetime: '2025-02-06 01:05:06',
    content: "This is the best binary broker I've ever used. Many features, very safe and incredibly easy to use. Just to focus on trading and that's it.",
    name: 'Luis Enri. M.',
    uid: '21797358'
  },
  {
    datetime: '2025-02-03 14:31:00',
    content: 'Pocket option is amazing platform I like it',
    name: 'Ndilimeke. S.',
    uid: '87145019'
  },
  {
    datetime: '2025-02-02 10:53:20',
    content: 'The platform is good and suitable for any trader be it a beginner or a pro . The withdrawal are done just as you won without commission ✅ great tradi',
    name: 'Collins K. K.',
    uid: '78591272'
  },
  {
    datetime: '2025-01-29 02:14:11',
    content: 'It is a nice platform. I like quick trades of lower time frames. This platform has given me this opportunity.',
    name: 'Shabana D. K.',
    uid: '85895057'
  },
  {
    datetime: '2025-01-26 18:15:29',
    content: 'This is one of the genuine app which pays after withdrawal request.',
    name: 'Sai Radh. G.',
    uid: '58113304'
  },
  {
    datetime: '2025-01-16 10:51:24',
    content: "My friend recommended these platform, I'd tried and practice with him a week and i fell love in Pocket Option very good trading platform and very convinient for deposite and withdrawal.",
    name: 'Nilesh As. S.',
    uid: '90367596'
  },
  {
    datetime: '2025-01-16 07:02:49',
    content: 'best broker for binary trading ,you can earn whenever you want and fast withdrawal . i love pocket option',
    name: 'Md Redwan A.',
    uid: '85873415'
  },
  {
    datetime: '2025-01-03 18:56:19',
    content: 'The best broker ever batter market then every binary platform and even qoutex',
    name: 'Saqib R.',
    uid: '72274858'
  },
  {
    datetime: '2025-01-03 08:44:14',
    content: 'A convenient platform with its services, speed in depositing, copying services, trading bot, social copying, etc., which makes it distinct from others.',
    name: 'Hesham A.',
    uid: '74908520'
  },
  {
    datetime: '2025-01-03 01:56:46',
    content: "It's a best trading platform and accuracy is wonderful",
    name: 'Irshad K.',
    uid: '90008170'
  },
  {
    datetime: '2025-01-02 07:17:59',
    content: 'Best, beautiful and authentic platform for real trading!',
    name: 'Amit K.',
    uid: '76508845'
  }
]
</script>

<template>
  <div class="home-wrapper h-full">
    <div ref="scrollContainer" class="home-container h-full overflow-auto">
      <!-- first screen -->
      <div class="home-banner bg-gradient-to-b from-[#003b72] via-[#00264a] via-50% to-[#00264a] h-full relative overflow-hidden">
        <div class="home-banner-bg h-full relative">
          <picture class="w-[1920px] h-[450px] absolute bottom-1/2 right-0 transform -translate-y-1/1">
            <source :srcset="homeBg1" type="image/webp" />
            <img :src="homeBg1" alt="" />
          </picture>
          <picture
            class="w-[300px] mesm:w-[400px] memd:w-[450px] melg:w-[500px] absolute top-0 left-0 transform translate-x-0 translate-y-[100px] mesm:translate-x-[40px] mesm:translate-y-[120px] memd:translate-x-[25%] memd:translate-y-[140px] melg:translate-x-[25%] melg:translate-y-[140px]">
            <source class="w-full" :srcset="homeBg2" type="image/webp" />
            <img class="w-full" :src="homeBg2" alt="" />
          </picture>
          <picture
            class="w-[450px] mesm:w-[800px] memd:w-[1100px] melg:w-[1300px] absolute bottom-0 right-0 transform translate-x-[150px] translate-y-10 mesm:translate-x-[200px] mesm:translate-y-20 memd:translate-x-[300px] memd:translate-y-20 melg:translate-x-[450px] melg:translate-y-24">
            <source class="w-full" :srcset="homeBg3" type="image/webp" />
            <img class="w-full" :src="homeBg3" alt="" />
          </picture>
        </div>
        <div class="home-banner-content w-full absolute top-0 left-1/2 transform translate-y-1/3 -translate-x-1/2">
          <div class="w-full pb-20 memd:pt-20">
            <div class="w-full px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24 flex flex-col items-start justify-center gap-12">
              <h1 v-animate-onscroll.once="'animate__slideInLeft'" class="text-white text-3xl font-bold mesm:text-5xl melg:text-6xl melg:font-semibold melg:leading-[80px]">
                THE RIGHT PLACE<br />
                FOR ONLINE TRADING<br />
                ON FINANCIAL MARKETS
              </h1>
              <div v-animate-onscroll.once="'animate__slideInLeft'" class="desc">
                <p class="text-white text-base md:text-xl">The most user-friendly interface</p>
                <p class="text-white text-base md:text-xl">Get access to trade over 100 global trading assets</p>
              </div>
              <div v-animate-onscroll.once="'animate__slideInLeft'">
                <a class="btn px-8 py-4 bg-white rounded-lg text-lg hover:cursor-pointer bg-gradient-to-r from-[#0099fa] to-[#002ed9] text-white hover:from-[#1d6b9c] hover:to-[#1e358a]">Start Trading Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Place your trades on best conditions -->
      <div class="w-full py-20">
        <div class="w-full px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24">
          <h2 class="text-text-color-4 font-semibold mb-16 text-[20px] mesm:text-[24px] memd:text-[28px] melg:text-[32px]">Place your trades on best conditions</h2>
          <div class="grid grid-cols-1 gap-12 mesm:grid-cols-2">
            <div v-animate-onscroll.once="'animate__slideInLeft'" class="grid-list grid gap-4 grid-cols-2 lg:grid-cols-2">
              <div class="item flex flex-col justify-start items-center gap-2">
                <div class="value text-4xl font-bold bg-gradient-to-br from-[#0099fa] to-[#1a4dde] bg-clip-text text-transparent">$5*</div>
                <div class="name text-base text-text-color-6 text-center memd:text-base melg:text-lg">Minimum investment amount</div>
              </div>
              <div class="item flex flex-col justify-start items-center gap-2">
                <div class="value text-4xl font-bold bg-gradient-to-br from-[#0099fa] to-[#1a4dde] bg-clip-text text-transparent">$1</div>
                <div class="name text-base text-text-color-6 text-center memd:text-base melg:text-lg">Minimum trade amount</div>
              </div>
              <div class="item flex flex-col justify-start items-center gap-2">
                <div class="value text-4xl font-bold bg-gradient-to-br from-[#0099fa] to-[#1a4dde] bg-clip-text text-transparent">$50 000</div>
                <div class="name text-base text-text-color-6 text-center memd:text-base melg:text-lg">Virtual money on your Demo account</div>
              </div>
              <div class="item flex flex-col justify-start items-center gap-2">
                <div class="value text-4xl font-bold bg-gradient-to-br from-[#0099fa] to-[#1a4dde] bg-clip-text text-transparent">50+</div>
                <div class="name text-base text-text-color-6 text-center memd:text-base melg:text-lg">Payment methods</div>
              </div>
              <div class="item flex flex-col justify-start items-center gap-2">
                <div class="value text-4xl font-bold bg-gradient-to-br from-[#0099fa] to-[#1a4dde] bg-clip-text text-transparent">$0</div>
                <div class="name text-base text-text-color-6 text-center memd:text-base melg:text-lg">No commission on deposit and withdrawal</div>
              </div>
              <div class="item flex flex-col justify-start items-center gap-2">
                <div class="value text-4xl font-bold bg-gradient-to-br from-[#0099fa] to-[#1a4dde] bg-clip-text text-transparent">100+</div>
                <div class="name text-base text-text-color-6 text-center memd:text-base melg:text-lg">Assets for trading</div>
              </div>
            </div>
            <div v-animate-onscroll.once="'animate__slideInRight'" class="img flex items-center justify-center">
              <img src="@/assets/images/nowdata.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
      <!-- licensed and regulated online broker -->
      <div class="w-full py-20 bg-section-bg">
        <div class="w-full px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24">
          <div v-animate-onscroll.once="'animate__bounceInUp'" class="text-[20px] mesm:text-[24px] memd:text-[28px] melg:text-[32px] font-semibold">ForeignExchange is a licensed and regulated online broker</div>
          <div v-animate-onscroll.once="'animate__bounceInUp'" class="content text-base text-center my-16 text-[#515151]">
            ForeignExchange is a licensed and regulated broker by the Vanuatu Financial Services Commission. ForeignExchange is committed to providing the highest quality of service. Our clients are covered by deposit insurance and have
            access to comprehensive support and prompt resolution of any issues concerning their financial interactions with ForeignExchange.
          </div>
          <div v-animate-onscroll.once="'animate__bounceInUp'" class="link group text-xl font-semibold flex flex-row justify-center items-center gap-4 hover:text-blue-500 text-[#515151]">
            <a class="group-hover:underline group-hover:underline-offset-2" href="/regulation">Learn more</a><span class="group-hover:animate-spin">&gt;</span>
          </div>
        </div>
      </div>
      <!-- Why choose us? -->
      <div class="w-full py-20 bg-white">
        <div class="w-full px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24">
          <div class="font-semibold mb-16 text-[20px] mesm:text-[24px] memd:text-[28px] melg:text-[32px]">Why choose us?</div>
          <div class="grid-list grid grid-cols-1 gap-12 mesm:grid-cols-2 lg:grid-cols-4">
            <div
              v-animate-onscroll.once="'animate__fadeInTopLeft'"
              class="item flex flex-col justify-start items-center gap-2 bg-gradient-to-br from-slate-500 via-blue-300 via-50% to-gray-500 p-2 rounded-lg hover:shadow-2xl shadow-gray-700 hover:cursor-pointer hover:scale-105 hover:from-gray-500 hover:via-blue-300 hover:via-50% hover:to-slate-500 transition-all duration-300 ease-in-out">
              <img src="@/assets/svg/why1.svg" alt="" class="p-1 shadow-xl" />
              <div class="content flex flex-col justify-start items-center gap-2">
                <div class="title text-xl font-semibold my-2 text-center">Flexible Trading</div>
                <div class="desc text-text-color-6 text-center">Latest trends: quick and digital trading, express trades, Forex MT5, pending orders, trades copying. Payouts up to 218%.</div>
              </div>
            </div>
            <div
              v-animate-onscroll.once="'animate__fadeInTopLeft'"
              class="item flex flex-col justify-start items-center gap-2 bg-gradient-to-br from-slate-500 via-blue-300 via-50% to-gray-500 p-2 rounded-lg hover:shadow-2xl shadow-gray-700 hover:cursor-pointer hover:scale-105 hover:from-gray-500 hover:via-blue-300 hover:via-50% hover:to-slate-500 transition-all duration-300 ease-in-out">
              <img src="@/assets/svg/why2.svg" alt="" class="p-1 shadow-xl" />
              <div class="content flex flex-col justify-start items-center gap-2">
                <div class="title text-xl font-semibold my-2 text-center">Comprehensive Education</div>
                <div class="desc text-text-color-6 text-center">Our help section contains tutorials, guides and various trading strategies.</div>
              </div>
            </div>
            <div
              v-animate-onscroll.once="'animate__fadeInTopRight'"
              class="item flex flex-col justify-start items-center gap-2 bg-gradient-to-br from-slate-500 via-blue-300 via-50% to-gray-500 p-2 rounded-lg hover:shadow-2xl shadow-gray-700 hover:cursor-pointer hover:scale-105 hover:from-gray-500 hover:via-blue-300 hover:via-50% hover:to-slate-500 transition-all duration-300 ease-in-out">
              <img src="@/assets/svg/why3.svg" alt="" class="p-1 shadow-xl" />
              <div class="content flex flex-col justify-start items-center gap-2">
                <div class="title text-xl font-semibold my-2 text-center">Diverse Trading Instruments</div>
                <div class="desc text-text-color-6 text-center">Assets suitable for any trader: currency, commodities, stocks.</div>
              </div>
            </div>
            <div
              v-animate-onscroll.once="'animate__fadeInTopRight'"
              class="item flex flex-col justify-start items-center gap-2 bg-gradient-to-br from-slate-500 via-blue-300 via-50% to-gray-500 p-2 rounded-lg hover:shadow-2xl shadow-gray-700 hover:cursor-pointer hover:scale-105 hover:from-gray-500 hover:via-blue-300 hover:via-50% hover:to-slate-500 transition-all duration-300 ease-in-out">
              <img src="@/assets/svg/why4.svg" alt="" class="p-1 shadow-xl" />
              <div class="content flex flex-col justify-start items-center gap-2">
                <div class="title text-xl font-semibold my-2 text-center">Demo Account</div>
                <div class="desc text-text-color-6 text-center">Try all platform benefits on the Demo account using virtual money. No investment needed, no risks involved.</div>
              </div>
            </div>
            <div
              v-animate-onscroll.once="'animate__fadeInTopLeft'"
              class="item flex flex-col justify-start items-center gap-2 bg-gradient-to-br from-slate-500 via-blue-300 via-50% to-gray-500 p-2 rounded-lg hover:shadow-2xl shadow-gray-700 hover:cursor-pointer hover:scale-105 hover:from-gray-500 hover:via-blue-300 hover:via-50% hover:to-slate-500 transition-all duration-300 ease-in-out">
              <img src="@/assets/svg/why5.svg" alt="" class="p-1 shadow-xl" />
              <div class="content flex flex-col justify-start items-center gap-2">
                <div class="title text-xl font-semibold my-2 text-center">Easy Deposits and Withdrawals</div>
                <div class="desc text-text-color-6 text-center">Use the most convenient payment method for hassle-free deposits and withdrawals.</div>
              </div>
            </div>
            <div
              v-animate-onscroll.once="'animate__fadeInTopLeft'"
              class="item flex flex-col justify-start items-center gap-2 bg-gradient-to-br from-slate-500 via-blue-300 via-50% to-gray-500 p-2 rounded-lg hover:shadow-2xl shadow-gray-700 hover:cursor-pointer hover:scale-105 hover:from-gray-500 hover:via-blue-300 hover:via-50% hover:to-slate-500 transition-all duration-300 ease-in-out">
              <img src="@/assets/svg/why6.svg" alt="" class="p-1 shadow-xl" />
              <div class="content flex flex-col justify-start items-center gap-2">
                <div class="title text-xl font-semibold my-2 text-center">High Customer Loyalty</div>
                <div class="desc text-text-color-6 text-center">Trading tournaments, regular bonuses, gifts, promo codes and contests are available to any trader.</div>
              </div>
            </div>
            <div
              v-animate-onscroll.once="'animate__fadeInTopRight'"
              class="item flex flex-col justify-start items-center gap-2 bg-gradient-to-br from-slate-500 via-blue-300 via-50% to-gray-500 p-2 rounded-lg hover:shadow-2xl shadow-gray-700 hover:cursor-pointer hover:scale-105 hover:from-gray-500 hover:via-blue-300 hover:via-50% hover:to-slate-500 transition-all duration-300 ease-in-out">
              <img src="@/assets/svg/why7.svg" alt="" class="p-1 shadow-xl" />
              <div class="content flex flex-col justify-start items-center gap-2">
                <div class="title text-xl font-semibold my-2 text-center">Trading Advantages</div>
                <div class="desc text-text-color-6 text-center">Use cashback and other advantages for a more comfortable trading experience with minimal risks.</div>
              </div>
            </div>
            <div
              v-animate-onscroll.once="'animate__fadeInTopRight'"
              class="item flex flex-col justify-start items-center gap-2 bg-gradient-to-br from-slate-500 via-blue-300 via-50% to-gray-500 p-2 rounded-lg hover:shadow-2xl shadow-gray-700 hover:cursor-pointer hover:scale-105 hover:from-gray-500 hover:via-blue-300 hover:via-50% hover:to-slate-500 transition-all duration-300 ease-in-out">
              <img src="@/assets/svg/why8.svg" alt="" class="p-1 shadow-xl" />
              <div class="content flex flex-col justify-start items-center gap-2">
                <div class="title text-xl font-semibold my-2 text-center">Indicators and Signals</div>
                <div class="desc text-text-color-6 text-center">Everything you need for a top-tier trading experience including popular indicators and signals.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- What people say about us -->
      <div class="w-full py-20 bg-section-bg">
        <div class="w-full px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24">
          <div class="">
            <h2 class="font-semibold mb-4 text-[20px] mesm:text-[24px] memd:text-[28px] melg:text-[32px]">What people say about us</h2>
            <p class="text-base mb-8 md:text-lg mesm:mb-16">More than 10 million customers worldwide trust us and earn daily.</p>
          </div>
          <div v-animate-onscroll.once="'animate__jackInTheBox'" class="my-carousel shadow-lg shadow-indigo-500/40 rounded-xl boeder-4 border-indigo-500">
            <Carousel v-bind="carouselConfig" class="px-8 py-6">
              <Slide v-for="(slide, index) in peopleSays" :key="index">
                <div class="carousel__item w-full">
                  <div class="imgtxt w-full flex flex-col justify-start items-center gap-6 mesm:flex-row mesm:gap-12">
                    <div class="avator flex flex-col justify-center items-center gap-2">
                      <img src="@/assets/images/avator01.png" alt="" />
                      <span class="name text-nowrap">{{ slide.name }}</span>
                      <span class="text-nowrap text-base text-text-color-6">UID {{ slide.uid }}</span>
                    </div>
                    <div class="right w-full flex flex-col justify-start items-start gap-6">
                      <div class="stardatetime w-full flex flex-row justify-between items-center gap-4">
                        <div class="star text-xl flex flex-row justify-start items-center gap-1 text-blue-500 mesm:text-3xl">
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                        </div>
                        <div class="datetime text-text-color-6 text-base flex flex-row justify-start items-center gap-1 mesm:text-base">
                          <span>{{ slide.datetime }}</span>
                        </div>
                      </div>
                      <div class="desc leading-7 text-base text-text-color-6 mesm:text-base">
                        {{ slide.content }}
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
              <!-- <template #addons>
                <Navigation />
                <Pagination />
              </template> -->
            </Carousel>
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
