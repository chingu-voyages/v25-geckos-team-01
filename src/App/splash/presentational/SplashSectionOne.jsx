import React from 'react';
import styled from 'styled-components';

const SectionOneContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to right, #283747 0%,#3C1874 100%),url(splash-background.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: darken;
`;

const SectionOneInnerContainer = styled.div`
    width: 90%;
    max-width: 1100px;
    padding: 160px 0;
    color: white;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h1 {
        padding-bottom: 20px;
        font-size: 50px;
    }
    
    button {
        background-color:  #283747;
        outline: none;
        padding: 15px 42px;
        border-radius: 8px;
        border: none;
        color: white;
        font-weight: bold;
        font-size: 18px;
        margin: 10px 0;
        text-transform: uppercase;
        letter-spacing: 3px;
        cursor: pointer;
        transition: all .6s ease;

        &:hover {
            background-color: white;
            color: #283747;
            font-weight: bold;
        }
    }
`;

const SplashSectionOne = () => {
    return (
        <SectionOneContainer>
            <SectionOneInnerContainer>
                <h1>Connecting talented developers with nonprofits</h1>
                <button>Learn More</button>
            </SectionOneInnerContainer>
        </SectionOneContainer>
    )
}

export { SplashSectionOne }