import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { DashboardHeader } from './DashboardHeader.jsx';

const UserDashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: center;
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
`;

const UserDashboard = ( { auth } ) => {  
    console.log( auth ) 
    return (
        <UserDashboardContainer>
            <DashboardHeader auth={ auth } />
            <Container>
                <Link to="/projects">
                    <Button>Explore Projects</Button>
                </Link>
            </Container>
        </UserDashboardContainer>
    )
}

export { UserDashboard }