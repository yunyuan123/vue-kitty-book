
import './assets/tooplate-style.css'
import './assets/base.css'
import './assets/bootstrap.min.css'
import './assets/css/font-awesome.css'
import './assets/css/font-awesome.min.css'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
