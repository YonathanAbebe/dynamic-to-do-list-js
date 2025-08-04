// Wait for the HTML document to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get the trimmed value from the input field
        const taskText = taskInput.value.trim();

        // Alert if input is empty
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create new list item and set its text
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create the remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Set up event listener to remove task when clicked
        removeButton.onclick = () => {
            taskList.removeChild(li);
        };

        // Append remove button to the list item
        li.appendChild(removeButton);

        // Append the new task to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
        taskInput.focus();
    }

    // Add event listener for button click to add task
    addButton.addEventListener('click', addTask);

    // Add event listener to input field for "Enter" key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Initial call (optional, for placeholder task or demonstration)
    // addTask(); // Not needed unless you want a task added on load
});
