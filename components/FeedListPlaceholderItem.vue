<template>
  <li class="feed-list-placeholder-item">
    <div class="feed-list-placeholder-item__header">
      <div class="feed-list-placeholder-item__avatar"></div>
      <div class="feed-list-placeholder-item__name"></div>
    </div>
    <div class="feed-list-placeholder-item__main"></div>
  </li>
</template>

<style lang="scss">
.feed-list-placeholder-item {
  padding: $space-l 0;

  border-bottom: 2px solid $var-color-grey-light;
}

.feed-list-placeholder-item__header {
  display: flex;
  align-items: center;

  margin-bottom: $space-s;
}

.feed-list-placeholder-item__avatar {
  width: 38px;
  height: 38px;

  margin-right: $space-s;

  background-color: $var-color-grey-light;
  border-radius: 50%;
}

.feed-list-placeholder-item__name {
  width: 100%;
  max-width: 80px;
  height: 28px;

  background-color: $var-color-grey-light;
  border-radius: 10px;
}

.feed-list-placeholder-item__main {
  width: 100%;
  max-width: 400px;
  height: 50px;

  background-color: $var-color-grey-light;
  border-radius: 10px;
}
</style>
