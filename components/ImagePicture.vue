<template>
  <div class="image-picture">
    <picture class="image-picture__picture">
      <source
        type="image/webp"
        media="(min-width: 1000px)"
        :srcset="require(`~/assets/images/${dataItemValid.avatar}?webp`)"
      />

      <source
        type="image/webp"
        media="(min-width: 600px)"
        :srcset="require(`~/assets/images/${dataItemValid.avatar}?webp`)"
      />

      <source
        type="image/webp"
        :srcset="require(`~/assets/images/${dataItemValid.avatar}?webp`)"
      />

      <source
        type="image/png"
        media="(min-width: 1000px)"
        :srcset="require(`~/assets/images/${dataItemValid.avatar}`)"
      />

      <source
        type="image/png"
        media="(min-width: 600px)"
        :srcset="require(`~/assets/images/${dataItemValid.avatar}`)"
      />

      <source
        type="image/png"
        :srcset="require(`~/assets/images/${dataItemValid.avatar}`)"
      />

      <img
        :src="require(`~/assets/images/${dataItemValid.avatar}`)"
        alt="dataItemValid.name"
        class="image-picture__img"
        width="38"
        height="38"
      />
    </picture>
  </div>
</template>
