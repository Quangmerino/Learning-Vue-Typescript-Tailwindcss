import {createRouter, createWebHistory} from 'vue-router'
import type {RouteRecordRaw} from 'vue-router'

import errorRoutes from "@/routes/error.routes.ts";
import homeRoutes from "@/routes/home.ts";
import authRoutes from "@/routes/auth.ts";
import blogRoutes from "@/routes/blog.ts";
import memberRoutes from "@/routes/member.ts";

const routes: RouteRecordRaw[] = [
    errorRoutes,
    authRoutes,
    homeRoutes,
    blogRoutes,
    memberRoutes
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// router.beforeEach((to, from, next) => {
//   const useAuthStore = authStore()
//   useAuthStore.token = localStorage.getItem("token") ?? '';
//   const isLoggedIn = !!useAuthStore.token
//
//   if (!isLoggedIn && to.path !== '/login') {
//     return next('/login')
//   } else if (isLoggedIn && (to.path === '/login' || to.path === '/')) {
//     return next('/home')
//   }
//   next()
// })

router.afterEach((to) => {
    const defaultTitle = 'E-Learning'
    document.title = to.meta.title ? `${defaultTitle} | ${to.meta.title}` : defaultTitle
})

export default router
