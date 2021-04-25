import Vue from 'vue';
import Router from 'vue-router';

import Login from '../components/Login';
import Registro from '../components/RegistroComponent';
//import Register from './components/Register';
import Forgot from '../components/Forgot';
import Reset from '../components/Reset';
import Home from '../components/Home';
import Comienzo from '../components/Comienzo';
import Tutorial from '../components/Tutorial';

//import store from './vuex';
import almacen from './almacen';

Vue.use(almacen);
Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'base', component: () => import(/* webpackChunkName: "Raiz" */"../components/Home.vue"),
      meta: { requiresAuth: true }
    },

    { path: '/home', name: 'home', component: Home,
      meta: { requiresAuth: true }
    },

    { path: '/login',  name: 'login',  component: Login, 
      meta: { requiresVisitor: true}
    },

    { path: '/register', name: 'register', component: Registro,
      meta: { requiresVisitor: true }
    },

    { path: '/forgot', name: 'forgot',  component: Forgot,
      meta: { requiresVisitor: true }
    },
    { path: '/reset/:token', name: 'reset', component: Reset,
      meta: { requiresVisitor: true }
    },    

    { path: '/starting',  name: 'starting', component: Comienzo, 
      meta: { requiresAuth: true }
    },

    { path: '/tutorial/:pokemon',  name: 'tutorial', component: Tutorial, 
      meta: { requiresAuth: true }
    },
  
    { path: '*', name: 'error', component: () => import(/* webpackChunkName: "Error" */"../components/Error.vue")},
    
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!localStorage.getItem('token')){
         next('login')
      } else{ next();}

  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
      if(localStorage.getItem('token')){
        next('home')
      } else{
        next()
      }
    }
});

export default router




