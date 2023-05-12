import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jQuery from 'jquery'
import Agile from './components/agile'
import CodePen from './components/CodePen'

createApp(App).use(store).use(router)
.use(Agile)
.component('code-pen', CodePen)
.mount('#app')

window.$ = global.$ = global.jQuery = jQuery;
