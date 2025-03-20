<template>
  <header class="py-[35px] flex items-center max-md:px-[10px]">
    <nuxt-link to="/">
      <img
        src="/img/logo.png"
        alt="logo"
        class="max-sm:hidden block"
      >
    </nuxt-link>

    <nav class="ml-auto mr-[91px]">
      <ul class="flex items-center gap-14 text-xl">
        <li
          v-for="(item, i) in nav"
          :key="i"
          class="hover:opacity-70 transition-all"
        >
          <nuxt-link
            :to="item.link"
            class="flex items-center gap-1"
          >
            {{ item.txt }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <div class="flex items-center gap-6 cursor-pointer">
      <div class="rounded-full border-2 border-[#F0F0F0] p-[12px]">
        <img
          src="/img/UK.svg"
          alt="UK"
        >
      </div>
      <UIButton text="Let's work" />
    </div>
  </header>
</template>

<script setup lang="ts">
import {useNav} from '@/src/composables/useNav';
const {nav} = useNav();
</script>

<style scoped>

</style>
