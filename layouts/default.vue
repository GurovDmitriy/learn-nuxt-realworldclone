<template>
  <div>
    <TheHeader />
    <Nuxt keep-alive :keep-alive-props="{ max: 10 }" />
  </div>
</template>
