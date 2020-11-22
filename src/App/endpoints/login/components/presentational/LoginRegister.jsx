import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const LoginRegisterContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to right, #3c1974, purple);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContentContainer = styled.div`
    background: white;
    color: black;
    border-radius: 10px;
    padding: 30px;
`;

const LoginRegister = ( { type } ) => {    
    return (
        <LoginRegisterContainer>
            <ContentContainer>
                {  type }
            </ContentContainer>
        </LoginRegisterContainer>
    )
}

export { LoginRegister }