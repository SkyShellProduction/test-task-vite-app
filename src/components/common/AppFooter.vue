<script setup>
    import {footerLinks} from './footerLinks';
import AppLogo from '../UI/AppLogo.vue';
</script>
<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__content">
                <AppLogo class="footer__logo"/>
                <div class="footer__items">
                    <ul class="footer__list">
                        <h3 class="footer__name">Услуги</h3>
                        <li v-for="one in footerLinks.services" :key="one.name">
                            <a :href="one.url" class="footer__link">{{one.name}}</a>
                        </li>
                    </ul>
                    <ul class="footer__list">
                        <h3 class="footer__name">Компания</h3>
                        <li v-for="one in footerLinks.company" :key="one.name">
                            <RouterLink :to="one.url" class="footer__link">{{one.name}}</RouterLink>
                        </li>
                    </ul>
                    <div class="footer__social">
                        <ul class="footer__list">
                            <h3 class="footer__name">Контакты</h3>
                            <li v-for="one in footerLinks.contacts" :key="one.name">
                                <a :href="one.url" class="footer__link" :download="one.download">{{one.name}}</a>
                            </li>
                        </ul>
                        <ul class="footer__list-se">
                            <li v-for="one in footerLinks.social" :key="one.url">
                                <a :href="one.url" class="footer__social-link" target="_blank">
                                    <img :src="one.icon" alt="">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer__copyright">
                <p class="footer__text">© Company 2022. All rights reserved.</p>
                <a href="#!" class="footer__link footer__copyright-link">Политика конфиденциальноcти</a>
            </div>
        </div>
    </footer>
</template>