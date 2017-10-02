const todoItems = require("./todo");
const connection = require("./mongoConnection");
let firstId;

async function completeAllTask(alltask) {
    for (let i = 0; i < alltask.length; i++) {
        await todoItems.completeTask(alltask[i]._id).catch((error) => {
            console.log(error);
        });
    }
}

const main = async() => {
    const createTask = await todoItems.createTask("Ponder Dinosaurs", "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?").then((task) => {
        firstId = task._id;
        return todoItems.createTask("Play Pokemon with Twitch TV", "Should we revive Helix?")
    }).then((task) => {
        return todoItems.getAllTasks();
    }).then((task) => {
        console.log(task);
        console.log("start removing the task\n");
        return todoItems.removeTask(firstId);
    }).then(() => {
        console.log('Removed the First Task and the remaining taks is \n');
        return todoItems.getAllTasks();
    }).then((task) => {
        console.log(task);
        return completeAllTask(task);
    }).then((task) => {
        console.log("Compeleting the remaining task");
        return todoItems.getAllTasks();
    }).then((task) => {
        console.log(task);
    }).catch((error) => {
        console.log(error);
    });

    const db = await connection();
    // To TA : If you want to remove my database from your MongoDB, please uncomment the below statement
    // await db.dropCollection('Pintaigao_He_lab4');
    db.close();
}

main();