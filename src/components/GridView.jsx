import React from "react";
import styled from "styled-components";
import Product from "./Product";
const GridView = ({ products }) => {
  return (
    <Wrapper>
      <div className="products-container">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .products-container {
    margin: 5rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
`;
export default GridView;
