import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, Redirect } from "react-router-dom";

const NewTaskContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const NewTaskInnerContainer = styled.div`
    width: 100%;
    max-width: 800px;

    form {
        display: flex;
        flex-direction: column;

        .form-input-container {
            display: flex;
            flex-direction: column;
            margin: 10px 0;

            input, textarea {
                border: 1px solid black;
                padding: 8px;
                border-radius: 5px;
            }

            label {
                font-weight: bold;
                font-size: 16px;
                margin-bottom: 5px;
            }
        }

        .submit-btn {
            width: 300px;
            background: #283848;
            padding: 15px;
            color: white;
            text-transform: uppercase;
            letter-spacing: 1px;
            outline: none;
            border: none;
            border-radius: 3px;
            margin: 20px;
            cursor: pointer;
            border-radius: 5px;
            margin: 0 auto;
        }
    }
`;

const NewTask = ( { auth, addNewTask } ) => { 

    const [ newTask, setNewTask ] = useState( {
        title: '',
        description: '',
        skillsRequired: [],
        location: '',
        taskEnd: '',
    } );

    const { title, description, skillsRequired, location, taskEnd } =  newTask;

    const onChange = e => setNewTask( { ...newTask, [ e.target.name ]: e.target.value } );

    const onSubmit = e => {
        e.preventDefault();
        // setError('')
        addNewTask( { title, description, skillsRequired, location, taskEnd } );
    }

    if( !auth.isAuthenticated )  {
        return <Redirect to="/" />
    }

    return (
        <NewTaskContainer>
            <NewTaskInnerContainer>
                <form onSubmit={ e => onSubmit( e ) }>
                    <div className="form-input-container">
                        <label>Title</label>
                        <input className="form-input"
                            name="title"
                            type="text"
                            autoComplete="off"
                            required
                            onChange={ e => onChange( e ) }
                            value={ title }></input>
                    </div>
                    <div className="form-input-container">
                        <label>Description</label>
                        <textarea className="form-input"
                            name="description"
                            type="text"
                            autoComplete="off"
                            required
                            rows="15"
                            onChange={ e => onChange( e ) }
                            value={ description }></textarea>
                    </div>
                    <div className="form-input-container">
                        <label>Skills Required (separated by commas)</label>
                        <input className="form-input"
                            name="skillsRequired"
                            type="text"
                            autoComplete="off"
                            required
                            onChange={ e => onChange( e ) }
                            value={ skillsRequired }></input>
                    </div>
                    <div className="form-input-container">
                        <label>Location</label>
                        <input className="form-input"
                            name="location"
                            type="text"
                            autoComplete="off"
                            required
                            onChange={ e => onChange( e ) }
                            value={ location }></input>
                    </div>
                    <div className="form-input-container">
                        <label>Date of task end (YYYY/MM/DD)</label>
                        <input className="form-input"
                            name="taskEnd"
                            type="text"
                            autoComplete="off"
                            required
                            onChange={ e => onChange( e ) }
                            value={ taskEnd }></input>
                    </div>
                    <input type="submit" className="submit-btn" value='Add New Task' />
                </form>
            </NewTaskInnerContainer>
        </NewTaskContainer>
    )
}

export { NewTask }