import type { RouteRecordRaw } from 'vue-router'

const errorRoutes: RouteRecordRaw = {
    path: '/',
    children: [
        {
            path: '404',
            name: 'NotFound',
            component: () => import('@/components/NotFound.vue'),
            meta: {
                title: '404'
            },
        },
    ],
}

export default errorRoutes
