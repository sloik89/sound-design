import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import AmountBtns from "./AmountBtns";
import { useCartContext } from "../context/cart_context";
const AddToCart = ({ product, idProduct }) => {
  const { addToCart } = useCartContext();
  const { stock, colors } = product;

  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const increase = () => {
    setAmount((oldState) => {
      if (oldState <= 1) {
        return 1;
      }
      return oldState - 1;
    });
  };
  const decrease = () => {
    setAmount((oldState) => {
      if (oldState >= stock) {
        return stock;
      }
      return oldState + 1;
    });
  };

  return (
    <Wrapper>
      <div className="colors">
        <span>colors : </span>
        <div>
          {colors.map((color, idx) => {
            return (
              <button
                style={{ backgroundColor: color }}
                className={`color-btn ${color === mainColor ? "active" : ""}`}
                key={idx}
                onClick={() => setMainColor(color)}
              >
                {color === mainColor && <FaCheck />}
              </button>
            );
          })}
        </div>
      </div>
      <div className="btns-container">
        <AmountBtns increase={increase} decrease={decrease} amount={amount} />
        <Link
          className="btn"
          to="/cart"
          onClick={() => addToCart(idProduct, amount, mainColor, product)}
        >
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .colors {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
    span {
      font-size: 1.1rem;
      letter-spacing: 2px;
      font-weight: bold;
    }
    div {
      display: flex;
      gap: 1rem;
    }
  }
  .btns-container {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
  .color-btn {
    cursor: pointer;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    background-color: #ddd;
    opacity: 0.6;
    color: var(--clr-violet);
  }
  .color-btn.active {
    opacity: 1;
  }
`;
export default AddToCart;
