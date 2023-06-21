import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VTiptap from "@peepi/vuetify-tiptap"

Vue.config.productionTip = false


Vue.use(VTiptap);

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')