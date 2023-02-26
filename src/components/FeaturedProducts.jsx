import React from "react";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { Loading, Error, Product } from "./";
const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>featured products</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {featured.slice(0, 3).map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background-color: #f0eee9;
  color: var(--clr-dark-violet);
  margin: 5rem 0;
  padding: 2rem 0;
  .title {
    text-transform: uppercase;
    margin-bottom: 2rem;
  }
  .section-center {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    @media screen and (min-width: 800px) {
      flex-direction: row;
      justify-content: space-between;
      & > * {
        flex: 0 1 28%;
      }
    }
  }
`;
export default FeaturedProducts;
