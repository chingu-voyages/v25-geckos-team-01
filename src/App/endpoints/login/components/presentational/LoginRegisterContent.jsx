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
    min-width: 300px;
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
`;

const LoginRegisterContent = ( { type } ) => {    
    return (
        <ContentContainer>
            <h2>{ type }</h2>
            <form>
                <div>
                    <input type="text" autoComplete="off" required />
                    <label>Username</label>
                    <div class="cover"></div>
                </div>
                <div>
                    <input type="password" required />
                    <label htmlFor="password">Password</label>
                    <div class="cover"></div>
                </div>
            </form>
        </ContentContainer>
    )
}

export { LoginRegisterContent }