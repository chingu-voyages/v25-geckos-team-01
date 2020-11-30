import { 
    SET_TASKS,
    REMOVE_TASK,
} from '../../../../actions/types';

function tasksReducer( tasks = [], action ) {
    const { type, payload } = action;
    switch( type ) {
        case SET_TASKS:
            return payload;
        case REMOVE_TASK:
            return tasks.filter( task => task.id !== payload );
        default:
            return tasks;
    }
}

export { tasksReducer };