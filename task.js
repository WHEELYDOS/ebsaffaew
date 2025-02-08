document.addEventListener("DOMContentLoaded", () => {
    const tasks = document.querySelectorAll(".task");
    const columns = document.querySelectorAll(".task-column");

    tasks.forEach(task => {
        task.addEventListener("dragstart", dragStart);
        task.addEventListener("dragend", dragEnd);
    });

    columns.forEach(column => {
        column.addEventListener("dragover", dragOver);
        column.addEventListener("drop", drop);
    });

    updateProgress();
});

function dragStart(e) {
    e.target.classList.add("dragging");
    e.dataTransfer.setData("text/plain", e.target.id);
}

function dragEnd(e) {
    e.target.classList.remove("dragging");
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    const draggedTask = document.querySelector(".dragging");
    e.target.closest(".task-column").appendChild(draggedTask);
    updateProgress();
}

function updateProgress() {
    const totalTasks = document.querySelectorAll(".task").length;
    const completedTasks = document.querySelector("#completed").childElementCount - 1;
    const progress = document.querySelector("#progress");

    let percentage = (completedTasks / totalTasks) * 100;
    progress.style.width = `${percentage}%`;
}