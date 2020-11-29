import { ADD_TASK, REMOVE_TASK } from '../actions/types';

function tasksReducer( tasks = [ 
    // {
    //     name: 'Test Task 1',
    //     organization: 'Test Org 1',
    //     description: 'This is the task description',
    // },
], action ) {
    const { type, payload } = action 
    switch( type ) {
        case ADD_TASK:
            return [ ...tasks, payload ];
        case REMOVE_TASK:
            return tasks.filter( task => task.id !== payload );
        default:
            return tasks;
    }
}

export { tasksReducer }