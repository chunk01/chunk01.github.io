import { projectList } from "./project";
import { saveData } from "./saveData";
import { contentPopulate } from "./contentPopulate";

const loadData = () => {
    if(localStorage.getItem("Projects") != undefined) {
        let projectListParse = JSON.parse(localStorage.getItem("Projects"));
        projectList.forEach(function (index) {
            projectList.splice(index, 1);
        })
        for(let i = 0; i < projectListParse.length; i++) {
            projectList.push(projectListParse[i]);
        }
        for(let i = 1; i < projectList.length; i++) {
            let newProject = projectList[i];
        
            let newProjectDiv = document.createElement("div");
            newProjectDiv.setAttribute("id", "projects");

            let projectImg = document.createElement("img");
            projectImg.setAttribute("src", "./images/project.svg");

            let titleHolder = document.createElement("div");
            titleHolder.setAttribute("id", "titleContainer");

            let deleteBtnHolder = document.createElement("div");
            deleteBtnHolder.setAttribute("id", "deleteButtonContainer");

            let deleteBtn = document.createElement("button");
            deleteBtn.setAttribute("id", "delete-" + newProject.title);
            deleteBtn.classList.add("project-delete");
            deleteBtn.innerText = "X";

            deleteBtn.addEventListener("click", function () {
                let name = deleteBtn.id.split("-")[1];
                projectList.forEach(function(project, index) {
                    if (project.title == name) {
                        projectList.splice(index, 1);
                        saveData(projectList);
                    }
                })
    
                if (document.getElementsByClassName("active")[0].childNodes[0].innerText == name) {
                    document.getElementById("inbox").classList.add("active");
                    document.getElementById("project").innerHTML = "";
                    contentPopulate(projectList[0])
                }
    
                deleteBtn.parentNode.parentNode.remove();
                
            });

            titleHolder.addEventListener("click", function () {
                newProjectDiv.classList.add("active");
                document.getElementById("inbox").classList.remove("active");
                let customProjects = document.getElementById("customProjectList").childNodes;
                for(let i = 0; i < customProjects.length; i++) {
                    if (customProjects[i] != newProjectDiv) {
                        customProjects[i].classList.remove("active");
                    }
                }
    
                let defaultProjects = document.getElementById("default").childNodes;
                 for(let i = 0; i < defaultProjects.length; i++) {
                    if (defaultProjects[i] != newProjectDiv) {
                        defaultProjects[i].classList.remove("active");
                    }
                }
    
                document.getElementById("project").innerHTML = "";
                contentPopulate(newProject);
            });

            let title = document.createElement("p");
            title.innerText = projectList[i].title;
            let projectDelete = document.createElement("button");
            projectDelete.setAttribute("id", "projectDelete");
            projectDelete.innerText = "X";
            titleHolder.appendChild(title);
            deleteBtnHolder.appendChild(deleteBtn);
            newProjectDiv.appendChild(projectImg);
            newProjectDiv.appendChild(titleHolder);
            newProjectDiv.appendChild(deleteBtnHolder);
            customProjectList.appendChild(newProjectDiv);

            

        }

        
        
        console.log(localStorage.getItem("Projects"))
    }
}

export {loadData};