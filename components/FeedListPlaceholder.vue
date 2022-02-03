<template>
  <div class="feed-list-placeholder">
    <div class="feed-list-placeholder__header">
      <div class="feed-list-placeholder__avatar"></div>
      <div class="feed-list-placeholder__name"></div>
    </div>
    <div class="feed-list-placeholder__main"></div>
  </div>
</template>

<style lang="scss">
.feed-list-placeholder__header {
  display: flex;
  align-items: center;

  margin-bottom: $space-s;
}

.feed-list-placeholder__avatar {
  width: 38px;
  height: 38px;

  margin-right: $space-s;

  background-color: $var-color-grey-light;
  border-radius: 50%;
}

.feed-list-placeholder__name {
  width: 100%;
  max-width: 80px;
  height: 28px;

  background-color: $var-color-grey-light;
  border-radius: 10px;
}

.feed-list-placeholder__main {
  width: 100%;
  max-width: 400px;
  height: 50px;

  background-color: $var-color-grey-light;
  border-radius: 10px;
}
</style>
