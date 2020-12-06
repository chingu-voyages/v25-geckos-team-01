import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, Redirect } from "react-router-dom";

const SettingsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const SettingsInnerContainer = styled.div`
    max-width: 1000px;
    margin: 15px;
    width: 100%;
    display: flex;

    .edit-button {
        background: #3C1874;
        color:  white;
        text-transform: uppercase;
        letter-spacing: 2px;
        padding: 20px 30px;
        border-radius: 8px;
        outline: none;
        border: none;
        margin: 10px; 0;
        cursor: pointer;
    }
`;

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const EditForm = styled.div`
    form  {
        display: flex;
        flex-direction: column;

        label {
            padding-top:  15px;
        }
    }
`;

const Settings = ( { auth, editUser, deleteUser } ) => { 
    console.log( 'SETTINGS', auth.user ) 

    const [ isEditing, setIsEditing ] = useState( false );
    const [ formData, setFormData ] = useState( auth.user && { name: auth.user.name,
                                                               email: auth.user.email,
                                                               description: auth.user.description,
                                                               tags: auth.user.tags ?  auth.user.tags :  '' } );
    const [ error, setError ] = useState( '' );

    const onChange = e => {
        console.log( e.target.name, e.target.value )
        setFormData( { ...formData, [ e.target.name ]: e.target.value } )
    };

    const onSubmit = async e => {
        e.preventDefault();
        editUser( { name: formData.name, email: formData.email, description: formData.description } );
        setIsEditing( false );
    }

    // Redirect if user deleted
    if( !auth.isAuthenticated )  {
        return <Redirect to="/" />
    }

    return (
        <SettingsContainer>
            <SettingsInnerContainer>
                { auth.loading !== true &&
                ( !isEditing ? 
                    <UserInfo>
                        <span><b>Name: </b>{ auth.user.name }</span>
                        <span><b>Email: </b>{ auth.user.email }</span>
                        <span><b>Role: </b>{ auth.user.role }</span>
                        <span><b>Description: </b>{ auth.user.description }</span>
                        {/* <span><b>Tags: </b>{ auth.user.tags }</span> */}
                        {/* <button className="edit-button" onClick={ () => setIsEditing( true ) }>Edit Profile</button> */}
                        <button onClick={ () => deleteUser() } className="edit-button">Delete Account</button>
                    </UserInfo>
                    :
                    <EditForm>
                        <form onSubmit={ e => onSubmit( e ) }> 
                            <label>Name</label>
                            <input className="form-input" 
                                    name="name" 
                                    type="text" 
                                    autoComplete="off" 
                                    required
                                    onChange={ e => onChange( e ) }
                                    value={ formData.name } />   
                            <label>Email</label>
                            <input className="form-input" 
                                    name="email" 
                                    type="text" 
                                    autoComplete="off" 
                                    required
                                    onChange={ e => onChange( e ) }
                                    value={ formData.email } /> 
                            <label>Description</label>
                            <input className="form-input" 
                                    name="description" 
                                    type="text" 
                                    autoComplete="off" 
                                    required
                                    onChange={ e => onChange( e ) }
                                    value={ formData.description } /> 
                            <label>Tags</label>
                            {/* <input className="form-input" 
                                    name="tags" 
                                    type="text" 
                                    autoComplete="off" 
                                    onChange={ e => onChange( e ) }
                                    value={ formData.tags } /> */}
                            <input type="submit" className="edit-button" value={ 'Save' } />
                        </form>
                    </EditForm>
                )
                }
            </SettingsInnerContainer>
        </SettingsContainer>
    )
}

export { Settings }