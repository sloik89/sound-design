import React from "react";
import { useCartContext } from "../context/cart_context";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PageHero } from "../components";
import { CartContent } from "../components";
const Cart = () => {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <Wrapper>
        <div className="empty">
          <h2>Your cart is empty</h2>
          <Link className="btn btn-products" to="/products">
            Buy something
          </Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <main>
      <PageHero title="cart" />
      <section className="section-center">
        <CartContent />
      </section>
    </main>
  );
};
const Wrapper = styled.main`
  min-height: calc(100vh - 182px);
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    display: flex;
    flex-direction: column;
  }
  h2 {
    font-size: 2rem;
    letter-spacing: 2px;
    margin-bottom: 1rem;
    color: var(--clr-dark-violet);
  }
  .btn-products {
    font-size: 1.4rem;
    justify-self: center;
    transform: scale(1);
    align-self: center;
    transition: 0.2s ease-in;
    &:hover {
      color: var(--clr-light-violet);
    }
  }
`;

export default Cart;
