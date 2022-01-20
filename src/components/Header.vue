<template>
    <div class="navbar">
        <div></div>
        <div style="position: fixed; width: 100%; text-align:center" >
            <img  src="../assets/logo.svg" alt="">
        </div>
        <div v-show="$store.state.auth.isAuthenticated" style="text-align: right; " class="mr-20">
            <Btn @click="handleSignOut">Cerrar sesión</Btn>
        </div>
    </div>
</template>
<script>
import { useStore } from 'vuex'
import Btn from "./Btn.vue";
export default ({
    components: {Btn},
    setup() {
        const store = useStore()
        const handleSignOut = () => {
            store.dispatch('auth/signOut')
        }

        return {
            handleSignOut
        }
    },
})
</script>
<style>
    .navbar{
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        align-items: center;
        padding-top: 20px ;
        padding-bottom: 20px ;

        width: 100%;
        height: 50px;
        left: 0px;
        top: 0px;

        background: linear-gradient(180deg, #02ADF1 -2.37%, #4562E6 124.84%, #4563E6 124.84%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
</style>
