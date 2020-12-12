import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import TasksContainer from './../container/TasksContainerConnect.jsx';

const SectionThreeContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SectionThreeInnerContainer = styled.div`
    width: 90%;
    max-width: 1100px;
    padding-bottom: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    h2 {
        padding-bottom:  20px;
    }

    input {
        width: 100%;
        max-width: 500px;
        border-radius: 5px;
        outline: none;
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid black;
    }
    
    button {
        background: #3C1874;
        color:  white;
        text-transform: uppercase;
        letter-spacing: 2px;
        padding: 20px 30px;
        border-radius: 8px;
        outline: none;
        border: none;
        margin: 10px; 0;
        cursor: pointer;
    }
`;

const SplashSectionThree = () => {
    return (
        <SectionThreeContainer>
            <SectionThreeInnerContainer>
                <h2>Search For Tasks</h2>
                <TasksContainer  />
                <Link to='/tasks'>
                    <button>Browse more tasks</button>
                </Link>
            </SectionThreeInnerContainer>
        </SectionThreeContainer>
    )
}

export { SplashSectionThree }