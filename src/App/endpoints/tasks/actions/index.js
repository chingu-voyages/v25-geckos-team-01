import axios from 'axios';
import { 
    SET_TASKS,
    SET_SEARCH
} from '../../../../actions/types';

// Load Tasks
export const loadTasks = () => async dispatch => {
    try {
        const res = await axios.get( '/splash' );
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
        type: 'SET_SEARCH',
        payload: searchTerm
    }
}
