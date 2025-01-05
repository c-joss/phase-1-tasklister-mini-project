document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault()
    const taskDescription = document.querySelector("#new-task-description").value
    newListItem(taskDescription)
    form.reset()
  })
});

function newListItem(create_task) {
  let li = document.createElement("li")
  let btn = document.createElement("button")
  btn.addEventListener("click", handleDelete)
  btn.textContent = "done"
  li.textContent = `${create_task} ` 
  li.appendChild(btn)
  document.querySelector("#tasks").appendChild(li)

}

function handleDelete(e) {
  e.target.parentNode.remove()
}
