const add = document.querySelector("button:first-of-type")
const clear = document.querySelector("button:last-of-type")
const inputText = document.querySelector("input[type=text]")
const ul = document.querySelector("ul")

add.addEventListener("click", (e) => {
  if (inputText.value != "") {
    let newItem = document.createElement("li")
    newItem.innerHTML = `<div>
  <input type='checkbox'>
  <label>${inputText.value}</label>
  </div>
  <button class='del'>Delete</button>`
    ul.appendChild(newItem)

    inputText.value = ""
  }
})

clear.addEventListener("click", (e) => {
  ul.innerHTML = ""
})

// Using event delegation on created delete buttons
document.body.addEventListener("click", (e) => {
  if (e.target.matches("button.del")) {
    console.log("delete button clicked")
    e.target.closest("li").remove()
  } else if (e.target.matches("div label")) {
    console.log("label clicked")
    if (e.target.previousElementSibling.checked) {
      e.target.previousElementSibling.checked = false
    } else {
      e.target.previousElementSibling.checked = true
    }
  }
})
