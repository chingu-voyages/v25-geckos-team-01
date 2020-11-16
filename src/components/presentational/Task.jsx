import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const TaskContainer = styled.div`
    padding: 20px;
    width: 300px;
    border: 1px solid black;
    margin: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .description {
        margin: 10px;
    }
`;

const Task = ( { name, organization, description } ) => {
    return (
        <TaskContainer>
            <h4>{ name }</h4>
            <p>{ organization }</p>
            <p className="description">{ description }</p>
        </TaskContainer>
    )
}

export { Task }