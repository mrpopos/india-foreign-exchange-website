<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import Footer from '@/layout/components/footer.vue'
import { useDomScroll } from '@/hooks/useDomScroll'
import { useAppStore } from '@/stores/modules/app'
import ServiceAgreement from './components/serviceAgreement.vue'
import TradingTransactions from './components/tradingTransactions.vue'
import RiskDisclosure from './components/riskDisclosure.vue'
import AgreementOnStorage from './components/agreementOnStorage.vue'
import PrivacyPolicy from './components/privacyPolicy.vue'
import PromotionalEvents from './components/promotionalEvents.vue'

const scrollContainer = ref()
const { scrollTop } = useDomScroll(scrollContainer)

watchEffect(() => {
  useAppStore().setScrollTop(scrollTop.value)
})

const showAllLegal = ref(true)
const activeLegalIndex = ref(-1)
const legalList = [
  {
    name: 'Service Agreement',
  },
  {
    name: 'Trading Transactions Policy',
  },
  {
    name: 'Risk Disclosure',
  },
  {
    name: 'Agreement on the Storage of the Cardholder’s Credentials',
  },
  {
    name: 'Privacy Policy',
  },
  {
    name: 'Promotional Events',
  },
]

const showLegalDetail = (index: number) => {
  if (index === activeLegalIndex.value) {
    showAllLegal.value = true
    activeLegalIndex.value = -1
  } else {
    showAllLegal.value = false
    activeLegalIndex.value = index
  }
}
</script>

<template>
  <div class="legal-wrapper h-full">
    <div ref="scrollContainer" class="legal-container h-full overflow-auto">
      <!-- first screen -->
      <section class="legal-banner overflow-hidden bg-legalbg bg-cover" v-if="showAllLegal">
        <div class="legal-banner-content w-full pt-40 pb-20">
          <div
            class="w-full px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24 flex flex-col items-start justify-center gap-12"
          >
            <h1
              class="w-full text-white text-3xl font-bold mesm:text-4xl melg:text-5xl text-center"
            >
              LEGAL INFOMATION
            </h1>
            <div class="w-full desc text-base text-gray-700">
              <p class="w-full text-gray-300 text-base md:text-xl py-1 text-center">
                To fully understand the implications of trading with Guru Trade7, please read our
                legal documents.
              </p>
            </div>
            <!-- <div>
              <a class="btn px-8 py-4 bg-white rounded-lg text-lg hover:cursor-pointer bg-gradient-to-r from-[#0099fa] to-[#002ed9] text-white hover:from-[#1d6b9c] hover:to-[#1e358a]"
                >REGISTRATION</a
              >
            </div> -->
          </div>
        </div>
      </section>
      <!-- legal pages -->
      <section class="legal-banner overflow-hidden bg-cover py-20">
        <div
          class="w-full px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24 flex flex-col items-start justify-center gap-12"
        >
          <div class="legal-list" v-if="showAllLegal">
            <div
              class="legal-item flex flex-row justify-start items-center gap-4 py-4 hover:text-blue-600 hover:underline hover:cursor-pointer"
              v-for="(item, i) in legalList"
              :key="i"
              @click="showLegalDetail(i)"
            >
              <span class="ico"
                ><svg
                  t="1739791612232"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="14141"
                  width="24"
                  height="24"
                >
                  <path
                    d="M870.4 921.6H153.6c-40.96 0-76.8-35.84-76.8-76.8V256H870.4c40.96 0 76.8 35.84 76.8 76.8v512c0 40.96-35.84 76.8-76.8 76.8zM128 307.2v537.6c0 15.36 10.24 25.6 25.6 25.6h716.8c15.36 0 25.6-10.24 25.6-25.6v-512c0-15.36-10.24-25.6-25.6-25.6H128z"
                    fill="currentColor"
                    p-id="14142"
                  ></path>
                  <path
                    d="M128 332.8h-51.2v-153.6C76.8 138.24 112.64 102.4 153.6 102.4h266.24c25.6 0 46.08 10.24 61.44 30.72l102.4 133.12-40.96 30.72-102.4-133.12c-5.12-5.12-10.24-10.24-20.48-10.24H153.6c-15.36 0-25.6 10.24-25.6 25.6v153.6z"
                    fill="currentColor"
                    p-id="14143"
                  ></path></svg
              ></span>
              <span class="name">{{ item.name }}</span>
            </div>
          </div>
          <div class="legal-detail pt-20" v-else-if="!showAllLegal">
            <!-- service agreement -->
            <ServiceAgreement v-if="activeLegalIndex === 0" />
            <!-- trading transactions policy -->
            <TradingTransactions v-if="activeLegalIndex === 1" />
            <!-- risk disclosure -->
            <RiskDisclosure v-if="activeLegalIndex === 2" />
            <!-- agreement on the storage of the cardholder’s credentials -->
            <AgreementOnStorage v-if="activeLegalIndex === 3" />
            <!-- privacy policy -->
            <PrivacyPolicy v-if="activeLegalIndex === 4" />
            <!-- promotional events -->
            <PromotionalEvents v-if="activeLegalIndex === 5" />
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
.legal-container {
  scrollbar-width: none;
}
</style>
