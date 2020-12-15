import axios from 'axios';
import { 
    SET_TASKS,
    SET_SEARCH,
    SET_CURRENT_TASK
} from './types';

// Load Tasks
export const loadTasks = () => async dispatch => {
    try {
        const res = await axios.get( `${process.env.REACT_APP_BE_URL}/splash` );
        console.log( 'LOAD TASKS SUCCESS', res.data );
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
