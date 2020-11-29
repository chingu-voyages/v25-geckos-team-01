import axios from 'axios';
import { 
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
} from '../../../../actions/types';
import setAuthToken from './../../../../utils/setAuthToken';

// Load User
export const loadUser = () => async dispatch => {
    if( localStorage.token ) {
        setAuthToken( localStorage.token );
    }

    const config = {
        headers: { authorization: `Bearer ${ localStorage.token }` }
    };

    try {
        const res = await axios.get( '/account', config );
        console.log( 'AUTH', res )
        dispatch( {
            type: USER_LOADED,
            payload: res.data,
        } );
    } catch( err ) {
        console.log( 'AUTH', err )
        dispatch( {
            type: AUTH_ERROR
        } );
    }
}


// Register User
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