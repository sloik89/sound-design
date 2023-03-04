import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utilis/helpers";
import { Link } from "react-router-dom";
const ListView = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => {
        console.log(product);
        const { id, images, Name, price } = product;
        return (
          <article key={product.id}>
            <img src={images[0].url} />
            <div>
              <h4>{Name}</h4>
              <h5 className="price">{formatPrice(price)}</h5>
              <Link className="btn" to={`/products/${id}`}>
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  article {
    img {
      width: 100%;
      max-width: 300px;
      padding: 1rem;
    }
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
    }
    @media screen and (min-width: 800px) {
      flex-direction: row;
      h4 {
        font-size: 1.5rem;
      }
      .price {
        font-size: 2rem;
      }
      div {
        align-items: flex-start;
      }
      .btn {
        font-size: 1.5rem;
        letter-spacing: 5px;
      }
      .btn:hover {
        animation: bounce 1s infinite alternate;
      }
    }
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(10px);
    }
  }
`;
export default ListView;
