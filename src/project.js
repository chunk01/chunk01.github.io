//Project class that creates Project items to contain corresponding Todo items and be stored in projectList

const projectList = [];

class Project {
    constructor(title) {
        this.title = title;
        this.todoList = [];
        projectList.push(this);
    }
}

Project.prototype.addTodo = function (todo) {
    this.todoList.push(todo);
};

export {Project, projectList};