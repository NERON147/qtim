<template>
  <main class="container-page">
    <div class="px-[120px] max-md:px-[20px]">
      <h1 class="text-[84px] mt-[112px] ">
        Articles
      </h1>
      <div class="grid grid-cols-12 gap-3 mt-[39px] justify-between max-md:gap-[50px] max-sm:gap-2">
        <span
          v-if="load"
          class="my-2"
        >
          loading...
        </span>
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
        v-if="!load"
        class="max-sm:scale-[0.7]"
        :total-pages="totalPages"
        :current-page="data.currentPage"
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
import { usePostsStore } from '@/src/stores/usePostsStore';
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


const postsStore = usePostsStore();

const posts = ref<IPost[]>([]);
const load = ref<boolean>(true);

postsStore.fetchPosts()
  .then((res) => {
    if (Array.isArray(res)) {
      posts.value = res;
    }else {
      posts.value = [];
    }
    load.value = false;
  })
  .catch((err) => {
    console.log(err);
    load.value = false;
  });

const data = reactive({
  currentPage: 1,
  itemsPerPage: 8,
  screenWidth: 0
});

const paginatedItems = computed(() => {
  const start = (data.currentPage - 1) * data.itemsPerPage;
  const end = start + data.itemsPerPage;
  return posts.value.slice(start, end);
});

const totalPages = computed(() => Math.ceil(posts.value.length / data.itemsPerPage));

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
  data.screenWidth = window.innerWidth;
};

const handlePageChangeNext = () => {
  data.currentPage = data.currentPage + 1;
};

const handlePageChange = (page: number) => {
  data.currentPage = page;
};

const handlePageChangePrev = () => {
  data.currentPage = data.currentPage - 1;
};

const handlePageGoFirst = () => {
  data.currentPage = 1;
};

const handlePageGoLast = () => {
  data.currentPage = Math.ceil(posts.value.length / data.itemsPerPage);
};


onMounted(() => {
  window.addEventListener('resize', handleResize);
  data.screenWidth = window.innerWidth;
  getItemsPerPageDynamic(data.screenWidth);
  data.itemsPerPage = getItemsPerPageDynamic(data.screenWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>

</style>