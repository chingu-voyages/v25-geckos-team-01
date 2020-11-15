import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import TasksContainer from './../container/TasksContainerConnect.jsx';
import { SplashSectionOne } from './SplashSectionOne.jsx';

const SplashOuterContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const SplashInnerContainer = styled.div`
    width: 90%;
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
    
    span {
        padding: 30px;
    }

    input {
        width: 100%;
        max-width: 500px;
        border-radius: 5px;
        outline: none;
        padding: 10px;
        border: 1px solid black;
    }
`;

const SplashPage = ( { searchTerm, setSearch } ) => {
    console.log( searchTerm )
    return (
        <SplashOuterContainer>
            <SplashSectionOne />
            <SplashInnerContainer>
                <input onChange={ e => setSearch( e.target.value ) } />
                <TasksContainer  />
            </SplashInnerContainer>
        </SplashOuterContainer>
    )
}

export { SplashPage }