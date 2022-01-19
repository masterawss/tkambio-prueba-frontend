<template>
    <button :type="type" class="btn" :class="`btn btn-${variant}`">
        <slot></slot>
    </button>
</template>
<script>
export default{
    props: {
        variant: {
            type: String,
            default: 'secondary'
        },
        type: {
            type: String,
            default: 'button'
        },
    }
}
</script>