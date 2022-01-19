import { createStore } from 'vuex'
import axios from 'axios';
const BASE_URL = "http://tkambio-prueba.test/api"

export default createStore({
    state: {
        items: [],
        loading: false,
        modalOpened: false,
    },
    mutations: {
        setItems(state, items){
            state.items = items
        },
        setLoading(state, value){
            state.loading = value
        },
        setModelState(state, value){
            state.modalOpened = value
        },
    },
    actions: {
        getListFromApi({commit}) {
            commit('setLoading',true)
            axios.get(`${BASE_URL}/list-reports`)
                .then(response => response.data)
                .then(response => commit('setItems', response.data) )
                .finally(() => commit('setLoading',false))
        },
        generateReports({commit, dispatch}, data){
            commit('setLoading',true)
            axios.post(`${BASE_URL}/generate-report`, {params: { form: data } })
                .then(response => response.data)
                .then(response => {
                    if(response.ok)
                        dispatch('getListFromApi')
                    commit('setModelState', false)
                })
                .finally(() => commit('setLoading',false))
        }
    },
    getters: {

    },
    modules: {

    },
})