import { observable, action, computed, decorate } from 'mobx';

class Todo {
    list = [];
    title = '';

    get cnt () {
        return this.list.length;
    }

    get canAdd () {
        return this.title !== '';
    }

    setTitle (title) {
        this.title = title;
    }

    addTask = () => {
        this.list.push({value: this.title});
        this.title = '';
    }

    removeTask (i) {
        this.list.splice(i, 1);
    }
}

decorate(Todo, {
    list: observable,
    title: observable,
    cnt: computed,
    canAdd: computed,
    setTitle: action,
    addTask: action,
    removeTask: action
});

export default new Todo()