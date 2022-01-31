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
  padding: $space-l 0;

  border-bottom: 2px solid $var-color-grey-light;
}

.feed-list__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  margin-bottom: $space-s;
}

.feed-list__author {
  margin-right: $space-m;
}

.feed-list__feed-preview {
  margin-bottom: $space-m;
}

.feed-list__footer {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.feed-list__read-more {
  @include text-small;

  margin-right: $space-m;

  color: $var-color-grey;
  font-weight: $font-weight-light;
  text-decoration: none;
}

.feed-list__tags-list {
  justify-content: flex-end;
  max-width: 50%;
}
</style>
