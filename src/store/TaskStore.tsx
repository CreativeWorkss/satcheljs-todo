export interface TaskStore {
    task : Task
}


export interface Task {
    tasks: {
        taskId: number;
        value: string;
    }[];   
}


export const taskData : TaskStore = {   
        task : {
            tasks : []
        }   
};