import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, Redirect } from "react-router-dom";

const NavbarContainer = styled.div`
    height: fit-content;
    background: #3c1874;
    
    @media( max-width: 530px ) {
        position: relative;
        
        .nav-menu {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100vh;
            position: absolute;
            top: 73px;
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
    color: white;
    justify-self: start;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    padding: 10px 25px;
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
    
    .close  {
        margin-right: 3px;
        margin-top: 4px;
    }
    
    .open {
        margin-top: 8px;
    }
`;

const NavbarLinks = styled.ul`
    display: flex;
    list-style: none;
    text-align: center;
    align-items: center;
    
    .li-link {
        color: white;
        text-decoration: none;
        margin: 10px;
        padding: 10px 0;
        cursor: pointer;
        font-size: .9rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-weight: bold;
        border-bottom: 1px solid transparent;
        
        &:hover {
            border-bottom: 1px solid white;
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
    
    .li-buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        width: 105px;
        padding: 10px 18px;
        margin: 10px;
        border: 2px solid white;
        cursor: pointer;
        -webkit-box-shadow: 0px 12px 22px -5px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 12px 22px -5px rgba(0,0,0,0.75);
        box-shadow: 0px 12px 22px -5px rgba(0,0,0,0.75);
    }
    
    a {
        text-decoration: none;
    }
    
    .login {
        color: #3c1874;
        background: white;
        font-weight: bold;
    }
    
    .register {
        color: white;
        transition: all .6s ease;
        
        &:hover {
            color: #3c1874;
            background-color: white;
            font-weight: bold;
        }
    }
`;

const Nav = ( { auth, logout } ) => {

    const logoutUser = () => {
        logout();
        return <Redirect to="/" />
    }
    
    const [ menuOpen, setMenuOpen ] = useState( false );
    
    return (
        <NavbarContainer>
            <NavbarInnerContainer>
                <Link to="/">
                    <Logo>
                        <img src='PayItForwardLogo.png' className="open" height="60px" alt="menu-icon" />
                    </Logo>
                </Link>
                <MenuIcon onClick={ () => setMenuOpen( !menuOpen ) }>
                    { menuOpen ? 
                        <img src='Close.png' className="close" height="24px" alt="menu-icon" />
                        :
                        <img src='Hamburger.png' className="open" height="20px" alt="menu-icon" />
                    }
                </MenuIcon>
                <NavbarLinks className={ menuOpen ? 'nav-menu active' : 'nav-menu not-active' }>
                    <li className="li-link">About</li>
                    { !auth.isAuthenticated ?
                        <>
                        <Link to="/login">
                            <li className="login li-buttons">Login</li>
                        </Link>
                        <Link to="/register">
                            <li className="register li-buttons">Register</li>
                        </Link>
                        </>
                        :
                        <>
                        <Link to="/">
                            <li className="li-link">Profile</li>
                        </Link>
                        <Link to="/tasks">
                            <li className="li-link">Find a Task</li>
                        </Link>
                        <a onClick={ () => logoutUser() }><li className="register li-buttons">Logout</li></a>
                        </>
                    }
                </NavbarLinks>
            </NavbarInnerContainer>
        </NavbarContainer>
    )
}

export { Nav }