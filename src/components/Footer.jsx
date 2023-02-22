import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <Wrapper>
      <h5>
        &copy;{new Date().getFullYear()}
        <span> Sound Design</span>
      </h5>
      <h5>All right reserved</h5>
    </Wrapper>
  );
};
const Wrapper = styled.footer`
  background-color: #594355;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  gap: 1rem;
`;
export default Footer;
