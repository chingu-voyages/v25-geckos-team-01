import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
} from '../../../../actions/types';

function authReducer( auth = {
    token: localStorage.getItem( 'token' ),
    isAuthenticated: null,
    loading: true,
    user: null,
}, action ) {
    const { type, payload } = action;
    switch( type ) {
        case USER_LOADED:
            return {
                ...auth,
                isAuthenticated: true,
                loading: false,
                user: payload,
            }
        case REGISTER_SUCCESS:
            localStorage.setItem( 'token', payload.data.token );
            return {
                ...auth,
                ...payload.data.token,
                isAuthenticated: true,
                loading: false,
            }
        case REGISTER_FAIL:
        case AUTH_ERROR:
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