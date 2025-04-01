/* script.js */
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="completeButton">Complete</button>
                <button class="deleteButton">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
        taskInput.value = '';

        const completeButton = li.querySelector('.completeButton');
        const deleteButton = li.querySelector('.deleteButton');

        completeButton.addEventListener('click', () => {
            li.querySelector('span').classList.toggle('completed');
        });

        deleteButton.addEventListener('click', () => {
            li.remove();
        });
    }
}

taskInput.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
    }
});