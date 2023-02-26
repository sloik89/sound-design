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
} from "../components";
const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
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
  const { Name: name, price, description, stock, company, images } = product;
  return (
    <Wrapper>
      <PageHero title={name} product />
      <div className="section-center">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="products-center">
          <ProductImages images={images} />
          <div className="content">
            <h2>{name}</h2>
            <Stars />
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
const Wrapper = styled.main``;
export default SingleProduct;
