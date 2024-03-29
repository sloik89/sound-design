import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
const AuthButtons = () => {
  const { loginWithRedirect, logout, myUser, isAuthenticated } =
    useUserContext();
  const { total_items } = useCartContext();
  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn">
        <p>Cart</p>
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-btn-info">{total_items}</span>
        </span>
      </Link>
      {console.log(myUser)}
      <div className="aut-container">
        {isAuthenticated ? (
          <button
            type="button"
            className="auth-btn"
            onClick={() => {
              logout({ returnTo: window.location.origin });
            }}
          >
            Logout <FaUserMinus></FaUserMinus>
          </button>
        ) : (
          <button
            type="button"
            onClick={loginWithRedirect}
            className="auth-btn"
          >
            Login <FaUserPlus />
          </button>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  p {
    font-size: 1.3rem;
    text-transform: capitalize;
    letter-spacing: 2px;
  }
  .cart-btn {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  .cart-container {
    position: relative;
    span {
      position: absolute;
      top: -5px;
      left: 15px;
      width: 20px;
      height: 20px;
      background-color: var(--clr-violet);
      border-radius: 50%;
      text-align: center;
      font-size: 0.9rem;
      color: white;
    }
    svg {
      font-size: 1.5rem;
    }
  }
  .auth-btn {
    border: 0;
    background-color: transparent;
    font-size: 1.3rem;
    cursor: pointer;
  }
`;
export default AuthButtons;
