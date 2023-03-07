import { contentPopulate } from "./contentPopulate";

const saveData = (projectList) => {
    localStorage.setItem("Projects", JSON.stringify(projectList));
    console.log(localStorage.getItem("Projects"))
}

export {saveData};