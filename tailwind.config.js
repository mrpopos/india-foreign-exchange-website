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
        'text-color-4': '#1e385b', // 文字颜色：首页区域why choose us标题
        'text-color-5': '#212121', // 文字颜色：首页区域why choose us副标题
        'text-color-6': '#515151', // 文字颜色：首页区域why choose us文本
        'text-hover-colo-1': '#013fc2', // 文字颜色：移动端菜单列表模块标题、菜单链接悬浮颜色
      },
      screens: {
        mexs: '320px',
        mesm: '600px',
        memd: '768px',
        melg: '1200px',
      },
      backgroundImage: {
        aboutbg: "url('../../../src/assets/images/aboutbg.webp')",
        legalbg: "url('../../../src/assets/images/legalbg.webp')",
        fundbg: "url('../../../src/assets/images/fundbg.webp')",
        govsvg: "url('../../../src/assets/svg/gov.svg')",
      },
      keyframes: {
        spin: {
          from: { transform: 'translate(0)' },
          to: { transform: 'translate(50px)' },
        },
      },
      animation: {
        'custom-spin': 'spin 1s ease-out infinite',
      },
    },
  },
  plugins: [],
}
