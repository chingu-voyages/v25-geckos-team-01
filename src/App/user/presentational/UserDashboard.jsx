import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { DashboardHeader } from './DashboardHeader.jsx';
import { Task } from './../../../GlobalComponents/presentational/Task.jsx';

const UserDashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const UserOuterContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const UserInnerContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;

const Button = styled.button`
    width: 300px;
    background: #283848;
    padding: 15px;
    color: white;
    text-transform: uppercase;
    letter-spacing: 1px;
    outline: none;
    border: none;
    border-radius: 3px;
    margin: 20px;
    cursor: pointer;
    border-radius: 5px;
`;

const UserDashboard = ( { auth, tasks } ) => { 
    
    const orgTasks = () => {
        return tasks.filter( task => task.postedBy === auth.user.id );
    }

    return (
        <UserDashboardContainer>
            <DashboardHeader auth={ auth } />
            <UserOuterContainer>
                <UserInnerContainer>
                    { tasks === 'fetching' ?
                        <p>Loading...</p>
                        :
                        ( orgTasks().length  ?
                            ( orgTasks().map( task => <Task /> )  )
                            // <p>Task  list</p>
                            :
                            <p>You don't have any tasks listed yet.</p>
                        )
                    }
                    { auth.user.role === 'organization' && 
                        <Link to="/task/newtask">
                            <Button>Post a task</Button>
                        </Link>
                    }
                    <Link to="/tasks">
                        <Button>Explore Tasks</Button>
                    </Link>
                </UserInnerContainer>
            </UserOuterContainer>
        </UserDashboardContainer>
    )
}

export { UserDashboard }