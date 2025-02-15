<script setup lang="ts"></script>

<template>
  <div class="footer-wrapper px-12 text-gray-400 font-semibold">
    <div class="footer-container">
      <div class="w-full py-20">
        <div class="w-full px-6 mx-auto mesm:px-12 memd:px-16 melg:max-w-[1200px] melg:px-24">
          <div class="content grid grid-cols-1 gap-6 md:grid-cols-3">
            <div class="cols-item flex flex-col justify-start items-start gap-4">
              <div class="line-box no-children-menu flex flex-col justify-start items-start gap-1">
                <div
                  class="menu-item leading-9 underline underline-offset-2 hover:text-text-hover-colo-1 hover:cursor-pointer"
                >
                  Quick Start
                </div>
                <div
                  class="menu-item leading-9 underline underline-offset-2 hover:text-text-hover-colo-1 hover:cursor-pointer"
                >
                  Help
                </div>
              </div>
              <div class="line-box">
                <h2 class="text-white text-xl font-semibold pb-4">Follow us on social media</h2>
                <div
                  class="social-media flex flex-row flex-wrap justify-start items-center gap-x-4"
                >
                  <div
                    class="social-item leading-7 hover:cursor-pointer hover:text-text-hover-colo-1 facebook"
                  >
                    facebook
                  </div>
                  <div
                    class="social-item leading-7 hover:cursor-pointer hover:text-text-hover-colo-1 twitter"
                  >
                    twitter
                  </div>
                  <div
                    class="social-item leading-7 hover:cursor-pointer hover:text-text-hover-colo-1 instagram"
                  >
                    instagram
                  </div>
                  <div
                    class="social-item leading-7 hover:cursor-pointer hover:text-text-hover-colo-1 telegram"
                  >
                    telegram
                  </div>
                  <div
                    class="social-item leading-7 hover:cursor-pointer hover:text-text-hover-colo-1 youtube"
                  >
                    youtube
                  </div>
                </div>
              </div>
            </div>
            <div class="cols-item">
              <h2 class="title text-white text-xl font-semibold pb-4">Company</h2>
              <div
                class="menu-item leading-9 underline underline-offset-2 hover:text-text-hover-colo-1 hover:cursor-pointer"
              >
                About Us
              </div>
              <div
                class="menu-item leading-9 underline underline-offset-2 hover:text-text-hover-colo-1 hover:cursor-pointer"
              >
                Legal
              </div>
              <div
                class="menu-item leading-9 underline underline-offset-2 hover:text-text-hover-colo-1 hover:cursor-pointer"
              >
                Fund Safety
              </div>
              <div
                class="menu-item leading-9 underline underline-offset-2 hover:text-text-hover-colo-1 hover:cursor-pointer"
              >
                Responsibility
              </div>
            </div>
            <div class="cols-item">
              <h2 class="title text-white text-xl font-semibold pb-4">Learn</h2>
              <div
                class="menu-item leading-9 underline underline-offset-2 hover:text-text-hover-colo-1 hover:cursor-pointer"
              >
                Guides
              </div>
              <div
                class="menu-item leading-9 underline underline-offset-2 hover:text-text-hover-colo-1 hover:cursor-pointer"
              >
                Whats is CFD?
              </div>
              <div
                class="menu-item leading-9 underline underline-offset-2 hover:text-text-hover-colo-1 hover:cursor-pointer"
              >
                Deposits & Withdrawal2
              </div>
              <div
                class="menu-item leading-9 underline underline-offset-2 hover:text-text-hover-colo-1 hover:cursor-pointer"
              >
                Glossary
              </div>
            </div>
          </div>
          <div class="crip pt-8 text-sm text-center text-gray-600">
            Foreign Exchange, © 2024-2034
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-wrapper {
  .footer-container {
    height: 100%;
    @include mixins.flex-container();
  }
}
</style>
