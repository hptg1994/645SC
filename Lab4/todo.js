const mongoCollections = require("./mongoCollections");
const todoItems  = mongoCollections.TodoItem;
const uuidv1 = require('uuid/v1');

module.exports = {
    async createTask(title, description) {
        if (!title) throw "You must provide a title";
        if (!description) throw "You must provide the description for your task";

        const TaskCollection = await todoItems();

        let newTaks = {
            _id: uuidv1(),
            title: title,
            description: description,
            completed: false,
            completedAt: null
        };

        const insertInfo = await TaskCollection.insertOne(newTaks);

        if (insertInfo.insertedCount === 0) throw "Could not add Task";

        const newId = insertInfo.insertedId;

        const task = await this.getTask(newId)
        return task;
    },

    async getAllTasks() {
        const AllTasks = await todoItems();
        const tasks = await AllTasks.find({}).toArray();
        return tasks;
    },

    async getTask(id) {
        if (!id) throw "You must provide an id to search for";
        const TaskCollection = await todoItems();
        const task = await TaskCollection.findOne({
            _id: id
        });
        if (task == null) throw "No task with that id";
        return task;
    },

    async completeTask(taskId) {
        if(!taskId) throw "You must provide a taskId to complete task";
        const TaskCollection = await todoItems();
        let currentTime = (new Date()).toLocaleDateString();
        const updateTask = {
            completed: true,
            completedAt: new Date().getTime()
        };
        const updateInfo = await TaskCollection.updateOne({
            _id: taskId,
            completed: false
        }, {
            $set: {
                completed: true,
                completedAt: currentTime
            }
        });
        if (updateInfo.modifiedCount === 0) {
            throw "Could not update task successfully";
        }
        return await this.getTask(taskId);
    },

    async removeTask(id) {
        if (!id) throw "You must provide an id to search for";

        const TaskCollection = await todoItems();
        const deleteTask = await TaskCollection.removeOne({
            _id: id
        });
        if (deleteTask.deletedCount === 0){
            throw `Could not delete task with id of ${id}`;
        }
    }

}