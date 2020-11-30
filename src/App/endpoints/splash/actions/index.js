const setSearch = ( searchTerm ) => {
    return {
        type: 'SET_SEARCH',
        data: searchTerm
    }
}

export { setSearch, }