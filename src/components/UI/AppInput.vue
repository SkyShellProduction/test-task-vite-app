<script setup lang="ts">
    import { ref, computed, useAttrs } from 'vue';
interface Props {
    modelValue?: string | number
}
    const props = withDefaults(defineProps<Props>(), {
        modelValue: ''
    });
    const emits = defineEmits(['update:modelValue']);
    const message = computed({
        get: () => props.modelValue,
        set: value => emits('update:modelValue', value)
    });
    console.log(useAttrs());
    
    
    const focus = ref(false);
    function changeFocus(){
        if(props.modelValue) {
            focus.value = true;
        }
        else focus.value = false;
    }
</script>
<template>
    <label class="app__label">
        <input type="text" 
            v-bind="$attrs" 
            class="app__input"
            v-model="message" 
            @focus="focus = true"
            @blur="changeFocus">
            <span class="app__input-span" :class="{up: focus}">
            <slot>Ваше имя </slot>
            </span>
    </label>
</template>
<style lang="scss">
    .app__label{
        display: flex;
        position: relative;
        width: 100%;
    }
    .app__input{
        display: block;
        border-bottom: 1px solid #E2E2E2;
        width: 100%;
        font-size: 26px;
        line-height: 1;
        padding: 4px 0;
        margin-bottom: 60px;
    }
    .app__input[required] ~ span::after{
        color: red;
        content: '*';
    }
    
    .app__input-span{
        font-weight: 300;
        font-size: 26px;
        line-height: 31px;
        color: #ccc;
        position: absolute;
        transition: 0.2s linear;
    }
    .up{
        transform: translateY(-20px);
        font-size: 16px;
        line-height: 18px;
    }
    @media(max-width: 568px){
        .app__input, .app__input-span{
            font-size: 22px;
            line-height: 26px;
        }
    }
</style>