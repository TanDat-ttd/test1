// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    loadTasks(); // Load công việc từ Local Storage khi trang được tải lên
});

function addTask() {
    const STT = document.getElementById('Stt').value;
    const taskName = document.getElementById('task-name').value;
    const assignee = document.getElementById('assignee').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    if (STT && taskName && assignee && startDate && endDate) {
        const taskList = document.getElementById('task-list');
        const newTask = document.createElement('div');
        newTask.innerHTML = `<p>${STT} - <strong>${taskName}</strong> - ${assignee} - ${startDate} to ${endDate}</p>`;
        taskList.appendChild(newTask);

        // Lưu công việc vào Local Storage
        saveTask(STT, taskName, assignee, startDate, endDate);

        // Reset form
        document.getElementById('task-form').reset();
    } else {
        alert('Vui lòng điền đầy đủ thông tin công việc.');
    }
}

function resetDiary() {
    // Xóa tất cả công việc trên giao diện
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    // Xóa tất cả công việc trong Local Storage
    localStorage.removeItem('groupDiary');
}

function saveTask(taskName, assignee, startDate, endDate) {
    // Lấy danh sách công việc từ Local Storage (nếu có)
    let tasks = JSON.parse(localStorage.getItem('groupDiary')) || [];

    // Thêm công việc mới vào danh sách
    tasks.push({STT, taskName, assignee, startDate, endDate });

    // Lưu lại danh sách công việc vào Local Storage
    localStorage.setItem('groupDiary', JSON.stringify(tasks));
}

function loadTasks() {
    // Lấy danh sách công việc từ Local Storage (nếu có)
    const tasks = JSON.parse(localStorage.getItem('groupDiary')) || [];

    // Hiển thị công việc trên giao diện
    const taskList = document.getElementById('task-list');
    tasks.forEach(task => {
        const newTask = document.createElement('div');
        newTask.innerHTML = `<p>${STT} - <strong>${task.taskName}</strong> - ${task.assignee} - ${task.startDate} to ${task.endDate}</p>`;
        taskList.appendChild(newTask);
    });
}
