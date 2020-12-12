import axios from 'axios';
import { 
    SET_TASKS,
    SET_SEARCH,
    SET_CURRENT_TASK,
    ADD_NEW_TASK,
    TASK_ERROR,
} from './types';
import setAuthToken from './../utils/setAuthToken';

// Load Tasks
export const loadTasks = () => async dispatch => {
    try {
        const res = await axios.get( '/splash' );
        console.log( 'LOAD TASKS SUCCESS', res );
        dispatch( {
            type: SET_TASKS,
            payload: res.data,
        } );
    } catch( err ) {
        console.log( 'splash', err )
    }
}

export const setSearch = ( searchTerm ) => {
    return {
        type: SET_SEARCH,
        payload: searchTerm
    }
}

export const setCurrentTask = ( taskId ) => {
    return {
        type: SET_CURRENT_TASK,
        payload: taskId
    }
}

// Add new task
export const addNewTask = ( { title, description, skillsRequired, location, taskEnd } ) => async dispatch => {
    if( localStorage.token ) {
        setAuthToken( localStorage.token );
    }

    const config = {
        headers: { 
            "authorization": `Bearer ${ localStorage.token && localStorage.token }`,
            "Access-Control-Allow-Origin": '*' }
    };

    const body = JSON.stringify( { title, description, skillsRequired, location, taskEnd } );

    console.log( 'BODY', body )

    try {
        const res = await axios.post( '/task/add/', body, config );
        console.log( 'ADD TASK SUCCESS', res );
        dispatch( {
            type: ADD_NEW_TASK,
            payload: res.data,
        } );
    } catch( err ) {
        console.log( 'ADD TASK FAIL', err.response );
        dispatch( {
            type: TASK_ERROR
        } );
    }
}
