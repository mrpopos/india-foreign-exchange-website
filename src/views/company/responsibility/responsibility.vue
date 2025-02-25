<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import Footer from '@/layout/components/footer.vue'
import { useDomScroll } from '@/hooks/useDomScroll'
import { useAppStore } from '@/stores/modules/app'
import ServiceDesk from './components/serviceDesk.vue'
import SeniorDeveloper from './components/seniorDeveloper.vue'
import ClientService from './components/clientService.vue'
import DataInnovation from './components/dataInnovation.vue'
import CapitalMarkets from './components/capitalMarkets.vue'
import RiskControl from './components/riskControl.vue'

const scrollContainer = ref()
const { scrollTop } = useDomScroll(scrollContainer)

watchEffect(() => {
  useAppStore().setScrollTop(scrollTop.value)
})

const discoverData = ref([
  {
    title: 'Service Desk Agent',
    addr: 'Hungary',
  },
  {
    title: 'Senior C++ Developer (Hybrid)',
    addr: 'Montreal, Canada',
  },
  {
    title: 'Client Service Associate-English',
    addr: 'Sydney/ Melbourne',
  },
  {
    title: 'Administrative Assistant, Analytics, Data & Innovation',
    addr: 'New York, United States of America',
  },
  {
    title: 'Associate Portfolio Manager, Global Capital Markets',
    addr: 'Seattle, United States of America',
  },
  {
    title: 'Risk Control Group (RCG) Analyst',
    addr: 'Montreal, Canada',
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
      <div v-if="showAllLegal">
        <!-- first screen -->
        <section class="quick-banner overflow-hidden bg-responsibilitybg bg-cover">
          <div class="quick-banner-content w-full pt-40 pb-20">
            <div
              class="w-full px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24 flex flex-col items-center justify-center gap-12"
            >
              <h1
                class="w-full text-white text-3xl font-bold mesm:text-4xl melg:text-5xl text-center"
              >
                OUR COMMITMENT TO THE SOICETY
              </h1>
              <div class="desc text-base text-gray-700">
                <p class="text-gray-300 text-base md:text-xl py-1 text-center">
                  We want to make the world of trading a better place, but we want to make other
                  positive changes too. We believe in rolling our sleeves up and getting stuck in,
                  being part of the communities where we live and work.
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
        <!-- Trade with a partner you can trust -->
        <section class="suport-team w-full py-20">
          <div class="w-full px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24">
            <div class="grid grid-cols-1 gap-6 memd:grid-cols-3">
              <div
                class="introduce-line1 bg-gray-100 rounded-lg flex flex-col justify-start items-center gap-2 p-4"
              >
                <div class="line1-right">
                  <svg
                    t="1740387292759"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="3472"
                    width="64"
                    height="64"
                  >
                    <path
                      d="M604.68 472.42c76 12.9 138.42-0.7 185.84-40.44 86.84-73.24 87.88-207.82 87.88-213.4a23.28 23.28 0 0 0-15.7-22 22.88 22.88 0 0 0-25.8 7.34c-3.48 4.18-85.08 103.56-234 6.62C509.14 149.54 368 155.12 302 178.14a55.48 55.48 0 0 0-32.78 29.28 57.36 57.36 0 0 0-2 44.28l87.52 240 25.1 67.1c-135.2 18.48-234.18 78-234.18 148.7 0 85.38 144.62 154.6 323 154.6s323-69.22 323-154.6-144.6-154.62-323-154.62q-21 0-41.3 1.26l-15.8-42.22c32.02-17.92 110.14-53.44 193.12-39.5z m-136 116.14c148.18 0 268.3 53.2 268.3 118.84s-120.12 118.84-268.3 118.84-268.38-53.22-268.38-118.84c0-54 81.2-99.52 192.44-114l60.26 161.12a23.32 23.32 0 0 0 21.62 15 29.66 29.66 0 0 0 8-1.04 23.36 23.36 0 0 0 13.6-30l-55.8-149.28q13.92-0.64 28.18-0.64z m-157.6-353.24a10.62 10.62 0 0 1 0.36-8.38 11.14 11.14 0 0 1 6-5.22c23.36-8 57.88-13.26 95.54-13.26 56.14 0 119.26 11.52 165.28 40.46 113.66 74 199.1 50.9 248.26 22-7.66 39.06-25.44 91.36-65.2 124.84-36.26 30.68-86.12 40.78-148.2 30.32-92.48-15.72-177.12 19.92-217.66 41.12z"
                      p-id="3473"
                      fill="#3b8cf6"
                    ></path>
                  </svg>
                </div>
                <div class="line1-left">
                  <h2 class="title text-base text-black font-semibold mb-6 text-center">
                    Corporate Social Responsibility at Guru Trade7
                  </h2>
                  <p class="desc text-base text-gray-700 font-normal">
                    We strive to go above and beyond to do what is right for our users, employees,
                    shareholders, and communities where we live and work. Through our Corporate
                    Social Responsibility (CSR) program, we give back through financial support and
                    volunteerism. We’re grateful to be a proactive and engaged corporate citizen,
                    working with charitable organizations to serve our local communities.
                  </p>
                </div>
              </div>
              <div
                class="introduce-line2 bg-gray-100 rounded-lg flex flex-col justify-start items-center gap-2 p-4"
              >
                <div class="line1-right">
                  <svg
                    t="1740387355030"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="5477"
                    width="64"
                    height="64"
                  >
                    <path
                      d="M962.5 346.9c-7.4-72.3-42.5-137.4-98.9-183.3-53.2-43.4-120.3-64.9-188.8-60.6-59.8 3.7-116 26.8-160.8 65.4-44.8-38.7-101-61.7-160.8-65.4-68.5-4.3-135.5 17.2-188.8 60.6-56.4 45.9-91.5 111-98.9 183.3-7.4 71.9 13.6 142.4 58.9 198.6l-26.3 26.3C86 583.9 79.4 600 79.4 617.2c0 17.1 6.7 33.2 18.8 45.3l14.8 14.8c10.8 10.8 24.9 17.3 40 18.5 1.6 13.8 7.7 27.2 18.3 37.8l14.8 14.8c8.3 8.3 18.5 14.1 29.6 16.8 1 14.9 7.2 29.6 18.6 41l14.8 14.8c12.1 12.1 28.2 18.8 45.3 18.8h1.6v1.6c0 17.1 6.7 33.2 18.8 45.3l14.8 14.8c12.1 12.1 28.2 18.8 45.3 18.8 17.1 0 33.2-6.7 45.3-18.8l47.4-47.4 47.3 40.3c15.7 14.3 35.4 22.8 55.3 23.8 1.4 0.1 2.7 0.1 4.1 0.1 20 0 38.6-7.8 51.4-21.7 8.7-9.5 14.4-21.5 16.6-34.4 4.2 0.8 8.5 1.2 13 1.2 2.2 0 4.4-0.1 6.6-0.3 18.5-1.7 35.8-10.4 48.7-24.5 9.5-10.3 15.6-22.4 18.4-35 1.8 0.1 3.7 0.2 5.5 0.2h2.2c19.9-0.6 38.2-8.9 51.6-23.4 12-13.1 18.3-29.5 19-46.1h1.3c19.3 0 36.5-7 48.3-19.9 14.3-15.6 19.3-38.1 13.8-61.8-3.2-13.8-9.8-27.5-19.1-39.9l51.6-66.5c45.6-56.3 66.7-127.1 59.3-199.3z m-829 280.2c-2.7-2.7-4.1-6.2-4.1-10s1.5-7.3 4.1-10l80.3-80.3c2.8-2.8 6.4-4.1 10-4.1 3.6 0 7.2 1.4 10 4.1l14.8 14.8c2.7 2.7 4.1 6.2 4.1 10s-1.5 7.3-4.1 10l-80.3 80.3c-2.7 2.7-6.2 4.1-10 4.1s-7.3-1.5-10-4.1l-14.8-14.8z m73 51.2l80.3-80.3c2.8-2.8 6.4-4.1 10-4.1 3.6 0 7.2 1.4 10 4.1l14.8 14.8c2.7 2.7 4.1 6.2 4.1 10 0 1.3-0.2 2.6-0.5 3.8-3.8 2.4-7.4 5.3-10.7 8.6l-80.3 80.3c-0.5 0.5-1 1.1-1.5 1.6-0.4 0-0.9 0.1-1.4 0.1-3.8 0-7.3-1.5-10-4.1l-14.8-14.8c-5.5-5.5-5.5-14.5 0-20z m77.8 107.3l-14.8-14.8c-3.7-3.7-4.9-9.1-3.6-13.8 3.8-2.5 7.4-5.3 10.7-8.6l80.3-80.3c0.5-0.5 1-1 1.5-1.6 0.5 0 0.9-0.1 1.4-0.1 3.6 0 7.2 1.4 10 4.1l14.8 14.8c2.7 2.7 4.1 6.2 4.1 10s-1.5 7.3-4.1 10l-80.3 80.3c-2.7 2.7-6.2 4.1-10 4.1s-7.4-1.4-10-4.1z m100.4 80.5c-2.7 2.7-6.2 4.1-10 4.1s-7.3-1.5-10-4.1l-14.8-14.8c-2.7-2.7-4.1-6.2-4.1-10s1.5-7.3 4.1-10l80.3-80.3c2.7-2.7 6.2-4.1 10-4.1s7.3 1.5 10 4.1l14.8 14.8c2.7 2.7 4.1 6.2 4.1 10s-1.5 7.3-4.1 10l-80.3 80.3z m435.2-185.6c-4.2 4.5-12.9 3.8-16.4 3.3-6.4-0.9-13.2-3.5-19.7-7.2-0.3-0.3-0.6-0.6-1-0.9l-77.1-70.9-8.4-7.8c-10.2-9.3-26-8.7-35.3 1.5-9.3 10.2-8.7 26 1.5 35.3l8 7.4 64.7 62c0.1 0.1 0.2 0.2 0.4 0.3 4.9 4.5 10 8.5 15.4 12.1 7.3 9.3 7.4 22.4-0.5 30.9-4.1 4.5-9.9 7.1-16.2 7.3-6.1 0.2-12.1-1.9-16.9-5.9-2.5-3.5-5.5-6.9-8.8-9.9l-75.4-69.3c-4.3-3.9-9.5-6.1-14.9-6.5-8.1-1.5-16.8 1.1-22.8 7.7-9.3 10.2-8.7 26 1.5 35.3l81.5 74.9c3.1 7.3 1.1 17.4-5.6 24.7-4.5 4.9-10.4 8-16.5 8.5-3 0.3-8.7 0.1-13.2-4l-0.2-0.2-45-40.4c-2.1-1.9-4.4-3.3-6.8-4.4l-27.5-27.6c-9.8-9.8-25.6-9.8-35.4 0-9.8 9.8-9.8 25.6 0 35.4l49.9 50c0.3 0.3 0.5 0.5 0.8 0.7 7.1 6.6 11.9 15.1 13 23.5 0.5 3.9 0.7 11.2-4.2 16.5-4.9 5.3-12.2 5.8-16.1 5.5-8.4-0.4-17.3-4.5-24.5-11-0.2-0.2-0.5-0.4-0.7-0.6l-44.7-38.1c10.5-11.8 16.3-26.8 16.3-42.7 0-17.1-6.7-33.2-18.8-45.3l-14.8-14.8c-12.1-12.1-28.2-18.8-45.3-18.8h-1.6v-1.6c0-17.1-6.7-33.2-18.8-45.3L405 635.3c-8.5-8.5-18.7-14.1-29.6-16.8-1-15.5-7.5-29.9-18.6-41L342 562.7c-11.1-11.1-25.3-17.3-39.9-18.5-1.7-14.3-8-27.5-18.3-37.8L269 491.6c-25-25-65.7-25-90.7 0L159.9 510c-72.9-94.9-57.4-231.5 36-307.5 82.5-67.2 202-65.2 282.2 1.4C428 255.3 354 331.2 347.1 338c-3.8 3.7-15.3 15-6 54.6 3.1 13.1 11 38 28.5 57 15.7 17 59.7 49.9 128.8-10.5 20.8-18.2 48.8-31.8 65.7-39l114.6 119 1.1 1.1 122 112.2c10.1 9.3 17.4 20.8 19.9 31.6 1 3.4 2.4 12-1.8 16.5z m43.8-165.1l-47.9 61.7-101.5-93.3-125.7-130.5c-6.8-7-17-9.5-26.2-6.3-2.3 0.8-57.7 20.3-96.7 54.4-12.7 11.1-36.3 28.4-51.8 20.2-16.3-8.7-25.3-39.8-26.2-53.5 27.7-28 139.1-142.6 144.3-147.9 79.4-82.3 211.2-90.1 300-17.8C927 279.8 941.3 420 864 515c-0.1 0.1-0.2 0.2-0.3 0.4z"
                      fill="#3b8cf6"
                      p-id="5478"
                    ></path>
                  </svg>
                </div>
                <div class="line1-left">
                  <h2 class="title text-base text-black font-semibold mb-6 text-center">
                    Supporting areas where we live and work
                  </h2>
                  <p class="desc text-base text-gray-700 font-normal">
                    We have a companywide volunteer program that offers employees meaningful
                    opportunities to get involved and make a positive impact on our local
                    communities—promoting employee engagement and fostering team building. Guru
                    Trade7 makes it easy for employees to participate—we provide every employee with
                    paid volunteer time. We also offer complimentary, in-person education sessions
                    across the country where anyone can learn the basics of investing, retirement
                    planning, and trading.
                  </p>
                </div>
              </div>
              <div
                class="introduce-line3 bg-gray-100 rounded-lg flex flex-col justify-start items-center gap-2 p-4"
              >
                <div class="line1-right">
                  <svg
                    t="1740387393467"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="6689"
                    width="64"
                    height="64"
                  >
                    <path
                      d="M716.8 1024 307.2 1024C137.545143 1024 0 886.454857 0 716.8L0 307.2C0 137.545143 137.545143 0 307.2 0l409.6 0C886.454857 0 1024 137.545143 1024 307.2l0 409.6C1024 886.454857 886.454857 1024 716.8 1024zM951.076571 329.069714c0-141.458286-114.651429-256.146286-256.109714-256.146286L329.033143 72.923429c-141.458286 0-256.146286 114.688-256.146286 256.146286l0 365.897143c0 141.458286 114.688 256.109714 256.146286 256.109714l365.897143 0c141.458286 0 256.109714-114.651429 256.109714-256.109714L951.04 329.069714 951.076571 329.069714zM841.142857 329.142857l-259.913143 351.012571c-8.082286 9.837714-19.602286 14.006857-31.049143 13.531429-10.825143 1.024-21.906286-2.084571-30.208-10.349714l-74.642286-74.386286-86.162286 109.860571c-8.009143 8.338286-18.651429 11.885714-29.147429 11.300571-10.459429 0.658286-21.101714-2.633143-29.110857-10.569143l-71.424-70.948571c-14.811429-14.701714-14.811429-38.546286 0-53.211429 14.774857-14.701714 38.765714-14.701714 53.577143 0l41.691429 41.435429 78.848-100.498286c1.828571-4.973714 4.534857-9.691429 8.521143-13.714286 4.169143-4.169143 9.142857-6.838857 14.409143-8.630857 14.08-6.436571 31.049143-3.84 42.569143 8.155429 3.145143 3.254857 5.229714 7.131429 7.058286 11.081143l66.742857 66.523429 138.861714-180.224-51.858286-46.848c-6.729143-6.070857-9.398857-15.506286-8.082286-24.210286-0.036571-0.256-0.182857-0.438857-0.219429-0.658286-1.718857-11.52 5.632-22.381714 16.310857-24.173714l181.101714-30.866286c10.715429-1.828571 20.772571 6.034286 22.454857 17.590857 0.950857 6.473143-1.133714 12.544-4.864 17.115429C838.144 328.009143 839.497143 328.374857 841.142857 329.142857z"
                      fill="#3b8cf6"
                      p-id="6690"
                    ></path>
                  </svg>
                </div>
                <div class="line1-left">
                  <h2 class="title text-base text-black font-semibold mb-6 text-center">
                    Investing in the community
                  </h2>
                  <p class="desc text-base text-gray-700 font-normal">
                    Guru Trade7 is committed to investing in local communities through a variety of
                    initiatives including equity investments, developing non-profit and local
                    government partnerships, and corporate contributions. Our areas of focus
                    include: workforce development and job readiness, micro-loans, small business
                    development and support, the creation and preservation of affordable housing,
                    technology for infrastructure development, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Support Team from us -->
        <section class="suport-team w-full py-20 bg-gradient-to-br from-blue-950 to-slate-900">
          <div class="w-full px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24">
            <h2 class="title text-gray-100 px-6 pt-4 text-2xl font-semibold mb-8 text-center">
              Careers
            </h2>
            <p class="text-gray-200 text-center py-8 font-semibold">
              We are looking for dynamic, highly energized individuals who are ready to join a
              fast-paced, leader in the financial services industry.
            </p>
            <div class="card-list grid grid-cols-1 gap-4 mexs:grid-cols-2 memd:grid-cols-3">
              <div
                class="card-item bg-gray-100 p-2 mesm:p-7 rounded-lg flex flex-col justify-center items-center gap-2"
              >
                <div class="flex flex-col-reverse justify-center items-center gap-2">
                  <div class="cart-left flex flex-col justify-center items-center gap-1">
                    <div class="card-value text-xl text-gray-800 font-semibold text-center">41</div>
                    <div class="card-desc text-center text-base text-gray-700 font-normal">
                      Number of countries where our employees live and work.
                    </div>
                  </div>
                  <div class="cart-right">
                    <svg
                      t="1740387499716"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="7843"
                      width="64"
                      height="64"
                    >
                      <path
                        d="M712.0896 726.09792a30.72 30.72 0 0 1 39.79264-17.42848c73.48224 28.672 118.51776 70.28736 118.51776 121.91744 0 97.75104-166.2976 162.69312-368.64 162.69312s-368.64-64.94208-368.64-162.69312c0-51.63008 45.056-93.22496 118.51776-121.91744a30.72 30.72 0 0 1 22.34368 57.22112c-52.4288 20.48-79.42144 45.40416-79.42144 64.7168 0 48.0256 136.27392 101.23264 307.2 101.23264s307.2-53.20704 307.2-101.25312c0-19.29216-26.97216-44.21632-79.42144-64.69632a30.72 30.72 0 0 1-17.44896-39.79264z"
                        fill="#3b8cf6"
                        p-id="7844"
                      ></path>
                      <path
                        d="M279.83872 222.76096l-3.54304 3.4816-3.4816 3.54304c-116.28544 120.15616-113.13152 311.82848 7.02464 428.09344l160.82944 155.648a87.8592 87.8592 0 0 0 122.18368 0l160.82944-155.648c2.37568-2.29376 4.7104-4.64896 7.02464-7.02464 116.28544-120.15616 113.13152-311.82848-7.02464-428.09344-123.71968-119.74656-320.1024-119.74656-443.84256 0z m42.72128 44.15488c99.90144-96.68608 258.49856-96.68608 358.4 0 95.76448 92.672 98.28352 245.4528 5.59104 341.21728l-2.7648 2.82624-163.6352 158.4128a26.4192 26.4192 0 0 1-36.7616 0l-160.82944-155.648c-95.76448-92.672-98.28352-245.4528-5.59104-341.21728l5.59104-5.59104z"
                        fill="#3b8cf6"
                        p-id="7845"
                      ></path>
                      <path
                        d="M501.76 307.2a143.36 143.36 0 1 0 0 286.72 143.36 143.36 0 0 0 0-286.72z m0 61.44a81.92 81.92 0 1 1 0 163.84 81.92 81.92 0 0 1 0-163.84z"
                        fill="#3b8cf6"
                        p-id="7846"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div
                class="card-item bg-gray-100 p-2 mesm:p-7 rounded-lg flex flex-col justify-center items-center gap-2"
              >
                <div class="flex flex-col-reverse justify-center items-center gap-2">
                  <div class="cart-left flex flex-col justify-center items-center gap-1">
                    <div class="card-value text-xl text-gray-800 font-semibold text-center">
                      73K
                    </div>
                    <div class="card-desc text-center text-base text-gray-700 font-normal">
                      Number of employees around the world.
                    </div>
                  </div>
                  <div class="cart-right">
                    <svg
                      t="1740387649306"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="14976"
                      width="64"
                      height="64"
                    >
                      <path
                        d="M858.1 736h-83.2L671.4 588.6c-3-5.5-8-9.7-14.2-11.5-4.6-1.3-9.2-1-13.4 0.5-1.7 0.5-3.5 1.2-5.1 2.2-8.1 4.7-12.3 13.5-11.8 22.3l-52.7 246.5-78.3-100.4c0-0.1-0.1-0.1-0.1-0.2-0.7-1.3-1.6-2.5-2.6-3.6l-0.3-0.3c-1-1.1-2-2.1-3.2-3-0.1-0.1-0.2-0.1-0.2-0.2-1.2-0.9-2.4-1.6-3.7-2.3-0.1 0-0.1-0.1-0.2-0.1-1.3-0.6-2.6-1.1-4-1.5-0.1 0-0.3-0.1-0.4-0.1-1.2-0.3-2.5-0.5-3.8-0.6-0.3 0-0.6-0.1-0.9-0.1-0.5 0-0.9-0.1-1.4-0.1H363.4c-13.2 0-23.9 10.7-23.9 23.9s10.7 23.9 23.9 23.9h100.1L566 915.4c3 5.5 8 9.7 14.2 11.5 4.6 1.3 9.2 1 13.4-0.5 1.7-0.5 3.5-1.2 5.1-2.2 8.1-4.7 12.3-13.5 11.8-22.3l51.9-242.8 79.1 112.7c0 0.1 0.1 0.1 0.1 0.2 0.7 1.3 1.6 2.5 2.5 3.6l0.3 0.3c1 1.1 2 2.1 3.2 3 0.1 0.1 0.2 0.1 0.2 0.2 1.2 0.9 2.4 1.6 3.7 2.3 0.1 0 0.1 0.1 0.2 0.1 1.3 0.6 2.6 1.1 4 1.5 0.1 0 0.2 0.1 0.4 0.1 1.3 0.3 2.5 0.5 3.9 0.7 0.3 0 0.6 0.1 0.8 0.1 0.5 0 0.9 0.1 1.4 0.1H858c13.2 0 23.9-10.7 23.9-23.9 0.1-13.3-10.6-24.1-23.8-24.1z"
                        p-id="14977"
                        fill="#3b8cf6"
                      ></path>
                      <path
                        d="M499 560.5c130.2 0 239.2-100.3 239.2-229.2 0-128.8-105.9-233.6-236.1-233.6s-226.5 94.6-226.5 223.4c0 91.9 33.6 169.3 111.7 207.5-54.7 16.6-94.1 58.6-135.6 99.8C184.8 694.6 148 782.6 148 876.2c0 10.8 8.8 19.5 19.7 19.5 10.9 0 28.2-5.2 28.2-16 0-83.2 36.3-164.6 95.8-223.4 57.2-56.6 126.5-93.4 207.1-95.7-0.7-0.1-0.9-0.1 0.2-0.1zM323.4 329.1c0-101.2 82.4-183.5 183.7-183.5 101.3 0 183.7 82.3 183.7 183.5 0 100.2-80.8 181.9-180.7 183.4-1-0.2-2-0.3-3-0.3-2.8 0-5.6 0-8.4 0.1-97.4-4.3-175.3-84.9-175.3-183.2z"
                        p-id="14978"
                        fill="#3b8cf6"
                      ></path>
                      <path
                        d="M499 560.5h-0.4c0.8 0.1 2.3 0.1 0.4 0z"
                        p-id="14979"
                        fill="#3b8cf6"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div
                class="card-item bg-gray-100 p-2 mesm:p-7 rounded-lg flex flex-col justify-center items-center gap-2"
              >
                <div class="flex flex-col-reverse justify-center items-center gap-2">
                  <div class="cart-left flex flex-col justify-center items-center gap-1">
                    <div class="card-value text-xl text-gray-800 font-semibold text-center">36</div>
                    <div class="card-desc text-center text-base text-gray-700 font-normal">
                      Groups of employees-networking, with a combined membership of over 10,000.
                    </div>
                  </div>
                  <div class="cart-right">
                    <svg
                      t="1740387575330"
                      class="icon"
                      viewBox="0 0 1264 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="11829"
                      width="64"
                      height="64"
                    >
                      <path
                        d="M632.590687 0c148.178736 0 268.649254 118.904401 268.649253 265.155609a262.505257 262.505257 0 0 1-103.122762 208.413995c173.658251 75.233838 285.153715 237.266684 285.093479 419.960223v89.750536a41.140682 41.140682 0 0 1-41.261152 40.719035H223.292104a41.140682 41.140682 0 0 1-41.321388-40.77927v-89.750536c0-182.633304 111.435229-344.66615 284.06948-412.731992-64.451727-58.006554-102.158999-133.963215-102.158998-215.642227C363.881198 118.964636 484.472186 0 632.590687 0z m0.060235 530.371453c-202.992822 0-368.037431 162.936375-368.037431 363.158374v44.875268l731.858393 4.156233 4.156233-49.031501c0-200.222-165.044609-363.158375-367.977195-363.158374z m320.029929-434.537156c3.55388 0 7.167996 0.481882 10.661641 1.385411 97.279943 25.720455 165.225315 113.242286 165.225315 212.811168 0 54.63338-20.600458 107.158525-58.06679 147.817325 120.470517 67.46349 194.559886 188.114713 194.439415 321.355105v69.511489a41.140682 41.140682 0 0 1-41.321387 40.77927 41.140682 41.140682 0 0 1-41.321388-40.77927v-69.511489c0-125.289338-85.955714-234.134451-209.016347-264.794197a40.6588 40.6588 0 0 1-32.587275-23.612221l-2.710587-12.408464a37.707272 37.707272 0 0 1 0.301177-9.215994l2.831057-10.842347a50.236206 50.236206 0 0 1 7.167995-11.504934 47.76656 47.76656 0 0 1 9.336466-7.469172l4.939291-2.590116a139.143448 139.143448 0 0 0 83.365598-126.734985c0-62.704904-42.767034-117.820166-104.026292-134.02345a40.839505 40.839505 0 0 1-29.2141-49.995265 41.441858 41.441858 0 0 1 39.996211-30.177864zM316.71699 94.810297c19.275283 0 35.900214 12.83011 40.478094 31.141629a40.839505 40.839505 0 0 1-30.539276 49.151971 138.541095 138.541095 0 0 0-107.519937 134.926979c0 51.19997 28.732218 98.183472 74.089368 122.277576l9.336465 4.577879a39.152918 39.152918 0 0 1 20.299283 19.455989l3.614115 7.710113 0.602353 8.071525v4.638114l-0.361412 3.071999-2.40941 10.962817a40.6588 40.6588 0 0 1-32.165628 23.491751c-123.48228 30.719982-209.49823 139.504859-209.49823 264.914667v69.451254a41.140682 41.140682 0 0 1-41.321388 40.77927 41.140682 41.140682 0 0 1-41.321387-40.77927v-69.451254a352.67744 352.67744 0 0 1 193.35518-314.970167c-36.261626-47.043737-56.862084-99.568883-56.862084-154.202263 0-102.219234 70.234312-190.343417 170.766959-214.196579a41.080446 41.080446 0 0 1 9.456935-1.024z m315.873697-13.372227c-102.580646 0-186.126949 82.401834-186.12695 183.717539 0 101.315705 83.546304 183.717539 186.12695 183.717539 102.640881 0 186.126949-82.401834 186.126949-183.717539 0-101.315705-83.486069-183.717539-186.126949-183.717539z"
                        p-id="11830"
                        fill="#3b8cf6"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Fees and Charges -->
        <section class="suport-team w-full py-40 memd:py-20 bg-gray-50">
          <div class="w-full px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24">
            <h2 class="title text-black px-6 pt-4 text-2xl font-semibold mb-8 text-center">
              Discover Our Opportunities
            </h2>
            <div class="discover-list grid grid-cols-1 gap-4 mesm:grid-cols-2 memd:grid-cols-3">
              <div
                class="discover-item bg-white rounded-lg py-6 px-4 hover:cursor-pointer group"
                v-for="(item, index) in discoverData"
                :key="index"
                @click="showLegalDetail(index)"
              >
                <div class="top flex flex-row justify-start items-center gap-4 mb-20">
                  <svg
                    t="1740387898411"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="16264"
                    width="32"
                    height="32"
                  >
                    <path
                      d="M680.662351 341.151867l85.872786 366.008998a7.042393 7.042393 0 0 0 3.748371 4.722558l60.668754 29.598109c3.14155 1.538029 6.91448 0.445138 8.798387-2.539846l38.035268-60.202127a7.185656 7.185656 0 0 0 0.221034-7.277754L693.429119 336.055802c-3.932566-7.140631-14.635325-2.867304-12.766768 5.096065m-276.742928-27.022447L278.838659 843.869457c-0.651846 2.759857 0.385786 5.65786 2.630921 7.339152L508.051061 1021.088694a6.808056 6.808056 0 0 0 8.337899-0.112564l214.400045-169.817663c2.104941-1.665942 3.086291-4.415566 2.520403-7.073093l-112.614847-529.271362c-3.041266-14.300704-15.452947-24.50716-29.797653-24.50716H433.567673c-14.089903 0-26.351158 9.849322-29.64825 23.822568m232.078682-132.753513l36.903492-126.926807c7.601118-26.152637-11.609409-52.402487-38.35147-52.402488H392.355039c-26.556842 0-45.736671 25.908066-38.476313 51.958373l35.374672 126.926807c4.89038 17.540492 20.599154 29.643134 38.476313 29.643134h169.921018c17.708314 0 33.311687-11.877515 38.347376-29.199019"
                      p-id="16265"
                      fill="#3b8cf6"
                    ></path>
                  </svg>
                  <span
                    class="text-gray-950 font-semibold group-hover:underline group-hover:underline-offset-2 group-hover:text-blue-500 transition-all duration-100 ease-in-out"
                    >{{ item.title }}</span
                  >
                </div>
                <div class="bottom flex flex-row justify-start items-center gap-4">
                  <svg
                    t="1740387983356"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="17494"
                    width="32"
                    height="32"
                  >
                    <path
                      d="M608 448a96 96 0 1 0-96 96 96 96 0 0 0 96-96z m64 0a160 160 0 1 1-160-160 160 160 0 0 1 160 160z"
                      p-id="17495"
                      fill="#3b8cf6"
                    ></path>
                    <path
                      d="M128 450.88a384 384 0 1 1 576 334.4l-160 160a47.68 47.68 0 0 1-67.84 0L308.48 778.24A386.24 386.24 0 0 1 128 450.88zM498.56 900.8z m166.72-167.04l3.84-1.92A321.92 321.92 0 1 0 192 450.88a322.24 322.24 0 0 0 153.28 274.88l3.2 2.24 2.56 2.56 160 160z"
                      p-id="17496"
                      fill="#3b8cf6"
                    ></path>
                  </svg>
                  <span class="text-gray-700">{{ item.addr }}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section
        v-else-if="!showAllLegal"
        class="legal-banner overflow-hidden bg-cover py-40 bg-gray-700"
      >
        <div
          class="w-full px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24 flex flex-col items-start justify-center gap-12"
        >
          <ServiceDesk v-if="activeLegalIndex === 0" />
          <SeniorDeveloper v-if="activeLegalIndex === 1" />
          <ClientService v-if="activeLegalIndex === 2" />
          <DataInnovation v-if="activeLegalIndex === 3" />
          <CapitalMarkets v-if="activeLegalIndex === 4" />
          <RiskControl v-if="activeLegalIndex === 5" />
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
