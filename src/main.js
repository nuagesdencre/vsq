import Vue from 'vue'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import VueRouter from 'vue-router';

//app
import App from './App.vue'

// components
import Profile from './components/Profile.vue';
import HelloWorld from "./components/HelloWorld";

//plugins and utils
Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
    {path: '/', component: HelloWorld},
    {path: '/profile', component: Profile},
];
const router = new VueRouter({routes});

new Vue({
    render: h => h(App),
    router,
}).$mount('#app');
