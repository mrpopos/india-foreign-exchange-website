import { ref, onMounted, onUnmounted } from 'vue'

export function useDomScroll(dom: HTMLElement) {
  console.log('dom', dom)
  const position = ref({ x: 0, y: 0 })

  onMounted(() => {
    dom.addEventListener('scroll', () => {
      position.value = {
        x: dom.scrollLeft,
        y: dom.scrollTop,
      }
    })
  })

  onUnmounted(() => {
    dom.removeEventListener('scroll', () => {})
  })

  return {
    position,
  }
}
