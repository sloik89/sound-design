import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/icon.svg";
import { FaTimes } from "react-icons/fa";
import { links } from "../utilis/constants";
import { useProductsContext } from "../context/products_context";
import { AuthButtons } from "./";
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  console.log(isSidebarOpen);
  return (
    <Wrapper>
      <aside className={`sidebar ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <div className="aside-header">
          <Link to="/" className="logo">
            <img className="logo-icon" src={logo} alt="" />
            <p className="logo-text">
              Sound <span className="logo-accent">Design</span>{" "}
            </p>
          </Link>
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link onClick={closeSidebar} to={url}>
                  {text}
                </Link>
              </li>
            );
          })}
          <li>
            <Link onClick={closeSidebar} to="chekout">
              Chekout
            </Link>
          </li>
        </ul>
        <AuthButtons className="auth-btns" />
      </aside>
    </Wrapper>
  );
};

export default Sidebar;
const Wrapper = styled.div`
  .sidebar {
    transform: translateX(-100%);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    transition: 0.4s linear;
  }
  .sidebar-open {
    transform: translateX(0);
  }
  .close-btn {
    font-size: 3rem;
    border: none;
    background-color: transparent;
    color: #931d1d;
    cursor: pointer;
  }
  .logo {
    display: flex;
    align-items: center;
    letter-spacing: 2px;
    font-weight: bold;
    gap: 1rem;
    .logo-icon {
      width: 50px;
      height: 50px;
    }
    .logo-accent {
      color: var(--clr-violet);
      font-size: 1.2rem;
      letter-spacing: 5px;
    }
  }
  .aside-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
  }
  .links {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    text-transform: capitalize;
    font-size: 1.3rem;
    letter-spacing: 1px;
    li {
      padding: 0.5rem 0;
      a {
        padding-left: 2rem;
      }
    }
    & li:hover {
      background-color: #b29fb3;
    }
  }
  .cart-btn-wrapper {
    display: flex;
    justify-content: center;
  }
`;
