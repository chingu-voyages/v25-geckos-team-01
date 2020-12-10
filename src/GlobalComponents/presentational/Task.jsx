import React from "react";
import styled from "styled-components";

const Card = styled.li`
  list-style: none;
  max-width: 320px;
  width: 100%;
  height: 320px;
  min-height: 380px;
  border: 2px solid #283747;
  border-radius: 15px;
  cursor: default;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 2px solid #3a4ed5;

  &:hover,
  &:focus {
    transform: scale(1.02);
    box-shadow: 0 0 2px rgba(0, 0, 0, 2);
  }
  
  @media ( max-width: 320px) {
    max-width: 280px;
  }

  h4 {
    max-width: 99%;
    min-height: 50px;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 800;
    margin: 0;
    
    @media ( max-width: 320px) {
        font-size: 1.2rem;
      }
  }

  p {
    text-align: center;
    margin-top: 25px;
    
    &:not(.description){
        color: #808080;
        font-size: 1.4rem;
    }
    @media ( max-width: 320px) {
        font-size: .5rem;
        margin-top: 10px;
      }
  }

  .description {
    display: flex;
    flex-direction: column;
    max-width: 270px;
    min-height: 100px;
    font-size: 1.1rem;
    max-height: 120px;
    position: relative;
    overflow: hidden;
  
  }

   .read-more {
    position: absolute; 
    border-radius: 14px;
    bottom: 0; 
    left: 0;
    width: 100%; 
    text-align: center; 
    margin: 0; padding: 30px 0;
    /* "transparent" only works here because == rgba(0,0,0,0) */
  background-image: linear-gradient(to bottom, transparent, #dcdcdc);
  }

  .button {
    font-size: 1.01;
    text-decoration: none;
  }
`;
const Task = ({ name, organization, description }) => {
  return (
    <Card>
      <h4>{name}</h4>
      <p>{organization}</p>
      <p className="description">{description}</p>
      <p className="read-more"><a href="#" className="button">Read More</a></p>
    </Card>
  );
};

export { Task };
