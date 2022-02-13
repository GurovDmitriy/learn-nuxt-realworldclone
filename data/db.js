/* eslint-disable no-console */
const casual = require("casual")
const FEED_COUNT = 10
const USERS_COUNT = 10

const dataRWC = {
  feed: [],
  tags: ["welcome", "introduction", "nuxt", "learn", "javascript"],
  users: [
    {
      id: 1,
      userName: "admin",
      firstName: casual.first_name,
      lastName: casual.last_name,
      avatar: "https://i.pravatar.cc/100?img=1",
      email: "admin@admin.com",
      password: "$2a$12$JNh1yuTk1nIWukvZZMoPPOMEG1BL2ggA8VXjB9h3uUs1zXgGgofO.",
    },
  ],
}

function randomInteger(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1)
  return Math.round(rand)
}

// function isEmptyArr(value) {
//   return value && Array.isArray(value) && !value.length
// }

// dataUsers

for (let i = 2; i <= USERS_COUNT; i++) {
  let avatar = ""

  if (i % 2) {
    avatar = `https://i.pravatar.cc/100?img=${i}`
  }

  dataRWC.users.push({
    id: i,
    userName: casual.username,
    firstName: casual.first_name,
    lastName: casual.last_name,
    avatar,
    email: casual.email,
    password: casual.password,
  })
}

// feed

for (let i = 1; i <= FEED_COUNT; i++) {
  const userIdRandom = randomInteger(1, USERS_COUNT)
  const tagsRandom = []
  const tagsRandomCount = randomInteger(1, dataRWC.tags.length)

  for (let i = 0; i < tagsRandomCount; i++) {
    const randomTag = dataRWC.tags[randomInteger(0, dataRWC.tags.length - 1)]
    if (tagsRandom.findIndex((item) => item === randomTag) !== -1) continue
    tagsRandom.push(randomTag)
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

Object.defineProperty(dataRWC, "feedList", {
  get() {
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
})

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
