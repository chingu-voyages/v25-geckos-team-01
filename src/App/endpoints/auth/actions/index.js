import axios from 'axios';
import { 
    REGISTER_SUCCESS,
    REGISTER_FAIL,
} from '../../../../actions/types';

export const register = ( { name, password, email, phone, role } ) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify( { name, password, email, phone, role } );

    try {
        const res = await axios.post( '/auth/register', body, config );
        console.log( 'SUCCESS', res );
        dispatch( { 
            type: REGISTER_SUCCESS,
            payload: res.data
        } );
    } catch( err ) {
        console.log( 'FAIL', err )
        dispatch( {
            type: REGISTER_FAIL,
        } );
    }
}