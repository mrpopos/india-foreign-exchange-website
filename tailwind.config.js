/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], //扫描以生成动态CSS类的文件或目录列表
  darkMode: 'media', // or 'media' or 'class' 设置暗黑模式
  theme: {
    //自定义或扩展Tailwind CSS的主题
    extend: {
      colors: {
        'primary-color': '#141414', // 背景色：文档
        'secondary-color': '#1a3355', // 背景色：移动端菜单列表模块
        'tertiary-color': '#e7eaec', // 背景色：移动端菜单平台模块
        'btn-color': '#013FC2', // 背景色：按钮
        'text-color-1': '#173257', // 文字颜色：移动端菜单平台模块标题
        'text-color-2': '#5b6675', // 文字颜色：移动端菜单平台模块列表
        'text-color-3': '#b1c6d7', // 文字颜色：移动端菜单列表模块标题
        'text-color-4': '#001b48', // 文字颜色：首页区域why choose us标题
        'text-color-5': '#212121', // 文字颜色：首页区域why choose us副标题
        'text-color-6': '#515151', // 文字颜色：首页区域why choose us文本
        'text-hover-color-1': '#ffffff', // 文字颜色：移动端菜单列表模块标题、菜单链接悬浮颜色
        'section-bg': '#d7e1f3' // 背景色：区域背景色（区别于全局背景）
      },
      screens: {
        mexs: '320px',
        mesm: '600px',
        memd: '768px',
        melg: '1200px'
      },
      backgroundImage: {
        aboutbg: "url('/images/aboutbg.webp')",
        legalbg: "url('/images/legalbg.webp')",
        fundbg: "url('/images/fundbg.webp')",
        responsibilitybg: "url('/images/responsibilitybg.webp')",
        cfdbg: "url('/images/cfdbg.webp')",
        depositsbg: "url('/images/depositsbg.webp')",
        howdeposit1: "url('/images/howdeposit1.webp')",
        howdeposit6: "url('/images/howdeposit6.webp')"
      },
      keyframes: {
        spin: {
          from: { transform: 'translate(0)' },
          to: { transform: 'translate(50px)' }
        },
        dot1: {
          '0%': {},
          '25%': {
            backgroundColor: '#0000ff'
          },
          '50%': {
            backgroundColor: '#0000ff'
          },
          '75%': {
            backgroundColor: '#0000ff'
          },
          '100%': {}
        },
        dot2: {
          '0%': {},
          '25%': {},
          '50%': {
            backgroundColor: '#0000ff'
          },
          '75%': {
            backgroundColor: '#0000ff'
          },
          '100%': {}
        },
        dot3: {
          '0%': {},
          '25%': {},
          '50%': {},
          '75%': {
            backgroundColor: '#0000ff'
          },
          '100%': {}
        },
        steptxt1: {
          '0%': {},
          '25%': {
            color: '#0000ff'
          },
          '50%': {
            color: '#0000ff'
          },
          '75%': {
            color: '#0000ff'
          },
          '100%': {}
        },
        steptxt2: {
          '0%': {},
          '25%': {},
          '50%': {
            color: '#0000ff'
          },
          '75%': {
            color: '#0000ff'
          },
          '100%': {}
        },
        steptxt3: {
          '0%': {},
          '25%': {},
          '50%': {},
          '75%': {
            color: '#0000ff'
          },
          '100%': {}
        }
      },
      animation: {
        'custom-spin': 'spin 1s ease-out infinite',
        'custom-dot1': 'dot1 8s linear infinite',
        'custom-dot2': 'dot2 8s linear infinite',
        'custom-dot3': 'dot3 8s linear infinite',
        'custom-steptxt1': 'steptxt1 8s linear infinite',
        'custom-steptxt2': 'steptxt2 8s linear infinite',
        'custom-steptxt3': 'steptxt3 8s linear infinite'
      }
    }
  },
  plugins: []
}
