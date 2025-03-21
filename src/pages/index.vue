<template>
  <main class="container-page">
    <div class="px-[120px] max-md:px-[20px]">
      <h1 class="text-[84px] mt-[112px] ">
        Articles
      </h1>
      <div class="grid grid-cols-12 gap-3 mt-[39px] justify-between max-md:gap-[50px] max-sm:gap-2">
        <UICard
          v-for="(post, index) in paginatedItems"
          :id="post.id"
          :key="index"
          class="col-span-3 max-md:col-span-6 mx-auto max-sm:col-span-12"
          :img="post.image"
          :descr="post.preview"
        />
      </div>
      <UIPagination
        class="max-sm:scale-[0.7]"
        :total-pages="totalPages"
        :current-page="currentPage"
        @handle-page-change-next="handlePageChangeNext"
        @handle-page-change-prev="handlePageChangePrev"
        @handle-page-go-first="handlePageGoFirst"
        @handle-page-go-last="handlePageGoLast"
        @handle-page-change="handlePageChange"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import type { IPost } from '@/src/types/posts';

useSeoMeta({
  title: 'QTIM',
  ogTitle: 'QTIM',
  description: 'Articles',
  ogDescription: 'Articles',
  ogType: 'website',
  ogImage: '/img/velik.png',
  ogUrl: `${process.client ? window.location.origin : ''}`,
  twitterCard: 'summary_large_image',
  twitterTitle: 'QTIM',
  twitterDescription: 'Articles',
  twitterImage: '/img/velik.png'
});


const { data: posts } = await useAsyncData<IPost[]>('posts', () => $fetch('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts'));

const screenWidth = ref<number>(1);
const currentPage = ref<number>(1);
const itemsPerPage = ref<number>(8);

const paginatedItems = computed(() => {
  if (!posts.value) return [];
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return posts.value.slice(start, end);
});

const totalPages = computed(() => Math.ceil((posts.value?.length ?? 0) / itemsPerPage.value));

const getItemsPerPageDynamic = (width: number) => {
  if (width >= 1280) {
    return 8;
  } else if (width >= 660) {
    return 6;
  } else if (width >= 0) {
    return 3;
  } else {
    return 8;
  }
};

const handleResize = () => {
  screenWidth.value = window.innerWidth;
};

const handlePageChangeNext = () => {
  currentPage.value = currentPage.value + 1;
};

const handlePageChange = (page: number) => {
  currentPage .value= page;
};

const handlePageChangePrev = () => {
  currentPage.value = currentPage.value - 1;
};

const handlePageGoFirst = () => {
  currentPage.value = 1;
};

const handlePageGoLast = () => {
  currentPage.value = Math.ceil((posts.value?.length ?? 0) / itemsPerPage.value);
};


onMounted(() => {
  window.addEventListener('resize', handleResize);
  screenWidth.value = window.innerWidth;
  getItemsPerPageDynamic(screenWidth.value);
  itemsPerPage.value = getItemsPerPageDynamic(screenWidth.value);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>

</style>