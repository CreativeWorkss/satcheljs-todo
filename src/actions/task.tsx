import { action } from 'satcheljs';
export let addTask = action('addTask', (task: string) => ({ task }));
export let removeTask = action('removeTask', (taskId: number) => ({ taskId }));
