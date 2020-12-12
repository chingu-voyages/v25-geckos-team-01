import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    useLocation,
    Link
} from "react-router-dom";

const TaskPageContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const TaskContent = styled.div`
    max-width: 800px;
    display: flex;
    flex-direction: column;

    h2 {
        padding:  20px 0;
    }

    .back {
        margin-top: 20px;
        background: #283848;
        color: white;
        text-decoration: none;
        padding: 12px 18px;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-size: 12px;
        outline: none;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
`;

const TaskPage = ( { currentTask, tasks } ) => { 
    let location = useLocation()
    let taskID = location.pathname.split('/')[2]

    const [ current, setCurrent ] = useState([]);

    useEffect( () => {
        const match = tasks.length && tasks.filter( task => task._id === taskID );
        setCurrent( match );
    }, [location] );

    console.log( 'MATCH', current )

    return (
        <TaskPageContainer>
            { current.length ? 
                <TaskContent>
                    <h2>{ current[0].title } </h2>
                    <span className="description">{ current[0].description } </span>
                    <Link to='/tasks'><button className="back">Back to tasks</button></Link>
                </TaskContent>
                :
                <h5>Something went wrong</h5>
            }
        </TaskPageContainer>
    )
}

export { TaskPage }