function updateObject( oldObject, newValues ) {
    return Object.assign( {}, oldObject, newValues );
};

function loginReducer( login = {}, action ) {
    return login;
}

export { loginReducer }