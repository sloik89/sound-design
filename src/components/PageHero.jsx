import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const PageHero = ({ title }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <Link to="/">Home</Link> / {title}
        </h3>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 20vh;
  display: flex;
  align-items: center;
  background-color: var(--clr-dark-violet);
  h3 {
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  a {
    color: inherit;
  }
`;
export default PageHero;
