<template>
  <main class="container-page">
    <div class="px-[120px] max-md:px-[20px]">
      <h1 class="text-[84px] leading-[100px] mt-[80px] max-md:text-[50px] max-md:leading-[50px]">
        At Test & Code, you can learn about software design
      </h1>
      <img
        src="/img/velik.png"
        alt="velik"
        class="my-[40px]"
      >
      <div>
        About
      </div>
      <p class="text-[36px] leading-[124%] my-[40px] w-[695px] max-md:w-auto">
        The business model of this service is an aggregator that brings together commercial and noncommercial organizations and charges a commission for transactions. The percentage that goes to the account of the platform owner is discussed individually with each company. The platform also has a subscription system. It allows nonprofits to post more than one project for which they collect donations.
      </p>
    </div>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'At Test & Code, you can learn about software design',
  ogTitle: 'At Test & Code, you can learn about software design',
  description: 'About',
  ogDescription: 'About',
  ogType: 'website',
  ogImage: '/img/velik.png',
  ogUrl: `${process.client ? window.location.origin : ''}`,
  twitterCard: 'summary_large_image',
  twitterTitle: 'At Test & Code, you can learn about software design',
  twitterDescription: 'About',
  twitterImage: '/img/velik.png'
});
</script>

<style scoped>

</style>