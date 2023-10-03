import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
    evento.preventDefault(); //evita que se recargue la pagina
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    const taskContent = document.createElement("div");
    const titleTask = document.createElement("span");

    task.classList.add("card");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
    input.value = "";

};

btn.addEventListener("click", createTask);