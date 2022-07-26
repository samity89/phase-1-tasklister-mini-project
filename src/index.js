document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
    form.addEventListener('submit', (e) =>{
    e.preventDefault()
    addTodo(e.target.newTaskDescription.value)
    form.reset()
  })
});

function addTodo (todo) {
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', deleteButton)
  btn.textContent = 'COMPLETE!!' 
  li.textContent = `${todo} `
  li.appendChild(btn)
  document.querySelector('#tasks').appendChild(li)
}

function deleteButton (e) {
  e.target.parentNode.remove()
}