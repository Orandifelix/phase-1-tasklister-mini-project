document.addEventListener("DOMContentLoaded", () => {
  // your code here
let form = document.querySelector("form")
form.addEventListener("submit", (event) => {
  event.preventDefault();
   createToDo(event.target.new_task_description.value) 

   form.reset()
})
});



function createToDo(todo) {
  const li = document.createElement('li');
  const btn = document.createElement('button');
  btn.addEventListener('click', deletebtn)
  const span = document.createElement('span');

  btn.textContent = 'x';
  span.textContent = `${todo}   `

  li.appendChild(span);
  li.appendChild(btn);
  document.querySelector('ul').appendChild(li);
}
  

function deletebtn(e){
  e.target.parentNode.remove()

}

  

  



// function createToDo(todo){
//   let li = document.createElement('li');
//   const btn = document.createElement('button')
//   btn.textContent = 'x'
//   li.appendChild(btn)
//   li.textContent = `${todo}   `
//   document.querySelector('ul').appendChild(li);

// }