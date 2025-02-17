<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import Footer from '@/layout/components/footer.vue'
import { useDomScroll } from '@/hooks/useDomScroll'
import { useAppStore } from '@/stores/modules/app'
import historyIcon1 from '@/assets/images/history1.webp'
import historyIcon2 from '@/assets/images/history2.webp'
import historyIcon3 from '@/assets/images/history3.webp'
import historyIcon4 from '@/assets/images/history4.webp'
import historyIcon5 from '@/assets/images/history5.webp'
import historyIcon6 from '@/assets/images/history6.webp'
import historyIcon7 from '@/assets/images/history7.webp'
import historyIcon8 from '@/assets/images/history8.webp'

const historytData = [
  {
    title: '2017',
    desc: [
      'Everything begins this year:',
      'Company founded and idea of creating an online platform that is a combination of pricing, execution speed, cutting-edge platforms, product range, customer support and market analysis was conceived.',
    ],
    img: historyIcon1,
  },
  {
    title: '2018',
    desc: [
      'The first mobile app of Guru Trade7 launched in India:',
      'An online trading platform that makes trading easy to understand and accessible to everyone, we made trades available via a handy mobile app that could allow traders perform any action on the platform on the go.',
    ],
    img: historyIcon2,
  },
  {
    title: '2019',
    desc: [
      'We continue to grow by improving existing services and upgrading our technique.',
      "At the end of the year, we got acknowledged worldwide and received 'Best Technology Application' award.",
    ],
    img: historyIcon3,
  },
  {
    title: '2020',
    desc: [
      'Numbers of Guru Trade7 exceeds 10M users.',
      'Starting to earn reputation from global traders.',
    ],
    img: historyIcon4,
  },
  {
    title: '2021',
    desc: [
      '2021 marks the entrance of Guru Trade7 into the international market.',
      'Satisfaction with our service and excellent client reviews helped us quickly earn the trust and favor of traders all over the world. Exponential expansion made us the Fastest growing broker, 2022.',
    ],
    img: historyIcon5,
  },
  {
    title: '2022',
    desc: [
      'Guru Trade7 launches its cutting-edge, intuitive Web Trading platform, enabling anyone, anywhere to trade financial assets online for both beginner and advanced traders.',
    ],
    img: historyIcon6,
  },
  {
    title: '2023',
    desc: [
      'In 2023, we relentlessly pursued innovation, introducing a plethora of captivating features and services to meet the ever-growing demands of our users. Through bold upgrades and transformations, the Guru Trade7 platform has evolved to become more modern and comprehensive, further enhancing the user experience.',
    ],
    img: historyIcon7,
  },
  {
    title: '2024',
    desc: [
      'We sincerely appreciate the support and trust that users have bestowed upon Guru Trade7 in the past years. In 2024, with a heart full of gratitude, we look forward to growing together with all the traders who join our extended family, collectively creating a more brilliant future.',
    ],
    img: historyIcon8,
  },
]

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
      <section class="quick-banner overflow-hidden bg-aboutbg bg-cover">
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
              6 YEARS OF INCREDIBLE SERVICE
            </h1>
            <div class="desc text-sm text-gray-700">
              <p class="text-gray-500 text-base md:text-xl py-1">
                Offer an all-in-one self-directed investment platform that provides advanced and
                intelligent tools;
              </p>
              <p class="text-gray-500 text-base md:text-xl py-1">
                To be a leader in trading industry by providing innovative financial trading
                plaform;
              </p>
              <p class="text-gray-500 text-base md:text-xl py-1">
                Be a client-centric company with a clear focus on providing long-term value addition
                to clients.
              </p>
            </div>
            <!-- <div>
              <a class="btn px-8 py-4 bg-btn-color rounded-lg text-lg hover:cursor-pointer"
                >REGISTRATION</a
              >
            </div> -->
          </div>
        </div>
      </section>
      <!-- Legacy of committed excellence -->
      <section class="legacy-of w-full py-20 bg-gradient-to-br from-blue-200 to-slate-200">
        <div class="w-full px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24">
          <h2 class="title text-gray-800 px-6 pt-4 text-2xl font-semibold mb-8 text-center">
            Legacy of committed excellence
          </h2>
          <p class="text-gray-600 text-center font-semibold leading-6 mb-8">
            Serving 100M+ happy traders over 6 years. And the list keeps growing.
          </p>
          <div class="feature-list grid grid-cols-2 gap-4 mesm:grid-cols-3 memd:grid-cols-5">
            <div
              class="feature-item bg-gray-100 p-7 rounded-lg flex flex-col justify-center items-center gap-2"
            >
              <div class="counter text-gray-800 font-semibold text-2xl">6+</div>
              <div class="count-desc text-gray-600 font-semibold text-sm text-center">
                YEARS OF TRUST
              </div>
            </div>
            <div
              class="feature-item bg-gray-100 p-7 rounded-lg flex flex-col justify-center items-center gap-2"
            >
              <div class="counter text-gray-800 font-semibold text-2xl">100M+</div>
              <div class="count-desc text-gray-600 font-semibold text-sm text-center">
                LOYAL TRADERS WORLDWIDE
              </div>
            </div>
            <div
              class="feature-item bg-gray-100 p-7 rounded-lg flex flex-col justify-center items-center gap-2"
            >
              <div class="counter text-gray-800 font-semibold text-2xl">10M+</div>
              <div class="count-desc text-gray-600 font-semibold text-sm text-center">
                TRADES PER DAY
              </div>
            </div>
            <div
              class="feature-item bg-gray-100 p-7 rounded-lg flex flex-col justify-center items-center gap-2"
            >
              <div class="counter text-gray-800 font-semibold text-2xl">$20M</div>
              <div class="count-desc text-gray-600 font-semibold text-sm text-center">
                TRADE VOLUME PER MONTH
              </div>
            </div>
            <div
              class="feature-item bg-gray-100 p-7 rounded-lg flex flex-col justify-center items-center gap-2"
            >
              <div class="counter text-gray-800 font-semibold text-2xl">$20M</div>
              <div class="count-desc text-gray-600 font-semibold text-sm text-center">
                WITHDRAWN BY TRADERS PER MONTH
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Support Team from Guru Trade7 -->
      <section class="suport-team w-full py-20 bg-gradient-to-br from-blue-200 to-slate-200">
        <div class="w-full px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24">
          <h2 class="title text-gray-800 px-6 pt-4 text-2xl font-semibold mb-8 text-center">
            Support Team from Guru Trade7
          </h2>
          <p class="text-gray-600 text-center font-semibold leading-6 mb-8">
            Every decision we make is centered around our users' needs and convenience.
          </p>
          <div class="card-list grid grid-cols-1 gap-4 mexs:grid-cols-2 memd:grid-cols-4">
            <div
              class="card-item bg-gray-100 p-7 rounded-lg flex flex-col justify-center items-center gap-2"
            >
              <div class="flex flex-col justify-center items-center gap-2">
                <div class="cart-left flex flex-col justify-center items-center gap-1">
                  <div class="card-title text-base text-gray-600 font-bold">Team</div>
                  <div class="card-value text-2xl text-gray-800 font-bold">100</div>
                  <div class="card-desc text-center text-base text-gray-700 font-bold">
                    Support Members
                  </div>
                </div>
                <div class="cart-right">
                  <img src="@/assets/images/aboutcard1.webp" alt="" />
                </div>
              </div>
            </div>
            <div
              class="card-item bg-gray-100 p-7 rounded-lg flex flex-col justify-center items-center gap-2"
            >
              <div class="flex flex-col justify-center items-center gap-2">
                <div class="cart-left flex flex-col justify-center items-center gap-1">
                  <div class="card-title text-base text-gray-600 font-bold">Email</div>
                  <div class="card-value text-2xl text-gray-800 font-bold">20</div>
                  <div class="card-desc text-center text-base text-gray-700 font-bold">Minutes</div>
                </div>
                <div class="cart-right">
                  <img src="@/assets/images/aboutcard1.webp" alt="" />
                </div>
              </div>
            </div>
            <div
              class="card-item bg-gray-100 p-7 rounded-lg flex flex-col justify-center items-center gap-2"
            >
              <div class="flex flex-col justify-center items-center gap-2">
                <div class="cart-left flex flex-col justify-center items-center gap-1">
                  <div class="card-title text-base text-gray-600 font-bold">Chat</div>
                  <div class="card-value text-2xl text-gray-800 font-bold">50</div>
                  <div class="card-desc text-center text-base text-gray-700 font-bold">Seconds</div>
                </div>
                <div class="cart-right">
                  <img src="@/assets/images/aboutcard1.webp" alt="" />
                </div>
              </div>
            </div>
            <div
              class="card-item bg-gray-100 p-7 rounded-lg flex flex-col justify-center items-center gap-2"
            >
              <div class="flex flex-col justify-center items-center gap-2">
                <div class="cart-left flex flex-col justify-center items-center gap-1">
                  <div class="card-title text-base text-gray-600 font-bold">Exclusive</div>
                  <div class="card-value text-2xl text-gray-800 font-bold">1-1</div>
                  <div class="card-desc text-center text-base text-gray-700 font-bold">
                    Personal Advisor
                  </div>
                </div>
                <div class="cart-right">
                  <img src="@/assets/images/aboutcard1.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- introduce -->
      <section class="suport-team w-full py-20 bg-gradient-to-br from-blue-200 to-slate-200">
        <div class="w-full px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24">
          <div class="flex flex-col justify-start items-start gap-12">
            <div
              class="introduce-line1 bg-gray-100 rounded-lg flex flex-col justify-center items-center gap-2 p-4 memd:flex-row-reverse"
            >
              <div class="line1-left">
                <h2 class="title text-lg text-black font-semibold">About Guru Trade7</h2>
                <p class="desc text-sm text-gray-700 font-normal">
                  Offer an all-in-one self-directed investment platform that provides advanced and
                  intelligent tools; to be a leader in trading industry by providing innovative
                  financial trading plaform; Be a client-centric company with a clear focus on
                  providing long-term value addition to clients.
                </p>
              </div>
              <div class="line1-right w-full">
                <img class="w-full" src="@/assets/images/introduce1.webp" alt="" />
              </div>
            </div>
            <div
              class="introduce-line2 bg-gray-100 rounded-lg flex flex-col justify-center items-center gap-2 p-4 memd:flex-row"
            >
              <div class="line1-left">
                <h2 class="title text-lg text-black font-semibold">About Guru Trade7</h2>
                <p class="desc text-sm text-gray-700 font-normal">
                  Offer an all-in-one self-directed investment platform that provides advanced and
                  intelligent tools; to be a leader in trading industry by providing innovative
                  financial trading plaform; Be a client-centric company with a clear focus on
                  providing long-term value addition to clients.
                </p>
              </div>
              <div class="line1-right w-full">
                <img class="w-full" src="@/assets/images/introduce1.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Our History -->
      <section class="our-history w-full py-20 bg-gray-50">
        <div class="w-full px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24">
          <h1 class="title text-gray-800 px-6 pt-4 text-2xl font-semibold mb-8 text-center">
            Our History
          </h1>
          <div class="history-list">
            <!-- <div class="history-logo flex justify-start items-start">
              <img src="@/assets/svg/logo.svg" alt="" />
            </div> -->
            <div
              class="history-item w-full memd:w-1/2 memd:translate-x-[100%] memd:relative flex flex-col justify-start items-start gap-0 relative pl-12 pb-24 before:content-[''] before:w-[8px] before:h-[8px] before:rounded-[50%] before:bg-white before:border-2 before:border-blue-600 before:absolute before:left-0 before:top-0 after:content-[''] after:absolute after:top-[6px] after:left-[3px] after:w-[2px] after:h-[100%] after:bg-blue-500 last:after:bg-gradient-to-b from-blue-500 to-white"
              :class="{
                ['memd:flex-row']: index % 2 === 0,
                ['memd:flex-row-reverse']: index % 2 === 1,
              }"
              v-for="(item, index) in historytData"
              :key="index"
            >
              <div class="w-full">
                <p class="year text-xl font-semibold text-gray-900 pb-2">
                  {{ item.title }}
                </p>
                <div class="descs pb-4">
                  <p
                    v-for="(desc, i) in item.desc"
                    :key="i"
                    class="text-sm font-normal text-gray-500"
                  >
                    {{ desc }}
                  </p>
                </div>
              </div>
              <div class="img memd:absolute memd:left-0 memd:-translate-x-[100%] memd:pr-10">
                <img class="w-full" :src="item.img" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- company / contact us -->
      <section class="our-history w-full pb-20 bg-gray-50">
        <div class="w-full px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24">
          <div class="c grid grid-cols-1 gap-4 mesm:grid-cols-2 memd:gap-12">
            <div
              class="company bg-gradient-to-b from-gray-200 to-gray-300 text-gray-900 p-12 rounded-xl shadow-md shadow-gray-700/50"
            >
              <div class="c-title flex justify-center items-center gap-4">
                <span class="ico"
                  ><svg
                    t="1739786561442"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="4265"
                    width="32"
                    height="32"
                  >
                    <path
                      d="M111.204731 957.99061l0-37.289278 801.644773 0 0 37.289278L111.204731 957.99061M689.13635 902.056694l-93.215008 0-0.38988-478.959489L484.065787 342.769714 223.062332 454.633455l0 447.423239-111.857601 0 0-37.284161 74.570369 0L185.7751 435.991886l298.290687-130.506333 149.143808 111.857601 0 447.428356 55.926754 0L689.13635 902.056694zM278.211373 512.629333l131.279952-57.995879 0 74.568323-130.500193 55.932893L278.211373 512.629333 278.211373 512.629333zM409.491325 622.417809l0 74.573439-130.500193 37.280068-0.779759-70.427002L409.491325 622.417809zM278.991132 808.848848l130.500193-37.289278 0 93.212962L278.991132 864.772532 278.991132 808.848848zM726.419488 156.343791l0 745.711879 55.930847 0 0-679.710676L726.419488 156.343791zM484.065787 398.704654l0 503.352039 55.926754 0 0-466.064808L484.065787 398.704654zM912.849504 902.056694l-93.215008 0L819.634496 212.272591 726.419488 100.411921 372.20614 249.556753l0 55.9288-37.288255 37.284161L334.917886 230.912114 745.06515 63.127759l111.857601 149.145855 0 652.498918 55.926754 0L912.849504 902.056694z"
                      fill="#707070"
                      p-id="4266"
                    ></path></svg
                ></span>
                <span class="text-2xl font-semibold">Company</span>
              </div>
              <div class="c-name text-base font-semibold text-center text-gray-700 pt-4">
                GURU TRADE7 LIMITED
              </div>
              <div class="office text-base font-semibold text-center text-gray-700 pt-4">
                Office Location:
              </div>
              <div class="desc text-sm text-gray-600 text-center pt-4">
                First Floor, First St Vincent Bank Ltd Building, James Street, Kingstown, St.
                Vincent and the Grenadines.
              </div>
            </div>
            <div
              class="contact-us bg-gradient-to-b from-gray-200 to-gray-300 text-gray-900 p-12 rounded-xl shadow-md shadow-gray-700/50"
            >
              <div class="c-title flex justify-center items-center gap-4">
                <span class="ico"
                  ><svg
                    t="1739786608062"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="5433"
                    width="32"
                    height="32"
                  >
                    <path
                      d="M874.666667 181.333333H149.333333c-40.533333 0-74.666667 34.133333-74.666666 74.666667v512c0 40.533333 34.133333 74.666667 74.666666 74.666667h725.333334c40.533333 0 74.666667-34.133333 74.666666-74.666667V256c0-40.533333-34.133333-74.666667-74.666666-74.666667z m-725.333334 64h725.333334c6.4 0 10.666667 4.266667 10.666666 10.666667v25.6L512 516.266667l-373.333333-234.666667V256c0-6.4 4.266667-10.666667 10.666666-10.666667z m725.333334 533.333334H149.333333c-6.4 0-10.666667-4.266667-10.666666-10.666667V356.266667l356.266666 224c4.266667 4.266667 10.666667 4.266667 17.066667 4.266666s12.8-2.133333 17.066667-4.266666l356.266666-224V768c0 6.4-4.266667 10.666667-10.666666 10.666667z"
                      fill="#707070"
                      p-id="5434"
                    ></path></svg
                ></span>
                <span class="text-2xl font-semibold">Contact us</span>
              </div>
              <div class="small-title text-base font-semibold text-center text-gray-700 pt-4">
                Customer service:
              </div>
              <div class="p text-sm text-gray-600 text-center pt-4">
                English&Hindi: support@gurutrade7.com
              </div>
              <div class="small-title text-base font-semibold text-center text-gray-700 pt-4">
                Complaint inbox:
              </div>
              <div class="p text-sm text-gray-600 text-center pt-4">suggest@gurutrade7.com</div>
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
