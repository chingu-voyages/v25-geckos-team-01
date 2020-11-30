import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const TasksContainer = styled.div`

`;

const Tasks = ( { auth } ) => {  
    console.log( auth ) 
    return (
        <TasksContainer>
            Tasks
        </TasksContainer>
    )
}

export { Tasks }