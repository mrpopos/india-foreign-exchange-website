import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      // 分类下模块中标题ID
      activePlaylistId: null as number | null,
      scrollTop: 0,
    }
  },
  getters: {},
  actions: {
    setScrollTop(top: number) {
      this.scrollTop = top
    },
  },
  persist: true,
})
