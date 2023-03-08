import {format, getDay, getDate, setDate, parseISO} from 'date-fns';
import { projectList } from "./project";
import {saveData} from "./saveData";
import {loadData} from "./loadData";
const displayTasksWeek = () => {
    let head = document.createElement("h2");
    head.setAttribute("id", "projectHeader");
    head.innerText = "This Week";

    //initalize todo list element that will store all todo items
    let itemList = document.createElement("div");
    itemList.setAttribute("id", "itemList");

    document.getElementById("project").appendChild(head);
    document.getElementById("project").appendChild(itemList);

    const today = format(new Date(), 'yyyy-MM-dd');
    const todayDate = getDate(parseISO(today));
    const todayDay = getDay(parseISO(today));

    console.log(today);
    console.log(todayDate);
    console.log(todayDay);

    // get first date of week
    const firstDayOfWeek = new Date(setDate(parseISO(today), todayDate - todayDay));
    // get last date of week
    const lastDayOfWeek = new Date(firstDayOfWeek);
    lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 6);

    const firstDay = format(firstDayOfWeek, 'yyyy-MM-dd')
    const lastDay = format(lastDayOfWeek, 'yyyy-MM-dd');
    
    for (let i = 0; i < projectList.length; i++) {
        for(let j = 0; j < projectList[i].todoList.length; j++) {
            
            if(projectList[i].todoList[j].date >= firstDay && projectList[i].todoList[j].date <= lastDay) {
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
                    let img = document.createElement("img")
                    img.setAttribute("src", "./images/check.svg");
                    img.style.visibility = "hidden"
                    checkDiv.appendChild(img);

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
                                        saveData(projectList);
                                    }
                                }
                        })
                        console.log(projectList[0].todoList)
                        deleteBtn.parentNode.parentNode.remove();
                    });

                    checkDiv.addEventListener("click", function () {
                        let taskName = checkDiv.id.split("-")[1];
                        for(let i = 0; i < projectList.length; i++) {
                                for(let j = 0; j < projectList[i].todoList.length; j++) {
                                    if(projectList[i].todoList[j].title == taskName) {
                                        if (projectList[i].todoList[j].checked == false) {
                                            projectList[i].todoList[j].checked = true;
                                            let todo = document.getElementById(checkDiv.id);
                                            todo.childNodes[0].style.visibility = "";
                                            saveData(projectList)
                                        } else {
                                            projectList[i].todoList[j].checked = false;
                                            let todo = document.getElementById(checkDiv.id);
                                            todo.childNodes[0].style.visibility = "hidden";
                                            saveData(projectList)
                                        }
                                        saveData(projectList);
                                    }
                                }

                        }
                    });

                    taskLeft.appendChild(checkDiv)
                    taskLeft.appendChild(title)
                    taskRight.appendChild(date)
                    taskRight.appendChild(deleteBtn)
                    newTask.appendChild(taskLeft);
                    newTask.appendChild(taskRight);
                    itemList.appendChild(newTask);

                    let taskName = checkDiv.id.split("-")[1];
                    for(let i = 0; i < projectList.length; i++) {
                            for(let j = 0; j < projectList[i].todoList.length; j++) {
                                if(projectList[i].todoList[j].title == taskName) {
                                    if (projectList[i].todoList[j].checked == false) {
                                        let todo = document.getElementById(checkDiv.id);
                                        todo.childNodes[0].style.visibility = "hidden";
                                        saveData(projectList)
                                    } else {
                                        let todo = document.getElementById(checkDiv.id);
                                        todo.childNodes[0].style.visibility = "";
                                        saveData(projectList)
                                    }
                                    saveData(projectList);
                                }
                            }
                        
                    }
            }
        }
    } 
}

export {displayTasksWeek};