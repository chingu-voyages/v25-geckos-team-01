import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchContainer = styled.div`
  height: 20%;
  display: flex;
  width: 78vw;
  margin: 0 auto;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 35px 0 35px;
  text-align: center;

  h2 {
    max-width: calc(60% - 30px);
    margin-bottom: 13px;
    padding: 12px;
    font-size: 2.8rem;

    @media (max-width: 949px) {
      max-width: calc(100% - 40px);
      font-size: 6vw;
    }
  }
`;

const SearchBar = styled.div`
  --size: 60px;
  --clr-primary: #3c1874;
  width: var(--size);
  height: var(--size);
  display: flex;
  align-items: center;
  border-radius: 50px;
  border: 2px solid #000;
  position: relative;
  transition: width 350ms cubic-bezier(0.18, 0.89, 0.32, 1.09);
  overflow: hidden;

  &:focus-within {
    width: 60%;

    input[type="search"] {
      opacity: 1;
      cursor: initial;
      width: calc(100% - var(--size));
    }

    button {
      background: var(--clr-primary);
      color: #fff;

      &:hover,
      &:focus {
        outline: 0;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.35);
      }
    }
    @media (max-width: 425px) {
      width: 79%;
    }
  }

  input[type="search"] {
    flex-grow: 1;
    padding: 0 12px;
    background-color: transparent;
    line-height: 1.8;
    font-size: 1.4rem;
    font-family: inherit;
    border: 0;
    outline: 0;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;

    &:focus {
      outline: 0;
    }
  }

  button {
    min-width: calc(var(--size) - 10px);
    height: calc(var(--size) - 10px);
    font-size: 1.5rem;
    margin-left: auto;
    background: 0;
    cursor: pointer;
    border: 0;
    border-radius: 50%;
    transition: background 200ms ease-out;
    color: var(--clr-primary);
    transition: background 150ms ease-in-out;

    &:hover, 
        &focus: {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    }
  }
`;

const Search = ({ setSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchContainer>
      <h2>Search for your next opportunity</h2>
      <SearchBar>
        {/* input is setting local state on change */}
        <input
          type="search"
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="search"
          placeholder="Find a task"
        />

        {/* setSearch is a redux action, but being passed from Tasks.jsx */}
        {/* searchTerm is local state being set from the input */}
        <button
          onClick={() => setSearch(searchTerm)}
          aria-label="submit search"
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </SearchBar>
    </SearchContainer>
  );
};

export { Search };
