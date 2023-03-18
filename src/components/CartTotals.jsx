import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utilis/helpers";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/user_context";
const CartTotals = () => {
  const { loginWithRedirect, myUser } = useUserContext();
  const { total_amount, shipping_fee } = useCartContext();
  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal: <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            shipping fee : <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            order total :{" "}
            <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        {myUser ? (
          <Link className="btn" to="/checkout">
            procced to checkout
          </Link>
        ) : (
          <Link className="btn" onClick={loginWithRedirect}>
            login
          </Link>
        )}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .btn {
    text-align: center;
  }
  article {
    padding: 2rem;
    border: solid 1px var(--clr-violet);
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  h5 {
    color: var(--clr-dark-violet);
    text-transform: capitalize;
    letter-spacing: 2px;
    font-size: 1.2rem;
  }
  p {
    color: var(--clr-dark-violet);
    text-transform: capitalize;
    letter-spacing: 2px;
    font-size: 1.1rem;
  }
  h4 {
    color: var(--clr-dark-violet);
    text-transform: capitalize;
    letter-spacing: 2px;
    font-size: 1.3rem;
  }
`;
export default CartTotals;
