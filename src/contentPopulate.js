const contentPopulate = (contentHeader) => {
    let head = document.createElement("h2");
    head.setAttribute("id", "projectHeader");
    head.innerText = contentHeader;

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
        //insert task into list
    });

    cancel.addEventListener("click", function () {
        //make add popup disappear
    });

    addBtn.addEventListener("click", function () {
        document.getElementById("homeAddBtn").style.visibility = "hidden";
        document.getElementById("project").appendChild(addPopup);
    });

    document.getElementById("project").appendChild(head);
    document.getElementById("project").appendChild(itemList);
    document.getElementById("project").appendChild(addBtn);
}

export {contentPopulate};