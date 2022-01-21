import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
import Home from './pages/Home/Index.vue'
import Login from './pages/Auth/Login.vue'
import NotFound from './pages/NotFound.vue'
import store from './store/index'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
            path: '',
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

        {
            path: "/:catchAll(.*)",
            name: 'not_found',
            component: NotFound,
            meta: {
                requiresAuth: false
            }
        },
    ]
})

router.beforeEach((to, from, next) => {
    const authUser = store.state.auth.isAuthenticated;
    const reqAuth = to.matched.some((record) => record.meta.requiresAuth);
    
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