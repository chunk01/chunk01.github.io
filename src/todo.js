//Todo class that creates Todo items to be stored in Project object's todo array

import {format } from 'date-fns';

class Todo {
    constructor(title) {
        this.title = title;
        this.date = format(new Date(), 'yyyy-MM-dd');
    }
}

export {Todo};