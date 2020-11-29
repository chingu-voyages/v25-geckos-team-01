import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2.5rem;
    background-color: rgba(40,55,71,1);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FooterContent = styled.div`
    text-transform: uppercase;
    font-size: .8rem;
    letter-spacing: 1px;
    color: white;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <span>Chingu V25</span>
            </FooterContent>
        </FooterContainer>
    )
}

export { Footer }