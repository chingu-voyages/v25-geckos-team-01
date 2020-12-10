import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Task } from  './../../../GlobalComponents/presentational/Task.jsx';
import { Search } from './Search.jsx';

const TasksContainer = styled.div`
height: auto;
padding-bottom: 3%;
`;
const TaskList = styled.ul`
    padding: 25px;     
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    place-items: center;
    grid-gap: 1rem 0.6rem;

    @media ( max-width: 320px) {
        padding: 8px;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        
    }
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
            <TaskList>
                { searchedTasks().length ?
                    ( searchedTasks().map( task => {
                        return <Task key={ task._id } name={ task.title } organization={ 'test' } description={ task.description } />
                    } ) )
                    : 'Sorry, nothing matched your search'
                }
            </TaskList>
        </TasksContainer>
    )
}

export { Tasks }