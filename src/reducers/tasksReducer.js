import { 
    SET_TASKS,
    REMOVE_TASK,
    SET_SEARCH,
} from './../actions/types';

function updateObject( oldObject, newValues ) {
    return Object.assign( {}, oldObject, newValues );
};

function tasksReducer( tasks = { search: '',  tasksList: [] }, action ) {
    const { type, payload } = action;
    switch( type ) {
        case SET_TASKS:
            tasks = updateObject( tasks, { tasksList: payload } );
            return tasks;
        case REMOVE_TASK:
            return tasks.filter( task => task.id !== payload );
        case SET_SEARCH:
            tasks = updateObject( tasks, {  search: payload } );
            return tasks;
        default:
            return tasks;
    }
}

export { tasksReducer };