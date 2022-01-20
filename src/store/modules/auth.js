import axiosInstance from '../../utils/axios';
import axios from 'axios';
import router from '../../router'
export default {
    namespaced: true,
    state: () => ({
        isAuthenticated: false
    }),
    mutations: {
        setAuthenticated(state, val){
            state.isAuthenticated = val
        }
    },
    actions: {
        async signIn({commit, dispatch}, data){
            commit('ui/setLoading',true, { root: true })

            let resp = await axiosInstance.get('/sanctum/csrf-cookie')

            return axiosInstance.post('api/login', {
                params: {email: data.email, password: data.password}
            })
            .then(response => response.data)
            .then(response => {
                console.log(response);
                if(response.status == 1){
                    localStorage.setItem('access_token', response.access_token)
                    router.push({name: 'home'})
                }
            })
            .catch(e => {
                alert(e.response.data.msg)
            })
            .finally(() => commit('ui/setLoading',false, { root: true }))
        },
        async signOut({commit}){
            commit('ui/setLoading',true, { root: true })
            return axiosInstance.get('api/logout')
            .then(response => response.data)
            .then(response => {
                commit('setAuthenticated', false)
                localStorage.removeItem('access_token')
                router.push({name: 'login'})
            })
            .finally(() => commit('ui/setLoading',false, { root: true }))
        },
        async getUserStatus({commit}){
            commit('ui/setLoading',true, { root: true })

            try {
                let response = await axiosInstance.get('api/user-profile')
                response = response.data
                console.log('ESTADO DEL USUARIO', response);
                if(response.status == 1){
                    commit('setAuthenticated', true)
                }
            } catch (error) {
                console.log('ERROR', error.response);
                commit('setAuthenticated', false)
            }
            commit('ui/setLoading',false, { root: true })
        },
        signUp({commit}){
            
        },
    },
    getters: {

    },
    modules: {

    },
}