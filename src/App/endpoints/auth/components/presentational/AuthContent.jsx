import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, Redirect } from "react-router-dom";

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
        display: flex;
        flex-direction: column;
        
        > div {
            display: flex;
            margin: 10px 0;
            
            label {
                margin-left: 5px;
                color: 
            }
        }
    }

    .submit-btn {
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
    }
`;

const ContentBottom = styled.div`
    margin: 30px 0 0 0;
    
    a {
        text-decoration: none;
        font-weight:  bold;
        color: #662eb9;
    }
`;

const AuthContent = ( { type, roleType, auth, register, login } ) => {
    const [ formData, setFormData ] = useState({
        name: '',
        password: '',
        email: '',
        phone: '',
        role: 'volunteer',
        description: '',
        tags: '',
        image: 'test',
    });

    const { name, password, email, phone, role, description, tags, image } =  formData;

    const onChange = e => setFormData( { ...formData, [ e.target.name ]: e.target.value } );
    const onSubmit = async e => {
        console.log( name, email, role, password, phone, description,tags, image)
        e.preventDefault();
        if ( type === 'register' ) {
            register( { name, email, role, password, phone, description, tags, image } );
        } else {
            login( email, password );
        }
    }

    // Redirect if logged in
    if( auth.isAuthenticated )  {
        return <Redirect to="/" />
    }

    return (
        <ContentContainer>
            <h2>{ type }</h2>
            <form onSubmit={ e => onSubmit( e ) }>
                { type === 'register' &&
                    <div>
                        <input className="form-input" 
                            name="name" 
                            type="text" 
                            autoComplete="off" 
                            required
                            onChange={ e => onChange( e ) }
                            value={ name } />
                        <label className="form-label">Name</label>
                        <div className="cover"></div>
                    </div>
                }
                <div>
                    <input className="form-input" 
                            name="email" 
                            type="text" 
                            autoComplete="off" 
                            required
                            onChange={ e => onChange( e ) }
                            value={ email } />
                    <label className="form-label">Email</label>
                    <div className="cover"></div>
                </div>
                <div>
                    <input className="form-input" 
                           name="password" 
                           type="password" 
                           required
                           onChange={ e => onChange( e ) }
                           value={ password  } />
                    <label className="form-label">Password</label>
                    <div className="cover"></div>
                </div>
                { type === 'register' &&
                    <>
                    <div>
                        <input className="form-input" 
                               name="phone" 
                               type="text" 
                               required
                               onChange={ e => onChange( e ) }
                               value={ phone } />
                        <label className="form-label">Phone Number</label>
                        <div className="cover"></div>
                    </div>
                    <div>
                        <input className="form-input" 
                               name="description" 
                               type="text" 
                               required
                               onChange={ e => onChange( e ) }
                               value={ description } />
                        <label className="form-label">Description</label>
                        <div className="cover"></div>
                    </div>
                    <div>
                        <input className="form-input" 
                               name="tags" 
                               type="text" 
                               required
                               onChange={ e => onChange( e ) }
                               value={ tags } />
                        <label className="form-label">Tags</label>
                        <div className="cover"></div>
                    </div>
                    </>
                }
                { type === 'register' &&
                    <div className="role">
                        <div>
                            <input type="radio" 
                                   name="role" 
                                   value="Volunteer" 
                                   onChange={ () => setFormData( { ...formData, role: 'volunteer' } ) } 
                                   defaultChecked={ role === 'volunteer' } 
                                   required />
                            <label htmlFor="Volunteer">Volunteer</label>
                        </div>
                        <div>
                            <input type="radio" 
                                   name="role" 
                                   value="Organization" 
                                   onChange={ () => setFormData( { ...formData, role: 'organization' } ) } 
                                   defaultChecked={ role === 'organization' } 
                                   required />
                            <label htmlFor="Volunteer">Organization</label>
                        </div>
                    </div>
                }
                <input type="submit" className="submit-btn" value={ type === 'login' ? 'Login' : 'Register' } />
            </form>
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

export { AuthContent }