import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import { LoginRegisterContent } from './LoginRegisterContent.jsx';

const LoginRegisterContainer = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to right, #3c1974, purple);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`;

const Close = styled.div`
    color: white;
    position: absolute;
    top: 0;
    right: 0;
    padding: 20px;
    content: &#10006;
`;

const LoginRegister = ( { type, roleType="volunteer" } ) => {    
    return (
        <LoginRegisterContainer>
            <Close>
                <Link to="/">
                    <svg width="20px" height="20px" viewBox="0 0 20 20" className="ws-icon">
                        <path fill="white" stroke="none" d="M8.51628 10.4408L3 15.9571L4.94357 17.9007L10.4598 12.3844L16.0316 17.9562L17.9752 16.0126L12.4034 10.4408L17.9007 4.94357L15.9571 3L10.4598 8.49727L5.01807 3.05549L3.0745 4.99905L8.51628 10.4408Z"/>
                    </svg>
                </Link>
            </Close>
            <LoginRegisterContent type={ type } roleType={ roleType } />
        </LoginRegisterContainer>
    )
}

export { LoginRegister }