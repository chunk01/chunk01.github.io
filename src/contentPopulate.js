import {projectList} from "./project";
import {Todo} from "./todo";


const contentPopulate = (project) => {
    let projectName = document.getElementsByClassName("active")[0].innerText;
    let head = document.createElement("h2");
    head.setAttribute("id", "projectHeader");
    head.innerText = project.title;

    let itemList = document.createElement("div");
    itemList.setAttribute("id", "itemList");

    let addBtn = document.createElement("button");
    addBtn.setAttribute("id", "homeAddBtn");
    addBtn.innerText = "Add Task"

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

    add.addEventListener("click", function () {
        for(let i = 0; i < projectList.length; i++) {
            if (projectList[i].title == projectName) {
                projectList[i].todoList.push(new Todo(document.getElementById("taskNameInput").value));
                document.getElementById("itemList").innerHTML = ""
                for(let j = 0; j < projectList[i].todoList.length; j++) {
                    let newTask = document.createElement("button");
                    newTask.setAttribute("id", projectList[i].todoList[j].title);
                    newTask.innerText = projectList[i].todoList[j].title;
                    itemList.appendChild(newTask);
                }
            }
        }
        document.getElementById("addPopup").style.visibility = "hidden";
        document.getElementById("homeAddBtn").style.visibility = "";
    });

    cancel.addEventListener("click", function () {
        document.getElementById("addPopup").style.visibility = "hidden";
        document.getElementById("homeAddBtn").style.visibility = "";
    });

    addBtn.addEventListener("click", function () {
        document.getElementById("homeAddBtn").style.visibility = "hidden";
        document.getElementById("project").appendChild(addPopup);
        document.getElementById("addPopup").style.visibility = "";
    });

    document.getElementById("project").appendChild(head);
    document.getElementById("project").appendChild(itemList);
    document.getElementById("project").appendChild(addBtn);

    
}

export {contentPopulate};