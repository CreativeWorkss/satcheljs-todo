import { mutator } from 'satcheljs';
import getStore from '../store/store';

import { addTask , removeTask} from '../actions/task';

function findTask(taskId: number) {
    const store = getStore();
    let foundIndex: number | null = null;
    for (let index = 0; index < store.task.tasks.length; index++) {
        let item = store.task.tasks[index];
        if (item.taskId == taskId) {
            foundIndex = index;
            break;
        }
    }
    return foundIndex;
}


mutator( addTask , msg => {
    const store = getStore()
    store.task.tasks.push({
        taskId : Math.floor(Math.random()*1000),
        value : msg.task
    }) 

});


mutator( removeTask, msg => {
    const store = getStore();
    let foundIndex = findTask(msg.taskId);

    if (foundIndex !== null) {
    store.task.tasks.splice(foundIndex , 1); 
    }   
});