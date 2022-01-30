<template>
  <button class="like">
    <img
      class="like__icon"
      src="https://via.placeholder.com/30x30"
      alt="author"
      width="16"
      height="16"
    />
    <span class="like__text">777</span>
  </button>
</template>

<style lang="scss">
.like {
  display: block;
  padding: $space-xs $space-s;

  @include text-small;

  color: $var-color-purple;
  line-height: 1;

  background: none;
  border: 1px solid $var-color-purple;
  border-radius: 4px;
}

.like__icon {
  display: inline-block;
  width: 16px;
  height: auto;

  vertical-align: middle;
}

.like__text {
  display: inline-block;

  vertical-align: middle;
}
</style>
