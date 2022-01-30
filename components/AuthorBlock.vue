<template>
  <div class="author">
    <div class="author__img-box">
      <img
        class="author__img"
        src="https://via.placeholder.com/30x30"
        alt="author"
        width="30"
        height="30"
      />
    </div>
    <div class="author__info-box">
      <p class="author__name">Author</p>
      <time class="author__time" datetime="2022-01-24 00:00"
        >January 24, 2022</time
      >
    </div>
  </div>
</template>

<style lang="scss">
.author {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.author__img-box {
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
  margin-bottom: 0;

  color: $var-color-purple;
  line-height: 1;
}

.author__time {
  margin-bottom: 0;

  @include text-small;

  color: $var-color-grey;
  line-height: 1;
}
</style>
