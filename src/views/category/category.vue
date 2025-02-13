<template>
  <div class="w-full py-20">
    <div class="w-full melg:max-w-[1200px] px-6 mx-auto">
      <div class="help-category">
        <!-- <div class="help-category">HelpCategory： {{ route.path }}</div> -->
        <div class="back" @click="goBack">
          <svg
            viewBox="0 0 24 24"
            role="presentation"
            focusable="false"
            aria-hidden="true"
            data-role="icon"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M14.707 7.293a1 1 0 00-1.414 0l-4 4a1 1 0 000 1.414l4 4a1 1 0 001.414-1.414L11.414 12l3.293-3.293a1 1 0 000-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="text">Help center</span>
        </div>
        <div class="title">Trading platform</div>
        <div class="bodies">
          <!-- aside -->
          <div
            class="aside"
            v-if="windowSize.width > 670 || (windowSize.width < 671 && !route.params.url_alias)"
          >
            <div class="aside-container">
              <div v-for="(item, i) in specificCateList" :key="i" class="aside-block-item">
                <div
                  class="block-header"
                  @click="handleHeaderClick(item)"
                  :class="{ expand: item.isExpand }"
                >
                  <div class="left">
                    <div class="a-title">{{ item.title }}</div>
                    <div class="topics">{{ item.playlists.length }} topics</div>
                  </div>
                  <div class="right">
                    <svg
                      class="SvgIcon-module-host-3SE _20G6J9d"
                      viewBox="0 0 24 24"
                      role="presentation"
                      focusable="false"
                      aria-hidden="true"
                      data-role="icon"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M16.707 14.707a1 1 0 000-1.414l-4-4a1 1 0 00-1.414 0l-4 4a1 1 0 101.414 1.414L12 11.414l3.293 3.293a1 1 0 001.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div class="block-bodies" :class="{ expand: item.isExpand }">
                  <div
                    v-for="(ele, k) in item.playlists"
                    :key="k"
                    class="bodies-item"
                    :class="{ active: ele.id === activePlaylistId }"
                    @click="handlePlaylistItem(ele)"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" data-role="icon" class="_3qcjcvF">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6ZM2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12ZM2 18C2 17.4477 2.44772 17 3 17H15C15.5523 17 16 17.4477 16 18C16 18.5523 15.5523 19 15 19H3C2.44772 19 2 18.5523 2 18Z"
                      ></path>
                    </svg>
                    <span>{{ ele.title }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="article"
            v-if="windowSize.width > 670 || (windowSize.width < 671 && route.params.url_alias)"
          >
            <RouterView v-if="route.params.url_alias" />
            <ArticlePage v-else />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { specificCateData, articleData } from '@/data/index.ts'
import type { ISpecificCateDataItem, IPlaylistsItem, IArticleDataRecord } from '@/data/types.ts'
import { useAppStore } from '@/stores/modules/app.ts'
import ArticlePage from './components/article.vue'
import { useWindowSize } from '@/hooks/useWindowSize.ts'

const windowSize = useWindowSize()

const route = useRoute()
const router = useRouter()
const appStore = useAppStore()

defineComponent({
  name: 'HelpCategory',
})

const specificCateList = ref<Array<ISpecificCateDataItem>>()
const activePlaylistId = ref<number>()
const currentArticleRecord = ref<IArticleDataRecord>()

function initRenderPage() {
  specificCateList.value = prehandleData(specificCateData[route.params.name as string])
}

function prehandleData(data: ISpecificCateDataItem[]) {
  // 设置默认选中的文章标题ID
  activePlaylistId.value = appStore.activePlaylistId || data[0].playlists[0].id
  // 获取当前文章数据
  const article = articleData.find((item) => item.id === activePlaylistId.value)
  if (article) {
    currentArticleRecord.value = article
  }
  // 初始化数据
  return data.map((item, index) => {
    return {
      ...item,
      isExpand: index === 0,
    }
  })
}

function goBack() {
  // router.push('/')
  router.go(-1)
}

function handlePlaylistItem(item: IPlaylistsItem) {
  activePlaylistId.value = item.id
  // 设置当前文章数据
  const article = articleData.find((item) => item.id === activePlaylistId.value)
  if (article) {
    currentArticleRecord.value = article
  }
  // 路由跳转,显示文章
  router.push(`/help/category/${route.params.name}/${item.name}`)
}

function handleHeaderClick(item: ISpecificCateDataItem) {
  item.isExpand = !item.isExpand
}

// 监听activePlaylistId.value变化
watch(
  () => activePlaylistId.value,
  (newVal) => {
    // 路由跳转
    if (newVal) {
      appStore.activePlaylistId = newVal
    }
  },
  {
    immediate: true,
    deep: true,
  },
)

onMounted(() => {
  initRenderPage()
})
</script>

<style lang="scss" scoped>
.help-category {
  .back {
    display: inline-flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 2px;
    padding: 8px 16px;
    background-color: var(--c-white-3);
    border-radius: 3px;
    cursor: pointer;
    margin-bottom: 24px;

    &:hover {
      background-color: #292929;
    }

    svg {
      width: 24px;
      height: 24px;
    }
  }

  .title {
    font-size: 21px;
    line-height: var(--h2-lh);
    font-weight: 600;
    margin-bottom: 5px;
  }

  .bodies {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: flex-start;
    gap: 3rem;

    .aside {
      flex: none;
      width: 328px;
      transition: all 0.3s ease-in-out;

      .aside-container {
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 16px;

        .aside-block-item {
          width: 100%;
          border-radius: 8px;
          background-color: var(--c-white-3);

          .block-header {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
            padding: 12px 16px;
            cursor: pointer;

            &.expand {
              .right {
                transform: rotateX(0deg);
              }
            }

            .left {
              display: flex;
              flex-flow: column nowrap;
              justify-content: center;
              align-items: flex-start;
              gap: 4px;

              .a-title {
                font-weight: 600;
              }

              .topics {
                font-size: 12px;
                color: var(--c-white-4);
              }
            }

            .right {
              transform: rotateX(180deg);
              transition: all 0.3s ease-in-out;
              svg {
                width: 24px;
                height: 24px;
              }
            }

            &:hover {
              .right {
                color: #94fa62;
              }
            }
          }

          .block-bodies {
            padding: 0 16px;
            height: 0;
            overflow: hidden;

            &.expand {
              height: auto;
            }

            .bodies-item {
              display: flex;
              flex-flow: row nowrap;
              justify-content: flex-start;
              align-items: flex-start;
              gap: 8px;
              padding: 6px 0;
              cursor: pointer;
              color: #e5ffff8f;

              svg {
                flex: none;
                width: 16px;
                height: 24px;
              }

              &.active {
                color: #94fa62;
              }

              span {
                line-height: 1.25;
              }

              &:hover {
                color: #c2cccc;
              }
            }
          }
        }
      }
    }

    .article {
      flex: 1;
    }
  }
}

@media screen and (min-width: 671px) and (max-width: 768px) {
  .help-category {
    .bodies {
      gap: 1.5rem;

      .aside {
        width: 288px;
      }
    }
  }
}

@media screen and (max-width: 670px) {
  .help-category {
    .back {
      span {
        font-size: 14px;
      }
    }

    .bodies {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: flex-start;
      gap: 3rem;

      .aside {
        flex: 1;
        width: 328px;
        transition: all 0.3s ease-in-out;
      }
    }
  }
}
</style>
