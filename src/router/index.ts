import { createRouter, createWebHistory } from 'vue-router';
import Login from '../users/components/Login.vue'
import Signup from '../users/components/Signup.vue'
import AllSubscriptions from '../subscriptions/component/AllSubscriptions.vue'
import Active_Inactive from '../subscriptions/component/SubscriptionsActives.vue'
import CreateCustomer from '../subscriptions/component/CreateCustomer.vue'
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
{
    path: '/all-subscriptions',
    name: 'subscriptions',
    component: AllSubscriptions,
},
{
    path: '/subscriptions/active-inactive',
    name: 'active-inactive',
    component: Active_Inactive,
},
{
    path: '/create-customer',
    name: 'create-customer',
    component: CreateCustomer,
},

];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  });

  export default router;