import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const TaskContainer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2.5rem;
    background-color: rgba(231,231,244,0.7);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Task = () => {
    return (
        <TaskContainer>
            Task
        </TaskContainer>
    )
}

export { Task }