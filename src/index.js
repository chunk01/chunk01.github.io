import {init} from "./init";
import {contentPopulate} from "./contentPopulate";
import {Project} from "./project";

init();
const inbox = new Project("Inbox");
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
