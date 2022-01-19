<template>
    <div class="navbar">
        <img src="../assets/logo.svg" alt="">
    </div>
</template>
<script>
export default ({
    setup() {
        
    },
})
</script>
<style>
    .navbar{
        display: flex;
        flex-direction: row;
        justify-content: center;
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
