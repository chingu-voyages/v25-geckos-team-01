import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Task } from  './../../../../../components/presentational/Task.jsx';

const TasksContainer = styled.div`

`;

const Tasks = ( { tasks, loadTasks } ) => { 

    useEffect( () => {
        loadTasks();
    }, [] );

    console.log( 'tasks', tasks );

    return (
        <TasksContainer>
            { tasks.length ?
                ( tasks.map( task => {
                    return <Task key={ task._id } name={ task.title } organization={ 'test' } description={ task.description } />
                } ) )
                : ''
            }
        </TasksContainer>
    )
}

export { Tasks }