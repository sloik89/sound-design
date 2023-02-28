import React from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";
const AmountBtns = ({ increase, amount, decrease }) => {
  return (
    <Wrapper>
      <button type="button" className="amount-btn" onClick={increase}>
        <FaMinus />
      </button>
      <h2 className="amount">{amount}</h2>
      <button onClick={decrease} type="button" className="amount-btn">
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
  cursor: pointer;
  button {
    border: none;
    background-color: transparent;
    font-size: 1.5rem;
  }
`;
export default AmountBtns;
