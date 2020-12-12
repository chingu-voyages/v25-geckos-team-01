import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link, Redirect } from "react-router-dom";

const stretchy = keyframes`
    0% {
      transform: translateX(0) scaleX(1);
    }
    100% {
      transform: translateX(100%) scaleX(1);
    }
`;

const stretchyRev = keyframes`
    0% {
        transform: translateX(100%) scaleX(1);
      }
      100% {
        transform: translateX(0) scaleX(1);
      }
`;

const ContentContainer = styled.div`
    background: white;
    color: black;
    border-radius: 10px;
    padding: 38px 30px;
    min-width: 350px;
    margin: 30px 0;
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

    form .form-label{
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

    form .form-input{
      width: 100%;
      padding: .5rem;
      background: white;
      margin: 1rem 0;
      border: none;
      color: #aaa;
      font-size: 1rem;
      border-bottom: 2px solid #283747;
    }

    form .form-input:focus{
      background: white;
      outline: 0;
    }

    form .form-input:focus + .form-label,
    form .form-input:valid + .form-label
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
        position: relative;
        display: flex;
        background: #8997a3;
        border-radius: 8px;
        height: 45px;
        border-radius: 8px;
        height: 55px;
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        
        label {
            width: 48%;
            height: 45px;
            margin: 3px;
            font-size: 14px;
            text-align: center;
            align-items: center;
            display: flex;
            justify-content: center;
            z-index: 1;
            user-select: none;
            cursor: pointer;
            will-change: transform;
            transform: translateZ(0px);
            color: white;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition:
                transform 125ms ease-in-out,
                filter 125ms ease-in-out;
            
            &:hover {
                transform: scale(1.05);
            }
        }
        
        input[type="radio"] {
            display: none;
            
            // static
            &#t1 ~ .blob {
                transform-origin: right center;
            }
            
            &#t2 ~ .blob {
                transform-origin: left center;
            }
            
            // animated
            &#t1:checked {
                
                ~ .blob {
                background-color: #541479;
                animation-name: ${ stretchyRev };
                }
            }
          
            &#t2:checked {
                
                ~ .blob {
                    background: #3d1a75;
                    animation-name: ${ stretchy };
                }
            }
        }
        
        .blob {
            top: 0;
            left: 0;
            width: 48%;
            height: 45px;
            position: absolute;
            z-index: 0;
            border-radius: 8px;
            animation-duration: .5s;
            animation-direction: forwards;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
            transition: transform 150ms ease, background 150ms ease;
            margin: 5px;
        }
    }

    .submit-btn {
        width: 100%;
        background: #283848;
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
        transition:
        transform 125ms ease-in-out,
        filter 125ms ease-in-out;
    
        &:hover {
            transform: scale(1.02);
        }
    }
`;

const Error = styled.p`
    font-size: 12px;
    color: red;
    font-weight: bold;
    letter-spacing: .5px;
    margin-bottom: 8px;
`;

const ContentBottom = styled.div`
    margin: 30px 0 0 0;
    
    a {
        text-decoration: none;
        font-weight:  bold;
        color: #662eb9;
    }
`;

