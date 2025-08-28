import type { RouteRecordRaw } from 'vue-router'
import MainLayout from "@/layouts/MainLayout.vue";

const blogRoutes: RouteRecordRaw = {
    path: '/',
    component: MainLayout,
    children: [
        {
            path: 'blog',
            name: 'Blog',
            component: () => import('@/views/pages/Blog/BlogPage.vue'),
            meta: {
                title: 'Blog'
            },
        },
    ],
}

export default blogRoutes