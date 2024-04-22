import { createRouter, createWebHistory } from "vue-router";
import LoginPage from './components/LoginPage.vue';
import SignupPage from './components/SingupPage.vue';
import HomePage from './components/HomePage.vue'

const routes = [
    {
        name: 'LoginPage',
        path: '/LoginPage',
        component: LoginPage
    },
    {
        name: 'SignupPage',
        path: '/SignupPage',
        component: SignupPage
    },
    {
        name: 'HomePage',
        path: '/',
        component: HomePage
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;