import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <Link to="/">Home</Link> /
          {product && <Link to="/products"> Products</Link>} / {title}
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
  margin-bottom: 2rem;
  h3 {
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  a {
    color: inherit;
  }
`;
export default PageHero;
