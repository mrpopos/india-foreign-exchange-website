<template>
  <div class="user-guide">
    <div class="title">{{ data.title }}</div>
    <div class="list">
      <div
        class="item"
        v-for="item in data.categories"
        :key="item.id"
        @click="handleGuideItem(item)"
      >
        <UserGuideItem :data="item" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserGuideItem from './UserGuideItem.vue'
import { useRouter } from 'vue-router'

interface ICategoryItem {
  id: number
  name: string
  title: string
  url_alias: string
}

interface IPropsData {
  title: string
  categories: Array<ICategoryItem>
}

defineProps<{ data: IPropsData }>()

const router = useRouter()

function handleGuideItem(item: ICategoryItem) {
  // console.log('item', item)
  router.push({
    path: '/help/category/' + item.name,
  })
}
</script>

<style lang="scss" scoped>
.user-guide {
  .title {
    margin-bottom: 24px;
    font-size: 20px;
  }

  .list {
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
  }
}

@media screen and (min-width: 640px) {
  .user-guide {
    .list {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
@media screen and (min-width: 1024px) {
  .user-guide {
    .list {
      grid-template-columns: repeat(6, 1fr);
    }
  }
}
</style>
