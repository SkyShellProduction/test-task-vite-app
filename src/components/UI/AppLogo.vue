<template>
    <router-link to="/" class="logo">
        <slot>logo</slot>
    </router-link>
</template>
<style lang="scss">
    .logo{
        font-weight: 800;
        font-size: 40px;
        line-height: 50px;
        color: #303030;
        text-transform: uppercase;
    }
    @media(max-width: 568px) {
        .logo{
            font-size: 30px;
            line-height: 38px;
        }
    }
</style>