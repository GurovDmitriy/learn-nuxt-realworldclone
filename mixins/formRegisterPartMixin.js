export default {
  data() {
    return {
      dataFormRegister: {
        dataUserPersonal: [
          {
            name: "username",
            type: "text",
            placeholder: "Username",
            required: true,
            iconName: "person-workspace",
            className: "form-register-part-1__input",
          },

          {
            name: "email",
            type: "email",
            placeholder: "Email",
            required: true,
            iconName: "envelope-fill",
            className: "form-register-part-1__input",
          },

          {
            name: "password",
            type: "password",
            placeholder: "Password",
            required: true,
            iconName: "file-lock2",
            className: "form-register-part-1__input",
          },
        ],

        dataUserAvatar: [
          {
            name: "firstname",
            type: "text",
            placeholder: "First Name",
            required: true,
            iconName: "",
            className: "form-register-part-2__input",
          },

          {
            name: "lastname",
            type: "text",
            placeholder: "Last Name",
            required: true,
            iconName: "",
            className: "form-register-part-2__input",
          },

          {
            name: "avatar",
            type: "url",
            placeholder: "Avatar",
            required: false,
            iconName: "",
            className: "form-register-part-2__input",
          },
        ],
      },
    }
  },

  computed: {
    dataFormRegisterValid() {
      const data = {}

      for (const key in this.dataFormRegister) {
        const item = getItemValid(this.dataFormRegister[key])
        data[key] = item
      }

      function getItemValid(arr) {
        const data = arr.map((item) => {
          const name = item.name
          const id = `${item.name}-field`
          const labelFor = id
          const className = `${item.className} ${item.className}--${item.name}`
          const type = item.type
          const placeholder = item.placeholder
          const required = item.required
          const iconName = item.iconName

          return {
            name,
            id,
            labelFor,
            className,
            type,
            placeholder,
            required,
            iconName,
          }
        })

        return data
      }

      return data
    },
  },
}
