import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Task } from './../../../../../components/presentational/Task.jsx';

const TasksOuterContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const TasksContainer = ( { tasks, searchTerm } ) => {
    
    const searchedTasks = () => {
        let searched = [];
        tasks.map( task => {
            if ( task.name.toLowerCase().includes( searchTerm.toLowerCase() ) || task.organization.toLowerCase().includes( searchTerm.toLowerCase() ) ) {
                searched.push( task );
            };
        } );
        return searched;
    }
    
    return (
        <TasksOuterContainer>
            { searchedTasks().length ? 
                ( searchedTasks().map( ( task, i ) => {
                    return <Task key={ 'task ' + i } name={ task.name } organization={ task.organization } description={ task.description } />
                } ) )
                :
                <span>Sorry, no matching searches</span>
            }
        </TasksOuterContainer>
    )
}

export { TasksContainer }