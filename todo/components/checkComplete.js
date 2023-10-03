const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-square", "icon");
    i.addEventListener("click", completeTask);
    return i;

};

const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle("fa-check-square");
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("fa-square");

};

export default checkComplete;