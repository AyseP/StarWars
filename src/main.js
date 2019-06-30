import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false

import film from "./components/film.vue";
import cast from "./components/cast.vue";
import films from "./components/films.vue";



const router = new VueRouter({
  routes: [
    // dynamic segments start with a colon
    {
      path: "/",
      component: films
    },
    {
      path: '/cast/:id',
      component: cast
    },
    {
      path: '/film/:id',
      component: film
    }
  ]
})

Vue.use(BootstrapVue)
Vue.use(VueRouter)



new Vue({
  render: h => h(App),
  router
}).$mount('#app')