import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AuthButtons } from "./";
import { links } from "../utilis/constants";
import logo from "../assets/icon.svg";
const Navbar = () => {
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
          <button className="nav-toogle">
            <FaBars />
          </button>
        </div>
        <ul className="links">
          {links.map((item) => {
            const { id, text, url } = item;
            return (
              <li>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
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

    & li a:hover {
      border-bottom: 2px solid var(--clr-violet);
    }
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
