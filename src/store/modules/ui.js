export default {
    namespaced: true,
    state: () => ({
        loading: false,
        modalOpened: false,
    }),
    mutations: {
        setLoading(state, value){
            state.loading = value
        },
        setModelState(state, value){
            state.modalOpened = value
        },
    },
    actions: {
        
    },
    getters: {

    },
}