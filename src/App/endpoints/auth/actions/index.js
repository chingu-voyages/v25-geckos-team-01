import axios from 'axios';
import { 
    REGISTER_SUCCESS,
    REGISTER_FAIL,
} from '../../../../actions/types';

export const register = ( { name, email, role, password, phoneNumber, description, tags, image } ) => async dispatch => {
    console.log( 'REGISTER' )
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify( { name, email, role, password, phoneNumber, description, tags, image } );

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