const todoButton = document.querySelector('.todo-button');
const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');

todoButton.addEventListener('click', handleAdd);

/**
* ITS FOR INTELLISENSE SHUT
* @param {PointerEvent} e 
*/

function handleAdd(e) {
    e.preventDefault();
    const todos = document.createElement('div');
    if (!todoInput.value || todoInput.value === '') return;
    
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    todos.appendChild(newTodo);

    const checkBtn = document.createElement('button');
    checkBtn.classList.add('check-button');
    checkBtn.innerHTML = '<i class="fas fa-check-square"></i>';
    todos.appendChild(checkBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('trash-button');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    todos.appendChild(deleteBtn);

    todos.classList.add('todo')
    todoList.appendChild(todos);
    todoInput.value = '';
}