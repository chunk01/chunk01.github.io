import {init} from "./init";
import {contentPopulate} from "./contentPopulate";
import {Project} from "./project";
import {displayTasksToday} from "./loadToday";
import {displayTasksWeek} from "./loadWeek";
import {saveData} from "./saveData";
import {loadData} from "./loadData";
import { projectList } from "./project";



init();
loadData();

if (JSON.parse(localStorage.getItem("Projects") == null)) {
    const inbox = new Project("Inbox");
} 

let inbox = projectList[0]
contentPopulate(inbox);


document.getElementById("inbox").addEventListener("click", function () {
    document.getElementById("inbox").classList.add("active");
    let customProjects = document.getElementById("customProjectList").childNodes;
    for(let i = 0; i < customProjects.length; i++) {
        if (customProjects[i] != document.getElementById("inbox")) {
            customProjects[i].classList.remove("active");
        }
    }

    let defaultProjects = document.getElementById("default").childNodes;
    for(let i = 0; i < defaultProjects.length; i++) {
        if (defaultProjects[i] != document.getElementById("inbox")) {
            defaultProjects[i].classList.remove("active");
        }
    }

    document.getElementById("project").innerHTML = "";
    contentPopulate(inbox);
});

document.getElementById("today").addEventListener("click", function () {
    document.getElementById("today").classList.add("active");
    let customProjects = document.getElementById("customProjectList").childNodes;
    for(let i = 0; i < customProjects.length; i++) {
        if (customProjects[i] != document.getElementById("today")) {
            customProjects[i].classList.remove("active");
        }
    }

    let defaultProjects = document.getElementById("default").childNodes;
    for(let i = 0; i < defaultProjects.length; i++) {
        if (defaultProjects[i] != document.getElementById("today")) {
            defaultProjects[i].classList.remove("active");
        }
    }

    document.getElementById("project").innerHTML = "";
    displayTasksToday();
});

document.getElementById("week").addEventListener("click", function () {
    document.getElementById("week").classList.add("active");
    let customProjects = document.getElementById("customProjectList").childNodes;
    for(let i = 0; i < customProjects.length; i++) {
        if (customProjects[i] != document.getElementById("week")) {
            customProjects[i].classList.remove("active");
        }
    }

    let defaultProjects = document.getElementById("default").childNodes;
    for(let i = 0; i < defaultProjects.length; i++) {
        if (defaultProjects[i] != document.getElementById("week")) {
            defaultProjects[i].classList.remove("active");
        }
    }

    document.getElementById("project").innerHTML = "";
    displayTasksWeek();
});
