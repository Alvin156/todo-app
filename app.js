const todoButton = document.querySelector('.todo-button');
const todoInput = document.querySelector('.todo-input');
const todoContainer = document.querySelector('.todo-container');

todoButton.addEventListener('click', handleAdd);

/**
* 
* @param {PointerEvent} e 
*/

function handleAdd(e) {
    e.preventDefault();
    const todos = document.createElement('div');
    if (!todoInput.value || todoInput.value === '') return;
    todos.innerText = todoInput.value;
    todoContainer.appendChild(todos);
    todoInput.value = '';
}