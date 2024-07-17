document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const li = document.createElement('li');
            li.innerHTML = `${taskText} <button class="delete">Delete</button>`;
            taskList.appendChild(li);
            taskInput.value = '';
            
            // 削除ボタンのイベントリスナーを追加
            const deleteButton = li.querySelector('button.delete');
            deleteButton.addEventListener('click', () => {
                taskList.removeChild(li);
            });
        }
    });

    // Enterキーでもタスクを追加できるようにする
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });
});
