import { createStore } from 'satcheljs';
import { TaskStore, taskData } from './TaskStore';

import '../mutators/tasks';

export default createStore<TaskStore>('TaskStore', taskData);
