import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const SplashOuterContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    span {
        padding: 30px;
    }
`;

const SplashPage = ( props ) => {
    console.log( props );
    return (
        <SplashOuterContainer>
            <span>Home Page Content Goes Here</span>
        </SplashOuterContainer>
    )
}

export { SplashPage }