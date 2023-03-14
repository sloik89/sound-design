import React from "react";
import styled from "styled-components";
const CartColumns = () => {
  return (
    <Wrapper>
      <div className="content">
        <h5>item</h5>
        <h5>price</h5>
        <h5>quantify</h5>
        <h5>subtotal</h5>
        <span></span>
      </div>
      <hr />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    h5 {
      font-size: 1.2rem;
      text-transform: capitalize;
      letter-spacing: 2px;
      color: var(--clr-dark-violet);
    }
    @media screen and (max-width: 800px) {
      display: none;
    }
  }
`;
export default CartColumns;
