<template>
  <form class="form-register" method="POST" @submit.prevent="formSubmit">
    <KeepAlive>
      <Component :is="activePart" @userInput="setUserInput" />
    </KeepAlive>
    <button type="button" @click="partPrev">prev</button>
    <button type="button" @click="partNext">next</button>
    <button type="submit">submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      dataFormPart: {
        baseName: "TheFormRegisterPart",
        list: [1, 2],
        active: 0,
      },

      dataUserInput: {
        username: "",
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        avatar: "",
      },
    }
  },

  computed: {
    activePart() {
      const baseName = this.dataFormPart.baseName
      const active = this.dataFormPart.active
      const activePart = this.dataFormPart.list[active]

      const name = `${baseName}${activePart}`
      return name
    },
  },

  methods: {
    partPrev() {
      const active = this.dataFormPart.active
      if (active === 0) return

      this.dataFormPart.active -= 1
    },

    partNext() {
      const active = this.dataFormPart.active
      const partCount = this.dataFormPart.list.length
      if (active === partCount - 1) return

      this.dataFormPart.active += 1
    },

    formSubmit() {
      // eslint-disable-next-line no-console
      console.log(this.dataUserInput)
    },

    setUserInput(evt) {
      const name = evt.target.name
      const value = evt.target.value

      this.dataUserInput[name] = value
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
