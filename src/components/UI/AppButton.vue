<script setup lang="ts">
    interface Props {
        text: string,
        fallback: string,
        sended: boolean
    }
    const props = withDefaults(defineProps<Props>(), {
        text: 'Отправить',
        fallback: 'Ваше сообщение отправлено!',
        sended: false
    });
</script>
<template>
    <button class="contacts__btn">
        <svg width="227" height="227" viewBox="0 0 227 227" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="113.5" cy="113.5" r="111" stroke="url(#paint0_linear_2_159)" stroke-width="5" class="contacts__circle" :class="{sended}"/>
            <defs>
            <linearGradient id="paint0_linear_2_159" x1="4.79578" y1="-7.23358e-05" x2="225.606" y2="12.6933" gradientUnits="userSpaceOnUse">
            <stop offset="0.206287" stop-color="#388AF3"/>
            <stop offset="0.940271" stop-color="#A483E2"/>
            </linearGradient>
            </defs>
        </svg>
        <span class="contacts__btn-content">
            <img src="@/assets/images/send-btn.svg" alt="" class="contacts__btn-img" :class="{sended}">
            <transition name="btn-fly" mode="out-in">
                <span class="contacts__btn-item sended" v-if="sended">{{fallback}}</span>
                <span class="contacts__btn-item" v-else>{{text}}</span>
            </transition>
        </span>
    </button>
</template>
<style lang="scss">
    .contacts__btn{
        position: relative;
        background: transparent;
        border-radius: 50%;
        margin-bottom: 14px;
        cursor: pointer;
        &-content{
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            display: flex;
            border-radius: 50%;
            flex-direction: column;
            gap: 28px;
            align-items: center;
            justify-content: center;
        }
        &-item{
            font-weight: 800;
            font-size: 20px;
            line-height: 20px;
            text-align: center;
            color: #388AF3;
            max-width: 201px;
            width: 100%;
            display: block;
            transition: 0.3s linear;
            position: absolute;
            transform: translateY(25px);
            &.sended{
                transition: 0.5s linear;
                transform: translateY(0px);
                color: #fff;
            }
        }
        &-img{
            transition: 0.3s linear;
            position: absolute;
            transform: translateY(-25px);
            &.sended{
                opacity: 0;
                transform: translate(120px, -120px) scale(0);
            }
        }
    }
    .btn-fly{
        &-enter-active, &-leave-active{
            transition: 0.2s linear;
        }
        &-enter-from, &-leave-to{
            opacity: 0;
        }
    }
    .contacts__circle{
        transition: 0.2s linear;
    }
    .contacts__circle.sended{
        fill:  #388AF3;
        stroke: transparent;
    }
    .contacts__btn:hover {
        .contacts__circle{
            fill:  #388AF3;
            stroke: transparent;
        }
        .contacts__btn-item{
            color: #fff;
            transform: translateY(0px);
        }
    }
    @media(max-width: 568px){
        .contacts__btn-item{
            font-size: 18px;
        }
    }
</style>