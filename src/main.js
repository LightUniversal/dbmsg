import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import firebaseInit from './components/firebaseInit'
import firebaseConfig from './components/firebaseConfig'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

let app;
firebaseInit.auth.onAuthStateChanged(user => {
    if (!app) {
        app = createApp(App).component('fa', FontAwesomeIcon)
        library.add(fas)
        app.use(router)

        app.mount('#app')
    }
})


