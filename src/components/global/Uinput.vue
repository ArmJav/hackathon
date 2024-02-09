<script setup>

import { defineProps } from 'vue';


const model = defineModel()


const props = defineProps({
    name: String,
    modelValue: String,
    placeholder: String,
    required:{
        type: Boolean,
        default: true
    },
    type: {
        type: String,
        default: 'text',
        validator: (val) => [
            'text',
            'textarea',
            'password',
            'email',
            'tel',
            'search',
            'radio',
            'date',
            'number'
        ].includes(val)
    }
})
// const { value,  errorMessage} = useField(() => props.name, undefined);


</script>

<template>
    <div class="flexi">
        <input 
            v-if = "type !== 'textarea' && type !== 'tel'&&required"
            :type = "type"
            :placeholder="placeholder"
            class="form-control"
            v-model="model"
            required
            >
        <input 
            v-else-if = "type !== 'textarea' && !required"
            :type = "type"
            :placeholder="placeholder"
            class="form-control"
            v-model="model"
            >
        <Inputmask v-else-if="type === 'tel'"
            v-model="model"
            mask="+7999 999 99 99"
            :placeholder="placeholder"
            class="form-control"
        />
        <textarea
            v-else
            rows = "5"
            class = "form-control m5"
            :placeholder="placeholder"
            v-model="model"
            required
        ></textarea>
    </div>
</template>

<style scoped>
    .form-control {
        background: var(--cl-fiolet);
        border: 1px solid var(--cl-purple);
        border-radius: 20px;
        width: 800px;
        max-width: 800px;
        min-width: 200px;
        min-height: 50px;
        max-height: 300px;
        color: var(--color-text);
        padding-left: 1em;
        font-size: 0.5em;

    }

    .form-control:hover {
        box-shadow: 2px 2px 10px 0px rgba(171, 0, 234, 0.3);
    }

    .file {
        padding: 5% 0 1% 2%;
    }

    
    .m5 {
        height: 5em;
    }

    .flexi{
        display: flex;
        flex-wrap: wrap;
        
    }
    @media (max-width: 1040px) {
        .form-control {
            max-width: 450px;
            height: 50px;
            max-height: 200px;
        }
    }

    @media (max-width: 540px) {
        .form-control {
            max-width: 250px;
            height: 50px;
            max-height: 150px;
        }
    }

</style>