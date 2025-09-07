import type { RouteRecordRaw } from 'vue-router'
import MainLayout from "@/layouts/MainLayout.vue";

const testRoutes: RouteRecordRaw = {
    path: '/',
    component: MainLayout,
    children: [
        {
            path: 'test',
            name: 'Test',
            component: () => import('@/views/pages/test/Test.vue'),
            meta: {
                title: 'Test'
            },
        },
    ],
}

export default testRoutes