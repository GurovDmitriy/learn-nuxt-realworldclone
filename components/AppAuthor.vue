<template>
  <div class="author">
    <NuxtLink class="author__img-box" :to="{ path: dataItem.userPagePath }">
      <AppImage class="author__img" :data-item="dataItem" />
    </NuxtLink>
    <div class="author__info-box">
      <NuxtLink class="author__name" :to="{ path: dataItem.userPagePath }">
        {{ dataItem.name }}
      </NuxtLink>
      <time class="author__time-feed" :datetime="dataItem.time">
        {{ dataItem.time | dateFormatBase }}
      </time>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataItem: {
      type: Object,
      required: false,
      default: () => ({
        name: "Author",
        time: 1031974583,
        userPagePath: "/",
        imageWith: 38,
        imageHeight: 38,
        imagePlaceholderName: "placeholder-avatar.png",
      }),
    },
  },
}
</script>

<style lang="scss">
.author {
  display: flex;
}

.author__img-box {
  display: block;
  width: 38px;
  margin-right: $space-s;
}

.author__img {
  display: block;
  width: 100%;
  height: auto;

  line-height: 0;

  border-radius: 50%;
}

.author__name {
  display: block;
  margin-bottom: 0;

  color: $var-color-primary;
  line-height: 1;
  text-decoration: none;
}

.author__time-feed {
  @include text-small;

  margin-bottom: 0;

  color: $var-color-default;
  font-weight: $font-weight-light;
  line-height: 1;
}
</style>
