<script>
import { useStore } from 'vuex'

import { reactive, computed} from 'vue';
import Btn from '../../../components/Btn.vue'
import Input from '../../../components/Input.vue'
import Loader from '../../../components/Loader.vue';
  export default {
    name: 'Modal',
    components: {
    Btn,
    Input,
    Loader
  },
    setup(props, {emit}){
      const store = useStore()

      const initialState = {
        descripcion: '',
        fecha_nacimiento_inicio: '',
        fecha_nacimiento_fin: '',
      }
      const form = reactive({...initialState})

      const handleSubmit = (e) => {
        store.dispatch('reports/generateReports', form)
        Object.assign(form, initialState);
      }

      const canGenerate = computed(() => 
        form.descripcion.length 
        && form.fecha_nacimiento_inicio.length 
        && form.fecha_nacimiento_fin.length
      );

      return {
        handleSubmit,

        form,
        canGenerate
      }
    }
  };
</script>
<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <section class="modal-body" id="modalDescription">
          <form @submit.prevent="handleSubmit">
            <slot name="body">
              <div class=" text-right">
                <Btn variant="link" @click="() => $store.commit('ui/setModelState', false)">
                  ❌
                </Btn>
              </div>
              <div class=" text-center">
                <div class="title-mobile">
                  Reporte por fecha de nacimiento
                </div>
                <div class="mb-30 mt-15">
                  Ingresa los siguientes datos para generar el reporte
                </div>
              </div>
            </slot>
            <div class="grid">
              <div class="col-span-2">
                <Input required v-model="form.descripcion" label="Descripción del reporte" id="input-1" />
              </div>
              <span class="col-span-2 mt-20 mb-10">
                Fecha de nacimiento
              </span>
              <Input required v-model="form.fecha_nacimiento_inicio" type="date" label="Inicio" id="input-2" />
              <Input required v-model="form.fecha_nacimiento_fin" type="date" label="Fin" id="input-3" />
            </div>
            <footer class="modal-footer text-center mt-20 mb-20">
              <Loader v-show="$store.state.ui.loading" />
              <br>
              <Btn :loading="$store.state.ui.loading" :disabled="!canGenerate || $store.state.ui.loading" type="submit" aria-label="Close modal">
                Generar reporte 
              </Btn>
            </footer>
          </form>
        </section>
      </div>
    </div>
  </transition>
</template>

<style>

</style>