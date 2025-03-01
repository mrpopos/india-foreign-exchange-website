// directives/scrollAnimation.js
import { nextTick } from 'vue'

interface IBinding {
  value?: string
  modifiers?: {
    once?: boolean
  }
  oldValue?: string | null | undefined
  arg?: string
}

export default {
  mounted(el: Element, binding: IBinding) {
    const animationName = binding.value || 'animate__fadeIn' // 默认动画名称
    const options = binding.modifiers || {}
    let isAnimated = false

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (!isAnimated || !options.once) {
              el.classList.add('animate__animated', animationName)
              isAnimated = true // 如果设置了 once，则只执行一次
            }

            if (options.once) {
              observer.unobserve(entry.target) // 只触发一次后停止观察
            }
          } else {
            if (!options.once) {
              el.classList.remove('animate__animated', animationName)
              isAnimated = false // 如果不是 once，则移除动画类名
            }
          }
        })
      },
      { threshold: 0.3 }
    ) // 当元素 30% 进入视口时触发

    observer.observe(el)

    // 确保在 DOM 更新后再添加观察器
    nextTick(() => {
      if (!el.isConnected) {
        observer.disconnect()
      }
    })
  }
}
