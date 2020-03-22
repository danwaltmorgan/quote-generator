// export default [
//     {author: "Dan Morgan", quote: "This is a test of the emergency broadcat system"},
//     {author: "Albert Einstein", quote: "E = mc^2"}
//   ]
const fetch = require("node-fetch")

fetch("https://type.fit/api/quotes")
.then(function(response) {
  return response.json()
})
.then(function(data) {
  let index = Math.floor(Math.random() * 1000)
  console.log(data.length)
  return data[index]
})

// function quotes(data) {
//   return data
// }

// async function getData() {
  // var response = await fetch("https://type.fit/api/quotes");
  // console.log(response.json())
// }/

// getData()
