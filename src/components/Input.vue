<script>
import { ref } from "vue";
export default {
    props:{
        label: {
            required: true
        },
        type: {
            type: String,
            default: "text"
        },
        nameInput: {
            type: String,
            default: ""
        },
        required: {
            type: Boolean,
            default: false
        },
        id: {
            type: String,
            required: true
        },
    },
    setup() {
        const input = ref("");
        return { input };
    },
}
</script>
<template>
    <div class="input-group">
        <input 
            :required="required"
            :type="type" 
            :name="nameInput" 
            :id="id" 
            placeholder=" " 
            v-model="input"
            @input="$emit('update:modelValue', $event.target.value)" />
        <label :for="id">{{label}}</label>
    </div>
</template>