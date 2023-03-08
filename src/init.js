import { contentPopulate } from "./contentPopulate";
import { Project } from "./project";
import { projectList } from "./project";
import {saveData} from "./saveData";
import {loadData} from "./loadData";

const init = () => {
    //intialize header element
    let header = document.createElement("div");
    header.setAttribute("id", "header");
    let title = document.createElement("h1");
    title.setAttribute("id", "title");
    title.innerText = "Todo List";

    let label = document.createElement("label")
    label.classList.add("switch");
    let checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    let span = document.createElement("span");
    span.classList.add("slider-round");
    label.appendChild(checkBox);
    label.appendChild(span);

    let dropDown = document.createElement("img");
    dropDown.setAttribute("id", "dashBtn");
    dropDown.setAttribute("src", "./images/menu.svg");
    dropDown.classList.add("closed");
    
    dropDown.addEventListener("click", function () {
        if (document.getElementById("dashBtn").classList[0] == "closed") {
            document.getElementById("dashBtn").classList.remove("closed");
            document.getElementById("dashBtn").classList.add("open");
            document.getElementById("dash").style.display = "flex";
        } else {
            document.getElementById("dashBtn").classList.remove("open");
            document.getElementById("dashBtn").classList.add("closed");
            document.getElementById("dash").style.display = "none";
        }


        
    })

    let options = document.createElement("div");
    options.setAttribute("id", "optionsContainer");
    options.appendChild(label);
    options.appendChild(dropDown);

    header.appendChild(title);
    header.appendChild(options);
    

    checkBox.addEventListener("click", function () {
        if(checkBox.checked == true) {
            secondTheme();
            localStorage.setItem("theme-state", true);
        } else {
            header.classList.remove("pinkify");
            dash.classList.remove("pinkify");
            innerContent.classList.remove("pinkify");
            footer.classList.remove("pinkify");
            localStorage.setItem("theme-state", false);
        }
    })

    //initalize content element
    let content = document.createElement("div");
    content.setAttribute("id", "content");

    //initialize dash element
    let dash = document.createElement("div");
    dash.setAttribute("id", "dash");
    let defaultProjects = document.createElement("div");
    defaultProjects.setAttribute("id", "default")

    let inbox = document.createElement("div");
    inbox.setAttribute("id", "inbox");
    let inboxText = document.createElement("p");
    inboxText.innerText = "Inbox";
    let inboxImg = document.createElement("img");
    inboxImg.setAttribute("src", "./images/inbox.svg");
    inbox.appendChild(inboxImg);
    inbox.appendChild(inboxText);
    inbox.classList.add("active");

    let day = document.createElement("div");
    day.setAttribute("id", "today");
    let dayText = document.createElement("p");
    dayText.innerText = "Today";
    let todayImg = document.createElement("img");
    todayImg.setAttribute("src", "./images/today.svg");
    day.appendChild(todayImg);
    day.appendChild(dayText);

    let week = document.createElement("div");
    week.setAttribute("id", "week");
    let weekText = document.createElement("p");
    weekText.innerText = "This Week";
    let weekImg = document.createElement("img");
    weekImg.setAttribute("src", "./images/thisweek.svg");
    week.appendChild(weekImg);
    week.appendChild(weekText);

    //add event listener to default project inbox button that adds a class of active
    inbox.addEventListener("click", function () {
        //TODO - remove active class from all other projects
        inbox.classList.add("active");
    })

    //initalize default project and custom project sections in dash
    defaultProjects.appendChild(inbox);
    defaultProjects.appendChild(day);
    defaultProjects.appendChild(week);
    dash.appendChild(defaultProjects);
    let customProjectHeader = document.createElement("h2");
    customProjectHeader.innerText = "Projects";
    let customProjectList = document.createElement("div");
    customProjectList.setAttribute("id", "customProjectList");
    let addProject = document.createElement("button");
    addProject.setAttribute("id", "addProject");
    addProject.innerText = "+ Add Project";
    let customProjectHolder = document.createElement("div");
    customProjectHolder.setAttribute("id", "customProjectContainer")
    customProjectHolder.appendChild(customProjectHeader);
    customProjectHolder.appendChild(customProjectList);
    customProjectHolder.appendChild(addProject);
    dash.appendChild(customProjectHolder);
    let buttonHolderDash = document.createElement("div");
    buttonHolderDash.setAttribute("id", "buttonContainerDash");
    let innerButtonHolder = document.createElement("div");
    innerButtonHolder.setAttribute("id", "innerButtonContainer");
    let add = document.createElement("button");
    add.setAttribute("id", "newProject");
    add.innerText = "Add";
    let cancel = document.createElement("button");
    cancel.setAttribute("id", "cancelProject");
    cancel.innerText = "Cancel";
    innerButtonHolder.appendChild(add);
    innerButtonHolder.appendChild(cancel);
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "projectNameInput");
    input.setAttribute("maxlength", 15);
    buttonHolderDash.appendChild(input);
    buttonHolderDash.appendChild(innerButtonHolder);

    //add click event listener for add project button in dash
    addProject.addEventListener("click", function () {
        document.getElementById("addProject").style.display = "none";
        dash.appendChild(buttonHolderDash);
        document.getElementById("buttonContainerDash").style.display = "flex";
        document.getElementById("projectNameInput").value = "";
    })

    //add click event listener for add button in add project popup button
    add.addEventListener("click", function () {
        //TODO - insert project into list
        let newProject = new Project(document.getElementById("projectNameInput").value);
        
        let newProjectDiv = document.createElement("div");
        newProjectDiv.setAttribute("id", "projects");

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
        title.innerText = document.getElementById("projectNameInput").value;
        let projectDelete = document.createElement("button");
        projectDelete.setAttribute("id", "projectDelete");
        projectDelete.innerText = "X";
        titleHolder.appendChild(title);
        deleteBtnHolder.appendChild(deleteBtn);
        newProjectDiv.appendChild(titleHolder);
        newProjectDiv.appendChild(deleteBtnHolder);
        customProjectList.appendChild(newProjectDiv);

        document.getElementById("buttonContainerDash").style.display = "none";
        document.getElementById("addProject").style.display = "flex";
    });


    //add click event listener for cancel button in add project popup button
    cancel.addEventListener("click", function () {
        document.getElementById("buttonContainerDash").style.display = "none";
        document.getElementById("addProject").style.display = "flex";
    });
    
    //initalize inner content element inside of main content element
    let innerContent = document.createElement("div");
    innerContent.setAttribute("id", "innerContent");
    content.appendChild(dash);
    content.appendChild(innerContent);

    //initalize project preview element inside of inner content
    let projectPreview = document.createElement("div");
    projectPreview.setAttribute("id", "project");
    innerContent.appendChild(projectPreview);

    //initalize footer element
    let footer = document.createElement("div");
    footer.setAttribute("id", "footer");
    let footerContent = document.createElement("p");
    footerContent.setAttribute("id", "footerContent");
    footerContent.innerText = "Copyright © 2023 chunk01"
    footer.appendChild(footerContent);

    //append main content to body
    document.body.appendChild(header);
    document.body.appendChild(content);
    document.body.appendChild(footer);

    checkBox.checked = JSON.parse(localStorage.getItem("theme-state"));
    if(checkBox.checked == true) {
        secondTheme();
    } else {
        header.classList.remove("pinkify");
        dash.classList.remove("pinkify");
        innerContent.classList.remove("pinkify");
        footer.classList.remove("pinkify");
    }

}

function secondTheme () {
    let header = document.getElementById("header");
    let dash = document.getElementById("dash");
    let innerContent = document.getElementById("innerContent");
    let footer = document.getElementById("footer");

    header.classList.add("pinkify");
    dash.classList.add("pinkify");
    innerContent.classList.add("pinkify");
    footer.classList.add("pinkify");
}

export {init};