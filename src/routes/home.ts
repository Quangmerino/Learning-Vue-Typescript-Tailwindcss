import type { RouteRecordRaw } from 'vue-router'
import MainLayout from "@/layouts/MainLayout.vue";

const homeRoutes: RouteRecordRaw = {
    path: '/',
    component: MainLayout,
    children: [
        {
            path: 'home',
            name: 'Home',
            component: () => import('@/views/pages/home/Home.vue'),
            meta: {
                title: 'Home'
            },
        },
    ],
}

export default homeRoutes
