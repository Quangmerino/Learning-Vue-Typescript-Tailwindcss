import type { RouteRecordRaw } from 'vue-router'
import MainLayout from "@/layouts/MainLayout.vue";

const memberRoutes: RouteRecordRaw = {
    path: '/',
    component: MainLayout,
    children: [
        {
            path: 'member',
            name: 'Member',
            component: () => import('@/views/pages/memberShip/memberShip.vue'),
            meta: {
                title: 'Member'
            },
        },
    ],
}

export default memberRoutes