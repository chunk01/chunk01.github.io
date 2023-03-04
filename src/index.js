import {init} from "./init";
import {contentPopulate} from "./contentPopulate";

init();
contentPopulate("Inbox");

document.getElementById("inbox").addEventListener("click", function () {
    document.getElementById("project").innerHTML = "";
    contentPopulate("Inbox");
});

document.getElementById("today").addEventListener("click", function () {
    document.getElementById("project").innerHTML = "";
    displayTasksToday();
});

document.getElementById("week").addEventListener("click", function () {
    document.getElementById("project").innerHTML = "";
    displayTasksWeek();
});
