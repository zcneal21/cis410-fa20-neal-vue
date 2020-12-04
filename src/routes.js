import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import Account from './components/Account.vue';
import Login from './components/Login.vue';
import ProductDetail from './components/ProductDetail.vue';
import Products from './components/Products.vue';
import NotFound from './components/NotFound.vue';
import OrderCreate from './components/OrderCreate.vue';
import SignUp from './components/SignUp.vue';


Vue.use(VueRouter)

const routes = [
    {path: '/', component: Home},
    {path: '/account', component: Account},
    {path: '/signin', component: Login},
    {path: '/products', component: Products},
    {path: '/products/:pk', component: ProductDetail,
        children: [
            {path: 'order', component: OrderCreate}
        ]},
    {path: '/signup', component: SignUp},
    {path: '/:invalidroute(.*)', component: NotFound},
]

export default new VueRouter({mode: 'history', routes});