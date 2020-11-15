const setSearch = ( searchTerm ) => {
    console.log( 'SEARCH' );
    return {
        type: 'SET_SEARCH',
        data: searchTerm
    }
}

export { setSearch, }