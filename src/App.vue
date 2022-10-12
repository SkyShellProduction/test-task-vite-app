<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import AppHeader from '@/components/common/AppHeader.vue';
  import AppFooter from '@/components/common/AppFooter.vue';
  import { ref } from 'vue';
  const curPage = ref(useRoute());
</script>
<template>
  <AppHeader />
  <main class="main">
    <div class="container">
      <div class="page" v-if="curPage.path !== '/'">
        <router-link to="/" class="page__link">Главная - </router-link>
        <router-link :to="curPage.path" class="page__link"> {{curPage.meta.title}}</router-link>
      </div>
    </div>
    <RouterView v-slot="{ Component, route}">
      <Transition name="fade" mode="out-in">
        <component :is="Component" :key="route" />
      </Transition>
    </RouterView>
  </main>
  <AppFooter />
</template>
<style lang="scss">
    .fade{
      &-enter-active, &-leave-active{
        transition: 0.3s linear;
      }
      &-enter-from, &-leave-to{
        opacity: 0;
        filter: blur(10px) brightness(10%);
      }
    }
</style>

