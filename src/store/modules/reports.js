import axiosInstance from '../../utils/axios';

export default {
    namespaced: true,
    state: () => ({
        items: [],
    }),
    mutations: {
        setItems(state, items){
            state.items = items
        },
    },
    actions: {
        getListFromApi({commit}) {
            commit('ui/setLoading',true, {root: true})
            axiosInstance.get('api/list-reports')
                .then(response => response.data)
                .then(response => commit('setItems', response.data) )
                .finally(() => commit('ui/setLoading',false, {root: true}))
        },
        generateReports({commit, dispatch}, data){
            commit('ui/setLoading',true, {root: true})
            axiosInstance.post('api/generate-report', {params: { form: data } })
                .then(response => response.data)
                .then(response => {
                    if(response.ok)
                        dispatch('getListFromApi')
                    commit('ui/setModelState', false, {root: true})
                })
                .finally(() => commit('ui/setLoading',false, {root: true}))
        }
    },
    getters: {

    },
}