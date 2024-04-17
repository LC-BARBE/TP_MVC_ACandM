
/**
 * @typedef {Object} Task
 * @property {number} id - task id
 * @property {string} description - task description
 */
export class Task {

    constructor(id, description, completed = false) {
        this._id = id;
        this._description = description;
        this._completed = completed;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    complete() {
        this._completed = true;
    }

    uncomplete() {
        this._completed = false;
    }

    isCompleted() {
        return this._completed;
    }

}