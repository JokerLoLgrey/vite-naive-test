import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { setupNaive, setupIcon, setupComponents } from './plugins' 
const app = createApp(App)

setupNaive(app)
setupIcon(app)
setupComponents(app)

app.use(router)
.mount('#app')
