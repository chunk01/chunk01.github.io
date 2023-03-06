import {projectList} from "./project";
import {Todo} from "./todo";
import {loadProjectData} from "./loadProjectData";

//function that populates the project content with the correct project todo items
const contentPopulate = (project) => {
    //store which project has been clicked
    let projectName = document.getElementsByClassName("active")[0].childNodes[0].innerText;
    //console.log(projectName)
    //initalize project title header
    let head = document.createElement("h2");
    head.setAttribute("id", "projectHeader");
    head.innerText = project.title;

    //initalize todo list element that will store all todo items
    let itemList = document.createElement("div");
    itemList.setAttribute("id", "itemList");

    //initalize add button that allows new todo insertion into DOM and corresponding project object
    let addBtn = document.createElement("button");
    addBtn.setAttribute("id", "homeAddBtn");
    addBtn.innerText = "+ Add Task";

    //initalize popup area that takes input for new todo item after pressing add button
    let addPopup = document.createElement("div");
    addPopup.setAttribute("id", "addPopup");
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "taskNameInput");
    addPopup.appendChild(input);
    let buttonHolder = document.createElement("div");
    buttonHolder.setAttribute("id", "buttonContainer");
    let add = document.createElement("button");
    add.setAttribute("id", "addTask");
    add.innerText = "Add";
    let cancel = document.createElement("button");
    cancel.setAttribute("id", "cancel");
    cancel.innerText = "Cancel";
    buttonHolder.appendChild(add);
    buttonHolder.appendChild(cancel);
    addPopup.appendChild(buttonHolder);

    //add event listener to add button in popup that appends new todo to itemList and pushs to correct project object's todo list array
    add.addEventListener("click", function () {
        for(let i = 0; i < projectList.length; i++) {
            console.log(projectList[i].title)
            console.log(projectName)
            if (projectList[i].title == projectName) {
                projectList[i].todoList.push(new Todo(document.getElementById("taskNameInput").value));
                document.getElementById("itemList").innerHTML = ""
                for(let j = 0; j < projectList[i].todoList.length; j++) {
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
                        console.log(projectName)
                        projectList.forEach((project) => {
                            if (project.title == projectName) {
                                for (let i = 0; i < project.todoList.length; i++) {
                                    if (project.todoList[i].title == name) {
                                        project.todoList.splice(i, 1);
                                    }
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
        document.getElementById("addPopup").style.visibility = "hidden";
        document.getElementById("homeAddBtn").style.visibility = "";
    });

    //add event listener to cancel button in popup that cancels new todo creation
    cancel.addEventListener("click", function () {
        document.getElementById("addPopup").style.visibility = "hidden";
        document.getElementById("homeAddBtn").style.visibility = "";
    });

    //add event listener to initial todo add button to show add pop up
    addBtn.addEventListener("click", function () {
        document.getElementById("homeAddBtn").style.visibility = "hidden";
        document.getElementById("project").appendChild(addPopup);
        document.getElementById("addPopup").style.visibility = "";
    });

    //add main project content to project div
    document.getElementById("project").appendChild(head);
    document.getElementById("project").appendChild(itemList);
    document.getElementById("project").appendChild(addBtn);

    for(let i = 0; i < projectList.length; i++) {
        if (projectList[i].title == projectName) {
            document.getElementById("itemList").innerHTML = ""
            for(let j = 0; j < projectList[i].todoList.length; j++) {
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
                    console.log(projectName)
                    projectList.forEach((project) => {
                        if (project.title == projectName) {
                            for (let i = 0; i < project.todoList.length; i++) {
                                if (project.todoList[i].title == name) {
                                    project.todoList.splice(i, 1);
                                }
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

export {contentPopulate};