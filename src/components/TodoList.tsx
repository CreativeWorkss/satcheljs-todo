import * as React from 'react';
import { observer } from 'mobx-react';
import getStore from '../store/store';
import { addTask , removeTask} from '../actions/task';

import './TodoList.css';


export default observer(function TodoList() {
    const store = getStore();
    
    return (
            <ul>
            {store.task.tasks.map(item => {
                const book = store.task.tasks[item.taskId];
                return  (
                    <div key={item.taskId}  >
                          
                         <strong>{item.value}</strong>
                        <button
                            onClick={e => {
                                removeTask(item.taskId);
                                e.preventDefault();
                            }}>
                            Remove
                        </button>
                        
                    </div>
                );
            })}
        </ul>
           
    );
});
