import { createStore } from 'vuex'
import auth from './modules/auth'
import ui from './modules/ui'
import reports from './modules/reports'

export default createStore({
    modules: {
        auth,
        ui,
        reports
    },
})