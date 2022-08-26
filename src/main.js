import axios from './plugins/axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'
import './assets/icon/iconfont.css';
import Highlight from './plugins/highlight.js'

createApp(App).use(Highlight).use(axios).use(store).use(router).mount('#app')
