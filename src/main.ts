import "tailwindcss/tailwind.css"
import './assets/scss/index.scss'
import scrollAnimation from './directives/scrollAnimation';
import 'animate.css'


import { createApp } from 'vue'
import pinia from './stores/index.ts'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// 注册全局指令
app.directive('animate-onscroll', scrollAnimation);

app.use(pinia)
app.use(router)

app.mount('#app')
