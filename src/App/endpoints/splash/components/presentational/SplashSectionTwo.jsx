import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { UserBubble } from './UserBubble.jsx';

const SectionTwoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SectionTwoInnerContainer = styled.div`
    width: 90%;
    max-width: 1100px;
    padding: 80px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    h2 {
        font-size: 38px;
        letter-spacing: 2px;
        padding: 20px 0;
    }
    
    p {
        font-size: 1.5rem;
        max-width: 500px;
        text-align: center;
        line-height: 1.7rem;
    }
`;

const UserBubbleContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 30px 0;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
`;

const SplashSectionTwo = () => {
    return (
        <SectionTwoContainer>
            <SectionTwoInnerContainer>
                <h2>Our Mission</h2>
                <p>Our mission is to match professional developers who want to donate their time with nonprofits who are seeking their skills. </p>
                <UserBubbleContainer>
                    <UserBubble type="Volunteer" description="Become a volunteer and donate your time to help nonprofits" />
                    <UserBubble type="Organization" description="Find talented developers to help you with your next project" />
                </UserBubbleContainer>
            </SectionTwoInnerContainer>
        </SectionTwoContainer>
    )
}

export { SplashSectionTwo }