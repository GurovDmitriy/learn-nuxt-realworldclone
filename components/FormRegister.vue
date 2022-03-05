<template>
  <form class="form-register" action="" method="POST">
    <KeepAlive>
      <Component :is="activePartValid" />
    </KeepAlive>
    <button type="button" @click="partPrev">prev</button>
    <button type="button" @click="partNext">next</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      dataFormRegister: {
        partList: [1, 2],
        partActive: 0,
      },
    }
  },

  computed: {
    activePartValid() {
      const baseName = "FormRegisterPart"

      const active = this.dataFormRegister.partActive
      const activePart = this.dataFormRegister.partList[active]

      const name = `${baseName}${activePart}`

      return name
    },
  },

  methods: {
    partPrev() {
      const active = this.dataFormRegister.partActive
      if (active === 0) return

      this.dataFormRegister.partActive -= 1
    },

    partNext() {
      const active = this.dataFormRegister.partActive
      const partCount = this.dataFormRegister.partList.length
      if (active === partCount - 1) return

      this.dataFormRegister.partActive += 1
    },
  },
}
</script>

<style lang="scss">
.form-register {
  display: block;
  max-width: 600px;
  margin: 0 auto;
}
</style>
