import { 
    SET_TASKS,
    REMOVE_TASK,
    SET_SEARCH,
    SET_CURRENT_TASK,
} from './../actions/types';

function updateObject( oldObject, newValues ) {
    return Object.assign( {}, oldObject, newValues );
};

function tasksReducer( tasks = { search: '',  tasksList: 'fetching', currentTask: null }, action ) {
    const { type, payload } = action;
    switch( type ) {
        case SET_TASKS:
            tasks = updateObject( tasks, { tasksList: payload.data } );
            return tasks;
        case REMOVE_TASK:
            return tasks.filter( task => task.id !== payload );
        case SET_SEARCH:
            tasks = updateObject( tasks, {  search: payload } );
            return tasks;
        case SET_CURRENT_TASK:
            tasks = updateObject( tasks, {  currentTask: payload } );
            return tasks;
        default:
            return tasks;
    }
}

export { tasksReducer };