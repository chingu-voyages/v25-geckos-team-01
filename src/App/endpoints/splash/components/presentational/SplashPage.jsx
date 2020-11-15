import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const SplashOuterContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SplashInnerContainer = styled.div`
    width: 90%;
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    span {
        padding: 30px;
    }

    input {
        width: 100%;
        padding: 10px;
    }
`;

const SplashPage = ( { searchTerm, setSearch, tasks } ) => {
    console.log( searchTerm )
    return (
        <SplashOuterContainer>
            <SplashInnerContainer>
                <span>Home Page Content Goes Here</span>
                <input onChange={ e => setSearch( e.target.value ) } />
            </SplashInnerContainer>
            
        </SplashOuterContainer>
    )
}

export { SplashPage }