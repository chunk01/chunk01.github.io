import {format } from 'date-fns';
import { projectList } from "./project";

const displayTasksToday = () => {
    let head = document.createElement("h2");
    head.setAttribute("id", "projectHeader");
    head.innerText = "Today";

    //initalize todo list element that will store all todo items
    let itemList = document.createElement("div");
    itemList.setAttribute("id", "itemList");

    document.getElementById("project").appendChild(head);
    document.getElementById("project").appendChild(itemList);

    let today = format(new Date(), 'yyyy-MM-dd');
    console.log(today)
    for (let i = 0; i < projectList.length; i++) {
        for(let j = 0; j < projectList[i].todoList.length; j++) {
            if(projectList[i].todoList[j].date == today) {
                    let newTask = document.createElement("div");
                    newTask.setAttribute("id", projectList[i].todoList[j].title);
                    newTask.classList.add("todo");

                    let taskLeft = document.createElement("div");
                    taskLeft.setAttribute("id", "left");

                    let taskRight = document.createElement("div");
                    taskRight.setAttribute("id", "right");

                    let checkDiv = document.createElement("div");
                    checkDiv.setAttribute("id", "checkdiv-" + projectList[i].todoList[j].title);
                    checkDiv.classList.add("todo-check");

                    let title = document.createElement("p");
                    title.setAttribute("id", "title-" + projectList[i].todoList[j].title);
                    title.innerText = projectList[i].todoList[j].title;
                    title.classList.add("todo-title");

                    let date = document.createElement("p");
                    date.setAttribute("id", "date-" + projectList[i].todoList[j].title);
                    date.classList.add("todo-date");
                    date.innerText = projectList[i].todoList[j].date;

                    let deleteBtn = document.createElement("button");
                    deleteBtn.setAttribute("id", "delete-" + projectList[i].todoList[j].title);
                    deleteBtn.classList.add("todo-delete");
                    deleteBtn.innerText = "X";

                    deleteBtn.addEventListener("click", function () {
                        let name = deleteBtn.id.split("-")[1];
                        projectList.forEach((project) => {
                                for (let i = 0; i < project.todoList.length; i++) {
                                    if (project.todoList[i].title == name) {
                                        project.todoList.splice(i, 1);
                                    }
                                }
                        })
                        console.log(projectList[0].todoList)
                        deleteBtn.parentNode.parentNode.remove();
                    });
                    taskLeft.appendChild(checkDiv)
                    taskLeft.appendChild(title)
                    taskRight.appendChild(date)
                    taskRight.appendChild(deleteBtn)
                    newTask.appendChild(taskLeft);
                    newTask.appendChild(taskRight);
                    itemList.appendChild(newTask);
            }
        }
    }
}

export {displayTasksToday};