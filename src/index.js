import {init} from "./init";

init();

document.getElementById("inbox").addEventListener("click", function () {
    contentPopulate("Inbox");
});

document.getElementById("today").addEventListener("click", function () {
    contentPopulate("Today");
});

document.getElementById("week").addEventListener("click", function () {
    contentPopulate("This Week");
});
