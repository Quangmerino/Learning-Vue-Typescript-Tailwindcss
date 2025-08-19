import type { RouteRecordRaw } from 'vue-router'
import DefaultLayout from "@/layouts/DefaultLayout.vue";

const authRoutes: RouteRecordRaw = {
    path: '/',
    component: DefaultLayout,
    children: [
        {
            path: 'login',
            name: 'Login',
            component: () => import('@/views/pages/auth/Login.vue'),
            meta: {
                title: 'Login'
            },
        },
        {
            path: 'register',
            name: 'Register',
            component: () => import('@/views/pages/auth/Register.vue'),
            meta: {
                title: 'Register'
            },
        },
    ],
}

export default authRoutes
