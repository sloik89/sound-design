import React from "react";
import styled from "styled-components";
const Loading = () => {
  return (
    <Wrapper className="section section-center">
      <span className="loader"></span>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .loader {
    width: 100px;
    height: 100px;
    border: 5px solid var(--clr-light-violet);
    border-bottom-color: var(--clr-dark-violet);
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export default Loading;
