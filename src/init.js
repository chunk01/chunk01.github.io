const init = () => {
    //intialize header element
    let header = document.createElement("div");
    header.setAttribute("id", "header");
    let title = document.createElement("h1");
    title.setAttribute("id", "title");
    title.innerText = "Todo List";
    header.appendChild(title);

    //initalize content element
    let content = document.createElement("div");
    content.setAttribute("id", "content");

    //initialize dash element
    let dash = document.createElement("div");
    dash.setAttribute("id", "dash");
    let defaultProjects = document.createElement("div");
    defaultProjects.setAttribute("id", "default")
    let inbox = document.createElement("button");
    inbox.setAttribute("id", "inbox");
    inbox.innerText = "Inbox";
    inbox.classList.add("active");
    let day = document.createElement("button");
    day.setAttribute("id", "today");
    day.innerText = "Today";
    let week = document.createElement("button");
    week.setAttribute("id", "week");
    week.innerText = "This Week";

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
    addProject.innerText = "Add Project";
    dash.appendChild(customProjectHeader);
    dash.appendChild(customProjectList);
    dash.appendChild(addProject);
    let buttonHolderDash = document.createElement("div");
    buttonHolderDash.setAttribute("id", "buttonContainerDash");
    let add = document.createElement("button");
    add.setAttribute("id", "addProject");
    add.innerText = "Add";
    let cancel = document.createElement("button");
    cancel.setAttribute("id", "cancelProject");
    cancel.innerText = "Cancel";
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "projectNameInput");
    buttonHolderDash.appendChild(input);
    buttonHolderDash.appendChild(add);
    buttonHolderDash.appendChild(cancel);

    //add click event listener for add project button in dash
    addProject.addEventListener("click", function () {
        document.getElementById("addProject").style.visibility = "hidden";
        dash.appendChild(buttonHolderDash);
    })

    //add click event listener for add button in add project popup button
    add.addEventListener("click", function () {
        //TODO - insert project into list
    });

    //add click event listener for cancel button in add project popup button
    cancel.addEventListener("click", function () {
        document.getElementById("buttonContainerDash").style.visibility = "hidden";
        document.getElementById("addProject").style.visibility = "";
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

}

export {init};