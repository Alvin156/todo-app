const formEl = document.querySelector('form');
const inputEl = document.getElementById('input');
const todoContainer = document.getElementById('todo-container');

const todos = JSON.parse(localStorage.getItem('todos'));

if (todos) {
    todos.forEach((todo) => {
        addTodo(todo);
    })
}

formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    addTodo();
})

function addTodo(todo) {
    let text = inputEl.value;

    if (todo) {
        text = todo.text;
    }

    if (text) {
        const todoEl = document.createElement('li');
        todoEl.classList.add('todo')

        if (todo && todo.completed) {
            todoEl.classList.add('completed');
        }

        todoEl.innerText = text;

        todoEl.addEventListener('click', () => {
            todoEl.classList.add('completed');

            updateLS();
        });

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            todoEl.remove();

            updateLS();
        });

        todoContainer.appendChild(todoEl);
        inputEl.value = '';

        updateLS();
    }
}

function updateLS() {
    const todosEl = document.querySelectorAll('li');

    const todos = [];

    todosEl.forEach((todoEl) => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        });
    });

    localStorage.setItem('todos', JSON.stringify(todos));
}