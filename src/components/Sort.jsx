import React from "react";
import styled from "styled-components";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../context/filter_context";
const Sort = () => {
  const {
    grid_view,
    filtered_products: products,
    setGridView,
    setListView,
    handleSelect,
  } = useFilterContext();
  return (
    <Wrapper>
      <div className="btn-container">
        <button
          onClick={setGridView}
          type="button"
          className={`${grid_view ? "active" : null}`}
        >
          <BsFillGridFill />
        </button>
        <button
          onClick={setListView}
          type="button"
          className={`${!grid_view ? "active" : null}`}
        >
          <BsList />
        </button>
      </div>
      <p>{products.length} products found</p>
      <hr />
      <form>
        <label htmlFor="sort">sort by </label>
        <select
          name="sort"
          id="sort"
          className="sort-input"
          onChange={handleSelect}
        >
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a-z)</option>
          <option value="name-z">name (z-a)</option>
        </select>
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 1rem;
  .btn-container {
    display: flex;
    gap: 1rem;
  }
  hr {
    flex-grow: 1;
  }
  button {
    font-size: 2rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: var(--clr-dark-violet);
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.2rem;
    border-radius: 5px;
  }
  button.active {
    background-color: var(--clr-dark-violet);
    color: var(--clr-font);
  }
`;
export default Sort;
