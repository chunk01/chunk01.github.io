//Project class that creates Project items to contain corresponding Todo items and be stored in projectList
import { saveData } from "./saveData";
const projectList = [];

class Project {
    constructor(title) {
        this.title = title;
        this.todoList = [];
        projectList.push(this);
        saveData(projectList);
    }
}

Project.prototype.addTodo = function (todo) {
    this.todoList.push(todo);
};

Project.prototype.removeTodo = function (todo) {
    for(let i = 0; i < this.todoList.length; i++){
        if(this.todoList[i] == todo) {
            this.todoList.splice(i, 1);
        }
    }
};

export {Project, projectList};