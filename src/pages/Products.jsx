import React from "react";
import styled from "styled-components";
import { Filters, ProductList, Sort, PageHero } from "../components";
import { GiWrappedHeart } from "react-icons/gi";
const Products = () => {
  return (
    <main>
      <PageHero title="products" />
      <Wrapper>
        <div className="section-center products">
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div`
  .products {
    padding: 2rem 0;
    display: grid;
    grid-template-columns: minmax(100px, 200px) 1fr;
  }
`;
export default Products;
