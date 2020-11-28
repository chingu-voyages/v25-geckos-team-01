import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const ContentContainer = styled.div`
    background: white;
    color: black;
    border-radius: 10px;
    padding: 45px;
    min-width: 320px;
    -webkit-box-shadow: 0px 0px 41px -6px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 41px -6px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 41px -6px rgba(0,0,0,0.75);
    
    h2 {
        margin-bottom: 20px;
        color: #60107a;
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    form > div{
      position: relative;
    }

    form label{
      position: absolute;
      opacity: 0.6;
      font-size: 1rem;
      left: 1rem;
      pointer-events: none;
      color: #283747;
      transition: all .22s;
      top: 50%;
      transform: translateY(-50%);
      display: block;
    }

    form input{
      width: 100%;
      padding: .5rem;
      background: white;
      margin: 1rem 0;
      border: none;
      color: #aaa;
      font-size: 1rem;
      border-bottom: 2px solid #283747;
    }

    form input:focus{
      background: white;
      outline: 0;
    }

    form input:focus + label,
    form input:valid + label
    {
      top: 0;
      font-size: 1rem;
      transform: translateY(0);
      left: 0;
      opacity: 1;
    }

    form .cover{
      width: 100%;
      position: absolute;
      background: white;
      height: 4px;
      top: 1rem;
    }    
    
    .role {
        display: flex;
        flex-direction: column;
        
        div {
            margin: 10px 0;
            
            label {
                margin-left: 5px;
                color: 
            }
        }
    }
`;

const Button = styled.button`
    width: 100%;
    background: purple;
    color: white;
    padding: 15px;
    outline: none;
    border: none;
    -webkit-box-shadow: 10px 14px 20px -13px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 14px 20px -13px rgba(0,0,0,0.75);
    box-shadow: 10px 14px 20px -13px rgba(0,0,0,0.75);
    cursor: pointer;
    border-radius: 3px;
    margin-top: 15px;
    font-weight: bold;
    letter-spacing: 1px;
`;

const ContentBottom = styled.div`
    margin: 30px 0 0 0;
    
    a {
        text-decoration: none;
        font-weight:  bold;
        color: #662eb9;
    }
`;

const LoginRegisterContent = ( { type, roleType } ) => {
    
    const [ role, setRole ] = useState( roleType );
    
    return (
        <ContentContainer>
            <h2>{ type }</h2>
            <form>
                <div>
                    <input type="text" autoComplete="off" required />
                    <label>Name</label>
                    <div className="cover"></div>
                </div>
                <div>
                    <input type="password" required />
                    <label>Password</label>
                    <div className="cover"></div>
                </div>
                { type === 'register' &&
                    <>
                    <div>
                        <input type="text" autoComplete="off" required />
                        <label>Email</label>
                        <div className="cover"></div>
                    </div>
                    <div>
                        <input type="text" required />
                        <label>Phone Number</label>
                        <div className="cover"></div>
                    </div>
                    </>
                }
            </form>
            { type === 'register' &&
            <div className="role">
                <div>
                    <input type="radio" name="role" value="Volunteer" onClick={ () => setRole( 'volunteer' ) } checked={ role === 'volunteer' } required />
                    <label htmlFor="Volunteer">Volunteer</label>
                </div>
                <div>
                    <input type="radio" name="role" value="Organization" onClick={ () => setRole( 'organization' ) } checked={ role === 'organization' } required />
                    <label htmlFor="Volunteer">Organization</label>
                </div>
            </div>
            }
            <Button>{ type === 'login' ? 'Login' : 'Register' }</Button>
            <ContentBottom>
                { type === 'login' ?
                    <p>Don't have an account? <Link to="register">Register here</Link></p>
                    :
                    <p>Already have an account? <Link to="login">Login here</Link></p>
                }
            </ContentBottom>
        </ContentContainer>
    )
}

export { LoginRegisterContent }