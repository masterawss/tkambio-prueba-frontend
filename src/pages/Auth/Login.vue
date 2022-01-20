<template>
    <div class="container">
        <div class="card">
            <div class="card-content">
                <div class="mt-20 mb-20 text-center">
                    <h2>Iniciar sesión</h2>
                </div>

                <form @submit.prevent="handleSignIn">
                    <Input id="input_email" label="Email" v-model="form.email" />
                    <Input id="input_contraseña" label="Contraseña" v-model="form.password" type="password" />
                    <div class="text-center">
                        <Btn :disabled="$store.state.ui.loading" class="mt-20" style="width:90%" type="submit">
                            Ingresar
                        </Btn>
                    </div>
                    <div class="mt-25 mb-25 text-center">
                        Puedes probar con <strong>admin@gmail.com</strong>
                        y <strong>admin12345</strong> solo por hoy 👀
                        <br><br>
                        Pero no se lo digas a nadie 🤫
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { reactive } from "vue";

import Input from "../../components/Input.vue";
import Btn from "../../components/Btn.vue";
export default ({
    components: {Input, Btn},
    setup(){
        const store = useStore()

        const form = reactive({
            email: 'admin@gmail.com',
            password: 'admin12345',
        })

        const handleSignIn = () => {
            store.dispatch('auth/signIn', form)
        }

        return {
            form,
            handleSignIn
        }
    }
})
</script>