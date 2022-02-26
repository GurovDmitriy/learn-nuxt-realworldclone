<template>
  <div class="page-container">
    <TheHeaderUser />
    <Nuxt keep-alive :keep-alive-props="{ max: 10 }" />
    <TheFooter />
  </div>
</template>
