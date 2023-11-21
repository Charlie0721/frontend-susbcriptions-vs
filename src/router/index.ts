import { createRouter, createWebHistory } from 'vue-router';
import Login from '../users/components/Login.vue'
import Signup from '../users/components/Signup.vue'


const routes=[

{
    path: '/',
    name: 'login',
    component: Login,
},
{
    path: '/signup',
    name: 'signup',
    component: Signup,
},

];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  });

  export default router;