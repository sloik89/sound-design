import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { formatPrice, getUniqueValues } from "../utilis/helpers";
import { FaCheck } from "react-icons/fa";
const Filters = () => {
  const {
    filters: {
      inputSearch,
      category,
      color,
      min_price,
      max_price,
      price,
      company,
      shipping,
    },
    updateFilters,
    all_products,
    clearFilters,
  } = useFilterContext();
  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const colors = getUniqueValues(all_products, "colors");

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-control">
            <input
              type="text"
              name="inputSearch"
              placeholder="search"
              className="search-input"
              value={inputSearch}
              onChange={updateFilters}
            />
          </div>
          <div className="form-control">
            <h5>category</h5>
            {categories.map((c, idx) => {
              console.log(category);
              return (
                <button
                  className={`${category === c ? "active" : null}`}
                  key={idx}
                  type="button"
                  name="category"
                  onClick={updateFilters}
                >
                  {c}
                </button>
              );
            })}
          </div>
          <div className="form-control">
            <h5>company</h5>
            <select
              value={company}
              name="company"
              className="company"
              onChange={updateFilters}
            >
              {companies.map((item, idx) => {
                return (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-control">
            <h5>colors</h5>
            <div className="colors">
              {colors.map((c, index) => {
                if (c === "all") {
                  return (
                    <button
                      key={index}
                      name="color"
                      onClick={updateFilters}
                      data-color="all"
                      className={`${
                        color === "all" ? "all-btn active" : "all-btn"
                      }`}
                    >
                      all
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    data-color={c}
                    onClick={updateFilters}
                    name="color"
                    style={{ backgroundColor: c }}
                    className={`${
                      c === color ? "color-btn active" : "color-btn"
                    }`}
                  >
                    {c === color ? <FaCheck /> : null}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="form-control">
            <h5>price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input
              min={min_price}
              max={max_price}
              onChange={updateFilters}
              value={price}
              type="range"
              name="price"
            />
          </div>
          <div className="form-control">
            <label htmlFor="shipping">free shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              className="shipping"
              onChange={updateFilters}
              checked={shipping}
            />
          </div>
        </form>
        <button onClick={clearFilters} type="button" className="clear-btn btn">
          clear filters
        </button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  /* border: 1px solid black; */
  .content {
    padding: 1rem 0;
    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
  .form-control {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.5rem;
    h5 {
      color: var(--clr-dark-violet);
      font-size: 1.2rem;
      letter-spacing: 2px;
      text-transform: capitalize;
      margin-bottom: 0.5rem;
    }
    button {
      background-color: transparent;
      border: none;
      text-transform: capitalize;
      font-size: 1.1rem;
      letter-spacing: 2px;
      margin-bottom: 0.5rem;
      cursor: pointer;
      &.active {
        border-bottom: 1px solid black;
      }
    }
  }
  .search-input {
    padding: 0.5rem 0.2rem;
    letter-spacing: 2px;
    background-color: #cfbdcd;
    border: none;
    border-radius: 0.5rem;
  }
  .colors {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    button {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      cursor: pointer;
      border: 1px solid black;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--clr-violet);
    }
    .color-btn {
      opacity: 0.6;
    }
    .color-btn.active {
      opacity: 1;
    }
    .all-btn {
      border: none;
      border-radius: 0;
      background-color: transparent;
      letter-spacing: 2px;
      font-size: 1.1rem;
      opacity: 0.5;
    }
    .all-btn.active {
      opacity: 1;
    }
  }
  .clear-btn {
    margin-top: 1rem;
  }
`;
export default Filters;
