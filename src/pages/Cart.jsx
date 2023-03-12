import React from "react";
import { useCartContext } from "../context/cart_context";
import styled from "styled-components";
const Cart = () => {
  const { cart } = useCartContext();
  console.log(cart);
  if (cart.length < 1) {
    return (
      <Wrapper className="page-100">
        <div className="empty">
          <h2>Your cart is empty</h2>
        </div>
      </Wrapper>
    );
  }
  return <div>Cart</div>;
};
const Wrapper = styled.main`
  min-height: calc(100vh - 182px);
`;
export default Cart;
