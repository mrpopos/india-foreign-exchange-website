<template>
  <div
    class="menu-container bg-primary-color"
    :class="{
      'vertical-menu': direction === 'vertical',
      'horizontal-menu': direction === 'horizontal',
    }"
  >
    <ul class="menu-list">
      <li
        v-for="(item, index) in menuData"
        :key="index"
        class="menu-item"
        :class="{ active: isActive(item) }"
        @mouseenter="showSubMenu(index)"
        @mouseleave="hideSubMenu(index)"
      >
        <div class="label-box" @click="menuJump(item)">
          <IconQuickStart v-if="item.icon === 'IconQuickStart'" />
          <IconCompany v-else-if="item.icon === 'IconCompany'" />
          <IconLearn v-else-if="item.icon === 'IconLearn'" />
          <IconHelp v-else-if="item.icon === 'IconHelp'" />
          <span class="menu-label">{{ item.label }}</span>
        </div>
        <!-- 子菜单 -->
        <Transition name="fade">
          <ul
            v-if="item.children && subMenuVisibleIndex === index"
            class="sub-menu bg-primary-color"
            :class="submenuDirectionClass"
          >
            <li
              v-for="(child, childIndex) in item.children"
              :key="childIndex"
              class="sub-menu-item"
              @click="menuJump(child)"
            >
              {{ child.label }}
            </li>
          </ul>
        </Transition>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import IconQuickStart from '@/components/icons/IconQuickStart.vue'
import IconCompany from '@/components/icons/IconCompany.vue'
import IconLearn from '@/components/icons/IconLearn.vue'
import IconHelp from '@/components/icons/IconHelp.vue'
import { useRouter } from 'vue-router'

interface MenuItem {
  label: string
  to?: string
  icon?: string
  index: string
  children: MenuItem[] | null
}

// 定义 props
const props = defineProps({
  // 菜单数据
  menuData: {
    type: Array<MenuItem>,
    required: true,
  },
  // 默认激活的菜单项（通过 label 匹配）
  defaultActive: {
    type: String,
    default: '',
  },
  // 菜单方向：vertical 或 horizontal
  direction: {
    type: String,
    default: 'vertical', // 默认垂直菜单
    validator: (value: string) => ['vertical', 'horizontal'].includes(value),
  },
  // 子菜单方向：right 或 bottom
  submenuDirection: {
    type: String,
    default: 'right', // 默认向右展开
    validator: (value: string) => ['right', 'bottom'].includes(value),
  },
})

const router = useRouter()

// 当前显示子菜单的索引
const subMenuVisibleIndex = ref<number>(-1)

// 默认激活的菜单项
const activeMenu = ref(props.defaultActive)

// 计算子菜单的方向类名
const submenuDirectionClass = computed(() => {
  return {
    'sub-menu-right': props.submenuDirection === 'right',
    'sub-menu-bottom': props.submenuDirection === 'bottom',
  }
})

// 判断当前菜单项是否激活
const isActive = (item: MenuItem) => {
  return item.label === activeMenu.value
}

// 显示子菜单
const showSubMenu = (index: number) => {
  subMenuVisibleIndex.value = index
}

// 隐藏子菜单
const hideSubMenu = (index: number) => {
  if (subMenuVisibleIndex.value === index) {
    subMenuVisibleIndex.value = -1
  }
}

// 激活菜单项
const menuJump = (item: MenuItem) => {
  console.log('item', item)
  activeMenu.value = item.label
  if (item.to) {
    router.push(item.to)
  }
}
</script>

<style lang="scss" scoped>
/* 主菜单样式 */
.menu-container {
  border-radius: 16px;
  box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.5);

  /* 水平菜单样式 */
  &.horizontal-menu {
    .menu-list {
      display: flex;
    }
  }

  &.horizontal-menu .menu-item {
    border-bottom: none;
  }

  .menu-list {
    list-style: none;
    padding: 0;
    margin: 0;

    .menu-item {
      padding: 10px 15px;
      cursor: pointer;
      position: relative;

      // &.active {
      //   color: var(--c-hover);
      // }

      .label-box {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        gap: 8px;
        &:hover {
          color: var(--c-hover);
        }
      }

      /* 子菜单样式 */
      .sub-menu {
        position: absolute;
        border-radius: 4px;
        box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 0.8);
        z-index: 10;

        &.sub-menu-right {
          top: 0;
          left: 100%;
        }

        &.sub-menu-bottom {
          top: 100%;
          left: 0;
        }

        .sub-menu-item {
          padding: 10px 15px;
          list-style: none;
          cursor: pointer;
          text-wrap: nowrap;
          color: var(--primary-color);

          &:hover {
            background-color: var(--c-hover-1);
            color: var(--c-hover);
          }
        }
      }
    }
  }
}

/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px); /* 子菜单从上方淡入 */
}
</style>
