import {init} from "./init";
import {contentPopulate} from "./contentPopulate";
import {Project} from "./project";

//initalize page with basic todo list app structure
init();
//create default project named inbox
const inbox = new Project("Inbox");
//populate project div with inbox data
contentPopulate(inbox);

document.getElementById("inbox").addEventListener("click", function () {
    document.getElementById("project").innerHTML = "";
    contentPopulate(inbox);
});

document.getElementById("today").addEventListener("click", function () {
    document.getElementById("project").innerHTML = "";
    displayTasksToday();
});

document.getElementById("week").addEventListener("click", function () {
    document.getElementById("project").innerHTML = "";
    displayTasksWeek();
});
