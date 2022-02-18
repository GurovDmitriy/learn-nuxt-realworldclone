/* eslint-disable no-console */
const casual = require("casual")
const FEED_COUNT = 10
const USERS_COUNT = 10

// global state

const stateDataBase = {
  feed: [],
  tags: [],
  users: [],
  // getters
  feedCountByTag: {},
  feedList: [],
}

// core

const pipe =
  (a, b) =>
  (...args) =>
    b(a(...args))

function pipeRunner(...fns) {
  return fns.reduce(pipe)
}

// helper

function randomInteger(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1)
  return Math.round(rand)
}

// functions

function createDefaultUser(state) {
  const defaultUser = {
    id: 1,
    userName: "admin",
    firstName: casual.first_name,
    lastName: casual.last_name,
    // avatar: "https://i.pravatar.cc/100?img=1",
    email: "admin@admin.com",
    password: "$2a$12$JNh1yuTk1nIWukvZZMoPPOMEG1BL2ggA8VXjB9h3uUs1zXgGgofO.",
  }

  state.users.push(defaultUser)

  return Object.assign({}, state)
}

function createDefaultTags(state) {
  const defaultTags = ["welcome", "introduction", "nuxt", "learn", "javascript"]
  state.tags = defaultTags

  return Object.assign({}, state)
}

function createUsers(state) {
  for (let i = 2; i <= USERS_COUNT; i++) {
    let avatar = ""

    if (i % 2) {
      avatar = `https://i.pravatar.cc/100?img=${i}`
    }

    state.users.push({
      id: i,
      userName: casual.username,
      firstName: casual.first_name,
      lastName: casual.last_name,
      avatar,
      email: casual.email,
      password: casual.password,
    })
  }

  return Object.assign({}, state)
}

function createFeed(state) {
  for (let i = 1; i <= FEED_COUNT; i++) {
    const userIdRandom = randomInteger(1, USERS_COUNT)
    const tagsRandom = []
    const tagsRandomCount = randomInteger(1, state.tags.length)

    for (let i = 0; i < tagsRandomCount; i++) {
      const randomTag = state.tags[randomInteger(0, state.tags.length - 1)]
      if (tagsRandom.findIndex((item) => item === randomTag) !== -1) continue
      tagsRandom.push(randomTag)
    }

    state.feed.push({
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

  return Object.assign({}, state)
}

function createFeedList(state) {
  Object.defineProperty(state, "feedList", {
    get() {
      const data = this.feed.map((item) => {
        const id = item.id
        const like = item.like
        const time = item.time
        const title = item.title
        const tags = item.tags
        const preview = item.preview
        const avatar = state.users.filter(
          (elem) => elem.userId === item.userId
        ).avatar
        const name = state.users.filter(
          (elem) => elem.userId === item.userId
        ).userName

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

  return Object.assign({}, state)
}

function createFeedCountByTag(state) {
  Object.defineProperty(state, "feedCountByTag", {
    get() {
      const data = {
        total: state.feed.length,
      }

      state.tags.forEach((item) => {
        const count = getFeedListCountByTag(item)

        data[item] = count
      })

      function getFeedListCountByTag(tag) {
        let count = 0

        state.feed.forEach((item) => {
          if (item.tags.findIndex((elem) => elem === tag) !== -1) {
            count += 1
          }
        })

        return count
      }

      return data
    },
  })

  return Object.assign({}, state)
}

function setResult(state) {
  Object.assign(stateDataBase, state)

  return Object.assign({}, state)
}

// run

function generateDataBase() {
  pipeRunner(
    createDefaultUser,
    createDefaultTags,
    createUsers,
    createFeed,
    createFeedList,
    createFeedCountByTag,
    setResult
  )(Object.assign({}, stateDataBase))
}

generateDataBase()

// export data

module.exports = () => {
  return stateDataBase
}

// log successful

console.log(
  `DB successfully created!
    ---
    default username: admin
            email: admin@admin.com
            password: 123456`
)
