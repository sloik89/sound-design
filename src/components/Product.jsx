import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { formatPrice } from "../utilis/helpers";
const Product = ({ images, Name, price, id }) => {
  console.log(images[0].url);
  return (
    <Wrapper>
      <div className="container">
        <img src={images[0].url} alt={Name} />
      </div>
      <footer>
        <h5>{Name}</h5>
        <p>{formatPrice(price)}</p>
        <Link to={`/products/${id}`} className="link">
          <FaSearch />
        </Link>
      </footer>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  max-width: 400px;
  .container {
  }
  img {
    width: 100%;
    /* display: block; */
    object-fit: cover;
  }

  footer {
    position: absolute;
    letter-spacing: 2px;
    font-size: 1.2rem;
    bottom: -100%;
    width: 100%;
    background-color: rgba(211, 46, 195, 0.3);
    left: 0;
    height: 100%;
    transition: all 0.4s linear;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    color: var(--clr-light-violet);
    a {
      color: var(--clr-font);
      font-size: 1.5rem;
      background-color: var(--clr-dark-violet);
      padding: 0.5rem;
      border-radius: 50%;
      display: flex;
      transition: 0.4s linear;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  &:hover footer {
    bottom: 0;
  }
`;
export default Product;
