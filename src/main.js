import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


<<<<<<< HEAD
<<<<<<< HEAD
// import firebase auth service
import { projectAuth } from './firebase/config'

import './assets/tailwind.css'

let app

projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(router)
      .mount('#app')
  }
})
=======
createApp(App).use(router).mount('#app')
>>>>>>> parent of f1a8988 (auth guard)
=======
createApp(App).use(router).mount('#app')
>>>>>>> parent of f1a8988 (auth guard)
