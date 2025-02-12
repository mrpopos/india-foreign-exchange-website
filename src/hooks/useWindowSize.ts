import { ref, onMounted, onUnmounted } from 'vue'

export function useWindowSize() {
  const windowSize = ref({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const handleResize = () => {
    windowSize.value = {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  }

  onMounted(() => window.addEventListener('resize', handleResize))
  onUnmounted(() => window.removeEventListener('resize', handleResize))

  return windowSize
}
