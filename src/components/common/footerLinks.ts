import { ref } from "vue";
import telegramIcon from '@/assets/images/telegram.svg';
import whatsAppIcon from '@/assets/images/whats-app.svg';
const footerLinks = ref({
    services: [
        {url: '#!', name: 'Support and development'},
        {url: '#!', name: 'UI/UX and product design'},
        {url: '#!', name: 'Progressive Web Applications (PWA)'},
    ],
    company: [
        {url: '/about-company', name: 'О компании'},
        {url: '/projects', name: 'Проекты'},
        {url: '/contacts', name: 'Контакты'},
    ],
    contacts: [
        {url: import('@/assets/files/presentation.txt'), name: 'Скачать презентацию', download: true},
        {url: 'tel:+7 (499) 999-99-99', name: '+7 (499) 999-99-99'},
        {url: 'mailto:info@site.com', name: 'info@site.com'},
    ],
    social: [
        {url: 'https://telegram.org', icon: telegramIcon},
        {url: 'https:whatsapp.com', icon: whatsAppIcon},
    ]
});
export {
    footerLinks
}