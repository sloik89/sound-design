import React from "react";
import { useCartContext } from "../context/cart_context";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CartColumns } from "./";
import { CartItem } from "./";
import { CartTotals } from "./";
const CartContent = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <Wrapper>
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className="link-container">
        <Link to="/products" className="btn">
          see products
        </Link>
        <button
          onClick={clearCart}
          type="button"
          className="link-btn btn clear-btn"
        >
          clear shopping cart
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  min-height: calc(100vh - 375px);
  .link-container {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export default CartContent;
