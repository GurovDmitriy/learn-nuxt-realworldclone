/* eslint-disable no-console */
const casual = require("casual")
const FEED_COUNT = 30
const USERS_COUNT = 10

// global state

const stateDataBase = {
  users: [],
  feeds: [],
  tags: [],
  // getters
  userList: [],
  feedList: [],
  feedCount: {},
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
    role: "admin",
    username: "Admin",
    firstname: casual.first_name,
    lastname: casual.last_name,
    avatar: "https://i.pravatar.cc/100?img=1",
    email: "admin@admin.com",
    password: "$2a$12$JNh1yuTk1nIWukvZZMoPPOMEG1BL2ggA8VXjB9h3uUs1zXgGgofO.",
  }

  state.users.push(defaultUser)

  return state
}

function createDefaultTags(state) {
  const tagsList = ["welcome", "introduction", "nuxt", "learn", "javascript"]
  const defaultTags = []
  tagsList.forEach((item, index) => {
    defaultTags.push({
      id: index + 1,
      tag: item,
    })
  })

  state.tags = defaultTags

  return state
}

function createUsers(state) {
  for (let i = 2; i <= USERS_COUNT; i++) {
    let avatar = ""

    if (i % 2) {
      avatar = `https://i.pravatar.cc/100?img=${i}`
    }

    state.users.push({
      id: i,
      username: casual.username,
      firstname: casual.first_name,
      lastname: casual.last_name,
      avatar,
      email: casual.email,
      password: casual.password,
      role: "user",
    })
  }

  return state
}

function createUserList(state) {
  Object.defineProperty(state, "userList", {
    get() {
      const data = state.users.map((item) => {
        const id = item.id
        const username = item.username
        const firstname = item.firstname
        const lastname = item.lastname
        const avatar = item.avatar
        const email = item.email
        const role = item.role

        return {
          id,
          username,
          firstname,
          lastname,
          avatar,
          email,
          role,
        }
      })

      return data
    },
  })

  return state
}

function createFeeds(state) {
  for (let i = 1; i <= FEED_COUNT; i++) {
    const userIdRandom = randomInteger(1, USERS_COUNT)
    const tagsRandom = []
    const tagsRandomCount = randomInteger(1, state.tags.length)

    for (let i = 0; i < tagsRandomCount; i++) {
      const randomTag = state.tags[randomInteger(0, state.tags.length - 1)].tag
      if (tagsRandom.findIndex((item) => item === randomTag) !== -1) continue
      tagsRandom.push(randomTag)
    }

    const userRandom = []
    const userRandomCount = randomInteger(0, state.users.length)

    for (let i = 0; i < userRandomCount; i++) {
      const randomUser = state.users[randomInteger(0, state.users.length - 1)]
      if (userRandom.findIndex((item) => item === randomUser.id) === -1) {
        userRandom.push(randomUser.id)
      }
    }

    state.feeds.push({
      id: i,
      userId: userIdRandom,
      title: casual.title,
      preview: casual.short_description,
      content: casual.text,
      time: casual.unix_time,
      tags: tagsRandom,
      like: userRandom,
    })
  }

  return state
}

function createFeedList(state) {
  Object.defineProperty(state, "feedList", {
    get() {
      const data = this.feeds.map((item) => {
        const user = state.users.filter((elem) => elem.id === item.userId)

        const id = item.id
        const like = item.like
        const time = item.time
        const title = item.title
        const tags = item.tags
        const preview = item.preview
        const avatar = user[0].avatar
        const name = user[0].username

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

  return state
}

function createFeedCount(state) {
  Object.defineProperty(state, "feedCount", {
    get() {
      const data = {
        total: state.feeds.length,
        byTag: {},
        byUser: {},
        byLike: {},
      }

      // by tag

      state.tags.forEach((item) => {
        const tag = item.tag
        const count = getFeedListCountByTag(tag)

        data.byTag[tag] = count
      })

      function getFeedListCountByTag(tag) {
        let count = 0

        state.feeds.forEach((item) => {
          if (item.tags.findIndex((elem) => elem === tag) !== -1) {
            count += 1
          }
        })

        return count
      }

      // by user

      state.users.forEach((item) => {
        const id = item.id
        const username = item.username

        data.byUser[username] = getCountFeedByUser(id)
      })

      function getCountFeedByUser(id) {
        const data = state.feeds.filter((item) => item.userId === id)
        return data.length
      }

      // by like

      state.users.forEach((item) => {
        const userId = item.id
        const username = item.username

        data.byLike[username] = getCountFeedByLike(userId)
      })

      function getCountFeedByLike(id) {
        const data = state.feeds.filter((item) => {
          if (item.like.find((item) => item === id)) {
            return item
          }
          return false
        })

        return data.length
      }

      return data
    },
  })

  return state
}

function setResult(state) {
  return state
}

// run

function generateDataBase() {
  pipeRunner(
    createDefaultUser,
    createDefaultTags,
    createUsers,
    createUserList,
    createFeeds,
    createFeedList,
    createFeedCount,
    setResult
  )(stateDataBase)
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
