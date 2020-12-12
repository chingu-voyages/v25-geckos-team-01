import { 
    SET_TASKS,
    REMOVE_TASK,
    SET_SEARCH,
    SET_CURRENT_TASK,
    ADD_NEW_TASK,
    TASK_ERROR,
} from './../actions/types';

function updateObject( oldObject, newValues ) {
    return Object.assign( {}, oldObject, newValues );
};

function tasksReducer( tasks = { search: '',  tasksList: 'fetching', currentTask: null, error: null }, action ) {
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
        case SET_CURRENT_TASK:
            tasks = updateObject( tasks, {  currentTask: payload } );
            return tasks;
        case ADD_NEW_TASK:
            return {
                ...tasks,
                tasksList: [ ...tasks.tasksList, payload ]
            }
        case TASK_ERROR:
            return {
                ...tasks,
                error: payload
            }
        default:
            return tasks;
    }
}

export { tasksReducer };