const AuthContent = ( { type, roleType, auth, register, login, resetError } ) => {
    const [ formData, setFormData ] = useState({
        name: '',
        password: '',
        password2: '',
        email: '',
        role: 'volunteer',
        phoneNumber: '',
        description: '',
        tags: '',
    });

    const [ error, setError ] = useState( '' );

    const { name, password, password2, email, role, phoneNumber, description, tags } =  formData;

    const onChange = e => setFormData( { ...formData, [ e.target.name ]: e.target.value } );
    const onSubmit = async e => {
        e.preventDefault();

        if ( type === 'register' && ( !name || !password || !password2 || !email ) ) {
            return setError( 'Please fill out all required fields' );
        } else if ( type === 'register' && ( password !== password2 ) ) {
            return setError( 'Passwords do not match' );
        }

        if ( type === 'register' ) {
            setError('')
            register( { name, email, role, password, phoneNumber, description, tags } );
        } else {
            setError('')
            login( email, password );
        }
    }

    // Redirect if logged in
    if( auth.isAuthenticated )  {
        return <Redirect to="/" />
    }

    // console.log( 'AUTH', auth )

    return (
        <ContentContainer>
            <h2>{ type }</h2>
            { auth.error ?
                ( Array.isArray( auth.error ) ? 
                    auth.error.map( ( error, i ) => {
                        return <Error key={'error-' + i }>{ error.msg }</Error> 
                    } ) 
                    :
                    <Error>{ auth.error }</Error> 
                )
                :
                ''
            }
            { error && <Error>{ error }</Error> }
            <form onSubmit={ e => onSubmit( e ) }>
                { type === 'register' &&
                    <>
                    <div className="role">
                        <label htmlFor="t1">Volunteer</label>
                        <input id="t1" 
                               name="role" 
                               onClick={ () => setFormData( { ...formData, role: 'volunteer' } ) }
                               defaultChecked={ role === 'volunteer' }
                               type="radio"
                               value="volunteer" />
                        <label htmlFor="t2">Organization</label>
                        <input id="t2"
                               name="role" 
                               onClick={ () => setFormData( { ...formData, role: 'organization' } ) }
                               defaultChecked={ role === 'organization' }
                               type="radio"
                               value="organization" />
                        <div className="blob"></div>
                    </div>
                    <div>
                        <input className="form-input" 
                            name="name" 
                            type="text" 
                            autoComplete="off" 
                            required
                            onChange={ e => onChange( e ) }
                            value={ name } />
                        <label className="form-label">Name*</label>
                        <div className="cover"></div>
                    </div>
                    </>
                }
                <div>
                    <input className="form-input" 
                            name="email" 
                            type="text" 
                            autoComplete="off" 
                            required
                            onChange={ e => onChange( e ) }
                            value={ email } />
                    <label className="form-label">Email*</label>
                    <div className="cover"></div>
                </div>
                <div>
                    <input className="form-input" 
                           name="password" 
                           type="password" 
                           required
                           onChange={ e => onChange( e ) }
                           value={ password  } />
                    <label className="form-label">Password*</label>
                    <div className="cover"></div>
                </div>
                { type === 'register' &&
                    <>
                    <div>
                        <input className="form-input" 
                            name="password2" 
                            type="password" 
                            required
                            onChange={ e => onChange( e ) }
                            value={ password2 } />
                        <label className="form-label">Re-type Password*</label>
                        <div className="cover"></div>
                    </div>
                    <div>
                        <input className="form-input" 
                               name="phoneNumber" 
                               type="text" 
                               required
                               onChange={ e => onChange( e ) }
                               value={ phoneNumber } />
                        <label className="form-label">Phone Number* +1 (555) 555-5555</label>
                        <div className="cover"></div>
                    </div>
                    <div>
                        <input className="form-input" 
                               name="description" 
                               type="text" 
                               required
                               onChange={ e => onChange( e ) }
                               value={ description } />
                        <label className="form-label">Description*</label>
                        <div className="cover"></div>
                    </div>
                    <div>
                        <input className="form-input" 
                               name="tags" 
                               type="text" 
                               required
                               onChange={ e => onChange( e ) }
                               value={ tags } />
                        <label className="form-label">Tags* (separated by commas)</label>
                        <div className="cover"></div>
                    </div>
                    </>
                }
                <input type="submit" className="submit-btn" value={ type === 'login' ? 'Login' : 'Register' } />
            </form>
            <ContentBottom>
                { type === 'login' ?
                    <p>Don't have an account? <Link to="register" onClick={ () => resetError('') }>Register here</Link></p>
                    :
                    <p>Already have an account? <Link to="login" onClick={ () => resetError('') }>Login here</Link></p>
                }
            </ContentBottom>
        </ContentContainer>
    )
}

export { AuthContent }