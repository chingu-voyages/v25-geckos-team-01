function updateObject( oldObject, newValues ) {
    return Object.assign( {}, oldObject, newValues );
};

function splashReducer( splash = { search: '', }, action ) {
    let newSplash = splash;
    switch( action.type ) {
        case 'SET_SEARCH':
            splash = updateObject( splash, { search: action.data } );
        default: return splash;
    }
}

export { splashReducer }