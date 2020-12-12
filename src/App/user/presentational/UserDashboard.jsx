import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { DashboardHeader } from './DashboardHeader.jsx';

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

const UserDashboard = ( { auth } ) => {  

    return (
        <UserDashboardContainer>
            <DashboardHeader auth={ auth } />
            <UserOuterContainer>
                <UserInnerContainer>
                    <p>You don't have any tasks listed yet.</p>
                    <Link to="/task/newtask">
                        <Button>Post a task</Button>
                    </Link>
                    <Link to="/tasks">
                        <Button>Explore Tasks</Button>
                    </Link>
                </UserInnerContainer>
            </UserOuterContainer>
        </UserDashboardContainer>
    )
}

export { UserDashboard }