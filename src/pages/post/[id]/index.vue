<template>
  <div
    v-if="post"
    class="max-md:px-[20px]"
  >
    <img
      :src="post?.image"
      alt=""
      class="w-[700px] h-auto object-cover mx-auto rounded-2xl"
    >
    <h1 class="text-4xl text-center mt-[20px]">
      Title
    </h1>
    <p>
      {{ post?.title }}
    </p>
    <h2 class="text-4xl text-center mt-[20px] my-2">
      Description
    </h2>
    <p>
      {{ post?.description }}
    </p>
    <h3 class="text-4xl text-center mt-[20px] my-2">
      Preview
    </h3>
    <p>
      {{ post?.preview }}
    </p>
  </div>
  <span v-else>
    loading...
  </span>
</template>

<script setup lang="ts">
import { usePostsStore } from '@/src/stores/usePostsStore';
import type { IPost } from '@/src/types/posts';

const post = ref<IPost>();


const postsStore = usePostsStore();
const route = useRoute();


const load = ref<boolean>(true);

postsStore.fetchSinglePost(route.params.id)
  .then((res) => {
    if (res && typeof res === 'object' && !Array.isArray(res)) {
      post.value = res as IPost;
    }
    load.value = false;
  })
  .catch((err) => { 
    console.log(err);
    load.value = false;
  });

watch(post, (newPost) => {
  if (!newPost) return;
  
  useSeoMeta({
    title: newPost.title,
    ogTitle: newPost.title,
    description: newPost.description,
    ogDescription: newPost.description,
    ogType: 'website',
    ogImage: '/img/velik.png',
    ogUrl: process.client ? window.location.href : '',
    twitterCard: 'summary_large_image',
    twitterTitle: newPost.title,
    twitterDescription: newPost.description,
    twitterImage: '/img/velik.png'
  });
});
</script>

<style scoped>

</style>