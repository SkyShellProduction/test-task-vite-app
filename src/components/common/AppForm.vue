<script setup lang="ts">
import { ref } from "vue";
import AppInput from "@/components/UI/AppInput.vue";
import AppTextarea from "@/components/UI/AppTextarea.vue";
import AppButton from "../UI/AppButton.vue";
const formData = ref({
    name: '',
    email: '',
    comment: '',
    check: true
});
const sended = ref(false);
function send(){
    console.log(formData.value);
    formData.value.name = '';
    formData.value.comment = '';
    formData.value.email = '';
    sended.value = true;
    setTimeout(() => {
        sended.value = false;
    }, 3000);
}
</script>
<template>
    <form class="contacts__form" @submit.prevent="send">
        <h2 class="contacts__title">Мы рядом</h2>
        <p class="contacts__descr">Заполните форму ниже и мы свяжемся с вами. Не любите формы? Напишите нам на почту
            <a href="mailto:info@site.com">info@site.com</a>
        </p>
        <div class="contacts__items">
            <div class="contacts__inputs">
                <div class="contacts__sep">
                    <AppInput required v-model="formData.name">Ваше имя</AppInput>
                    <AppInput type="email" required v-model="formData.email">Ваш E-Mail</AppInput>
                </div>
                <AppTextarea required v-model="formData.comment">Комментарий</AppTextarea>
                <input type="checkbox" id="check" required v-model="formData.check">
                <label class="contacts__check" for="check">
                    Согласен с <span >Политикой конфиденциальности</span>
                </label>
            </div>
            <AppButton :sended="sended"/>
        </div>
    </form>
</template>
