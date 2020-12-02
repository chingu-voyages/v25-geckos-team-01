import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Task } from  './../../../../../components/presentational/Task.jsx';
import { Search } from './Search.jsx';

const TasksContainer = styled.div`
`;

const Tasks = ( { tasks, loadTasks, setSearch, search } ) => { 

    useEffect( () => {
        loadTasks();
    }, [] );

    const searchedTasks = () => {
        let searched = [];
        tasks.map( task => {
            if ( task.title && task.title.toLowerCase().includes( search.toLowerCase() ) ) {
                searched.push( task );
            };
        } );
        return searched;
    }

    return (
        <TasksContainer>
            <Search setSearch={ setSearch } />
            { tasks.length ?
                ( searchedTasks().map( task => {
                    return <Task key={ task._id } name={ task.title } organization={ 'test' } description={ task.description } />
                } ) )
                : ''
            }
        </TasksContainer>
    )
}

export { Tasks }