const init = () => {
    let header = document.createElement("div");
    header.setAttribute("id", "header");
    let title = document.createElement("h1");
    title.setAttribute("id", "title");
    title.innerText = "Todo List";
    header.appendChild(title);

    let content = document.createElement("div");
    content.setAttribute("id", "content");

    let dash = document.createElement("div");
    dash.setAttribute("id", "dash");
    let defaultProjects = document.createElement("div");
    defaultProjects.setAttribute("id", "default")
    let inbox = document.createElement("button");
    inbox.setAttribute("id", "inbox");
    inbox.innerText = "Inbox";
    let day = document.createElement("button");
    day.setAttribute("id", "today");
    day.innerText = "Today";
    let week = document.createElement("button");
    week.setAttribute("id", "week");
    week.innerText = "This Week";
    defaultProjects.appendChild(inbox);
    defaultProjects.appendChild(day);
    defaultProjects.appendChild(week);
    dash.appendChild(defaultProjects);

    let innerContent = document.createElement("div");
    innerContent.setAttribute("id", "innerContent");
    content.appendChild(dash);
    content.appendChild(innerContent);

    let projectPreview = document.createElement("div");
    projectPreview.setAttribute("id", "project");
    innerContent.appendChild(projectPreview);

    let footer = document.createElement("div");
    footer.setAttribute("id", "footer");
    let footerContent = document.createElement("p");
    footerContent.setAttribute("id", "footerContent");
    footerContent.innerText = "Copyright © 2023 chunk01"
    footer.appendChild(footerContent);

    document.body.appendChild(header);
    document.body.appendChild(content);
    document.body.appendChild(footer);

}

export {init};