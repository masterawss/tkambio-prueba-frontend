<script >
import TableReports from "./components/TableReports.vue";
import Btn from "../../components/Btn.vue";
import ReportGeneratorModal from "./components/ReportGeneratorModal.vue";

export default ({
  components: {TableReports, Btn, ReportGeneratorModal},
  setup(){
  }
})
</script>

<template>
  <div class="container">
    <h1 class="text-center mt-50 mb-75">
      Generador de reportes TK
    </h1>
    
    <TableReports />

    <div class="text-center mt-30 mb-30">
      <Btn @click="() => $store.commit('ui/setModelState', true)">
        Crear reporte
      </Btn>
    </div>
    
    <ReportGeneratorModal 
      v-show="$store.state.ui.modalOpened" />
  </div>
  
</template>

<style>
</style>
