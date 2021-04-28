import Vue from 'vue';
import Router from 'vue-router';
//import axios from 'axios';

import Login from '../components/Login';
import Registro from '../components/RegistroComponent';
//import Register from './components/Register';
import Forgot from '../components/Forgot';
import Reset from '../components/Reset';
import Home from '../components/Home';
import Comienzo from '../components/Comienzo';
import Tutorial from '../components/Tutorial';
import Adventure from '../components/Adventure';
import WildMap from '../components/WildMap';

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

    { path: '/adventure', name: 'adventure', component: Adventure,
      meta: { requiresAuth: true }
    },

    { path: '/wildMap/:area', name: 'wildMap', component: WildMap,
      meta: { requiresAuth: true }
    },

    { path: '*', name: 'error', component: () => import(/* webpackChunkName: "Error" */"../components/Error.vue")},
    
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {/*
    const today = Date.now();
    console.log(Date.now())
    console.log('time')
    var stat=parseInt(today);
    console.log(stat)
    var token=localStorage.getItem('expires_in')
    console.log(token)
    console.log('tomorrow')
    console.log(parseInt(today)+parseInt(token))

    var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    var day = currentDate.getDate()
    var month = currentDate.getMonth() + 1
    var year = currentDate.getFullYear()
    console.log("<b>" + day + "/" + month + "/" + year + "</b>")
*/
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




