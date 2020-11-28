import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const UserBubbleContainer = styled.div`
    padding: .7rem;
    position: relative;
    background: linear-gradient(to right, #3c1974, purple);
    border-radius: 1000px;
    margin: 30px;
    -webkit-box-shadow: 0px 0px 28px -6px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 28px -6px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 28px -6px rgba(0,0,0,0.75);
`;

const Content = styled.div`
    background: white;
    border-radius: 1000px;
    width: 350px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    
    button {
        background-color: #78067f;
        color: white;
        padding: 15px 20px;
        border: none;
        outline: none;
        border-radius: 18px;
        margin-top: 15px;
        letter-spacing: 1px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color .6s ease;
        -webkit-box-shadow: 0px 12px 29px -9px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 12px 29px -9px rgba(0,0,0,0.75);
        box-shadow: 0px 12px 29px -9px rgba(0,0,0,0.75);
        
        &:hover {
            background: #3e1a75;
        }
    }
`;

const UserBubble = ( { type, description } ) => {
    return (
        <UserBubbleContainer>
            <Content>
                <h2>{ type }</h2>
                <p>{ description }</p>
                <Link to="register">
                    <button>{ type === 'Volunteer' ? 'Join us as a volunteer' : 'Join as an organization' }</button>
                </Link>
            </Content>
        </UserBubbleContainer>
    )
}

export { UserBubble }