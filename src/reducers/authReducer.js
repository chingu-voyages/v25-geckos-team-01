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
} from './../actions/types';

function authReducer( auth = {
    token: localStorage.getItem( 'token' ),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
}, action ) {
    const { type, payload } = action;
    switch( type ) {
        case USER_LOADED:
            console.log( 'USER LOADED', payload)
            return {
                ...auth,
                isAuthenticated: true,
                loading: false,
                user: payload.data,
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem( 'token', payload.data.token );
            return {
                ...auth,
                token: payload.data.token,
                isAuthenticated: true,
                loading: false,
                user: payload.data,
            }
        case EDIT_USER_SUCCESS:
            return  {
                ...auth,
                user: payload.data,
            }
        case EDIT_USER_FAIL:
            return {
                ...auth,
                error: payload.msg,
            }
        case LOGIN_FAIL:
            localStorage.removeItem( 'token' );
            return {
                ...auth,
                token: null,
                isAuthenticated: false,
                loading: false,
                error: payload.msg,
            } 
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
        case DELETE_USER:
            localStorage.removeItem( 'token' );
            return {
                ...auth,
                token: null,
                isAuthenticated: false,
                loading: false, 
            }
        case RESET_ERROR:
            return  {
                ...auth,
                error: null,
            }
        default:
            return auth;
    }
}

export { authReducer };