<template>
  <div>
    <!-- 菜单内容 -->
    <Transition name="fade-scale">
      <div v-if="open" class="menu-overlay" @click="closeMenu">
        <div class="menu-container px-4 mesm:px-8" @click.stop>
          <h1 class="text-white text-4xl font-bold tracking-widest my-4 uppercase melg:my-8">
            MENU
          </h1>
          <div class="menu-content grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- 没有子菜单的菜单与下载引导 -->
            <div class="left flex flex-col gap-4">
              <div class="menu-box bg-secondary-color p-6 rounded-xl">
                <ul>
                  <li
                    v-for="(item, index) in menuData.filter(
                      (m) => !m.children || !m.children.length,
                    )"
                    :key="index"
                    class="flex flex-row justify-start items-center gap-2 my-2 hover:cursor-pointer hover:text-text-hover-colo-1"
                    @click="menuJunp(item)"
                  >
                    <IconQuickStart v-if="item.icon === 'IconQuickStart'" />
                    <IconHelp v-else-if="item.icon === 'IconHelp'" />
                    <span>{{ item.label }}</span>
                  </li>
                </ul>
              </div>
              <!-- 下载引导 -->
              <div class="down-box bg-tertiary-color p-6 rounded-xl">
                <h2 class="text- text-2xl font-bold tracking-wide mb-4 text-text-color-1 uppercase">
                  Platforms
                </h2>
                <ul>
                  <li
                    class="flex flex-row justify-start items-center gap-2 my-2 text-text-color-2 hover:cursor-pointer hover:text-text-hover-colo-1"
                  >
                    <svg
                      t="1739517641705"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="3590"
                      width="32"
                      height="32"
                    >
                      <path
                        d="M751.2 428c-83.9 0-427.9 0-480.6 0-8.2 0-10.7 1.8-10.7 10.2 0 12 0 256.1 0 353.9 0 34.9 28 56 56 56l56 0 0 84c0 15.5 12.5 28 28 28s28-12.5 28-28l0-84 168 0 0 84c0 15.5 12.5 28 28 28 15.5 0 28-12.5 28-28l0-84 56 0c30.7 0 56-23.1 56-56 0-115.5-0.5-237 0-352.5C764 429.1 760.4 428 751.2 428zM316 792 316 484l147.7 0 244.2 0c-0.1 60.1 0 121.4 0 182.3L708 792 316 792z"
                        p-id="3591"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M176 456c-15.5 0-28 12.5-28 28l0 280c0 15.5 12.5 28 28 28s28-12.5 28-28L204 484C204 468.5 191.4 456 176 456z"
                        p-id="3592"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M848 456c-15.5 0-28 12.5-28 28l0 280c0 15.5 12.5 28 28 28 15.5 0 28-12.5 28-28L876 484C876 468.5 863.5 456 848 456z"
                        p-id="3593"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M649.7 178.8l50.1-70.6c9-12.6 6-30.1-6.6-39-12.5-8.9-30.1-6-39 6.6l-53 74.7c-0.5 0.8-0.6 1.7-1.1 2.5-25.5-9.5-54.3-15.6-88-15.6-33.8 0-62.7 6.1-88.2 15.7-0.5-0.8-0.6-1.7-1.1-2.5l-53-74.7c-8.9-12.6-26.5-15.5-39-6.6-12.6 9-15.6 26.4-6.6 39l50.2 70.7c-95.6 67.3-114.3 193-114.3 193l504 0.1C764 372 745.3 246.1 649.7 178.8zM335.2 315.9c23.9-54.1 74.4-122.6 176.9-122.6 102.5 0 152.9 68.6 176.8 122.6L335.2 315.9z"
                        p-id="3594"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M417.2 248.5 417.2 248.5c-12.8 0-23 10.7-23.1 24.3-0.1 13.5 9.8 24.6 22.4 25.1l0.7 0c12.5 0 23.8-11.4 24-24.4C441.4 260.1 430.3 248.5 417.2 248.5z"
                        p-id="3595"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M607.4 248.5l-0.7 0c-12.7 0-23.8 11.2-24 24.4-0.1 13.3 11.2 25 24 25l0.1 0c12.6-0.1 22.9-11 23-24.5C630 259.8 620.2 248.9 607.4 248.5z"
                        p-id="3596"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span>Android</span>
                  </li>
                  <li
                    class="flex flex-row justify-start items-center gap-2 my-2 text-text-color-2 hover:cursor-pointer hover:text-text-hover-colo-1"
                  >
                    <svg
                      t="1739517704218"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="5580"
                      width="32"
                      height="32"
                    >
                      <path
                        d="M469.333333 106.666667h85.333334v554.666666h-85.333334z"
                        fill="currentColor"
                        p-id="5581"
                      ></path>
                      <path
                        d="M512 725.546667l-60.330667-60.309334 196.096-196.117333 60.330667 60.330667z"
                        fill="currentColor"
                        p-id="5582"
                      ></path>
                      <path
                        d="M512 725.546667l-196.117333-196.096 60.352-60.330667 196.096 196.117333z"
                        fill="currentColor"
                        p-id="5583"
                      ></path>
                      <path
                        d="M704 106.666667v85.333333h128v640H192V192h362.666667V106.666667H106.666667v810.666666h810.666666V106.666667z"
                        fill="currentColor"
                        p-id="5584"
                      ></path>
                    </svg>
                    <span>Apk Download</span>
                  </li>
                  <li
                    class="flex flex-row justify-start items-center gap-2 my-2 text-text-color-2 hover:cursor-pointer hover:text-text-hover-colo-1"
                  >
                    <svg
                      t="1739517808129"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="6670"
                      width="32"
                      height="32"
                    >
                      <path
                        d="M243.091394 422.912a290.071273 290.071273 0 0 0-21.814303 108.606061c0 31.77503 5.678545 63.053576 15.639273 91.042909a872.975515 872.975515 0 0 1 71.152484-98.645334c-3.785697-8.067879-8.067879-17.997576-8.067878-27.492848 0-8.067879 1.892848-13.777455 3.785697-19.921455-26.996364-20.417939-46.948848-37.950061-60.695273-53.589333z m102.927515 345.708606c9.929697-8.067879 17.997576-15.639273 27.492849-21.814303 81.113212-61.160727 154.127515-96.721455 211.533575-116.673939 0-3.785697-1.892848-8.067879-1.892848-11.822546v-6.20606c-19.921455-6.144-41.735758-11.822545-61.191758-19.890425-51.2-17.997576-94.859636-39.377455-132.313212-59.267878-9.960727 9.929697-23.707152 15.639273-37.484606 15.639272-8.067879 0-13.746424-1.892848-19.921454-3.785697a724.526545 724.526545 0 0 0-81.082182 116.67394 308.906667 308.906667 0 0 0 94.859636 107.147636z m187.795394-205.327515c21.814303 8.067879 43.628606 13.746424 65.473939 19.921454 5.678545-5.709576 11.822545-9.960727 17.997576-11.884606a453.290667 453.290667 0 0 0-23.707151-65.442909 645.244121 645.244121 0 0 0-45.521455-86.791757c-5.709576 1.923879-9.960727 1.923879-15.670303 1.923879-11.853576 0-23.707152-3.816727-33.667879-11.884607-21.814303 13.777455-43.628606 27.523879-67.335757 45.552485l-29.416728 23.707152c1.892848 5.678545 3.785697 13.746424 3.785697 19.921454v8.067879c35.095273 17.066667 78.723879 38.88097 128.062061 56.909576z m276.48-31.77503c0-83.006061-35.560727-159.837091-94.828606-211.533576-29.416727 5.709576-74.938182 17.997576-130.420364 41.270303v5.678545c0 11.853576-3.816727 21.814303-9.960727 31.775031 17.997576 27.523879 33.667879 59.267879 49.338182 94.859636 9.929697 25.6 19.890424 51.2 27.492848 74.938182 15.639273 3.785697 29.385697 15.639273 37.453576 31.77503 11.853576 1.861818 23.707152 1.861818 35.560727 1.861818 29.416727 1.923879 57.406061 0 79.220364 0 2.358303-25.134545 6.144-46.917818 6.144-70.624969z m-294.477576-215.350303c5.678545-1.861818 9.929697-1.861818 15.639273-1.861819 15.639273 0 29.385697 5.678545 39.346424 17.997576a663.365818 663.365818 0 0 1 110.498909-39.346424 298.635636 298.635636 0 0 0-165.981091-51.2c-21.814303 0-45.521455 1.861818-65.473939 8.067879 18.525091 16.570182 42.232242 38.384485 65.939394 66.373818z m134.671515 471.908848c1.892848-29.385697 0-69.228606-9.960727-118.535758h-3.785697c-13.777455 0-25.63103-3.816727-33.667879-11.884606a741.500121 741.500121 0 0 0-207.747878 114.781091c-5.678545 3.785697-11.853576 9.929697-19.921455 13.746425a298.728727 298.728727 0 0 0 138.488242 33.667878 264.316121 264.316121 0 0 0 136.595394-31.77503zM259.196121 391.13697a439.078788 439.078788 0 0 0 67.366788 61.160727c8.067879-3.785697 17.997576-8.067879 27.523879-8.067879 9.929697 0 19.890424 1.892848 27.492848 8.067879l29.385697-23.707152a958.029576 958.029576 0 0 1 69.259637-47.414303c-1.892848-3.816727-1.892848-8.067879-1.892849-13.777454 0-11.853576 3.785697-21.814303 9.929697-31.77503-29.385697-33.202424-55.451152-59.267879-76.8-74.907152-65.473939 23.707152-118.566788 71.121455-152.234666 130.420364z m458.162424 242.812121c-5.678545 0-15.670303 0-29.416727 3.785697-3.785697 8.067879-8.067879 13.746424-13.746424 19.921454 8.067879 43.628606 11.853576 81.113212 11.853576 110.49891 47.414303-33.667879 84.898909-79.189333 106.713212-134.206061h-75.403637z"
                        fill="currentColor"
                        p-id="6671"
                      ></path>
                      <path
                        d="M650.488242 128.372364c-8.067879-23.707152-29.416727-41.735758-57.40606-41.735758-31.744 0-59.267879 25.63103-59.267879 57.406061s25.6 57.37503 59.267879 57.37503c15.670303 0 31.77503-5.678545 41.766788-17.997576 147.952485 51.2 252.772848 187.795394 252.772848 347.601455 0 39.377455-5.709576 77.327515-18.028606 112.888242l51.2 29.385697c15.670303-43.628606 25.63103-92.935758 25.63103-142.273939 0.465455-187.329939-124.245333-347.136-295.936-402.649212z m167.87394 604.687515c-31.77503 0-59.267879 25.63103-59.267879 57.40606 0 6.144 1.892848 9.929697 1.892849 15.639273a374.473697 374.473697 0 0 1-247.094304 92.935758c-108.606061 0-207.716848-47.414303-276.48-120.428606l-53.123878 29.385697c79.189333 91.042909 197.756121 147.983515 328.176485 147.983515 110.498909 0 213.426424-41.735758 288.364606-110.498909 3.785697 1.861818 8.067879 1.861818 13.746424 1.861818 31.77503 0 59.267879-25.6 59.267879-57.37503s-23.707152-56.909576-55.482182-56.909576z m-667.772121-130.420364c-3.785697-23.707152-8.067879-45.521455-8.067879-71.121454 0-175.941818 126.665697-322.032485 294.539636-357.593213v-59.267878C235.52 150.186667 83.254303 323.770182 83.254303 531.48703c0 29.385697 3.816727 59.267879 9.960727 86.760728A54.768485 54.768485 0 0 0 77.575758 657.687273c0 31.744 25.6 57.344 59.267878 57.344 31.77503 0 59.267879-25.6 59.267879-57.375031-0.434424-27.492848-19.890424-49.338182-45.490424-55.016727z"
                        fill="currentColor"
                        p-id="6672"
                      ></path>
                    </svg>
                    <span>Web App</span>
                  </li>
                  <li
                    class="flex flex-row justify-start items-center gap-2 my-2 text-text-color-2 hover:cursor-pointer hover:text-text-hover-colo-1"
                  >
                    <svg
                      t="1739517896389"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="7727"
                      width="32"
                      height="32"
                    >
                      <path
                        d="M873.6 150.4C777.6 52.8 649.6 0 512 0S246.4 52.8 150.4 150.4 0 374.4 0 512s52.8 265.6 150.4 361.6S374.4 1024 512 1024s265.6-52.8 361.6-150.4S1024 649.6 1024 512s-52.8-265.6-150.4-361.6zM512 974.4C256 974.4 49.6 768 49.6 512S256 49.6 512 49.6s462.4 208 462.4 462.4S768 974.4 512 974.4z"
                        p-id="7728"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M753.6 275.2c-17.6-11.2-44.8-1.6-51.2 1.6L212.8 467.2c-17.6 6.4-36.8 20.8-33.6 43.2 3.2 25.6 30.4 35.2 33.6 36.8l113.6 38.4c8 28.8 35.2 116.8 41.6 136 4.8 16 11.2 35.2 28.8 35.2 1.6 1.6 4.8 1.6 9.6 1.6 11.2 0 17.6-3.2 20.8-8l65.6-60.8 110.4 84.8c1.6 1.6 1.6 1.6 4.8 1.6 9.6 4.8 17.6 4.8 24 4.8s14.4-1.6 17.6-3.2c19.2-8 27.2-25.6 28.8-28.8 0-1.6 1.6-1.6 1.6-3.2L768 307.2V304c0-17.6-9.6-25.6-14.4-28.8zM424 702.4l6.4-60.8 32 24-38.4 36.8z m219.2 35.2c-1.6 1.6-3.2 4.8-6.4 6.4-3.2 1.6-6.4 1.6-11.2-1.6l-121.6-94.4-60.8-48c51.2-44.8 209.6-187.2 216-195.2 6.4-6.4 14.4-14.4 12.8-25.6 0-1.6 0-1.6-1.6-3.2-1.6-6.4-4.8-12.8-11.2-16-11.2-6.4-24-1.6-35.2 4.8L336 548.8l-113.6-38.4c-1.6-1.6-4.8-1.6-6.4-4.8 1.6-1.6 4.8-3.2 6.4-3.2h1.6l488-192h1.6c3.2-1.6 8-3.2 12.8-3.2l-83.2 430.4z"
                        p-id="7729"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span>Telegram boot</span>
                  </li>
                </ul>
              </div>
            </div>
            <!-- 有子菜单的菜单 -->
            <div class="right flex flex-col gap-4">
              <div
                class="menu-item bg-secondary-color p-6 rounded-xl"
                v-for="(item, index) in menuData.filter((m) => m.children && m.children.length)"
                :key="index"
              >
                <h2 class="text-text-color-3 text-xl uppercase font-semibold text-color-3 pb-2">
                  {{ item.label }}
                </h2>
                <ul>
                  <li
                    v-for="(ele, i) in item.children"
                    :key="i"
                    class="text-base text-text-color-3 leading-8 hover:cursor-pointer hover:text-text-hover-colo-1"
                    @click="menuJunp(ele)"
                  >
                    {{ ele.label }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { type PropType } from 'vue'
import IconQuickStart from '@/components/icons/IconQuickStart.vue'
// import IconCompany from '@/components/icons/IconCompany.vue'
// import IconLearn from '@/components/icons/IconLearn.vue'
import IconHelp from '@/components/icons/IconHelp.vue'
import { useRouter } from 'vue-router'

interface MenuItem {
  label: string
  to: string
  icon?: string
  index: string
  children: MenuItem[] | null
}

// 定义 props
defineProps({
  open: {
    type: Boolean as PropType<boolean>,
    required: true,
  },
  menuData: {
    type: Array as PropType<MenuItem[]>,
    required: true,
  },
})

// 定义 emit
const emit = defineEmits(['update:open'])
const router = useRouter()

// 关闭菜单
const closeMenu = () => {
  emit('update:open', false)
}

const menuJunp = (menu: MenuItem) => {
  emit('update:open', false)
  router.push(menu.to)
}
</script>

<style lang="scss" scoped>
/* 按钮样式 */
.menu-toggle {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
}

/* 菜单遮罩层 */
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -20;
}

/* 菜单容器 */
.menu-container {
  background-color: #0a1e39;
  width: 100%;
  height: 100%;
  padding-top: 80px;
  overflow: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* 菜单项列表 */
.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* 过渡动画 */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.3s ease;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.9); // 缩小效果
}
</style>
```
