const input = document.querySelector('#input');
const TodosUL = document.getElementById('todo-list');
const form = document.getElementById('form');

document.addEventListener('DOMContentLoaded', function(){
  let todos;
  if(localStorage.getItem('todos') === null){
    todos = [];
  } else{
    todos = JSON.parse(localStorage.getItem('todos'));
    todos.forEach(todoText =>{
      
      const todo = document.createElement("li")
      todo.innerText = todoText;
    
    
      TodosUL.appendChild(todo)
    })
  }
  document.querySelectorAll('li').forEach(li => {
    
    li.addEventListener('click', function(){
      li.classList.toggle('completed')
  })})
  
  document.querySelectorAll('li').forEach(li => {
    li.addEventListener('contextmenu', (e) => {
    DeleteTodo(e, li, li.innerHTML)
    e.preventDefault()
    
  })

});

  // document.querySelectorAll('li').forEach(li => {
    
  //   li.addEventListener('click', function(){
  //     li.classList.toggle('completed')
  // })})
  
  // document.querySelectorAll('li').forEach(li => {
  //   li.addEventListener('contextmenu', (e) => DeleteTodo(
  //     e, li, li.innerHTML))
  //     e.preventDefault()
  // })


function DeleteTodo(e, li, todoText){
  const todos = JSON.parse(localStorage.getItem('todos'))
  let newTodos = todos.filter(todo => todo !== todoText)
  localStorage.setItem('todos', JSON.stringify(newTodos))
  li.remove()
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  let todos;
  if(!localStorage.getItem('todos')){
    todos = []
  // todo.innerText = input.value;
  todos.push(input.value)
  localStorage.setItem('todos', JSON.stringify(todos))
  }else{
    todos = JSON.parse(localStorage.getItem('todos'))
    todos.push(input.value)
    localStorage.setItem('todos', JSON.stringify(todos))

    // todo.addEventListener('click', function(){
    //   todo.classList.toggle('completed')
    // })

    // todo.addEventListener('contextmenu', function(e){
    //   e.preventDefault();
    // });
  }
  
  const todo = document.createElement("li")
  // todo.classList.add('complete')
  todo.innerText = input.value;
    
    todo.addEventListener('click', function(){
      todo.classList.toggle('completed')
    })
  
    todo.addEventListener('contextmenu', function(e){
      e.preventDefault();
    });

    TodosUL.appendChild(todo)
    
    input.value = ''

  })})