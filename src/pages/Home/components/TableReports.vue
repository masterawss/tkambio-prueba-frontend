<template>
    <div class="card-table">
        <table class="table-reports">
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Fecha de creación </th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in $store.state.reports.items" :key="item.interface_id" style="padding:10px">
                    <td >{{item.title}} </td>
                    <td class="border-vertical text-center">{{item.created_at}} </td>
                    <td class="border-vertical text-right">
                        <Btn type="link" variant="link" @click="getReport(item.interface_id)">
                            <strong style="color: white">Descargar</strong> 
                            <img src="../../../assets/icons/download.svg" alt="">
                        </Btn>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { useStore } from 'vuex'
import {reactive,onMounted} from 'vue'
import Btn from '../../../components/Btn.vue'
import {getReport} from '../../../utils/apiController'

export default ({
    components: {Btn},
    setup(){
        const items = reactive([])
        const store = useStore()

        onMounted(() => {
            store.dispatch('reports/getListFromApi')
        })
        
        return {
            items,

            getReport
        }
    }
})
</script>
<style>
.card-table{
    color: white;
    background: #4563E6;
    border-radius: 10px;
    padding: 10px 30px 40px;
}
.card-table .border-vertical{
    border-left: 5px solid #C4C4C4
}
table.table-reports{
    width: 100%
}
table.table-reports thead {
  border-bottom: 4px solid #333333;
}
</style>