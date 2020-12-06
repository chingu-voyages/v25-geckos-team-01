import React from 'react';
import styled from 'styled-components';

import { Task } from './../../../GlobalComponents/presentational/Task.jsx';

const TasksOuterContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const TasksContainer = ( { tasks } ) => {
    
    return (
        <TasksOuterContainer>
            { tasks.length ? 
                ( tasks.slice(0, 3).map( ( task, i ) => {
                    return <Task key={ 'task ' + i } name={ task.title } organization={ task.organization } description={ task.description } />
                } ) )
                :
                ''
            }
        </TasksOuterContainer>
    )
}

export { TasksContainer }