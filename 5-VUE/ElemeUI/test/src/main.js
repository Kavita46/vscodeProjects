
// import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'

import Element from 'element-plus'

import 'element-plus/dist/index.css'

import * as Icons from '@element-plus/icons'

const app = createApp(App)
Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key])
})

app.use(Element)
app.mount('#app')


// createApp(App).mount('#app')
