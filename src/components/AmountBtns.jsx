import React from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";
const AmountBtns = ({ increase, amount, decrease }) => {
  return (
    <Wrapper>
      <button type="button" className="amount-btn" onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className="amount">{amount}</h2>
      <button onClick={increase} type="button" className="amount-btn">
        <FaPlus />
      </button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
  gap: 2rem;

  button {
    border: none;
    background-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;
export default AmountBtns;
