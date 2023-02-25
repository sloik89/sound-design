import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <Wrapper>
      <div className="error-container">
        <h3>404</h3>
        <p>Sorry,the page you tried cannot be found</p>
        <button>
          <Link to="/">Back to home</Link>
        </button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: calc(100vh - 182px);

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--clr-light-violet);
  text-align: center;
  color: black;
  h3 {
    font-size: 4.5rem;
    letter-spacing: 2px;
  }
  p {
    letter-spacing: 2px;
    margin-bottom: 1rem;
    font-weight: bold;
  }
  button {
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: 2px;
    border: none;
    background-color: var(--clr-dark-violet);
    padding: 0.3rem 0.5rem;
    border-radius: 0.5rem;
    a {
      color: var(--clr-font);
    }
  }
`;
export default Error;
