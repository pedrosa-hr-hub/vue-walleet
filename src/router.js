import Vue from 'vue';
import Router from 'vue-router';


import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Buy from './views/Buy.vue';

Vue.use(Router);

export default new Router({
     mode: "history",
     routes:[
          {
               path: '/home',
               name: 'Home',
               component: Home
          },
          {
               path: '/',
               name: 'Login',
               component: Login
          },
          {
               path: '/buy',
               name: 'Buy',
               component: Buy
          },
     ]

});