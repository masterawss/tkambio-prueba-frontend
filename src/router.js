import {
    createRouter,
    createWebHistory
} from 'vue-router'
import Home from './pages/Home/Index.vue'
import Login from './pages/Auth/Login.vue'
import store from './store/index'
const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                requiresAuth: false
            }
        },
    ]
})

router.beforeEach((to, from, next) => {
    const authUser = store.state.auth.isAuthenticated;
    const reqAuth = to.matched.some((record) => record.meta.requiresAuth);
    const loginQuery = {
        path: "/login",
        query: {
            redirect: to.fullPath
        }
    };
    
    if (to.name == 'login') {
        store.dispatch("auth/getUserStatus").finally(() => {
            if (store.state.auth.isAuthenticated) {
                next({
                    name: 'home'
                })
            } else {
                next()
            };
        });
    } else {
        if (reqAuth && !authUser) {
            store.dispatch("auth/getUserStatus").finally(() => {
                if (!store.state.auth.isAuthenticated) {
                    next({
                        name: 'login'
                    })
                } else {
                    next()
                };
            });
        } else {
            next(); // make sure to always call next()!
        }
    }

})

export default router