import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useParams, useNavigate } from "react-router-dom";
import { formatPrice } from "../utilis/helpers";
import { SingleProductsUrl as url } from "../utilis/constants";
import { useProductsContext } from "../context/products_context";
import {
  Loading,
  Error,
  Stars,
  ProductImages,
  PageHero,
  AddToCart,
  ProductsImageModal,
} from "../components";
const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
    products_image_modal,
  } = useProductsContext();
  console.log(loading, error);
  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, []);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  const {
    Name: name,
    price,
    description,
    stock,
    company,
    images,
    stars,
  } = product;
  return (
    <Wrapper>
      {products_image_modal && <ProductsImageModal images={images} />}
      <PageHero title={name} product />
      <div className="section-center">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="products-center">
          <ProductImages images={images} />
          <div className="content">
            <h2>{name}</h2>
            <Stars stars={stars} />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Available: </span>
              {stock > 0 ? "In stock" : "out of stock"}
            </p>
            <p className="info">
              <span>Id: </span>
              {id}
            </p>
            <p className="info">
              <span>Brand: </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart />}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  color: var(--clr-dark-violet);
  .section-center {
    padding: 2rem 0;
  }
  .products-center {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    @media screen and (min-width: 1000px) {
      grid-template-columns: 1fr 1fr;
    }
  }
  .content h2 {
    font-size: 2rem;
    letter-spacing: 2px;
  }
  .content .price {
    font-size: 2rem;
  }
  .content .desc {
    letter-spacing: 2px;
    margin-top: 1rem;
  }
  .content .info {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    width: 200px;
    span {
      font-weight: bold;
    }
  }
`;
export default SingleProduct;
