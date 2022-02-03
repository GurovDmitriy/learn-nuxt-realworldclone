/* eslint-disable no-console */
const casual = require("casual")
const FEED_COUNT = 10
const USERS_COUNT = 10

const dataRWC = {
  feed: [],
  tags: ["welcome", "introduction", "nuxt"],
  users: [
    {
      id: 1,
      userName: "admin",
      firstName: casual.first_name,
      lastName: casual.last_name,
      avatar: "https://i.pravatar.cc/100",
      email: "admin@admin.com",
      password: "$2a$12$JNh1yuTk1nIWukvZZMoPPOMEG1BL2ggA8VXjB9h3uUs1zXgGgofO.",
    },
  ],

  get feedList() {
    const data = this.feed.map((item) => {
      const id = item.id
      const like = item.like
      const time = item.time
      const title = item.title
      const tags = item.tags
      const preview = item.preview
      const avatar = this.users[item.userId].avatar
      const name = this.users[item.userId].userName

      return {
        id,
        like,
        tags,
        author: {
          avatar,
          name,
          time,
        },
        feed: {
          title,
          preview,
        },
      }
    })

    return data
  },
}

function randomInteger(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1)
  return Math.round(rand)
}

// dataUsers

for (let i = 2; i <= USERS_COUNT; i++) {
  dataRWC.users.push({
    id: i,
    userName: casual.username,
    firstName: casual.first_name,
    lastName: casual.last_name,
    avatar: "https://i.pravatar.cc/100",
    email: casual.email,
    password: casual.password,
  })
}

// feed

for (let i = 1; i <= FEED_COUNT; i++) {
  const userIdRandom = randomInteger(1, USERS_COUNT)
  const tagsRandom = [...dataRWC.tags]
  const tagsRandomCountDelete = randomInteger(0, dataRWC.tags.length)

  for (let i = 0; i < tagsRandomCountDelete; i++) {
    tagsRandom.splice(randomInteger(0, tagsRandom.length - 1), 1)
  }

  dataRWC.feed.push({
    id: i,
    userId: userIdRandom,
    title: casual.title,
    preview: casual.short_description,
    content: casual.text,
    time: casual.unix_time,
    tags: tagsRandom,
    like: randomInteger(0, 300),
  })
}

module.exports = () => {
  return dataRWC
}

console.log(
  `DB successfully created!
    ---
    default username: admin
            email: admin@admin.com
            password: 123456`
)
