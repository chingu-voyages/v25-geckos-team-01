import axios from 'axios';
import { 
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    DELETE_USER,
    EDIT_USER_SUCCESS,
    EDIT_USER_FAIL,
    RESET_ERROR,
    SET_ERROR,
} from './types';
import setAuthToken from './../utils/setAuthToken';

// Load User
export const loadUser = () => async dispatch => {
    if( localStorage.token ) {
        setAuthToken( localStorage.token );
    }

    const config = {
        headers: { authorization: `Bearer ${ localStorage.token && localStorage.token }` }
    };

    try {
        const res = await axios.get( '/account/', config );
        dispatch( {
            type: USER_LOADED,
            payload: res.data,
        } );
    } catch( err ) {
        console.log( 'LOAD USER FAIL', err.response );
        dispatch( {
            type: AUTH_ERROR
        } );
    }
}


// Register User
export const register = ( { name, email, role, password, phoneNumber, description, tags, image } ) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
    }

    const body = JSON.stringify( { name, email, role, password, phoneNumber, description, tags, image } );

    try {
        const res = await axios.post( '/auth/register', body, config );
        console.log( 'REGISTER SUCCESS', res.data )
        dispatch( { 
            type: REGISTER_SUCCESS,
            payload: res.data
        } );
        dispatch( {
            type: RESET_ERROR,
        } );
        dispatch( loadUser() );
    } catch( err ) {
        console.log( 'REGISTER FAIL', err.response );
        dispatch( {
            type: SET_ERROR,
            payload: err.response.data[ 'Errors' ]
        } )
        dispatch( {
            type: REGISTER_FAIL,
        } );
    }
}

// Edit User
export const editUser = ( { name, email, description, tags } ) => async dispatch => {
    const config = {
        headers: { authorization: `Bearer ${ localStorage.token && localStorage.token }` }
    }
    console.log( 'editUser', name, email, description, tags )
    const body = JSON.stringify( { name, email, description, tags } );

    try {
        const res = await axios.put( '/account/', body, config );
        console.log( 'EDIT SUCCESS', res )
        dispatch( { 
            type: EDIT_USER_SUCCESS,
            payload: res.data
        } );
        dispatch( {
            type: RESET_ERROR,
        } );
    } catch( err ) {
        console.log( 'EDIT FAIL', err.reponse );
        dispatch( {
            type: SET_ERROR,
            payload: err.response.data.Errors
        } )
        dispatch( {
            type: EDIT_USER_FAIL,
        } );
    }
}

// Login User
export const login = ( email, password ) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify( { email, password } );

    try {
        const res = await axios.post( '/auth/login', body, config );
        console.log( 'LOGIN SUCCESS', res.data )
        dispatch( { 
            type: LOGIN_SUCCESS,
            payload: res.data
        } );
        dispatch( {
            type: RESET_ERROR,
        } );
        dispatch( loadUser() );
    } catch( err ) {
        console.log( 'LOGIN FAIL', err.response )
        dispatch( {
            type: SET_ERROR,
            payload: err.response.data.Errors
        } )
        dispatch( {
            type: LOGIN_FAIL,
            payload: err.response.data.Errors[0],
        } );
    }
}


// Logout User / Clear Profile
export const logout = () => dispatch => {
    dispatch( { type: LOGOUT } );
}


// Delete User
export const deleteUser = () => async  dispatch => {
    const config = {
        headers: { authorization: `Bearer ${ localStorage.token && localStorage.token }` }
    };

    try {
        const res = await axios.delete( '/account/', config );
        console.log( 'DELETE USER', res )
        dispatch( { type: DELETE_USER } );
    } catch( err ) {
        alert( 'ERROR' );
    }
}

export const resetError = () => dispatch =>  {
    dispatch( { type: RESET_ERROR } );
}
