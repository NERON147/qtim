<template>
  <button class="bg-[#101010] text-white px-[20px] py-[10px] rounded-3xl hover:bg-[#303030] transition-all cursor-pointer">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
type tProps = {
  text: string
}

const {text} = defineProps<tProps>();
</script>

<style scoped>

</style>