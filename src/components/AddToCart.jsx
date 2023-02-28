import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

const AddToCart = ({ product }) => {
  const { id, stock, colors } = product;
  const [mainColor, setMainColor] = useState(colors[0]);
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
      <div className="btn-container"></div>
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
  }
  div {
    display: flex;
    gap: 1rem;
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
