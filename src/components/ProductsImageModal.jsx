import React, { useState } from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { useProductsContext } from "../context/products_context";
const ProductsImageModal = ({ images = [{ url: "" }] }) => {
  const { closeProductsImageModal } = useProductsContext();
  const [main, setMain] = useState(images[0].url);
  return (
    <Wrapper>
      <button className="close-modal" onClick={closeProductsImageModal}>
        <FaTimes />
      </button>
      <div className="modal">
        <img src={main} alt="" className="modal-img" />
        <div className="modal-gallery">
          {images.map((item, idx) => {
            return (
              <img
                src={item.url}
                key={idx}
                onClick={() => setMain(images[idx].url)}
              />
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  .close-modal {
    position: absolute;
    top: 10%;
    right: 10%;
    font-size: 3rem;
    color: var(--clr-violet);
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  .modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    border: 5px solid black;
    max-width: 700px;
    gap: 2rem;
  }
  .modal-img {
    width: 100%;
    max-width: 800px;
  }
  .modal-gallery {
    display: flex;
    justify-content: space-between;

    img {
      width: 30%;
    }
  }
`;
export default ProductsImageModal;
