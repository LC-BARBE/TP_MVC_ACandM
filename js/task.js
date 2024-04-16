class Task {
    constructor(id, description, completed = false) {
        this.id = id;
        this.description = description;
        this.completed = completed;
    }

    complete() {
        this.completed = true;
    }

    uncomplete() {
        this.completed = false;
    }

    isCompleted() {
        return this.completed;
    }

    setDescription(description) {
        this.description = description;
    }
}