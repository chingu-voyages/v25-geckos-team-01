import React, { useEffect } from 'react';
import styled from 'styled-components';
import { SplashSectionOne } from './SplashSectionOne.jsx';
import { SplashSectionTwo } from './SplashSectionTwo.jsx';
import { SplashSectionThree } from './SplashSectionThree.jsx';

const axios = require('axios');

const SplashOuterContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const SplashPage = ( { searchTerm, setSearch } ) => {
    
    return (
        <SplashOuterContainer>
            <SplashSectionOne />
            <SplashSectionTwo />
            <SplashSectionThree setSearch={ setSearch } />
        </SplashOuterContainer>
    )
}

export { SplashPage }