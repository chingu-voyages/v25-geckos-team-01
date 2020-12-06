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
        dispatch( {
            type: AUTH_ERROR
        } );
    }
}


// Register User
export const register = ( { name, email, role, password, phoneNumber, description, tags, image } ) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify( { name, email, role, password, phoneNumber, description, tags, image } );

    try {
        const res = await axios.post( '/auth/register', body, config );
        dispatch( { 
            type: REGISTER_SUCCESS,
            payload: res.data
        } );
        dispatch( loadUser() );
    } catch( err ) {
        dispatch( {
            type: REGISTER_FAIL,
        } );
    }
}

// Edit User
export const editUser = ( { name, email, phoneNumber, description, tags } ) => async dispatch => {
    const config = {
        headers: { authorization: `Bearer ${ localStorage.token && localStorage.token }` }
    }

    const body = JSON.stringify( { name, email, phoneNumber, description, tags } );

    try {
        const res = await axios.put( '/account/', body, config );
        dispatch( { 
            type: EDIT_USER_SUCCESS,
            payload: res.data
        } );
    } catch( err ) {
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
        dispatch( { 
            type: LOGIN_SUCCESS,
            payload: res.data
        } );
        dispatch( loadUser() );
    } catch( err ) {
        dispatch( {
            type: LOGIN_FAIL,
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
        console.log(  res )
        dispatch( { type: DELETE_USER } );
    } catch( err ) {
        alert( 'ERROR' );
    }
}
