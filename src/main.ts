import { createApp } from 'vue'
import app from './app'
import 'virtual:uno.css'
import './theme/index.css'

const simple = createApp(app)
simple.mount('#app')
