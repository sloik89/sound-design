import React, { useState } from "react";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
const ProductImages = ({ images = [{ url: "" }] }) => {
  const { displayProductsImageModal } = useProductsContext();
  const [main, setMain] = useState(images[0]);
  return (
    <Wrapper>
      <img
        src={main.url}
        alt=""
        className="main"
        onClick={displayProductsImageModal}
      />
      <div className="gallery">
        {images.map((item, idx) => {
          return (
            <img
              src={item.url}
              key={idx}
              onClick={() => setMain(images[idx])}
              className={`${item.url === main.url ? "active" : ""}`}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .main {
    width: 100%;
    max-width: 500px;
    cursor: pointer;
  }
  .gallery {
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;
    & .active {
      border: 5px solid var(--clr-violet);
    }
    img {
      border: 5px solid var(--clr-dark-violet);
      border-radius: 8px;
      width: 28%;
      object-fit: cover;
      cursor: pointer;
    }
  }
`;
export default ProductImages;
