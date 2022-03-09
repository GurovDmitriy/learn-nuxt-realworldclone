/* eslint-disable no-console */
const fs = require("fs")
const casual = require("casual")
const POSTS_COUNT = 10
const USERS_COUNT = 10
const data = {
  posts: [],
  users: [
    {
      id: 1,
      username: "admin",
      firstname: casual.first_name,
      lastname: casual.last_name,
      avatar: "https://i.pravatar.cc/100",
      email: "admin@admin.com",
      password: "$2a$12$JNh1yuTk1nIWukvZZMoPPOMEG1BL2ggA8VXjB9h3uUs1zXgGgofO.",
    },
  ],
}

function randomInteger(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1)
  return Math.round(rand)
}

// users

for (let i = 2; i <= USERS_COUNT; i++) {
  data.users.push({
    id: i,
    username: casual.username,
    firstname: casual.first_name,
    lastname: casual.last_name,
    avatar: "https://i.pravatar.cc/100",
    email: casual.email,
    password: casual.password,
  })
}

// posts

for (let i = 1; i <= POSTS_COUNT; i++) {
  data.posts.push({
    id: i,
    userId: randomInteger(1, USERS_COUNT),
    title: casual.title,
    previewtext: casual.short_description,
    content: casual.text,
    time: casual.unix_time,
    like: randomInteger(0, 300),
  })
}

fs.writeFile("data/db.json", JSON.stringify(data), (err) => {
  if (err) {
    console.log("error", err)
  }
})

console.log(
  `DB successfully created!
    ---
    default username: admin
            email: admin@admin.com
            password: 123456`
)
