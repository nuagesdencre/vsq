import Vue from 'vue'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import VueRouter from 'vue-router';

//app
import App from './App.vue'

// components
import Home from "./components/Home";
import Profile from './components/Profile.vue';
import Contact from './components/Contact.vue';
import Portfolio from './components/Portfolio.vue'

//plugins and utils
Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.config.productionTip = false;


const routes = [
    {path: '/', component: Home},
    {path: '/profile', component: Profile},
    {path: '/contact', component: Contact},
    {path: '/portfolio', component: Portfolio}
];
const router = new VueRouter({routes});

new Vue({
    render: h => h(App),
    router,
    vuetify: new Vuetify(),

}).$mount('#app');
