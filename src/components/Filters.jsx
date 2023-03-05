import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
const Filters = () => {
  const {
    filters: { inputSearch, category, color, min_price, max_price, price },
    updateFilters,
  } = useFilterContext();
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
        </form>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section``;
export default Filters;
