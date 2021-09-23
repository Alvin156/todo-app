const formEl = document.querySelector('form');
const inputEl = document.getElementById('input');
const todoContainer = document.getElementById('todo-container');

formEl.addEventListener('submit', handleAddTodo);

function handleAddTodo(e) {
    e.preventDefault();

    if (!inputEl.value || inputEl.value === '') return;

    const todos = document.createElement('li');
    todos.classList.add('todo');
    todos.innerText = inputEl.value;

    todoContainer.appendChild(todos);

    todos.addEventListener('click', () => {
        todos.classList.toggle('completed');
    });

    inputEl.value = '';
}