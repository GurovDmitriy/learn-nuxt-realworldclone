export default {
  mounted() {
    this.dataFieldDefault = { ...this.dataField }
  },

  methods: {
    resetForm() {
      this.dataField = { ...this.dataFieldDefault }
    },
  },
}
