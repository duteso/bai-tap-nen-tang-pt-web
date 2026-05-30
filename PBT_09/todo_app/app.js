let todos = JSON.parse(localStorage.getItem('todos')) || [];
let currentFilter = 'all';

const form = document.getElementById('todoForm');
const input = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const todoFooter = document.getElementById('todoFooter');
const todoCount = document.getElementById('todoCount');
const filters = document.getElementById('filters');
const clearBtn = document.getElementById('clearCompleted');

function render() {
    localStorage.setItem('todos', JSON.stringify(todos));

    todoList.innerHTML = '';

    let filteredTodos = todos;
    if (currentFilter === 'active') filteredTodos = todos.filter(t => !t.completed);
    else if (currentFilter === 'completed') filteredTodos = todos.filter(t => t.completed);

    filteredTodos.forEach(todo => {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        li.dataset.id = todo.id;

        const span = document.createElement('span');
        span.textContent = todo.text;
        span.className = 'todo-text';

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Del';
        deleteBtn.className = 'delete-btn';

        li.append(span, deleteBtn);
        todoList.appendChild(li);
    });

    updateFooter();
}

function updateFooter() {
    const activeCount = todos.filter(t => !t.completed).length;
    const completedCount = todos.filter(t => t.completed).length;

    todoFooter.classList.toggle('hidden', todos.length === 0);
    
    todoCount.textContent = `${activeCount} item${activeCount !== 1 ? 's' : ''} left`;
    
    clearBtn.classList.toggle('hidden', completedCount === 0);

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('selected', btn.dataset.filter === currentFilter);
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (text) {
        todos.push({ id: Date.now(), text, completed: false });
        input.value = '';
        render();
    }
});

todoList.addEventListener('click', (e) => {
    const li = e.target.closest('.todo-item');
    if (!li) return;
    const id = Number(li.dataset.id);

    if (e.target.classList.contains('delete-btn')) {
        todos = todos.filter(t => t.id !== id);
        render();
    }
    else if (e.target.classList.contains('todo-text')) {
        const todo = todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            render();
        }
    }
});

todoList.addEventListener('dblclick', (e) => {
    if (e.target.classList.contains('todo-text')) {
        const li = e.target.closest('.todo-item');
        const id = Number(li.dataset.id);
        const todo = todos.find(t => t.id === id);

        const editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.className = 'edit-input';
        editInput.value = todo.text;

        li.replaceChild(editInput, e.target);
        editInput.focus();

        const saveEdit = () => {
            const newText = editInput.value.trim();
            if (newText) {
                todo.text = newText;
            } else {
                todos = todos.filter(t => t.id !== id);
            }
            render();
        };

        editInput.addEventListener('blur', saveEdit);
        editInput.addEventListener('keydown', (ev) => {
            if (ev.key === 'Enter') saveEdit();
            if (ev.key === 'Escape') render();
        });
    }
});

filters.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
        currentFilter = e.target.dataset.filter;
        render();
    }
});

clearBtn.addEventListener('click', () => {
    todos = todos.filter(t => !t.completed);
    render();
});

render();