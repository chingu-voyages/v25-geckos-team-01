import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
    background: linear-gradient( 180deg, rgba( 87,89,171,1 ) 0%, rgba( 13,2,47,1 ) 100% );
    height: fit-content;
    
    @media( max-width: 530px ) {
        position: relative;
        
        .nav-menu {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100vh;
            position: absolute;
            top: 38px;
            left: -100%;
            opacity: 1;
            transition: all .5s ease;
        }
        
        .active {
            background: #0d022f;
            left: 0;
            opacity: 1;
            transition: all .5s ease;
            z-index: 1;
        }
    }
`;

const NavbarInnerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const Logo = styled.div`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    padding: 10px 20px;
    letter-spacing: 1px;
`;

const MenuIcon = styled.div`
    display: none;
    
    @media( max-width: 530px ) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate( -100%, 60% );
        cursor: pointer;
    }
`;

const NavbarLinks = styled.ul`
    display: flex;
    list-style: none;
    text-align: center;
    
    li {
        color: white;
        text-decoration: none;
        padding: 15px;
        cursor: pointer;
        font-size: .7rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        
        &:hover {
            background-color: rgba(231,231,244,0.3);
            transition: all .2s ease-out;
        }
        
        @media( max-width: 530px ) {
            text-align: center;
            padding: 1.5rem;
            width: 100%;
            display: table;
            
            &:hover {
                background-color: rgba(231,231,244,0.3);
                border-radius: 0;
            }
        }
    }
`;

const Nav = () => {
    
    const [ menuOpen, setMenuOpen ] = useState( false );
    
    return (
        <NavbarContainer>
            <NavbarInnerContainer>
                <Logo>Chingu V25</Logo>
                <MenuIcon onClick={ () => setMenuOpen( !menuOpen ) }>
                    { menuOpen ? 
                        <img src='Close.png' height="18px" alt="menu-icon" />
                        :
                        <img src='Hamburger.png' height="11px" alt="menu-icon" />
                    }
                </MenuIcon>
                <NavbarLinks className={ menuOpen ? 'nav-menu active' : 'nav-menu not-active' }>
                    <li>About</li>
                    <li>Sign Up</li>
                    <li>Register</li>
                </NavbarLinks>
            </NavbarInnerContainer>
        </NavbarContainer>
    )
}

export { Nav }