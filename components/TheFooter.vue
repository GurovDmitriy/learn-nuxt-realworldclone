<template>
  <footer class="footer">
    <section class="footer__section">
      <h2 class="footer__caption visually-hidden">Contacts</h2>
      <a class="footer__link" href="#">Github</a>
    </section>
  </footer>
</template>

<style lang="scss">
.footer {
  flex-grow: 1;

  padding-top: $space-l;
  padding-bottom: $space-l;

  background-color: $var-color-amethyst-smoke;
}

.footer__section {
  @include container;
}

.footer__link {
  @include caption-h3;

  display: block;

  color: $var-color-default;
  text-align: center;
  text-decoration: none;
}
</style>
