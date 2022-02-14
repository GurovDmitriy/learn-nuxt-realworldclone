<template>
  <ul class="paginator-list">
    <PaginatorListItem class="paginator-list__item" />
  </ul>
</template>

<script>
export default {
  mounted() {
    this.fetchFeedListCount()
  },

  methods: {
    async fetchFeedListCount() {
      const res = await fetch("http://localhost:3005/feedCountByTag")
      const data = await res.json()
      console.log(data)
    },
  },
}
</script>
