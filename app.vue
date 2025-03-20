<template>
  <NuxtLoadingIndicator
    color="#e569fb8a"
    :height="5"
    :duration="1000"
    :throttle="0"
  />
  <div class="container container-page">
    <NuxtLayout>
      <HeaderNavbar />
      <NuxtPage />
      <Footer />
    </NuxtLayout>
  </div>
</template>
