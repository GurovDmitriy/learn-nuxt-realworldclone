export const paginator = {
  feedList: {
    main: 5,
  },
}

export const placeholder = {
  feedList: {
    main: 5,
  },
}

export const forms = {
  sign: {
    userName: {
      message: {
        caption: "Username",
        required: "is required",
        type: "includes letters",
        min: "minimum 4 symbols",
        max: "maximum 20 symbols",
      },

      config: {
        min: 4,
        max: 20,
      },
    },

    email: {
      message: {
        caption: "Email",
        required: "is required",
        type: "includes letters",
        format: "format example@gmail.com",
        min: "minimum 4 symbols",
        max: "maximum 50 symbols",
      },

      config: {
        min: 4,
        max: 50,
      },
    },

    password: {
      message: {
        caption: "Password",
        required: "is required",
        min: "minimum 4 symbols",
        max: "maximum 10 symbols",
      },

      config: {
        min: 4,
        max: 10,
      },
    },

    firstName: {
      message: {
        caption: "First name",
        required: "is required",
        type: "includes letters",
        min: "minimum 2 symbols",
        max: "maximum 20 symbols",
      },

      config: {
        min: 2,
        max: 20,
      },
    },

    lastName: {
      message: {
        caption: "Last name",
        required: "is required",
        type: "includes letters",
        min: "minimum 2 symbols",
        max: "maximum 20 symbols",
      },

      config: {
        min: 2,
        max: 20,
      },
    },

    image: {
      message: {
        caption: "Avatar",
        type: "includes letters",
        format: "format https://example.com/avatar",
        min: "minimum 10 symbols",
        max: "maximum 50 symbols",
      },

      config: {
        min: 10,
        max: 50,
      },
    },
  },
}
