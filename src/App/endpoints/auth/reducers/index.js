import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
} from '../../../../actions/types';

function authReducer( auth = {
    token: localStorage.getItem( 'token' ),
    isAuthenticated: null,
    loading: true,
    user: null,
}, action ) {
    const { type, payload } = action;
    switch( type ) {
        case REGISTER_SUCCESS:
            localStorage.setItem( 'token', payload.data.token );
            return {
                ...auth,
                ...payload.data.token,
                isAuthenticated: true,
                loading: false,
            }
        case REGISTER_FAIL:
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