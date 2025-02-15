import { type Ref, ref, onMounted, onBeforeUnmount } from 'vue'
import { useAppStore } from '@/stores/modules/app'

export function useDomScroll(targetRef: Ref<HTMLElement>) {
  const scrollTop = ref(0)
  const scrollLeft = ref(0)

  const handleScroll = () => {
    if (targetRef.value) {
      scrollTop.value = targetRef.value.scrollTop
      scrollLeft.value = targetRef.value.scrollLeft
    }
  }

  onMounted(() => {
    targetRef.value.addEventListener('scroll', handleScroll)
  })

  onBeforeUnmount(() => {
    useAppStore().setScrollTop(0)
    targetRef.value.removeEventListener('scroll', handleScroll)
  })

  return {
    scrollTop,
    scrollLeft,
  }
}
