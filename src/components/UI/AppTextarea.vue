<script setup lang="ts">
    import { ref, computed } from 'vue';
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
    
    const focus = ref(false);
    function changeFocus(){
        if(props.modelValue) focus.value = true;
        else focus.value = false;
    }
</script>
<template>
   <label class="app__label">
        <textarea 
            v-bind="$attrs" 
            class="app__input app__textarea"
            v-model="message" 
            @focus="focus = true"
            @blur="changeFocus"></textarea>
            <span class="app__input-span" :class="{up: focus}">
            <slot>Ваше имя </slot>
            </span>
    </label>
</template>
<style lang="scss">
    .app__textarea{
        height: 95px;
        resize: none;
    }
</style>