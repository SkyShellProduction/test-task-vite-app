<script setup lang="ts">
    import { ref } from "vue";
    import { useRouter } from "vue-router";
    import AppLogo from "../UI/AppLogo.vue";
    const pages = useRouter().getRoutes().filter(c => c.meta.showInMenu);
    const langs = ref(['ru', 'en']);
    const curLang = ref('ru');
    const showMenu = ref(false);
</script>
<template>
    <header class="header">
        <nav class="header__nav">
            <AppLogo />
            <div class="header__content" :class="{active: showMenu}">
                <ul class="header__list">
                    <li v-for="one in pages" :key="one.name">
                        <RouterLink :to="one.path" class="header__link">{{one.meta.title}}</RouterLink>
                    </li>
                </ul>
                <div class="header__items">
                    <div class="header__langs">
                        <label v-for="one in langs" :key="one" class="header__lang">
                            <input type="radio" name="lang" v-model="curLang" :value="one" :checked="one === curLang">
                            <span>{{one}}</span>
                        </label>
                    </div>
                    <a href="#!" class="header__start">
                        Начать проект
                        <img src="@/assets/images/arrow.svg" alt="">
                    </a>
                </div>
            </div>
            <a href="#!" class="header__btn" @click.prevent="showMenu = !showMenu">
                <img src="@/assets/images/menu.svg" alt="">
            </a>
        </nav>
    </header>
    <div class="header__abs" :class="{active: showMenu}" @click="showMenu = false"></div>
</template>