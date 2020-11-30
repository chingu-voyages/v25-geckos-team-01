import axios from 'axios';
import { 
    SET_TASKS
} from '../../../../actions/types';

// Load Tasks
export const loadTasks = () => async dispatch => {
    try {
        const res = await axios.get( '/splash' );
        // console.log( 'splash', res )
        dispatch( {
            type: SET_TASKS,
            payload: res.data,
        } );
    } catch( err ) {
        console.log( 'splash', err )
    }
}