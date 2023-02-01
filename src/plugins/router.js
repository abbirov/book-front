import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/pages/HomePage.vue";

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/categories/:id',
        component: HomePage
    },
    {
        path: '/login',
        component: () => import('@/pages/LoginPage.vue')
    },
    {
        path: '/read-book',
        component: () => import('@/pages/ReadBookPage.vue')
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})