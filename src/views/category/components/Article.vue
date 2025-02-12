<template>
  <div class="article" v-if="articleDataRecord">
    <div class="title">{{ articleDataRecord.title }}</div>
    <div class="content-block">
      <div class="block-item" v-for="(item, i) in articleDataRecord.atoms" :key="i">
        <template v-if="item.type === 'paragraph'">
          <p class="paragraph">{{ item.value.text }}</p>
        </template>
        <template v-else-if="item.type === 'image'">
          <img class="image" :src="item.value.large.path" alt="" />
        </template>
        <template v-else-if="item.type === 'video'">
          <!-- youtube： https://youtube.com/embed/c0iP1xlyG88 -->
          <iframe
            class="video"
            :src="item.value.url"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue'
import type { IArticleDataRecord } from '../../../data/types'
import { useAppStore } from '@/stores/modules/app'
import { articleData } from '@/data/index.ts'

defineComponent({
  name: 'ArticlePage',
})

const appStore = useAppStore()

const articleDataRecord = ref<IArticleDataRecord>()

// console.log('first', route.params)
function initArticleData() {
  const article = articleData.find((item) => item.id === appStore.activePlaylistId)
  if (article) {
    articleDataRecord.value = article
    console.log('first', articleDataRecord.value)
  } else {
    console.log('no article data')
  }
}

// 监听appStore.activePlaylistId
watch(
  () => appStore.activePlaylistId,
  (newValue) => {
    console.log('newValue', newValue)
    initArticleData()
  },
  {
    immediate: true,
    deep: true,
  },
)

onMounted(() => {
  initArticleData()
})
</script>

<style lang="scss" scoped>
.title {
  font-size: 21px;
  font-weight: 600;
  margin-bottom: 16px;
}

.content-block {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;

  .block-item {
    width: 100%;

    .paragraph {
      font-size: 16px;
      color: var(--c-white-1);
      line-height: 1.5;
    }

    .video {
      width: 100%;
      height: 400px;
    }
  }
}
</style>
