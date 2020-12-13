import React from 'react';
import styled from 'styled-components';

import Task from './../../../GlobalComponents/container/TaskConnect.jsx';

const TasksOuterContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const TasksContainer = ( { tasks } ) => {
    console.log( 'TASKS CONTAINER', tasks )

    return (
        <TasksOuterContainer>
            { tasks === 'fetching' ? 
                <span>Loading...</span>
                :
                ( tasks.length ? 
                    tasks.slice(0, 3).map( ( task, i ) => {
                        return <Task key={ task._id } id={ task._id } name={ task.title } organization={ task.organization } description={ task.description } />
                    } )
                    : 
                    <span>Something went wrong</span>
                )
            }
        </TasksOuterContainer>
    )
}

export { TasksContainer }