/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], //扫描以生成动态CSS类的文件或目录列表
  darkMode: 'media', // or 'media' or 'class' 设置暗黑模式
  theme: {
    //自定义或扩展Tailwind CSS的主题
    extend: {},
  },
  plugins: [],
}
