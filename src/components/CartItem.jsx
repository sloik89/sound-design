import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utilis/helpers";
import { AmountBtns } from "./";
import { FaTrash } from "react-icons/fa";
const CartItem = ({ id, image, name, price, amount, color }) => {
  const { removeItem, toggleAmount } = useCartContext();
  const increase = () => {
    toggleAmount(id, "inc");
  };
  const decrease = () => {
    toggleAmount(id, "dec");
  };

  return (
    <Wrapper>
      <div className="title">
        <img src={image} alt={name} />
        <div>
          <h5 className="name">{name}</h5>
          <p className="color">
            color: <span style={{ backgroundColor: color }}></span>
          </p>
          <h5 className="price-small">{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className="price">{formatPrice(price)}</h5>
      <AmountBtns increase={increase} decrease={decrease} amount={amount} />
      <h5 className="subtotal">{formatPrice(price * amount)}</h5>
      <button
        type="button"
        className="remove-btn"
        onClick={() => removeItem(id)}
      >
        <FaTrash />
      </button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 2rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  color: var(--clr-dark-violet);

  .title {
    display: flex;
    align-items: center;
    gap: 1rem;
    @media screen and (max-width: 800px) {
      flex-direction: column;
      .price {
        display: none;
      }
    }
  }
  .name {
    font-size: 1.1rem;
  }
  img {
    width: 100px;
    height: 100px;
    display: block;
    object-fit: cover;
  }
  .color {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0.5rem 0;
  }
  .color span {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: inline-block;
  }
  .price {
    font-size: 1.5rem;
  }
  .remove-btn {
    justify-self: start;
    color: var(--clr-violet);
    border: none;
    font-size: 1.5rem;
    background: transparent;
    cursor: pointer;
  }
  @media screen and (max-width: 800px) {
    .price {
      display: none;
    }
    .subtotal {
      display: none;
    }
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
export default CartItem;
