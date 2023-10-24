import { createApp } from 'vue'
import App from './root'

import 'virtual:uno.css'
import './theme/index.css'

const app = createApp(App)
app.mount('#app')
