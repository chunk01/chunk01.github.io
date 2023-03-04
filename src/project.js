import {format } from 'date-fns';

const projectList = [];

class Project {
    constructor(title) {
        this.title = title;
        this.todoList = [];
        this.date = format(new Date(), 'yyyy-MM-dd');
        projectList.push(this);
    }
}

Project.prototype.addTodo = function (todo) {
    this.todoList.push(todo);
};

export {Project, projectList};