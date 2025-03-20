<template>
  <section class="w-[350px] flex gap-2 pb-[100px]">
    <img
      v-if="currentPage > 1"
      src="/img/nextLast.svg"
      alt=""
      class="w-[50px] h-[50px] cursor-pointer rotate-180"
      @click="emit('handlePageGoFirst')"
    >

    <img
      v-if="currentPage > 1"
      src="/img/next.svg"
      alt=""
      class="w-[50px] h-[50px] cursor-pointer rotate-180"
      @click="emit('handlePageChangePrev')"
    >

    <div class="flex gap-2">
      <button
        v-for="page in visiblePages"
        :key="page"
        :class="{
          'bg-black text-white': currentPage === page,
        }"
        class="bg-[#F3F3F3] px-[20px] rounded-xl cursor-pointer transition-all"
        @click="emit('handlePageChange', page)"
      >
        {{ page }}
      </button>
    </div>

    <img
      src="/img/next.svg"
      alt=""
      class="w-[50px] h-[50px] cursor-pointer"
      :class="{ 'pointer-events-none': currentPage === totalPages }"
      :disabled="currentPage === totalPages"
      @click="emit('handlePageChangeNext')"
    >

    <img
      src="/img/nextLast.svg"
      alt=""
      class="w-[50px] h-[50px] cursor-pointer"
      :class="{ 'pointer-events-none': currentPage === totalPages }"
      :disabled="currentPage === totalPages"
      @click="emit('handlePageGoLast')"
    >
  </section>
</template>

<script setup lang="ts">
type tProps = {
  currentPage: number,
  totalPages: number
}

const { currentPage, totalPages } = defineProps<tProps>();

const emit = defineEmits(['handlePageGoFirst', 'handlePageChangePrev', 'handlePageChangeNext', 'handlePageGoLast', 'handlePageChange']);

const visiblePages = computed(() => {
  const pages = [];
  const startPage = Math.max(1, currentPage);
  const endPage = Math.min(totalPages, currentPage + 3);

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return pages;
});
</script>

<style scoped>
</style>