import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AuthButtons } from "./";
import { links } from "../utilis/constants";
import { useProductsContext } from "../context/products_context";
import logo from "../assets/icon.svg";
import { useUserContext } from "../context/user_context";
const Navbar = () => {
  const { openSidebar } = useProductsContext();
  const { myUser } = useUserContext();

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" className="logo">
            <img className="logo-icon" src={logo} alt="" />
            <p className="logo-text">
              Sound <span className="logo-accent">Design</span>{" "}
            </p>
          </Link>
          <button className="nav-toogle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="links">
          {links.map((item) => {
            const { id, text, url } = item;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          {myUser && (
            <li>
              <Link to="checkout">checkout</Link>
            </li>
          )}
          ;
        </ul>
        <AuthButtons />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .links {
    display: none;
    text-transform: capitalize;
    letter-spacing: 2px;
    font-size: 1.1rem;
    position: relative;
    li {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0px;
        height: 3px;
        background-color: var(--clr-violet);
        transition: 0.2s ease-in-out;
      }
      &:hover::after {
        width: 100%;
      }
    }
    /* & li a:hover {
      border-bottom: 2px solid var(--clr-violet);
      padding-bottom: 0.5rem;
    } */
  }
  margin-top: 2rem;
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
  .nav-toogle {
    font-size: 2.5rem;
    border: none;
    background-color: transparent;

    cursor: pointer;
    &:hover {
      color: red;
    }
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media screen and (min-width: 800px) {
    .links {
      display: flex;
      gap: 1rem;
    }
    .nav-toogle {
      display: none;
    }
    .nav-center {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .cart-btn-wrapper {
      display: flex;
    }
  }
`;

export default Navbar;
