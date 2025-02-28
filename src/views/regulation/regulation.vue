<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useDomScroll } from '@/hooks/useDomScroll'
import { useAppStore } from '@/stores/modules/app'
import 'vue3-carousel/carousel.css'
import Footer from '@/layout/components/footer.vue'

const scrollContainer = ref()
const { scrollTop } = useDomScroll(scrollContainer)

watchEffect(() => {
  useAppStore().setScrollTop(scrollTop.value)
})
</script>

<template>
  <div class="home-wrapper h-full">
    <div ref="scrollContainer" class="home-container h-full overflow-auto">
      <!-- Place your trades on best conditions -->
      <div class="w-full py-20">
        <div class="w-full px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24">
          <div class="block-1 pt-20 flex flex-col items-start justify-center gap-8">
            <h2 class="text-white text-3xl font-semibold md:text-4xl xl:text-5xl">
              Our Guarantees
            </h2>
            <p class="desc text-text-color-6 text-base leading-6 py-1">
              Olymptrade is a licensed and regulated broker by the Vanuatu Financial Services
              Commission. Olymptrade is committed to providing the highest quality of service. Our
              clients are covered by deposit insurance and have access to comprehensive support and
              prompt resolution of any issues concerning their financial interactions with
              Olymptrade.
            </p>
            <div class="link text-blue-600 font-semibold underline underline-offset-2">
              <a href="#">Financial Dealer License</a>
            </div>
          </div>
          <div class="block-2 grid grid-cols-1 memd:grid-cols-2 gap-8 pt-20">
            <div class="block2-item">
              <div class="title text-3xl font-semibold">
                About the International Financial Commission (FinaCom)
              </div>
              <div class="desc">
                <p class="text-text-color-6 text-base leading-6 py-1">
                  The International Financial Commission is an alternative dispute resolution center
                  established to protect the interests of individual traders. It promotes
                  transparency, integrity, and client education.
                </p>
                <p class="text-text-color-6 text-base leading-6 py-1">
                  Membership with FinaCom is an honor reserved for companies that constantly and
                  faithfully adhere to these principles. Olymptrade joined the Commission on
                  February 22, 2016.
                </p>
              </div>
            </div>
            <div class="block2-item">
              <div class="title text-3xl">About Financial Markets Association in Vanuatu</div>
              <div class="desc">
                <p class="text-text-color-6 text-base leading-6 py-1">
                  Financial Markets Association in Vanuatu is a self-regulatory body for Vanuatu
                  Financial Dealer License holders.
                </p>
              </div>
            </div>
          </div>
          <div class="block-3 grid grid-cols-1 memd:grid-cols-2 gap-8 pt-20">
            <div class="block3-item">
              <div class="title text-2xl font-semibold py-3">
                Regulation of Olymptrade’s services in India
              </div>
              <div class="desc">
                <p>
                  <span class="sort">1.</span>
                  <span class="text-text-color-6 text-base leading-6 py-1"
                    >Olymptrade conducts its business activity under the laws of Saint Vincent and
                    the Grenadines, because Saledo Global LLC, a company which operates the
                    Olymptrade platform, is registered in that jurisdiction. That means that laws of
                    any other jurisdiction, including India, are not applicable to Olymptrade. This
                    is clearly indicated in clause 6 of the Company's
                    <a class="link text-blue-600 font-semibold underline underline-offset-2" href=""
                      >client agreement</a
                    ></span
                  >
                </p>
                <p>
                  <span class="sort">2.</span>
                  <span class="text-text-color-6 text-base leading-6 py-1"
                    >Olymptrade is also supervised by the Financial Commission, an independent
                    international self-regulatory organization which resolves disputes between
                    brokers and their customers. Olymptrade has reserved EUR 20,000 at the Financial
                    Commission as a compensation fund for its customers. You may find relevant
                    details on how compensation fund works
                    <a class="link text-blue-600 font-semibold underline underline-offset-2" href=""
                      >here</a
                    >, and you can check that Olymptrade has existing membership
                    <a class="link text-blue-600 font-semibold underline underline-offset-2" href=""
                      >here</a
                    ></span
                  >
                </p>
                <p>
                  <span class="sort">3.</span>
                  <span class="text-text-color-6 text-base leading-6 py-1"
                    >The RBI alert is related only to Forex transactions. However, Olymptrade offers
                    a big variety of financial products apart from Forex (such as FTT, stocks) to
                    its customers worlwide, including those who register on the platform from India.
                    Olymptrade collaborates with Indian influencers only in respect of FTT,
                    Olymptrade does not request them to promote Forex. Therefore Olymptrade believes
                    that further promotion of its products apart from Forex does not trigger the RBI
                    alert list. Olymptrade is allowed to offer forex derivatives, yet if a client't
                    national laws prohibit him from entering into forex derivative transactions, a
                    client should check this information on its own basis. A client can trade on.
                    indices, commodities, cryptocurrencies and stocks instead.</span
                  >
                </p>
                <a class="link text-blue-600 font-semibold underline underline-offset-2" href=""
                  >Show the Certificate</a
                >
              </div>
            </div>
            <div class="block3-item">
              <div class="title text-2xl font-semibold py-3">Legal Aid</div>
              <p class="text-text-color-6 text-base leading-6 py-1">
                Olymptrade clients are entitled to free legal assistance with any disputes they may
                raise with the broker.
              </p>
              <div class="title text-2xl font-semibold py-3">Compensation</div>
              <p class="text-text-color-6 text-base leading-6 py-1">
                Should any wrongdoing be proven on the part of the broker, a trader is eligible to
                receive up to €20,000 in compensation.
              </p>
              <div class="title text-2xl font-semibold py-3">Verifiable Quotes</div>
              <p class="text-text-color-6 text-base leading-6 py-1">
                All market prices quoted on the Olymptrade platform are third-party verified. The
                data can be accessed at all times so the trader can ensure they are getting the best
                trade execution.
              </p>
            </div>
          </div>
          <div class="block-4 grid grid-cols-1 memd:grid-cols-2 gap-8 pt-20">
            <div class="block4-item">
              <div class="text-2xl font-semibold py-3">Financial Commission</div>
              <div class="link">
                <a
                  class="link text-blue-600 font-semibold underline underline-offset-2"
                  href="mailto:info@financialcommission.org"
                  >info@financialcommission.org</a
                >
              </div>
              <div class="text-2xl font-semibold py-3">How to contact FinaCom</div>
              <div class="desc">
                <p>
                  <span class="sort">1.</span>
                  <span class="text-text-color-6 text-base leading-6 py-1"
                    >First, make sure you’ve described the issue to the broker. You can do so by
                    contacting the Olymptrade Client Relations Department in writing. We’ll do our
                    absolute best to get back to you within 24 hours of receiving your
                    message.</span
                  >
                </p>
                <p>
                  <span class="sort">2.</span>
                  <span class="text-text-color-6 text-base leading-6 py-1"
                    >If you are not fully satisfied with the solution proposed by our specialist or
                    the problem is not resolved within 14 days, you have the right to file a formal
                    complaint with the Financial Commission.</span
                  >
                </p>
                <p>
                  <span class="sort">3.</span>
                  <span class="text-text-color-6 text-base leading-6 py-1"
                    >You can describe the problem on the regulator's site or download a request form
                    in pdf and submit the completed file via the designated FinaCom email.</span
                  >
                </p>
                <a>Show the Certificate</a>
              </div>
            </div>
            <div class="block4-item">
              <div class="text-2xl font-semibold py-3">Olymptrade</div>
              <div class="link">
                <a
                  class="link text-blue-600 font-semibold underline underline-offset-2"
                  href="mailto:support-en@olymptrade.com"
                  >support-en@olymptrade.com</a
                >
              </div>
              <p class="text-text-color-6 text-base leading-6 py-1">
                The services on the Website are provided by Aollikus Limited, a licensed financial
                dealer, company number: 40131, registered address: 1276, Govant Building, Kumul
                Highway, Port Vila, Republic of Vanuatu. Saledo Global LLC, registered at Euro
                House, Richmond Hill Road, Kingstown, St. Vincent and the Grenadines, P.O. Box 2897,
                provides services to clients trading in digital assets and to clients with accounts
                nominated in digital assets. The companies are fully licensed to perform its
                activities by the laws of that country. Partner companies: VISEPOINT LIMITED
                (registration No. C 94716, registered at 123, Melita Street, Valletta, VLT 1123,
                Malta) and MARTIQUE LIMITED (registration No. HE 43318, registered at Kypranoros,
                13, EVI BUILDING, 2nd floor, Flat/Office 201, 1061, Nicosia, Cyprus), provide
                content and perform operational management of the business.
              </p>
            </div>
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
