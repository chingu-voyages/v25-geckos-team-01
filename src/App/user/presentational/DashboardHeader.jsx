import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const HeaderOuterContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background: #c2d1df;
`;

const HeaderInnerContainer = styled.div`
    max-width: 1000px;
    margin: 15px;
    width: 100%;
    display: flex;

    img {
        width: auto;
        height: 70px;
        margin-right: 15px;
    }
`;

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;

    .tags {
        display: flex;
        flex-wrap: wrap;
        margin: 10px 0;

        .tag  {
            background: #283848;
            padding: 5px 7px;
            border-radius: 5px;
            color: white;
            margin: 5px;
            cursor: pointer;
        }
    }
`;

const DashboardHeader = ( { auth } ) => {  
    console.log( 'AUTH DASHBOARD', auth ) 

    const { name, role, description, tags } = auth.user;

    return (
        <HeaderOuterContainer>
            <HeaderInnerContainer>
                <img src='user.png' />
                <UserInfo>
                    <h3>{ name }</h3>
                    <span>{ role }</span>
                    {/* <div className="tags">
                        { tags.length && 
                            ( tags.map( ( tag, i ) => <div key={ 'tag-' + i } className="tag">{ tag }</div> ) )
                        }
                    </div> */}
                    { description && <span>{ description }</span> }
                    <Link to='/settings'>
                        <span>Settings</span>
                    </Link>
                </UserInfo>
            </HeaderInnerContainer>
        </HeaderOuterContainer>
    )
}

export { DashboardHeader }