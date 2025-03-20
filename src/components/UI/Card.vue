<template>
  <div
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <div
      class="w-[280px] h-[400px] overflow-hidden transition-all"
      :class="{'-translate-y-[20px]': hover}"
    >
      <img
        :src="img"
        alt="post image"
        class="w-[100%] h-[280px] object-cover"
      >
      <p class="text-xl leading-[120%] mt-[20px] line-clamp-3">
        {{ descr }}
      </p>
    </div>
    <nuxt-link :to="'post/' + id">
      <p
        class="text-[#E2BEFF] opacity-0 cursor-pointer transition-all"
        :class="{'opacity-100 -translate-y-[40px]': hover}"
      >
        Read more
      </p>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
type tProps = {
  img: string,
  descr: string,
  id: string,
}

const {img, descr, id} = defineProps<tProps>();

const hover = ref<boolean>(false);
</script>

<style scoped>

</style>