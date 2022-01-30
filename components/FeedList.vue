<template>
  <ul class="feed-list">
    <li class="feed-list__item">
      <div class="feed-list__header">
        <AuthorBlock class="feed-list__author" />
        <LikeBlock class="feed-list__like" />
      </div>
      <FeedPreview class="feed-list__feed-preview" />
      <div class="feed-list__footer">
        <NuxtLink :to="{ path: '/' }" class="feed-list__read-more"
          >Read more...</NuxtLink
        >
        <TagsList class="feed-list__tags-list" />
      </div>
    </li>
  </ul>
</template>

<style lang="scss">
.feed-list {
  display: block;
  margin: 0;
  padding: 0;

  list-style: none;
}

.feed-list__item {
  padding: $space-xl 0;
}
</style>
