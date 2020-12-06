import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
} from './../actions/types';

function authReducer( auth = {
    token: localStorage.getItem( 'token' ),
    isAuthenticated: null,
    loading: true,
    user: null,
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
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem( 'token' );
            return {
                ...auth,
                token: null,
                isAuthenticated: false,
                loading: false, 
            }
        default:
            return auth;
    }
}

export { authReducer };