import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`

`;

const Search = ( { setSearch } ) => { 

    const [ searchTerm, setSearchTerm ] = useState( '' );

    return (
        <SearchContainer>
            <h2>Search For Projects</h2>

            {/* input is setting local state on change */}
            <input onChange={ e => setSearchTerm( e.target.value ) } />

            {/* setSearch is a redux action, but being passed from Tasks.jsx */}
            {/* searchTerm is local state being set from the input */}
            <button onClick={ () => setSearch( searchTerm ) }>Submit</button>
        </SearchContainer>
    )
}

export { Search }